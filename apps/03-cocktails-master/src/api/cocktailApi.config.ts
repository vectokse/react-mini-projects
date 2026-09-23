interface ApiStrategy {
    filterType: "c" | "a" | "f";
    values: string[];
}

export const ENDPOINTS = {
  FILTER_BY_CATEGORY: "filter.php",
  SEARCH: "search.php",
  LOOKUP: "lookup.php",
  RANDOM: "random.php",
} as const;

export const API_STRATEGY_MAPPING: Record<string, ApiStrategy> = {
    "classic": { filterType: "c", values: ["Ordinary_Drink"] },
    "beer": { filterType: "c", values: ["Beer"] },
    "cocktail": { filterType: "c", values: ["Cocktail"] },
    "shot": { filterType: "c", values: ["Shot"] },
    "no-alcohol": { filterType: "a", values: ["Non_Alcoholic"] },
    "soft": { filterType: "c", values: ["Soft_Drink"] },
    "all": { filterType: "f", values: [""] },
};

export const nbMaxIngredient  = 15;

export const NB_TOTAL_COCKTAIL = 637;

export const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");