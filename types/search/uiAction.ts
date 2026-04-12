// UI / グローバル設定用
import {  BrandKey } from "../brands";

export type SearchUIAction = 
|{
    type:"TOGGLE_BRAND_ENABLED",
    brandKey:BrandKey,
    value:boolean,
    // randomCount 用 Action
}
|{
    type:"SET_RANDOM_COUNT",
value:number,

};
