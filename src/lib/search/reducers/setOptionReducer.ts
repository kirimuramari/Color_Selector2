import { SetOptionsState, SetOption} from "@/types/search/set";

type SetOptionsAction =
|{
    type: "SET_LOADING";
    payload:boolean;
}
|{
    type: "SET_OPTIONS";
    payload:SetOption[]
};


export function setOptionReducer(
    state:SetOptionsState,
    action:SetOptionsAction
) :SetOptionsState{
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading:action.payload,
            };
            
        case "SET_OPTIONS":
            return {
                ...state,
                setOptions:action.payload,
                loading:false,
            };
    
        default:
            return state;
    }
}