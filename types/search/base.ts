import {BaseSearchState } from "src/lib/search/config/brandState";
import { BrandStateMap } from "@/hooks";




type BrandSearchOptionMap = {
  Colorary: BaseSearchState & {
  };
  paint: BaseSearchState & {
    allColors:boolean;
  };
};

const createBase = (): BaseSearchState => ({
  PurchaseFilterMode: "all",
  selectedSetIds: [],
  randomCount: null,
});

export const initialBrandSearchState: BrandSearchOptionMap = {
  Colorary:{
    ...createBase(),

    
  },
  paint: {
    ...createBase(),
    allColors:false,
  },
};


export type BrandSearchState = BaseSearchState & {
  brands:BrandStateMap;
}