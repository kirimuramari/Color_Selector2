import { SupabaseClient } from "@supabase/supabase-js"
import { BaseSearchState} from "../config/brandState";
import { padicoState } from "../config/padicoState";
import { BrandConfig} from "../config/config";

//Padico 廃盤除外
type AnyBrandSearchOption =
| BaseSearchState
| (padicoState & {
    includeDiscontinued?: boolean;
});


export const buildSearchQueries = (
  supabase: SupabaseClient,
  config: Omit<BrandConfig<any>, "buildQuery"> & {
    tableName: string;
    setIdColumn?: string;
    discontinuedColumn?: string;
    enableSetSelect?: boolean;
  },
  state: AnyBrandSearchOption
) => {
  if (!state) {
    return null
  }

  let query = supabase.from(config.tableName).select("*")
console.log("🔥 BUILD SEARCH QUERIES");
  // セット指定（allColors OFF のときのみ）
  if (
    config.enableSetSelect &&
    state.selectedSetIds.length > 0 &&
    config.setIdColumn
  ) {
    query = query.in(config.setIdColumn, state.selectedSetIds)
  }

  // 廃盤制御（Padico）
  if (
    config.discontinuedColumn &&
    "includeDiscontinued" in state &&
    state.includeDiscontinued === false
  ) {
    query = query.eq(config.discontinuedColumn, false)
  }

  return query
}
