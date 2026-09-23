import { useEffect, useState } from "react";
import type { Cocktail } from "../types/cocktail.types";
import { cocktailApiClient } from "../api/cocktailApiClient";
import { getStoredDailyCocktail, setStoredDailyCocktail } from "../utils/dailyStorage";

export function useDailyCocktail() {
    const [dailyCocktail, setDailyCocktail] = useState<Cocktail | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getDailyCocktail = async () => {
        try {
            const cachedCocktail = getStoredDailyCocktail();
                if (cachedCocktail) {
                setDailyCocktail(cachedCocktail);
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            const newCocktail = await cocktailApiClient.getRandom();
            setStoredDailyCocktail(newCocktail);
            setDailyCocktail(newCocktail);
        } catch (err) {
            setError("Impossible de charger le cocktail du jour.");
            console.error(err);
        } finally {
         setIsLoading(false);
        }
    };

    useEffect(() => {
        getDailyCocktail();
    }, []);

    return {
        dailyCocktail,
        isLoading,
        error
    };
}