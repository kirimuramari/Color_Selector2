import { createClient } from "@supabase/supabase-js";
import type{ Database } from "types/database";
import "react-native-url-polyfill/auto";

export const supabase = createClient<Database>(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);
