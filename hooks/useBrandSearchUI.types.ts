import { BrandConfigMap } from "src/lib/search/config/brandConfig";
import { BrandKey } from "src/lib/search/config/brandTypes";
import { FeatureUIMap } from "src/lib/search/config/featureTypes";

export type BrandUI<B extends BrandKey> = {
    [K in keyof typeof BrandConfigMap[B]["features"]["ui"]]:FeatureUIMap;
};