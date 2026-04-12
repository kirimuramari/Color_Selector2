import { BrandKey } from "src/lib/search/config/brandTypes";
import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "@/types/search/DiscontinuedFilterMode";
import { BrandConfigMap, } from "@/src/lib/search/config/brandConfig";
import React from "react";


export type BrandStateMap = {
    Colorary: {      
    selectedSetIds:string[];
    randomCount:number | null;
    PurchaseFilterMode:PurchaseFilterMode;
    };

    Padico: {
        selectedSetIds:string[];
        randomCount:number| null;
        DiscontinuedFilterMode:DiscontinuedFilterMode;   
        PurchaseFilterMode:PurchaseFilterMode;
    };
    Rejindou: {
        selectedSetIds:string[];
        randomCount:number| null;
        PurchaseFilterMode:PurchaseFilterMode;
    
    };
};
export type BrandState<K extends BrandKey> = BrandStateMap[K];

export function useBrandSearch<K extends BrandKey>(brand: K) {
const plugin = BrandConfigMap[brand];
console.log("plugin:", plugin);
    const [state, dispatch] = React.useReducer(
        plugin.reducer,
        plugin.initialState
    );
    const actions = React.useMemo(
        () => plugin.createActions(dispatch),
        [plugin, dispatch]
    );

    return {
  
        state,
        actions,
      
        dispatch,
        brand,
        reducer: plugin.reducer,
        initialState: plugin.initialState,

        buildQuery: plugin.buildQuery,

};
}
    
