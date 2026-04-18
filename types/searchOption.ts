
// 検索条件そのもの
// 検索オプションのベース
import { DiscontinuedFilterMode } from "./search/DiscontinuedFilterMode";
// ブランド別の検索条件
export type ColorarySearchOption = {
onRandomCountChange:(value:number) => void;
};

// 足りない
export type PadicoSearchOption = {
    onDiscontinuedFilterChange:(value:DiscontinuedFilterMode) => void;
    onRandomCountChange:(value:number) => void;
};
export type RejindouSearchOption  =  {
onRandomCountChange:(value:number) => void;
};
// ブランド別の検索条件のまとめ
export type BrandSearchOptions = {
  Colorary?: ColorarySearchOption;
  Padico?: PadicoSearchOption;
  Rejindou?: RejindouSearchOption;
};

