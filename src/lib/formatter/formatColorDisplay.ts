import { BrandKey } from "src/lib/search/config/brandTypes";
import { BrandConfigMap } from "../search/config/brandConfig";
export function formatColorDisplay(
    brand: BrandKey,
item: any
): string {
    const config = BrandConfigMap[brand];
    return config.formatColorDisplay(item);

    }
