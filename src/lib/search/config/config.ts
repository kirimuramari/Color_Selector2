import { BrandStateMap } from "@/hooks/useBrandSearch";
import { BrandKey } from "./brandTypes";
import { SearchAction } from "@/types/search/actions";
import { SupabaseClient } from "@supabase/supabase-js";
import { SetOption } from "@/types/search/set";
import React from "react";
import { BrandActionMap } from "../brands/plugin";
import { ColoraryFeatures, PadicoFeatures,RejindouFeatures } from "../feature/features";



type FeatureFlags<T> = {
  [K in keyof T]?: boolean;
};

export type features = {
  state:{
             
             selectedSetIds: true,
             randomCount:true,
         },
            query:{
                
                selectedSetIds: true,
            },
            ui:{
                
                selectedSetIds: true,
                randomCount:true,
            }
};

export type BrandFeatureMap = {
  Colorary: ColoraryFeatures;
  Padico: PadicoFeatures;
  Rejindou: RejindouFeatures;

};
 

export type BrandConfig<K extends BrandKey> = {
    tableName: string;
    columns: Record<string, string>;
    features: {
        state: FeatureFlags<BrandStateMap[K]>;
        query?: FeatureFlags<BrandStateMap[K]>;
        ui?: FeatureFlags<BrandStateMap[K]>;
    };
    initialState: BrandStateMap[K];
    reducer: (
      state: BrandStateMap[K],
      action: SearchAction
    ) => BrandStateMap[K];

    buildQuery?: any;
     
    buildSetOptionsQuery:(
        client: SupabaseClient
      ) => any;
    formatSetOptions:(
        rows:any[]
      ) => SetOption[];
    formatColorDisplay:(
        item:any
      ) => string;
    createActions:(
      Dispatch:React.Dispatch<SearchAction>
    ) => BrandActionMap[K];
};
