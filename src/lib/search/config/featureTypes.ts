
export type BrandSearchFeature = {
    keyword?:true;
    allColors?:true;
    selectedSetIds?:true;
    includeDiscontinued?:true;
};

export type FeatureUIMap = {
    keyword: {
        value:string;
        set:(v:string) => void;
    };
    allColors: {
        checked:boolean;
    };
    selectSetIds:{
        value:string[];
        toggle:() => void;
    };
    includeDiscontinued:{
        checked:boolean;
        toggle:() => void;
    };



};