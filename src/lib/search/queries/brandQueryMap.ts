import { BrandKey,BrandState } from "../config/brandTypes";

type BrandQueryBuilder<K extends BrandKey> = (
    query:any,
    state:BrandState<K>
) => any;

export const brandQueryMap = {
    Colorary: (query,state) => {
     
        return query;
    },
    // セット名
    Padico: (query,state) => {
        if (!state.selectedSetIds) {
            query = query.in("セット名",state.selectedSetIds);
        }
        if (!state.DiscontinuedFilterMode) {
            query = query.eq("廃盤",false);
            
        }
        return query;
    },
    // レジン道
    Rejindou: (query,state) => {
      
        return query;
    }
} satisfies {
    [K in BrandKey]:BrandQueryBuilder<K>;
};