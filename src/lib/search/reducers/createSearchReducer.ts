import {BaseSearchState } from "src/lib/search/config/brandState";
import { SearchAction } from "types/search/actions";
import React from "react";
import { BrandFeatures } from "../config/config";

type ExtraReducer<T extends BaseSearchState> = (
    state:T,
    action:SearchAction
) => T | null;

export function createSearchReducer<
TState extends BaseSearchState
>(
    features: BrandFeatures
): React.Reducer<TState, SearchAction> {
    return (state, action) => {
        switch (action.type) {
            case "TOGGLE_ALL_COLORS":
                return {
                    ...state,
                    allColors: action.payload,
                    // allColors=true のときは選択解除
                    selectedSetIds:action.payload ? [] : state.selectedSetIds,
                
                };
                case "SET_SELECTED_SET_IDS":
                    return {
                        ...state,
                        allColors:action.payload.length === 0,
                        selectedSetIds: action.payload,
                    };
                    case "SET_DISCONTINUEDFILTER_MODE":
                        
                            return {
                                ...state,
                                includeDiscontinued: action.payload,
                            };
                     
                       
                        case "RESET_STATE":
                            return{
                                ...state,
                                ...action.payload,
                            };
                    default:
                        return state;
        }
    };
}