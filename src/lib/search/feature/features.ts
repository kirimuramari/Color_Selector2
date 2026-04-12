type PurchaseFeature = {
    PurchaseFilterMode: "all" | "purchased";
};

type DiscontinuedFeature = {
    DiscontinuedFilterMode: "include" | "exclude";
};

type setFeature = {
    selectedSetIds: string[];
};
//randomCountはDBクエリじゃなくUIロジックの可能性が高い
export type ColoraryFeatures = PurchaseFeature &setFeature;
    

export type PadicoFeatures = PurchaseFeature &setFeature & DiscontinuedFeature;

export type RejindouFeatures = PurchaseFeature &setFeature;