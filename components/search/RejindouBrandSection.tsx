import { View, Text, Switch } from "react-native";
import { useState } from "react";
import { styles } from "style/style";
import { BrandSectionConfigMap } from "src/lib/search/config/brandSectionConfig";
import { BrandStateMap } from "@/hooks";
import { BrandActionMap } from "@/src/lib/search/brands/plugin";
import { BrandKey } from "@/src/lib/search/config/brandTypes";
import { RandomCountPicker } from "../RandomCountPicker";

const brand = "Rejindou"
const config = BrandSectionConfigMap[brand];


type Props<K extends BrandKey> = {
    title:string;
    state:BrandStateMap[K];
    actions:BrandActionMap[K];
};
export default function RejindouBrandSection<K extends BrandKey>({
    title,
    state,
    actions,
}:Props<K>) {
    const showRandom = config.allowRandomCount;
    const [messages, setMessages] = useState<Record<string, string>>({});
            const [error, setError] = useState<string | null>(null);


    return(
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>

            {config.allowFilterMode && (
        <View style={styles.swichRow}>
            <Text>購入済み</Text>
            <Switch
            value={state.PurchaseFilterMode === "all"}
            onValueChange={(value) => 
                actions.setFilterMode(value ? "all" : "purchased")
            }
            />
            <Text>全て</Text>
        </View>
                    )}
  {/* ランダム件数 */}
            {showRandom && (
                <RandomCountPicker
                value={state.randomCount}
                onChange={(value) => {
                    actions.setRandomCount(value);
                    setError(null);
                    setMessages({});
                }}
                
                />

          )}
           {messages[brand] && (
                          <Text style={styles.error}>
                              {messages[brand]}
                          </Text>
                      )}
    </View>
    );
}