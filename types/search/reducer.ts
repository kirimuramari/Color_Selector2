// Reducer の「型」

import { SearchAction } from "./actions";

export type BrandReducer<T> = (
    state: T,
    action: SearchAction
) => T;
