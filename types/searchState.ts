// Reducer / state 用
import type{ BrandKey } from "src/lib/search/config/brandTypes";
import { BrandSearchOptions, } from "./searchOption";
import { BrandStateMap } from "@/hooks";

// トグルボタンの設定
export type BrandToggleState = Record<BrandKey, boolean>;

// ランダム表示の設定
export type RandomSetting = {
  count: 1 | 2 | 3 | 4 | 5 | 6;
};
// 検索条件のまとめ
export type SearchCondition = {
  toggle: BrandToggleState;
  options: BrandSearchOptions;
  random: RandomSetting;
};
//state をブランド共通で扱うための型定義
export type SearchState = {
  brands:BrandKey[];
  conditions:{
    [K in BrandKey] : BrandStateMap[K];
  };
  randomCount:number;
};


