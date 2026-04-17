// 型定義
import type{ BrandKey} from "src/lib/search/config/brandTypes";
import { BrandConfigMap } from "@/src/lib/search/config/brandConfig";

export type BrandSearchStateMap = {
   [K in BrandKey]:typeof BrandConfigMap[K]["initialState"];
    };
