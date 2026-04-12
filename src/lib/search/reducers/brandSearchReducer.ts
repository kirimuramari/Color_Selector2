import { BrandKey } from "src/lib/search/config/brandTypes";
import { SearchAction } from "@/types/search/actions";
import { BaseSearchState } from "../config/brandState";

export function createBrandSearchReducer(brand: BrandKey) {
        return (state: BaseSearchState, action: SearchAction) => {
          
          switch (action.type) {
              case "TOGGLE_ALL_COLORS":
                  return {
                    ...state,
                    allColors: action.payload,
                  };
                  case "RESET_STATE":
                    return action.payload;
          default:
            return state;
                }
          
        };
    }

            


