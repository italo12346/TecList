import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet, Text, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface Props extends TouchableOpacityProps {
    title: string;
}
export function Button({ title, ...rest }: Props) {
  
    const backgroundColorButton = title === '+' ? '#31CF67' : '#E23C44';
    const btnIcon = title === '-' ? 'remove-circle-outline' : "md-add-circle-outline";
    

    return (
        <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColorButton }]} {...rest}>
                <Ionicons name={btnIcon} size={25} color={"#ffff"} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1E6F9F",
        width: 52,
        height: 52,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }
})
