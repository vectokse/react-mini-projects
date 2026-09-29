import { useState, useCallback, useEffect, useRef} from "react";
import type { Cocktail } from "../types/cocktail.types";
import { getStoredFavorites, setStoredFavorites } from "../utils/favoritesStorage";
import { cocktailApiClient } from "../api/cocktailApiClient";


export const useFavoritesManager = () => {
  const [favorites, setFavorites] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, seterrorMsg] = useState<string>("");

  const favoritesRef = useRef(favorites);
  favoritesRef.current = favorites;
  
  useEffect(() => {
  const initFavorite = async () => {
    const storedIds = getStoredFavorites();
    
    if (storedIds.length === 0) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const fullCocktails = await cocktailApiClient.getCocktailByIds(storedIds);
      setFavorites(fullCocktails);
    } catch (err) {
      seterrorMsg("Impossible de récupérer les favoris.");
    } finally {
      setLoading(false);
    }
  };

  initFavorite();
}, []);

  const toggleFavorite = useCallback((cocktail: Cocktail) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((item) => item.id === cocktail.id);
      if (exists) {
        return prevFavorites.filter((item) => item.id !== cocktail.id);
      }
      return [...prevFavorites, cocktail];
    });
  }, []);


  const isFavorites = useCallback((id: string): boolean => {
    return favoritesRef.current.some((item) => item.id === id);
  }, []);

  useEffect(() => {
    const ids = favorites.map((fav) => fav.id);
    setStoredFavorites(ids);
  }, [favorites]);

  return { favorites, loading, errorMsg, toggleFavorite, isFavorites };
};
