import axios from "axios";
import type { Cocktail, PaginatedCocktailResponse } from "../types/cocktail.types";
import { ALPHABET, API_STRATEGY_MAPPING, ENDPOINTS, NB_TOTAL_COCKTAIL } from "./cocktailApi.config";
import { mapDrinkToCocktail, removeDuplicateCocktails } from "./cocktailApiUtil";

const apiClient = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});


// Récupère les données brutes pour une catégorie (gère le multi-valeurs en parallèle)
async function fetchCategoryRawDrinks(filter: string): Promise<any[]> {
    const strategy = API_STRATEGY_MAPPING[filter];
    if (!strategy) return [];

    const promises = strategy.values.map(async (val) => {
        try {
            const response = await apiClient.get(`${ENDPOINTS.FILTER_BY_CATEGORY}?${strategy.filterType}=${val}`);
            return response.data.drinks || [];
        } catch {
            return [];
        }
    });

    const resultsArrays = await Promise.all(promises);
    return resultsArrays.flat();
}

// Gère le mode "all" (recherche textuelle globale ou pagination alphabétique)
async function handleAllSearch(searchQuery: string, pageIndex: number): Promise<PaginatedCocktailResponse> {
    const hasSearch = searchQuery.trim() !== "";

    if (hasSearch) {
        const response = await apiClient.get(`${ENDPOINTS.SEARCH}?s=${searchQuery.trim()}`);
        const data = removeDuplicateCocktails((response.data.drinks || []).map(mapDrinkToCocktail));

        return {
            data,
            pagination: { currentPage: 1, totalPages: 1, totalItems: data.length, hasNextPage: false },
        };
    } else {
        const targetLetter = ALPHABET[pageIndex % ALPHABET.length];
        const response = await apiClient.get(`${ENDPOINTS.SEARCH}?f=${targetLetter}`);
        const data = removeDuplicateCocktails((response.data.drinks || []).map(mapDrinkToCocktail));

        const totalItems = NB_TOTAL_COCKTAIL;
        const totalPages = Math.ceil(ALPHABET.length-1);
        const currentPage = pageIndex + 1;
        const hasNextPage = pageIndex < ALPHABET.length - 1;

        return {
            data,
            pagination: { currentPage, totalPages, totalItems, hasNextPage },
        };
    }
}

// Gère les catégories (avec ou sans filtre textuel)
async function handleCategorySearch(filter: string, searchQuery: string): Promise<PaginatedCocktailResponse> {
    const hasSearch = searchQuery.trim() !== "";
    const rawDrinks = await fetchCategoryRawDrinks(filter);
    let data = removeDuplicateCocktails(rawDrinks.map(mapDrinkToCocktail));

    if (hasSearch) {
        const term = searchQuery.toLowerCase();
        data = data.filter(c => c.title.toLowerCase().includes(term));
    }

    return {
        data,
        pagination: { currentPage: 1, totalPages: 1, totalItems: data.length, hasNextPage: false },
    };
}

export const cocktailApiClient = {
    async getRandom(): Promise<Cocktail> {
        const response = await apiClient.get(`random.php`);
        const rawData = response.data.drinks?.[0];
        if (!rawData) throw new Error("Impossible de récupérer un cocktail aléatoire.");
        return mapDrinkToCocktail(rawData);
    },

    async getCocktailById(id: string): Promise<Cocktail> {
        const response = await apiClient.get(`${ENDPOINTS.LOOKUP}?i=${id}`);
          const rawData = response.data.drinks?.[0];
         if (!rawData) throw new Error("Impossible de récupérer le cocktail demandé");
        return mapDrinkToCocktail(rawData);
    },

    async searchCocktail(
        filter: string, 
        searchQuery: string, 
        pageIndex: number
    ): Promise<PaginatedCocktailResponse> {
        try {
            if (filter === "all") {
                return await handleAllSearch(searchQuery, pageIndex);
            } else {
                return await handleCategorySearch(filter, searchQuery);
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des cocktails :", error);
            return { 
                data: [], 
                pagination: { currentPage: 1, totalPages: 0, totalItems: 0, hasNextPage: false } 
            };
        }
    },
};