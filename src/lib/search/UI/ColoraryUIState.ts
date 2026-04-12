import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";

export type ColoraryUIState = {
    onFilterChange:(value:PurchaseFilterMode) => void;
    onRandomCountChange:(value:number) => void;

}