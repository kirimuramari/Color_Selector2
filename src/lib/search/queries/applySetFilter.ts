// 購入済みフィルター適用関数
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import {BaseSearchState } from "src/lib/search/config/brandState";

export const applySetFilter = <T extends any>(
    query:PostgrestFilterBuilder<any, any, any, any>,
state:BaseSearchState
):PostgrestFilterBuilder<any, any, any, any>=>{


   if (state.selectedSetIds.length > 0) {
    return query.in("セット名",state.selectedSetIds);
   } 
   return query
}