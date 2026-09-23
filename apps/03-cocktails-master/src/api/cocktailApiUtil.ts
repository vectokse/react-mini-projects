import type { Cocktail } from "../types/cocktail.types";
import { nbMaxIngredient } from "./cocktailApi.config";


/**
 * Fonction utilitaire : Nettoie les doublons potentiels renvoyés par l'API
 */
export function removeDuplicateCocktails(cocktails: Cocktail[]): Cocktail[] {
  return Array.from(
    new Map(cocktails.map(c => [c.id, c])).values()
  );
}

/**
 * Mappe un objet brut de l'API vers le modèle métier Cocktail
 */
export function mapDrinkToCocktail(drink: any): Cocktail {
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= nbMaxIngredient; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient.trim());
    }
    if (measure && measure.trim() !== "") {
      measures.push(measure.trim());
    }
  }

  return {
    id: drink.idDrink,
    title: drink.strDrink,
    instruction: drink.strInstructionsFR || drink.strInstructions || "",
    ingredients,
    measures,
    imgSrc: drink.strDrinkThumb,
    category: drink.strCategory || "Inconnue",
  };
}