export const featureKeys = [
    "keyword",
    "allColors",
    "selectedSetIds",
    "includeDiscontinued",
] as const;

export type FeatureKey = typeof featureKeys[number];

