# 🍹 Cocktail App

A modern, interactive web application built with **React**, **TypeScript**, and **Vite** to discover, search, and explore delicious cocktail recipes.

---

## ✨ Features

- **Cocktail of the Day:** A featured cocktail highlighted directly on the homepage. It changes daily and is cached in `localStorage` so it stays the same all day.
- **Dynamic Search:** Quickly find cocktails by name, with a 400 ms debounce to avoid unnecessary API calls.
- **Category Filters:** Browse by type (Classic, Cocktail, Shot, Beer, Soft Drink, Non-Alcoholic) or across the whole catalog.
- **Shareable URLs:** Search and filter live in the URL (`?q=margarita&f=shot`), so results can be bookmarked, shared and restored with the browser's back button.
- **Load More:** Results are revealed progressively instead of all at once.
- **Detailed Recipes:** Step-by-step preparation instructions with precise ingredients and measurements (French instructions are used when available).
- **Random Cocktail:** Get a surprise recipe with one click.
- **Favorites:** Save the cocktails you love and find them again later.
  - **Add / remove:** toggle the heart icon on any cocktail card, from the catalog or the favorites page.
  - **Persistent:** favorites are stored in `localStorage` (only the cocktail ids) and reloaded from the API on startup.
  - **Dedicated page:** all saved cocktails in one place, with a friendly empty state.
- **Loading & Error States:** Skeleton cards while loading, clear messages on errors and when nothing matches the search.
- **Responsive Design:** A clean, mobile-friendly interface designed for seamless use on any device.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite](https://vite.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [styled-components](https://styled-components.com/) with a centralized theme
- **HTTP Client:** [Axios](https://axios-http.com/)
- **State Management:** Custom hooks + React Context API
- **Data Source:** [TheCocktailDB API](https://www.thecocktaildb.com/) (free test key, no sign-up needed)

---

## 🧱 Project Structure

```
src/
├── api/          # cocktailApiClient: the only code that knows TheCocktailDB
├── types/        # Cocktail, PaginatedCocktailResponse...
├── hooks/        # useCocktailSearch, useFavoritesManager, useDailyCocktail...
├── context/      # FavoritesContext
├── utils/        # localStorage helpers
├── components/   # pages and reusable UI
└── theme/        # design tokens
```

Data flows in one direction: `Components → Hooks → cocktailApiClient → TheCocktailDB`.

---

## 🔌 API Adapter

The API adapter sits between the app and TheCocktailDB. It fetches the raw data, cleans it and returns a simple `Cocktail` model, so the UI never depends on the API's format.

The app doesn't talk to TheCocktailDB directly. It goes through a **generic contract**, `ICocktailApiClient`, so the data source can be **changed easily**: switching to another API (or to a custom backend) only means writing a new implementation of this contract. Hooks and components stay untouched.

```
Hooks  →  ICocktailApiClient  →  cocktailApiClient  →  TheCocktailDB
          (generic contract)      (implementation)      (or any other API)
```

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

The contract speaks in **app terms** (a filter, a page, a `Cocktail`), not in API terms. The current implementation converts TheCocktailDB's raw format into the app's `Cocktail` model, and rebuilds the pagination the API doesn't have.

```
src/api/
├── cocktailApi.config.ts   # endpoints, filter mapping, constants
├── cocktailApiUtil.ts      # mapDrinkToCocktail, removeDuplicateCocktails
└── cocktailApiClient.ts    # axios instance, search strategies, public methods
```

📖 **Full documentation** (contract, data mapping, filters, pagination): [docs/Api-adapter.md](./docs/Api-adapter.md)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vectokse/react-mini-projects.git
   cd react-mini-projects
   ```

2. **Install dependencies** (from the repository root, the project uses npm workspaces):

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   cd apps/<project-folder-name>
   npm run dev
   ```

   Then open the local URL printed in the terminal (usually `http://localhost:5173`).

4. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

No API key or `.env` file is required.

---

## Things to Improve

### Planned features

- [ ] **Restore scroll position on back navigation:** when the user returns from a cocktail page, scroll back to the card they clicked.
- [ ] **Display fewer results on mobile**
- [ ] **Mobile burger menu**
- [ ] **Search by ingredient:** currently the search matches cocktail names only.

## 📚 Learning Goals

- **TypeScript:** modeling a domain type, typing API boundaries, generics and type guards.
- **Custom hooks & Context:** separating logic from UI
- **External API:** consuming external API

---

## 🔗 Resources

- [TheCocktailDB API documentation](https://www.thecocktaildb.com/api.php)
- [React Router](https://reactrouter.com/)
