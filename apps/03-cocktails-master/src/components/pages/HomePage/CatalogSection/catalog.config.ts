import type { Filter } from "../../../../types/cocktail.types";

export const Filters  :Filter[]= [
    { name: "all", label: "Tous" },
    { name: "classic", label: "Classiques" },
    { name: "beer", label: "Bières" },
    { name: "cocktail", label: "Cocktails" },
    { name: "shot", label: "Shots" },
    { name: "no-alcohol", label: "Sans alcool" },
    { name: "soft", label: "Softs" },
];


export const DEFAULT_CATEGORY: string = "all";
export const PAGE_SIZE = 9;

