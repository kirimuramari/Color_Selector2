import { supabase } from "../../supabaseClient";
import { TableName } from "../config/brandConfig";
import { BaseSearchState } from "../config/brandState";
import { applySetFilter } from "./applySetFilter";

export function createSupabaseQueryBuilder(
    table:TableName) {
        return function buildQuery(state:BaseSearchState) {
            let query = supabase.from(table).select("*");
            // Padicoだけ除外
            if (table !== "Padico_Master") {
                query = applySetFilter(query as any, state);
               
            }
            return query;
        }
    };