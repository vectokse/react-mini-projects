export interface Cocktail {
  id: string;
  title: string;
  instruction : string;
  ingredients: string[];
  measures : string[];
  imgSrc: string;
  category: string;
}

export interface Filter{
  name: string;
  label: string;
}
 

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
}

export interface PaginatedCocktailResponse {
  data: Cocktail[];
  pagination: PaginationMeta;
}

// Le contrat de l'API
export interface ICocktailApiClient {
  getRandom(): Promise<Cocktail>;
  getCocktailById(name: string): Promise<Cocktail[]>;
  searchCocktail(
    filter: string, 
    searchQuery: string, 
    pageIndex: number, 
  ): Promise<PaginatedCocktailResponse>;
}



export interface StoredDailyCocktail {
  date: string; // Format "YYYY-MM-DD"
  cocktail: Cocktail;
}