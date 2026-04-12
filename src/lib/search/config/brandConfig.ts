import { Database, TableColumn, TableRow } from "types/database";
import { padicoReducer } from "../reducers/padicoReducer";
import { coloraryReducer } from "../reducers/coloraryReducer";
import { rejindouReducer } from "../reducers/rejindouReducer";
import { BrandConfig, BrandFeatureMap} from "../config/config";
import { buildColoraryQuery } from "../queries/buildBrandQuery";
import { SetOption } from "@/types/search/set";
import { ColoraryPlugin, PadicoPlugin, RejindouPlugin } from "../brands/plugin";
import { BrandStateMap } from "@/hooks";
import { supabase } from "../../supabaseClient";
type Tables = keyof Database["public"]["Tables"];

export const TABLES = {
    Padico_Master:"Padico_Master",
    GreenOcean_Color:"GreenOcean_Color",
    Rejindou_Color:"Rejindou_Color",
} as const;

export type TableName = typeof TABLES[keyof typeof TABLES];

type QueryBuilder<K extends keyof any> = (
    query: any,
    value: any,
    config: any
) => any;

const queryBuilders: Record<string, QueryBuilder<any>> = {
    PurchaseFilterMode: (query, value,config) => {
        if (value === "purchased") {
            return query.eq("購入済み",true);
        }
        return query;
    },
    selectedSetIds:(query, value) => {
        if (value.length > 0) {
            return query.in("セット名", value); //("セット名", state.selectedSetIds)?
        }
        return query;
    },
    DiscontinuedFilterMode:(query, value) => {
        if (value === "exclude") {
            return query.or("備考.is.null,備考.not.ilike.%廃盤%");
}
return query;
    },
};


function createBuildQuery<K extends BrandKey>(
    config:BrandConfig<K>
) {
   return (state:BrandStateMap[K],client:any) => {
    let query = client.from(config.tableName).select("*");

    const enabledFeatures = config.features.query;

    for(const key in enabledFeatures){
        if (!enabledFeatures[key]) continue;

        const value = state[key];

        const builder = queryBuilders[key];
        if (!builder) continue;

        query = builder(query,value,config);
    }
    return query;
   }; 
}

function createSetOptionsFormatter(columnName:string) {
    return (rows: any[]): SetOption[] => {
        const unique = [...new Set(rows.map(r => r[columnName]))];
        return unique.map(name => ({
            label: name,
            value: name,
        }));
    };
}
function defineBrandConfig<K extends BrandKey>(
    config: Omit<BrandConfig<K>, "buildQuery"> 
):BrandConfig<K> {
    return {
        ...config,
        buildQuery:createBuildQuery(config as BrandConfig<K>),
    };
}

    //    修正中
const ColoraryConfig = defineBrandConfig({
    
           tableName: "GreenOcean_Color",
       columns: {
        purchased: "購入済み",
       },
       features: {
         state:{
             PurchaseFilterMode: true,
             selectedSetIds: true,
             randomCount:true,
         },
            query:{
                PurchaseFilterMode: true,
             selectedSetIds: true,
            },
            ui:{
             PurchaseFilterMode: true,
             selectedSetIds: true,
             randomCount:true,
            }
       },
        initialState: {
            PurchaseFilterMode: "all",
            selectedSetIds: [],
            randomCount:0,
        },
        reducer:coloraryReducer,
        createActions: (dispatch) => ({
            setFilterMode: (mode) =>
                dispatch({ type: "SET_PURCHASEFILTER_MODE", payload: mode }),
            setRandomCount:(count:number | null) =>
                dispatch({type:"SET_RANDOM_COUNT",payload:count}),
            setSelectedSetIds: (ids) =>
                dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
            }),
        buildSetOptionsQuery: (client) => {
            return client
            .from("GreenOcean_Color")
            .select("セット名")
            .not("セット名","is",null);
        },
       
        formatSetOptions: createSetOptionsFormatter("セット名"),
        formatColorDisplay(item) {
            return `・カラリーの${item["セット名"]}の${item["コード"]}番の${item["商品名"]}`;
        },

   });
const PadicoConfig = defineBrandConfig<"Padico">({
    tableName:"Padico_Master",
        columns:{
            id:"番号",
            name:"商品名",
            set:"セット名",
            purchased:"購入済み",
            note:"備考",
        },
        features: {
            state:{
                PurchaseFilterMode: true,
                DiscontinuedFilterMode:true,
                selectedSetIds: true,
                randomCount:true,
                },
            query:{
                PurchaseFilterMode: true,
                DiscontinuedFilterMode:true,
                selectedSetIds: true,
            },
            ui:{
                PurchaseFilterMode: true,
                DiscontinuedFilterMode:true,
                selectedSetIds: true,
                randomCount:true,
            },
        },
       initialState:{
            PurchaseFilterMode: "all",
            DiscontinuedFilterMode:"include",
            selectedSetIds: [],
            randomCount:0,
       },
       reducer:padicoReducer,
       createActions: (dispatch) => ({
            setFilterMode:(mode) =>
                dispatch({ type: "SET_PURCHASEFILTER_MODE", payload:mode}),
            setIncludeDiscontinuedMode:(mode) =>
                dispatch({ type:"SET_DISCONTINUEDFILTER_MODE",payload:mode}),
            setRandomCount:(count) =>
                dispatch({type:"SET_RANDOM_COUNT",payload:count}),
            setSelectedSetIds: (ids) =>
                dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
             }),
        buildSetOptionsQuery: (client) => {
            return client
            .from("Padico_Master")
            .select("セット名")
            .not("セット名","is",null);
        },
        formatSetOptions: createSetOptionsFormatter("セット名"),
        formatColorDisplay(item) {
            return `・パジコの${item["セット名"] ?? ""}の${item["商品名"] ?? ""}`;
        },

       });

const RejindouConfig = defineBrandConfig({    
        tableName:"Rejindou_Color",
        columns:{
            setId:"セット名",
            key:"商品名",
        },
  features: {
         state:{
             PurchaseFilterMode: true,
             selectedSetIds: true,
             randomCount:true,
         },
            query:{
                PurchaseFilterMode: true,
             selectedSetIds: true,
            },
            ui:{
PurchaseFilterMode: true,
             selectedSetIds: true,
             randomCount:true,
            }
       },
        initialState: {
            PurchaseFilterMode: "all",
            selectedSetIds: [],
            randomCount:0,
        },
     reducer:rejindouReducer,
     createActions: (dispatch) => ({
setFilterMode:(mode) =>
   dispatch({ type: "SET_PURCHASEFILTER_MODE", payload:mode}),
setRandomCount:(count) =>
   dispatch({type:"SET_RANDOM_COUNT",payload:count}),
setSelectedSetIds: (ids) =>
   dispatch({type:"SET_SELECTED_SET_IDS", payload:ids}),
}),
     buildSetOptionsQuery: (client) => {
            return client
            .from("Rejindou_Color")
            .select("セット名")
            .not("セット名","is",null);
        },
        formatSetOptions: createSetOptionsFormatter("セット名"),
        formatColorDisplay(item) {
            return `・レジン道の${item["セット名"]}の${item["商品名"]}`;
       },
        });


export const BrandConfigMap: {
    [K in BrandKey]: BrandConfig<K>
} = {
    Colorary: ColoraryConfig,
    Padico: PadicoConfig,
    Rejindou: RejindouConfig,
};



    export const BrandPluginMap = {
        Colorary:ColoraryPlugin,
        Padico:PadicoPlugin,
        Rejindou:RejindouPlugin,
    } as const;

export type BrandKey = keyof typeof BrandPluginMap;
