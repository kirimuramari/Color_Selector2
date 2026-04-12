// reducer 用 Action
import { BaseSearchState } from "@/src/lib/search/config/brandState";
import { PurchaseFilterMode } from "@/types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";



// 全体Action
export type BaseSearchAction = 
| {
    type: "TOGGLE_ALL_COLORS";
    payload: boolean;
}
| {
    type: "SET_SELECTED_SET_IDS";
    payload: string[];

}
|{
    type: "RESET_STATE";
    //payload:のタイプがあやふや 
    payload:string;
}

| {
   type: "SET_PURCHASEFILTER_MODE";
    payload: PurchaseFilterMode;
}
|{
    type: "SET_RANDOM_COUNT";
    payload: number | null;
}
;

// カラリー・レジン道
export type SearchAction =
|{
    type: "TOGGLE_ALL_COLORS";
    payload: boolean;
}
|{
    type: "SET_SELECTED_SET_IDS";
    payload: string[];
}
|{
    type: "RESET_STATE";
    payload:BaseSearchState;
}

|{
    type: "SET_PURCHASEFILTER_MODE";
    payload: PurchaseFilterMode;
}

|{
    type: "SET_RANDOM_COUNT";
    payload: number | null;
}
|{
    type: "RESET_STATE";
    payload:string;
}
// パジコ用
|{
    type: "SET_DISCONTINUEDFILTER_MODE";
    payload: DiscontinuedFilterMode;

};