import type{ SearchAction } from "types/search/actions";
import { rejindouState } from "../config/brandState";

export function rejindouReducer(
    state:rejindouState,
action:SearchAction
):rejindouState {
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
                    selectedSetIds:action.payload,
                };
    
        default:
            return state;
    }
}
