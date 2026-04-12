import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";

export type PadicoUIState = {
    onFilterChange:(value:PurchaseFilterMode) => void;
    onDiscontinuedFilterChange:(value:DiscontinuedFilterMode) => void;
    onRandomCountChange:(value:number) => void;
    onSetIdsChange: (ids:string[]) => void;

}