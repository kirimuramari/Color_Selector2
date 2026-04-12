import { SetOption } from "@/types/search/set";

function formatSetOptions(rows:{セット名:string}[]):SetOption[] {
    const unique = [...new Set(rows.map(r => r["セット名"]))];

    return unique.map(name => ({
        label:name,
        value:name,
    }));
}