// // BrandConfigMapのインポート先の変更
// import { BrandConfig } from "types/search/brandConfig";
// import { BrandConfigMap } from "../config/brandConfig";
// // バリデーション関数を定義
// export function validateBrandState<
// T extends typeof BrandConfigMap
// >(state: T, config: BrandConfig): T {
//     let next = {...state};



//     // allColorsが禁止されている brand
//     if (!config.allowAllColors) {
//         next.allColors = false;
//     }
// // セット未選択時のデフォルト制御
// if (next.selectedSetIds.length === 0) {
//     next.allColors = config.defaultAllColors;
// }
// // includeDiscontinued を持たない brand
// if (!config.hasIncludeDiscontinued) {
//     delete (next as any).includeDiscontinued;

// }
// return next;
// }