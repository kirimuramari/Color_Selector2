import { stateFeatures } from "src/lib/search/feature/stateFeatures";
import {BaseSearchState } from "src/lib/search/config/brandState";
import { BrandStateMap } from "@/hooks";


// ブランド共通の検索条件
// export type BaseSearchOption = {
    
//     selectedSetIds:string[];

// }

type BrandSearchOptionMap = {
  Colorary: BaseSearchState & {
  };
  paint: BaseSearchState & {
    allColors:boolean;
  };
};

const createBase = (): BaseSearchState => ({
  selectedSetIds:[],
});

export const initialBrandSearchState: BrandSearchOptionMap = {
  Colorary:{
    ...createBase(),
    includeDiscontinued:false,
    
  },
  paint: {
    ...createBase(),
    allColors:false,
  },
};


export type BrandSearchState = BaseSearchState & {
  brands:BrandStateMap;
}