import { useState, useEffect } from "react";
import { cocktailApiClient } from "../api/cocktailApiClient";
import type { Cocktail } from "../types/cocktail.types";

export function useCocktailDetail(id: string | undefined) {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const fetchCocktailData = async (targetId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await cocktailApiClient.getCocktailById(targetId);
      
      if (!data) {
        setError("Cocktail introuvable");
        setCocktail(null);
      } else {
        setCocktail(data);
      }
    } catch (err) {
      setError("Erreur lors du chargement de la recette");
      setCocktail(null);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (!id) {
      setError("ID invalide");
      setIsLoading(false);
      return;
    }

    fetchCocktailData(id);
  }, [id]);

  return { cocktail, isLoading, error };
}