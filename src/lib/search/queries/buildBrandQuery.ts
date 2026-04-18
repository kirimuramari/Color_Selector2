
import { BrandConfigMap, } from "../config/brandConfig";
import type { BrandKey} from "../config/brandTypes";
import { supabase } from "../../supabaseClient";
import { BrandStateMap } from "@/hooks";

// カラリー
export function buildColoraryQuery(
state:BrandStateMap["Colorary"]
) {
const config = BrandConfigMap["Colorary"];


  let query = supabase
  .from(config.tableName)
  .select("*")
  .order("番号",{ascending:true});




   return query;
}


// レジン道
export function buildRejindouQuery(

    state:BrandStateMap["Rejindou"]
) {
  const config = BrandConfigMap["Rejindou"];
   let query = supabase
  .from(config.tableName)
  .select("*")
  .order("番号",{ascending:true});

     
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
