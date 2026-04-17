//初期値

import {BrandSearchStateMap } from "@/types/search/brandStateMap";
import { BrandConfigMap } from "../config/brandConfig";

export const initialBrandSearchState:BrandSearchStateMap =
    Object.fromEntries(
        Object.entries(BrandConfigMap).map(([key, config]) => [
            key,
            config.initialState,
        ])
    )as BrandSearchStateMap;
