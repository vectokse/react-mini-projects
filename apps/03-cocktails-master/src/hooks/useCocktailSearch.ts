import { useEffect, useState } from "react";
import type { Cocktail } from "../types/cocktail.types";
import { cocktailApiClient } from "../api/cocktailApiClient";
import { DEFAULT_CATEGORY, isValidFilter, PAGE_SIZE } from "../components/pages/HomePage/CatalogSection/catalog.config";
import { useSearchParams } from "react-router";

// TODO: scroll to the clicked cocktail card on browser back navigation
export function useCocktailSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") || "";
    const rawFilter = searchParams.get("f");
    const filter = isValidFilter(rawFilter) ? rawFilter! : DEFAULT_CATEGORY;

    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [displayLimit, setDisplayLimit] = useState<number>(PAGE_SIZE);

    const [errorMsg, setErrorMsg] = useState<string>("");

    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false); 
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);


    /**
     * 1. Recherche
     */
    const searchCocktails = async (searchQuery: string, currentFilter: string) => {
        setErrorMsg("");
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
            setErrorMsg("Impossible de récupérer les cocktails.");
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
        setIsFetchingMore(true)
        setErrorMsg("");

        try {
            const response = await cocktailApiClient.searchCocktail(filter, query, nextPage);
            
            setCocktails(prev => [...prev, ...response.data]);
            setDisplayLimit(nextDisplayLimit);
            setPageIndex(nextPage);
            setHasMore(response.pagination.hasNextPage);
            setTotalItems(response.pagination.totalItems);
        } catch (err) {
            setErrorMsg("Impossible de charger plus de cocktails.");
            console.error(err);
        } finally {
            setIsFetchingMore(false)
        }
    };

    /**
     * Effet avec Debounce de 400ms pour la recherche/filtres
     */
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            searchCocktails(query, filter);
        }, 400);
        
        return () => clearTimeout(timer);
    }, [query, filter]);




    const setQuery = (newQuery: string) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            const trimmed = newQuery.trim();
            if (!trimmed) {
                newParams.delete("q");
            } else {
                newParams.set("q", trimmed);
            }
            return newParams;
        }, { replace: true });
    };

    const setFilter = (newFilter: string) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            
            if (newFilter === DEFAULT_CATEGORY) {
                newParams.delete("f");
            } else {
                newParams.set("f", newFilter);
            }
            return newParams;
        });
    };


    return {
        displayedCocktails :cocktails.slice(0, displayLimit),
        isLoading,
        isFetchingMore,
        filter,
        setFilter,
        query,
        setQuery,
        loadMoreResult,
        nbResult:totalItems,
        hasMore: displayLimit < cocktails.length || hasMore,
        errorMsg
    };
}