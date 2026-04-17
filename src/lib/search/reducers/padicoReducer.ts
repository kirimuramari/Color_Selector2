import type{ SearchAction } from "types/search/actions";
import { padicoState } from "../config/padicoState";

export function padicoReducer(
    state:padicoState,
    action:SearchAction
):padicoState {
    switch (action.type) {
         case "SET_PURCHASEFILTER_MODE":
            return {
                ...state,
                PurchaseFilterMode:action.payload,
            };
             case "SET_RANDOM_COUNT":
                return {
                    ...state,
                    randomCount:action.payload,
                };
        case "SET_SELECTED_SET_IDS":
            return {
                ...state,
                selectedSetIds: action.payload,
            };
            case "SET_DISCONTINUEDFILTER_MODE":
                
                return{
                    ...state,
                    DiscontinuedFilterMode: action.payload,
                };


    
        default:
            return state;
    }
}