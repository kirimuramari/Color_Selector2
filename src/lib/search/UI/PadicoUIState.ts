import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";

export type PadicoUIState = {
    onDiscontinuedFilterChange:(value:DiscontinuedFilterMode) => void;
    onRandomCountChange:(value:number) => void;
    onSetIdsChange: (ids:string[]) => void;

}