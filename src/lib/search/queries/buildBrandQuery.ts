// BrandConfigMapのインポート先の変更

import { SupabaseClient } from "@supabase/supabase-js";
import { BrandConfigMap, } from "../config/brandConfig";
import type { BrandKey, BrandState} from "../config/brandTypes";
import type { BrandSearchStateMap } from "@/types/search/brandStateMap";
import { queryFeatureHandlers } from "../config/queryFeatureHandlers";
import { Database } from "types/database";
import { supabase } from "../../supabaseClient";
import { BrandStateMap } from "@/hooks";
import { PurchaseFilterMode } from "types/search/PurchaseFilterMode";
import { padicoState } from "../config/padicoState";

// カラリー
export function buildColoraryQuery(
state:BrandStateMap["Colorary"]
) {
const config = BrandConfigMap["Colorary"];


  let query = supabase
  .from(config.tableName)
  .select("*")
  .order("番号",{ascending:true});

   if (state.PurchaseFilterMode === "purchased") {
     query = query.eq(config.columns.purchased,true);
   } 


   return query;
}
// パジコも作るべきか？

// レジン道
export function buildRejindouQuery(

    state:BrandStateMap["Rejindou"]
) {
  const config = BrandConfigMap["Rejindou"];
   let query = supabase
  .from(config.tableName)
  .select("*")
  .order("番号",{ascending:true});

      if (state.PurchaseFilterMode === "purchased") {
    query = query.eq(config.columns.purchased,true);
   } 
   return query;
}



export function buildBrandQuery<K extends BrandKey>(
  brand: K,
  state: BrandStateMap[K]
) {
  console.log("brand", brand);
  console.log("state keys", Object.keys(state));
  return BrandConfigMap[brand].buildQuery(state, supabase);


    }
