// 型定義
import type{ BrandKey, BrandState} from "src/lib/search/config/brandTypes";
import { BrandConfigMap } from "@/src/lib/search/config/brandConfig";

export type BrandSearchStateMap = {
   [K in BrandKey]:typeof BrandConfigMap[K]["initialState"];
    };
// export type BrandState<K extends BrandKey> = BrandSearchStateMap[K];