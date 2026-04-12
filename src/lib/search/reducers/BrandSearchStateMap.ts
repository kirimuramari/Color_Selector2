// 値
import { SearchAction } from "@/types/search/actions";
import { createSearchReducer } from "./createSearchReducer";
import { padicoExtraReducers } from "./padicoExtraReducers";
import { BrandKey } from "../config/brandTypes";
import { BrandConfigMap } from "../config/brandConfig";

export const BrandSearchStateMap: Record<
    BrandKey,
    {
            initialState: any;
        reducer:(state: any, action: SearchAction) => any;
    }
> = {
    Colorary: {
        initialState:BrandConfigMap.Colorary.initialState,
        reducer: createSearchReducer,
    },
    Padico: {
        initialState:BrandConfigMap.Padico.initialState,
        reducer: createSearchReducer({
            extraReducers: padicoExtraReducers,
        }),
    },
    Rejindou:{
        initialState:BrandConfigMap.Rejindou.initialState,
        reducer:createSearchReducer(),
    
    },
};