import createBaseInitialState from "./baseState";
import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";
import { BaseSearchState } from "./brandState";

export type padicoState = BaseSearchState & {
DiscontinuedFilterMode:  DiscontinuedFilterMode;
  
};
export const createPadicoInitialState = (): padicoState => ({
    ...createBaseInitialState(),
    DiscontinuedFilterMode:"include",
});
