export type Json =
| string
| number
| boolean
| null
| { [key: string]: Json | undefined}
| Json[];

export type Tables<T extends keyof Database["public"]["Tables"]> = 
Database["public"]["Tables"][T]["Row"];

export type TableRow<
T extends keyof Database["public"]["Tables"]
> = Database["public"]["Tables"][T]["Row"];


export type TableColumn<
T extends keyof Database["public"]["Tables"]
> = keyof Tables<T>;

export type Database = {
    public:{
        Tables:{
            GreenOcean_Color:{
                Row:{
                    "番号":number;
                    "コード":number;
                    "商品名":string;
                    "セット名":string;
                    "購入済み":boolean;
                
            };
    Padico_Master:{
        Row:{
            "番号":number;
            "商品名":string;
             "セット名":string;
                "購入済み":boolean;
             "備考":string | null;
        };
    };
            
            Rejindou_Color:{
                Row:{
                    "番号":number;
                    "商品名":string;
                    "シリーズ":string;
    }
        };
    };
};
    };
};