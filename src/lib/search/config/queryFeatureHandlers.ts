import { SupabaseClient } from "@supabase/supabase-js";
import { BrandSearchState } from "types/search/base";
import { FeatureKey } from "../feature/featureKeys";

export type QueryContext = {
    client:SupabaseClient;
};

export type QueryHandler<K extends keyof BrandSearchState> = (
    query:any,
    value:BrandSearchState[K],
    ctx:QueryContext
) => any;

type PartialQueryFeatureHandlers = {
    [K in keyof BrandSearchState]?:QueryHandler<K>;
};



export const queryFeatureHandlers: Record<
FeatureKey,
(query:any, value:any) => any
    > = {
        selectedSetIds:(query,value) => {
            if(!value.length) return query;
            return query.in("セット名",value);
        },

        includeDiscontinued:(query,value) => {
            if(!value){
            return query.eq("廃盤",false);
        }
        return query;
        },
        allColors:(query) => query,
        keyword: (query,value) => {
            if(!value) return query;
            return query.ilike("name",`%${value}%`);
        },
    };
