import { BrandKey } from "./brandTypes";

export type BrandSectionConfig = {
    title: string;
    allowFilterMode:boolean;
    allowRandomCount: boolean;
};

export const BrandSectionConfigMap: Record<
BrandKey,
BrandSectionConfig
> = {
    Colorary: {
        title: "カラリー",
        allowFilterMode: true,
        allowRandomCount: true,

},
Padico: {
    title: "パジコ",
    allowFilterMode: true,
    allowRandomCount: true,
},
Rejindou: {
    title: "レジン道",
    allowFilterMode: true,
    allowRandomCount: true,
    },
};