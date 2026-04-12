// ブランド定義
import { BrandConfig } from "@/src/lib/search/config/brandConfig";

export const BRAND_CONFIGS: BrandConfig[] = [
  {
    key:"Colorary",
    label:"カラリー",
    tableName:"GreenOcean_Color",
    enableAllColors:true,
    enableSetSelect:true,
    setIdColumn:"セットID",
},
  {
    key:"Padico",
    label:"パジコ",
    tableName:"Padico_Master",
    setIdColumn:"セットID",
    enableAllColors:true,
    enableSetSelect:true,
    discontinuedColumn:"廃盤",
    
  },
  {
    key:"Rejindou",
    label:"レジン道",
    tableName:"Rejindou_Color",
    setIdColumn:"セットID",
    enableAllColors:true,
    enableSetSelect:true,
  },
];