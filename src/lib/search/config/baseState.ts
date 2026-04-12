import { BaseSearchState } from "./brandState";

export default function createBaseInitialState():BaseSearchState {
    return {
        PurchaseFilterMode: "all",
    selectedSetIds: [],
    randomCount:0,
    };
}