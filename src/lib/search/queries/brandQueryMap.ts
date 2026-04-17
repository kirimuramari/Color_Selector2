import { SupabaseClient } from "@supabase/supabase-js";
import { BrandKey,BrandState } from "../config/brandTypes";
import { PurchaseFilterMode } from "types/search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "types/search/DiscontinuedFilterMode";

type BrandQueryBuilder<K extends BrandKey> = (
    query:any,
    state:BrandState<K>
) => any;

export const brandQueryMap = {
    Colorary: (query,state) => {
        if (!state.PurchaseFilterMode) {
            query = query.eq("購入済み",true);
        
        }
        return query;
    },
    // セット名
    Padico: (query,state) => {
        if (!state.selectedSetIds) {
            query = query.in("セット名",state.selectedSetIds);
        }
        if (!state.DiscontinuedFilterMode) {
            query = query.eq("廃盤",false);
            
        }
        return query;
    },
    // レジン道
    Rejindou: (query,state) => {
        if (!state.PurchaseFilterMode) {
            query = query.eq("購入済み",true);
        }
        return query;
    }
} satisfies {
    [K in BrandKey]:BrandQueryBuilder<K>;
};