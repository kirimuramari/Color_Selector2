import { SearchAction } from "./actions";

export type BrandSearchActionMap = {
    Colorary: SearchAction;
    Padico:  SearchAction;
    Rejindou: SearchAction;

};
export type BrandAction<K extends keyof BrandSearchActionMap> =
 BrandSearchActionMap[K];