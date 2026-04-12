import { SearchAction } from "@/types/search/actions";
import { padicoReducer } from "../reducers/padicoReducer";
import { coloraryReducer } from "../reducers/coloraryReducer";
import React from "react";
import  createBaseInitialState from "../config/baseState";
import {  createPadicoInitialState} from "../config/padicoState";
import { rejindouReducer } from "../reducers/rejindouReducer";
import { BrandKey } from "../config/brandTypes";
import { BrandStateMap } from "@/hooks";
import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "@/types/search/DiscontinuedFilterMode";

export type BrandActionMap = {
    Colorary: {
        setFilterMode: (mode: PurchaseFilterMode) => void;
        setRandomCount: (count: number | null) => void;
        setSelectedSetIds: (ids: string[]) => void;
    };

    Padico:{
        setFilterMode: (mode: PurchaseFilterMode) => void;
        setIncludeDiscontinuedMode: (mode: DiscontinuedFilterMode) => void;
        setRandomCount: (count: number | null) => void;
        setSelectedSetIds: (ids: string[]) => void;
    };

    Rejindou: {
        setFilterMode: (mode: PurchaseFilterMode) => void;
        setRandomCount: (count: number | null) => void;
        setSelectedSetIds: (ids: string[]) => void;
    };
};
export type padicoActions = BrandActionMap["Padico"];

export type BrandPlugin<K extends BrandKey> = {
    initialState:BrandStateMap[K];
    reducer:(
        state: BrandStateMap[K],
        action: SearchAction
    ) => BrandStateMap[K];   
    createActions: (
        dispatch: React.Dispatch<SearchAction>
    ) => BrandActionMap[K]; 
};


const brandRegistry = new Map<string, BrandPlugin<any>>();

export function registerBrand<
S, A, Q, T extends string
> (plugin: BrandPlugin<S> & { brand: T }) {
    brandRegistry.set(plugin.brand, plugin);
    
}

export function getBrandPlugin<T extends string>(
    brand:T
) {
  const plugin = brandRegistry.get(brand);
  if(!plugin) {
    throw new Error(`Brand ${brand} not found`);
  }  
  return plugin;
}

export const ColoraryPlugin:BrandPlugin<"Colorary"> = {
    initialState: createBaseInitialState(),
    reducer: coloraryReducer,
   createActions: (dispatch) => ({
    setFilterMode:(mode) =>
        dispatch({ type: "SET_PURCHASEFILTER_MODE", payload:mode}),
    setRandomCount:(count) =>
        dispatch({type:"SET_RANDOM_COUNT",payload:count}),
    setSelectedSetIds: (ids) =>
        dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
   }),
};
export const RejindouPlugin:BrandPlugin<"Rejindou"> = {
    initialState: createBaseInitialState(),
    reducer: rejindouReducer,
     createActions: (dispatch) => ({
    setFilterMode:(mode) =>
        dispatch({ type: "SET_PURCHASEFILTER_MODE", payload:mode}),
    setRandomCount:(count) =>
        dispatch({type:"SET_RANDOM_COUNT",payload:count}),
    setSelectedSetIds: (ids) =>
        dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
   }),
} 


export const PadicoPlugin:BrandPlugin<"Padico"> = {
    initialState: createPadicoInitialState(),
    reducer: padicoReducer,
      createActions: (dispatch) => ({
    setFilterMode:(mode) =>
        dispatch({ type: "SET_PURCHASEFILTER_MODE", payload:mode}),
    setIncludeDiscontinuedMode:(mode) =>
        dispatch({ type:"SET_DISCONTINUEDFILTER_MODE",payload:mode}),
    setRandomCount:(count) =>
        dispatch({type:"SET_RANDOM_COUNT",payload:count}),
    setSelectedSetIds: (ids) =>
        dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
   }),

} 

registerBrand(ColoraryPlugin);
registerBrand(RejindouPlugin);
registerBrand(PadicoPlugin);
