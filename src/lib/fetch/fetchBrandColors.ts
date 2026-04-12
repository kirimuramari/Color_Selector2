// import { BrandSearchState } from "@/types/search/base";
// import { BrandKey, BrandState } from "src/lib/search/config/brandTypes";
// import { buildBrandQuery } from "src/lib/search/queries/buildBrandQuery";

// export const fetchBrandColors = async <K extends BrandKey>(
//     brand: K,
//     state: BrandSearchState
// ) => {
//     const query = buildBrandQuery(
//         brand,
//         state.brands[brand]
//     );
//     const { data, error } = await query;

//     if (error) throw error;
    
//     return data;
// };