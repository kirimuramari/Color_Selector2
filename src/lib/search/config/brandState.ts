import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
export type BaseSearchState = {
  PurchaseFilterMode:PurchaseFilterMode;
  
  selectedSetIds:string[];
  randomCount:number | null;

};


export type coloraryState =  BaseSearchState;


export type rejindouState = BaseSearchState;


