import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";

export type RejindouUIState = {
    onFilterChange:(value:PurchaseFilterMode) => void;
    onRandomCountChange:(value:number) => void;

}