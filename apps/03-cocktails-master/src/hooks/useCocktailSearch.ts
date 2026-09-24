import { useEffect, useState } from "react";
import type { Cocktail } from "../types/cocktail.types";
import { cocktailApiClient } from "../api/cocktailApiClient";
import { DEFAULT_CATEGORY, PAGE_SIZE } from "../components/pages/HomePage/CatalogSection/catalog.config";

export function useCocktailSearch() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [displayLimit, setDisplayLimit] = useState<number>(PAGE_SIZE);
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [query, setQuerry] = useState<string>("");
    const [filter, setFilter] = useState<string>(DEFAULT_CATEGORY);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const [totalItems, setTotalItems] = useState<number>(0);

    /**
     * 1. Recherche
     */
    const searchCocktails = async (searchQuery: string, currentFilter: string) => {
        setIsLoading(true);
        setError(null);
        setPageIndex(0);
        setDisplayLimit(PAGE_SIZE);

        try {
            const response = await cocktailApiClient.searchCocktail(currentFilter, searchQuery, 0);
            
            setCocktails(response.data);
            setHasMore(response.pagination.hasNextPage);
            setTotalItems(response.pagination.totalItems);
            
            // TODO: display less results if it is mobile
            // On s'assure d'afficher au moins la quantité initiale souhaitée si on l'a en stock
            setDisplayLimit(Math.min(PAGE_SIZE, response.data.length));
        } catch (err) {
            setError("Impossible de récupérer les cocktails.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * 2. "Load More" intelligent :
     * - Si on a des cocktails en stock non affichés, on élargit juste l'affichage.
     * - S'il n'y en a plus assez en mémoire, on va chercher la suite sur l'API.
     */
    const loadMoreResult = async () => {
        if (isLoading) return;

        const nextDisplayLimit = displayLimit + PAGE_SIZE;

        // Cas A : Le stock local suffit amplement, on affiche la suite
        if (nextDisplayLimit <= cocktails.length) {
            setDisplayLimit(nextDisplayLimit);
            return;
        }

        // Cas B : Le stock local est épuisé, il faut aller en chercher plus via l'API
        if (!hasMore) {
            setDisplayLimit(cocktails.length);
            return;
        }

        const nextPage = pageIndex + 1;
        setIsLoading(true);
        setError(null);

        try {
            const response = await cocktailApiClient.searchCocktail(filter, query, nextPage);
            
            setCocktails(prev => [...prev, ...response.data]);
            setDisplayLimit(nextDisplayLimit);
            setPageIndex(nextPage);
            setHasMore(response.pagination.hasNextPage);
            setTotalItems(response.pagination.totalItems);
        } catch (err) {
            setError("Impossible de charger plus de cocktails.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Effet avec Debounce de 400ms pour la recherche/filtres
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            searchCocktails(query, filter);
        }, 400);
        
        return () => clearTimeout(timer);
    }, [query, filter]);


    return {
        displayedCocktails :cocktails.slice(0, displayLimit),
        isLoading,
        filter,
        setFilter,
        query,
        setQuerry,
        loadMoreResult,
        nbResult:totalItems,
        hasMore: displayLimit < cocktails.length || hasMore,
        error
    };
}