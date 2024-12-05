import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/color";


const defaultScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.white,
        padding: 3
    }
})


export { defaultScreenStyles }