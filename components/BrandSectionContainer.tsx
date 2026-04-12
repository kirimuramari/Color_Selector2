import { useBrandSearch } from "@/hooks";
import { BrandKey } from "@/src/lib/search/config/brandConfig"
import { ColorBrandSection } from "./search/ColorBrandSection";
import PadicoBrandSection from "./search/PadicoBrandSection";
import RejindouBrandSection from "./search/RejindouBrandSection";
import { padicoState } from "@/src/lib/search/config/padicoState";
import { padicoActions } from "@/src/lib/search/brands/plugin";
import { BrandSectionConfigMap } from "src/lib/search/config/brandSectionConfig";
type Props = {
    brand:BrandKey;
    search:ReturnType<typeof useBrandSearch>;
};

export default function BrandSectionContainer({
    brand,search
}:Props){
switch (brand) {
    case "Colorary":
    return (
        <ColorBrandSection
        title={BrandSectionConfigMap[brand].title}
        state={search.state}
        actions={search.actions}
        />
    );

    case "Padico":
        return (
            <PadicoBrandSection
            title={BrandSectionConfigMap[brand].title}
            state={search.state as padicoState}
            actions={search.actions as padicoActions}
           
            />
        );
    case "Rejindou":
        return (
            <RejindouBrandSection
            title={BrandSectionConfigMap[brand].title}
            state={search.state}
            actions={search.actions}
            />
        );
        default:
            return null;

}
}