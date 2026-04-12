import { BrandSearchStateMap } from "@/types/search/brandStateMap";

export const BRAND_KEYS = ["Colorary","Padico","Rejindou"];

type ColoraryItem = {
    ブランド: "Colorary";
    番号: number;
    商品名: string;
};
type PadicoItem = {
    ブランド: "Padico";
    番号: number;
    商品名: string;
};
type RejindouItem = {
    ブランド: "Rejindou";
    番号: number;
    商品名: string;
};

export type BrandKey = "Colorary" | "Padico" | "Rejindou";
export type SearchResultItem = 
| (ColoraryItem & {brand: "Colorary"})
|(PadicoItem & {brand: "Padico"})
|(RejindouItem & {brand: "Rejindou"});
export type BrandState<K extends BrandKey> = BrandSearchStateMap[K];