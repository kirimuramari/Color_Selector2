import { SearchAction } from "types/search/actions";
import { SearchUIAction } from "@/types/search/uiAction";
import { BrandSearchStateMap } from "@/types/search/state";
import { brandSearchReducer } from "./brandSearchReducer";


 type Action = SearchAction | SearchUIAction; 
 // 
 export function searchReducer (
     state:{
        brands: BrandSearchStateMap;
        randomCount:number;
    },
 action: Action
 ){
    return {
        brands:brandSearchReducer(state.brands,action as SearchAction),
        randomCount:
        action.type === "SET_RANDOM_COUNT"
        ? action.value
        :state.randomCount,
    };
}
