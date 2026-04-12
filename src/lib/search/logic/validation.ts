// // 検索条件のバリデーション関数の定義
// import { SearchCondition } from "@/types/searchState";
// import type{ BrandKey } from "@/src/lib/search/config/brandTypes";


// //バリデーション結果型の定義
// export type ValidationError = {
//     field: string;
//     message: string;
// };
// export type ValidationResult = {
//     valid: boolean;
//     errors: ValidationError[];
// };

// export function validateSearchCondition(
//     condition:SearchCondition
// ): ValidationResult {
//     const errors: ValidationError[] = [];

//     const brands: BrandKey[] = ["Colorary", "Padico", "Rejindou"];
//     // 少なくとも1つのブランドが選択されていることを確認
//     const anyEnabled = brands.some((b) => condition.toggle[b]);
//     if (!anyEnabled) {
//         errors.push({
//             field:"toggle",
//             message:"少なくとも1つ以上含めてください",
//         });
//     }
//     //ブランドごとの競合性の確認
// brands.forEach((brand) => {
//     const enabled = condition.toggle[brand];
//     const option = condition.options[brand];

// if (enabled && !option) {
//     errors.push({
//         field:`options.${brand}`,
//         message:`${brand}が有効ですが検索条件が指定されていません`,
//     });
    
// }
// if (!enabled && option) {
//     errors.push({
//         field:`options.${brand}`,
//         message:`${brand}は無効ですが検索条件が指定されています`,
//     });
// }
// });
// // ランダム数チェック
// const count = condition.random.count;
// if (count < 1 || count > 6) {
//     errors.push({
//         field:"random.count",
//         message:"ランダム表示数は1～6の範囲で指定してください",
//     });
// }
// return {
//     valid: errors.length === 0,
//     errors,
// };
// }