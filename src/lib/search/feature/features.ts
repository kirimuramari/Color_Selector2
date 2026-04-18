

type DiscontinuedFeature = {
    DiscontinuedFilterMode: "include" | "exclude";
};

type setFeature = {
    selectedSetIds: string[];
};
//randomCountはDBクエリじゃなくUIロジックの可能性が高い
export type ColoraryFeatures = setFeature;
    

export type PadicoFeatures = setFeature & DiscontinuedFeature;

export type RejindouFeatures =setFeature;