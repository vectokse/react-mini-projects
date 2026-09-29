import { FaHeart, FaRegHeart } from "react-icons/fa";
import CocktailCard from "../../../reusable-ui/CocktailCard";

import type { Cocktail } from "../../../../types/cocktail.types";
import { memo, useCallback } from "react";

interface CatalogItemProps {
  cocktail: Cocktail;
  isFavorite: boolean;
  onToggleFavorite: (cocktail: Cocktail) => void;
}

export const CatalogItem = memo(function CatalogItem({
  cocktail,
  isFavorite,
  onToggleFavorite,
}: CatalogItemProps) {
  const handleClick = useCallback(
    () => onToggleFavorite(cocktail),
    [onToggleFavorite, cocktail],
  );

  return (
    <CocktailCard
      title={cocktail.title}
      description={cocktail.ingredients.join(", ")}
      to={`/cocktail/${cocktail.id}`}
      imgSrc={cocktail.imgSrc}
      footerText="Voir la fiche &rarr;"
      iconAction={isFavorite ? <FaHeart /> : <FaRegHeart />}
      onActionClick={handleClick}
    />
  );
});
