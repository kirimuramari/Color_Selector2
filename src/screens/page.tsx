import { useBrandSearch } from "hooks/useBrandSearch";

export default function Page() {
    const {state,dispatch} = useBrandSearch("Padico");

    const handleSubmit = () => {
        console.log(state);
        // ここで検索実行
        
};
return (
    <ColorSelecterCord
        includeDiscontinued={state.includeDiscontinued}
        allColors={state.allColors}
        dispatch={dispatch}
        onSubmit={handleSubmit}
    />
);

}