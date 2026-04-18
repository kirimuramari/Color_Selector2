import { View, Text, Switch } from "react-native";
import { useState } from "react";
import { styles } from "style/style";
import { BrandSectionConfigMap } from "src/lib/search/config/brandSectionConfig";
import {  padicoActions} from "@/src/lib/search/brands/plugin";
import { padicoState } from "@/src/lib/search/config/padicoState";
import { RandomCountPicker } from "../RandomCountPicker";

const brand = "Padico"
const config = BrandSectionConfigMap[brand];


type Props= {
    title: string;
    state: padicoState;
    actions: padicoActions;
};

export default function PadicoBrandSection({
    title,
    state,
    actions,
}:Props) {
    const showRandom = config.allowRandomCount;
    const [messages, setMessages] = useState<Record<string, string>>({});
            const [error, setError] = useState<string | null>(null);


    return(
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {config.allowFilterMode && (
                    <View style={styles.swichRow}>
            <Text>廃盤を含める</Text>
            <Switch
            value={state.DiscontinuedFilterMode === "include"}
            onValueChange={(value) =>
                actions.setIncludeDiscontinuedMode(value ? "include" : "exclude")
            }
            />
            <Text>含めない</Text>
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

