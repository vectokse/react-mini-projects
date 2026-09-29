const STORAGE_KEY = "favoritesCocktail";

/**
 * Récupère la liste des IDs de cocktails favoris stockés dans le localStorage.
 * Retourne un tableau vide par défaut si le stockage est vide ou en cas d'erreur.
 */
export function getStoredFavorites(): string[] {
    try {
        const rawData = localStorage.getItem(STORAGE_KEY);
        if (!rawData) return [];

        const storedFavorites: unknown = JSON.parse(rawData);
        
        // Sécurité : on s'assure que les données parsées sont bien un tableau de strings
        if (Array.isArray(storedFavorites)) {
            return storedFavorites;
        }
        
        return [];
    } catch (err) {
        console.error("Erreur lors de la lecture du localStorage :", err);
        return [];
    }
}

/**
 * Sauvegarde la liste mise à jour des IDs de cocktails favoris dans le localStorage.
 */
export function setStoredFavorites(favoritesIds: string[]): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesIds));
    } catch (err) {
        console.error("Erreur lors de l'écriture dans le localStorage :", err);
    }
}