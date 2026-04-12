import { SupabaseClient } from "@supabase/supabase-js";
import { BrandSearchState } from "types/search/base";

export type QueryContext = {
    client:SupabaseClient;
};

export type QuwryHandler<K extends keyof BrandSearchState> = (
    query:any,
    value:BrandSearchState[K],
    ctx:QueryContext
) => any;