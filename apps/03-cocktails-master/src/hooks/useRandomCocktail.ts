import { useEffect, useState } from "react";
import { cocktailApiClient } from "../api/cocktailApiClient";
import type { Cocktail } from "../types/cocktail.types";

export function useRandomCocktail() {
    const [randomCocktail, setRandomCocktail] = useState<Cocktail | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Récupère un nouveau cocktail aléatoire depuis l'API
    const getRandomCocktail = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const result = await cocktailApiClient.getRandom();
            setRandomCocktail(result);
        } catch (err) {
            setError("Impossible de récupérer un cocktail aléatoire.");
            console.error(err);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getRandomCocktail();
    }, []);

    return {
        randomCocktail,
        isLoading,
        error,
        getRandomCocktail
    };
}