import { supabase } from "../../supabaseClient";
import { BrandConfigMap } from "../config/brandConfig";
import { BrandKey, SearchResultItem } from "../config/brandTypes";
import { randomPick } from "../logic/randomPick";
import { BrandStateMap } from "hooks/useBrandSearch";

export async function executeBrandSearch<K extends BrandKey>(
    brand:K,
    state:BrandStateMap[K],
):Promise<SearchResultItem[]> {
    const config = BrandConfigMap[brand];

    const { data, error } = await config.buildQuery(state, supabase);
    if (error) {
        console.error("Search error", error);
        throw new Error(error.message);      
    }
    
    if (!data) return [];
    let result = data;
    if (state.randomCount != null) {
        result = randomPick(result,state.randomCount);
        console.log("result", result);
            }
    return result.map((item:any) => ({
        ...item,
        brand
    })) as SearchResultItem[];
    }
