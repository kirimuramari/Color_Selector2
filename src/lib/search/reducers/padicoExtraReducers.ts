import { PadicoSearchOption } from "types/searchOption";
import { SearchAction } from "types/search/actions";
export const padicoExtraReducers = [
    (state:PadicoSearchOption, action:SearchAction) => {
        if (action.type === "SET_DISCONTINUEDFILTER_MODE") {
            return {
                ...state,
                includeDiscontinued:action.payload,
            };
        }
        return null;
    },
];
