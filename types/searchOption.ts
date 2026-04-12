// とこかと被るので不要
// 検索条件そのもの
// 検索オプションのベース
import { PurchaseFilterMode } from "./search/PurchaseFilterMode";
import { DiscontinuedFilterMode } from "./search/DiscontinuedFilterMode";
// ブランド別の検索条件
export type ColorarySearchOption = {
onFilterChange:(value:PurchaseFilterMode) => void;
onRandomCountChange:(value:number) => void;
};

// 足りない
export type PadicoSearchOption = {
  onFilterChange:(value:PurchaseFilterMode) => void;
    onDiscontinuedFilterChange:(value:DiscontinuedFilterMode) => void;
    onRandomCountChange:(value:number) => void;
};
export type RejindouSearchOption  =  {
onFilterChange:(value:PurchaseFilterMode) => void;
onRandomCountChange:(value:number) => void;
};
// ブランド別の検索条件のまとめ
export type BrandSearchOptions = {
  Colorary?: ColorarySearchOption;
  Padico?: PadicoSearchOption;
  Rejindou?: RejindouSearchOption;
};

// 不要部分
// UI用(旧 BaseSearchOptionの一部)
// export type SetFilterUIState = {
//   setNames: string;
// };


