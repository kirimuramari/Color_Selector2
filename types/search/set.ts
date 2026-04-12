// セット名のState

export type SetOption = {
    label: string;//表示用
    value:  string;//内部用
};

export type SetOptionsState = {
    setOptions: SetOption[];
    loading: boolean;

};