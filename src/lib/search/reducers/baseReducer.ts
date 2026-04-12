import { BrandReducer } from "types/search/reducer";
import { BaseSearchState } from "../config/brandState";

export const baseReducer: BrandReducer<BaseSearchState> = (
    state,
    action
    
) => {
    switch (action.type) {
        case "TOGGLE_ALL_COLORS":
            return {
                ...state,
                allColors: action.payload,
                
            };
            
        case "SET_SELECTED_SET_IDS":
            return {
                ...state,
                selectedSetIds: action.payload,
            };
        case"SET_RANDOM_COUNT":
            return {
                ...state,
                randomCount:action.payload,
            };
    

    
        default:
            return state;
    }
};