import { createContext, useContext, type ReactNode } from "react";
import type { Cocktail } from "../types/cocktail.types";
import { useFavoritesManager } from "../hooks/useFavoritesManager";

interface FavoritesContextType {
  favorites: Cocktail[];
  toggleFavorite: (cocktail: Cocktail) => void;
  isFavorites: (id: string) => boolean;
  loading: boolean;
  errorMsg: string;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const favoritesManager = useFavoritesManager();

  return (
    <FavoritesContext.Provider value={favoritesManager}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorite = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoritesProvider");
  }
  return context;
};

export default useFavorite;
