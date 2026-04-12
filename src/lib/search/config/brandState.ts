import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";
export type BaseSearchState = {
  PurchaseFilterMode:PurchaseFilterMode;
  
  selectedSetIds:string[];
  randomCount:number | null;

};


export type coloraryState =  BaseSearchState;


export type rejindouState = BaseSearchState;


