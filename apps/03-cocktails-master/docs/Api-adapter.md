# 📘 `Api Adapter`

The API adapter of the app. Its goal is implement  a **generic contract** (`ICocktailApiClient`) so the data source can be **changed easily**: the rest of the app only knows this contract and the `Cocktail` model, never the raw API.

Today the contract is implemented by cocktailApiClient on top of TheCocktailDB, but any other API (or a custom backend) can replace it without touching the hooks or the components.

```
Hooks  →  ICocktailApiClient  →  cocktailApiClient  →  TheCocktailDB
          (generic contract)      (implementation)      (or any other API)
```

---

## 1. The contract

```ts
interface ICocktailApiClient {
  getRandom(): Promise<Cocktail>;
  getCocktailById(id: string): Promise<Cocktail>;
  getCocktailByIds(ids: string[]): Promise<Cocktail[]>;
  searchCocktail(
    filter: string,
    searchQuery: string,
    pageIndex: number,
  ): Promise<PaginatedCocktailResponse>;
}
```

The contract speaks in **app terms** (a filter, a page index, a `Cocktail`), not in API terms (`filter.php`, `strIngredient1`, letters of the alphabet). Every API-specific detail stays inside the implementation.

| Method                                | Used by                              | On empty result         |
| ------------------------------------- | ------------------------------------ | ----------------------- |
| `getRandom()`                         | random cocktail, cocktail of the day | throws                  |
| `getCocktailById(id)`                 | details page                         | throws                  |
| `getCocktailByIds(ids)`               | favorites                            | unknown ids are skipped |
| `searchCocktail(filter, query, page)` | catalog                              | returns `data: []`      |

### What it returns

```ts
interface Cocktail {
  id: string;
  title: string;
  instruction: string;
  ingredients: string[];
  measures: string[];
  imgSrc: string;
  category: string;
  glass: string;
  tags: string[];
}

interface PaginatedCocktailResponse {
  data: Cocktail[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
  };
}
```

---

## 2. How TheCocktailDB is adapted

TheCocktailDB was not designed for an app like this one. The client solves **3 problems** so that the rest of the app doesn't have to.

The code is split in three files:

```
src/api/
├── cocktailApi.config.ts   # endpoints + filter mapping
├── cocktailApiUtil.ts      # mapDrinkToCocktail, removeDuplicateCocktails
└── cocktailApiClient.ts    # axios instance + search strategies
```

### Problem 1: the data is messy

The API returns one flat object with numbered fields, many of them `null`. `mapDrinkToCocktail` turns it into a clean `Cocktail`.

```
API response                          →   Cocktail
─────────────────────────────────────     ──────────────────────────────
idDrink: "11007"                      →   id: "11007"
strDrink: "Margarita"                 →   title: "Margarita"
strDrinkThumb: "https://…"            →   imgSrc: "https://…"
strIngredient1: "Tequila"             →   ingredients: ["Tequila", "Triple sec"]
strIngredient2: "Triple sec"
strIngredient3: null                      (skipped)
strMeasure1: "1 1/2 oz "              →   measures: ["1 1/2 oz", "1 oz"]
strMeasure2: "1 oz"
```

Also handled: empty values are skipped and text is trimmed, French instructions are used first, `category` and `glass` get a default value, `drinks: null` becomes `[]`, and duplicates are removed.

### Problem 2: the UI filters don't match the API

The UI uses simple names (`shot`), while the API needs a specific call. `API_STRATEGY_MAPPING` describes, for each UI filter, **which endpoint is used and which filter or category is sent to the API**:

```ts
"shot":       { filterType: "c", values: ["Shot"] },          // filter.php?c=Shot
"no-alcohol": { filterType: "a", values: ["Non_Alcoholic"] }, // filter.php?a=Non_Alcoholic
```

- `filterType`: the kind of API filter (`c` = category, `a` = alcohol, `f` = first letter).
- `values`: the category or value(s) to request. If several are listed, they are fetched in parallel and merged.

| UI filter                  | Endpoint     | API filter / category                             |
| -------------------------- | ------------ | ------------------------------------------------- |
| **`all` (default filter)** | `search.php` | by name (`s`) or by first letter (`f`), see below |
| `classic`                  | `filter.php` | category `Ordinary_Drink`                         |
| `cocktail`                 | `filter.php` | category `Cocktail`                               |
| `shot`                     | `filter.php` | category `Shot`                                   |
| `beer`                     | `filter.php` | category `Beer`                                   |
| `soft`                     | `filter.php` | category `Soft_Drink`                             |
| `no-alcohol`               | `filter.php` | alcohol filter `Non_Alcoholic`                    |

**`all` is the default filter**: it is the one used when the URL has no `f` parameter, and it covers the whole catalog. Adding a new filter = adding one line in the config.

### Problem 3: there is no pagination

The API returns everything at once and has no `page` parameter. `searchCocktail` builds a `PaginatedCocktailResponse` anyway, with a different strategy depending on the case:

| Filter   | Search text | What the client does                             | Pagination            |
| -------- | ----------- | ------------------------------------------------ | --------------------- |
| `all`    | yes         | `search.php?s=mojito`                            | 1 page                |
| `all`    | no          | `search.php?f=a`, then `f=b`, `f=c`…             | **1 letter = 1 page** |
| category | no          | `filter.php?c=Shot`                              | 1 page                |
| category | yes         | `filter.php?c=Shot`, then filters titles locally | 1 page                |

In the "all" mode without a search, the page index is the position in the alphabet, and `hasNextPage` stays `true` until the letter "z". That is what powers the "Load more" button.

The local title filter is needed because `filter.php` cannot search by name.

### Hard-coded values

Two constants in `cocktailApi.config.ts` are written by hand because the API doesn't provide the information.

```ts
export const nbMaxIngredient = 15;
export const NB_TOTAL_COCKTAIL = 637;
```

---

## 3. Known limits

- `filter.php` only returns id, name and image: cards from category filters have `ingredients: []`.
- Some letters return no cocktails, so "Load more" can show nothing.
- Raw API data is typed as `any`: add a `RawDrink` type.
- The exported object is not yet typed with `ICocktailApiClient`.
