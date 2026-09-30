import type { Cocktail, StoredDailyCocktail } from "../types/cocktail.types";

const STORAGE_KEY = "dailyCocktail";

/**
 * Récupère le cocktail du cache s'il existe et s'il date d'aujourd'hui.
 */
export function getStoredDailyCocktail(): Cocktail | null {
    try {
        const rawData = localStorage.getItem(STORAGE_KEY);
        if (!rawData) return null;

        const storedData: StoredDailyCocktail = JSON.parse(rawData);
        const today = new Date().toISOString().split("T")[0];

        if (!storedData.cocktail || storedData.date !== today) {
            return null; // Données absentes, corrompues ou périmées
        }

        return storedData.cocktail;
    } catch (err) {
        console.error("Erreur lors de la lecture du localStorage :", err);
        return null;
    }
}

/**
 * Enregistre le cocktail du jour dans le localStorage avec la date du jour.
 */
export function setStoredDailyCocktail(cocktail: Cocktail): void {
    try {
        const today = new Date().toISOString().split("T")[0];
        const storedData: StoredDailyCocktail = {
            date: today,
            cocktail,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
    } catch (err) {
        console.error("Erreur lors de l'écriture dans le localStorage :", err);
    }
}