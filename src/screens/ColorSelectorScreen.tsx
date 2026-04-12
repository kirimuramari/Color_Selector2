import { View,Text,ScrollView,Button  } from "react-native";
import { useState} from "react";
import { executeBrandSearch } from "../lib/search/feature/executeBrandSearch";
import { BrandList } from "src/lib/search/config/brandList";
import { BrandConfigMap } from "src/lib/search/config/brandConfig";
import  BrandSectionContainer from "components/BrandSectionContainer";
import { styles } from "style/style";
import { useBrandSearch } from "@/hooks/useBrandSearch";
import { SearchResultItem } from "../lib/search/config/brandTypes";
import { BrandSectionConfigMap } from "../lib/search/config/brandSectionConfig";

export default function ColorSelectorScreen() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<SearchResultItem[]>([]);
    const [messages, setMessages] = useState<Record<string, string>>({});
    const searches = BrandList.map((brand) => ({
        brand,
        search: useBrandSearch(brand),
    }
)
);

const isAllRandomNone = searches.every(
    ({search}) =>
        !search.state.randomCount ||
        search.state.randomCount === 0
);

    const handleSubmit = async () => {
        setError(null);
        setMessages({});
        // 送信前のチェック 
        if (isAllRandomNone) {
            setError("少なくとも1つのブランドで件数を指定してください");
            return;
        }
        try {
            setLoading(true);
            // 検索実行 
            const allResults = await Promise.all(
                searches.map(async ({brand, search}) => {

                    const res = await executeBrandSearch(
                        brand,
                        search.state,
                    );
                    const result = Array.isArray(res) ? res : res?.data ?? [];
                    return {
                        brand,
                        result,
                        state: search.state,
                    };
                })
            );
            const newMessages: Record<string, string> ={}
            // 購入済みかのチェック

            allResults.forEach(({brand,result,state}) => {
                if (
                    state.PurchaseFilterMode === "purchased" &&
                 result.length === 0
                ) {
                    newMessages[brand] = "購入済みの商品がありません";
                }
            });
            setMessages(newMessages);
            // 結果
            setResults(
                allResults.flatMap(r => r.result ?? [])
            );
        } catch (e) {
            console.error("エラー詳細：",e);
            setError("検索中にエラーが発生しました。");
            
        } finally {
            setLoading(false);
        }
    };
      
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
                <Text style={styles.title}>カラーセレクター</Text>
            {/* ブランド共通UI */}

                <View style={styles.section}>
            {searches.map(({brand,search}) => (

                <View key={brand} style={styles.card}>
                    <BrandSectionContainer
                        brand={brand}
                        search={search}
                        
                />
                {!isAllRandomNone && messages[brand] && (
                    <Text style={{color:"red"}}>
                    {BrandSectionConfigMap[brand].title}の{messages[brand]}
                    </Text>
                )}
                </View>
                
                  ))}
               
                    </View>
                  
                {/* OKボタン */}
                <View style={styles.button}>
                <Button  
                title="OK"
                onPress={handleSubmit}
                
                disabled={isAllRandomNone}
               
                />

                    
            
             </View>
             {/* エラー表示 */}
             {error ? <Text style={styles.error}>{error}</Text> : null}
             {isAllRandomNone && <Text style={styles.error}>少なくとも1つのブランドで件数を指定してください</Text>}
            
                 {/* 表示 */}
             <View>
                {results.map((item, index) => {
                    const config = BrandConfigMap[item.brand];
                    return (
                        <Text key={index} style={styles.result}>
                            {config.formatColorDisplay(item)}
                        </Text>
                    );
                })}
             </View>
       </View>

        </ScrollView>
    );
}
        