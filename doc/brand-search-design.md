#  設計メモ

## 現在の状態
- BrandConfig を起点に feature 駆動設計
- buildBrandQuery は feature handler 方式

## 未着手・次回やること
- feature を folder 単位に分割
- UI / Query handler の共通インターフェース化

## 再開ポイント
- featureKeys.ts を起点に拡張可能

## 削除したところ
- types/search/brandConfig.ts が 仕様上不要になったので config/brandConfig.ts に統一した
- stateFeaturesとqueryFeaturesとuiFeaturesをBrandConfigのfeaturesに統一した
- brandOptions.tsが仕様上不要になったので削除した

## 変更部分
- types/search/base.ts の BaseSearchOption 部分が config/brandState.ts の  BaseSearchState に移行
- src/lib/search/queries/coloraryQuery.tsおよびrejindouQuery.tsの内容が類似しているので削除しsrc/lib/search/config/createSupabaseQueryBuilde.tsに統一
- filterModeが２種類あり同じ名前で紛らわしいので、purchaseFilterModeとdiscontinuedFilterModeに変更
- PadicoActionをSearchActionの拡張に伴いSearchActionに統一
- 主コンポーネントのスタイルシートを別にした
- FeatureFlagsをブランド別に変更
- Padico_ColorとPadico_Masterと２つあるとうまく処理できなかったのでPadico_Masterに統合

## 修正箇所（4/4現在）
- BrandSectionContainerの中身の追加
- 
## 不安な部分
- "RESET_STATE"が機能するか（できていない・むしろやるべき）

## 改善部分（4/8時点）
- 
- 
 

## 追加予定
- BrandConfigMap接続👌
- Supabase検索実装🔛
  
- 複数ブランド対応
  - パジコとレジン道
- 結果表示画面
  

