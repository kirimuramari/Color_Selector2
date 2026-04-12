// //検索条件
// import { SupabaseClient } from "@supabase/supabase-js";
// import { pickRandomItems } from "src/lib/search/logic/pickRandomItems";
// import { SearchState} from "@/types/searchState";
// import { BrandConfigMap } from "../config/brandConfig";

// export const executeSearch = async (
//     supabase:SupabaseClient,
//     state:SearchState
// ) => {
//     const results = await Promise.all(
//         state.brands.map((brand) => {
//             const config = BrandConfigMap[brand];
//             const query = config.buildQuery(state.conditions[brand], supabase);

//             return query;
//         })
//     );
//     const allColors = results.flatMap(
//         (r) => r.data ?? []
//     );
//     state.brands.forEach((brand) => {
//   console.log("🔥 LOOP BRAND:", brand);
// });
//     return pickRandomItems(
//         allColors,
//         state.randomCount
//     )
// }