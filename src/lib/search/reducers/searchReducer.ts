import { SearchAction } from "types/search/actions";
import { SearchUIAction } from "@/types/search/uiAction";
import { BrandSearchStateMap } from "src/lib/search/reducers/BrandSearchStateMap";
import { createBrandSearchReducer } from "./brandSearchReducer";



 type Action = SearchAction | SearchUIAction; 
 // 
 export function searchReducer (
     state:{
        brands: Record<keyof typeof BrandSearchStateMap, any>;
        randomCount:number;
    },
 action: Action
 ){
    return {
        brands:createBrandSearchReducer(state.brands as any),
        randomCount:
        action.type === "SET_RANDOM_COUNT"
        ? action
        :state.randomCount,
    };
}
