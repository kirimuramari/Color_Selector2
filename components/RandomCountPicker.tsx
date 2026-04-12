import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { styles } from "style/style";

type Props = {
    value: number | null;
    onChange: (value:number | null) => void;
};

export const RandomCountPicker = ({value, onChange}:Props) => {
    return (
        <View style={styles.pickerviw}>
        <Picker
        selectedValue={value}
        onValueChange={(v) => onChange(v)}
        style={styles.picker}
        
        >
            <Picker.Item label="なし" value={null} 
            />
            {[1,2,3,4,5,6,].map(n => (
                <Picker.Item key={n} label={String(n)} value={n} />

            ))}
            </Picker>
            </View>
    );
};