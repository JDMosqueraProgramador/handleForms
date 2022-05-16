import { StyleSheet } from "react-native";
import { REACT_BACK, REACT_COLOR } from "./colors";
import { Appearance } from "react-native"; 

const colorScheme = Appearance.getColorScheme();

export const styles = StyleSheet.create({

    container: {
        padding: 16,
        color: "white",
        backgroundColor: REACT_BACK,

    },

    main: {
        paddingVertical: 16,
        paddingHorizontal: 24
    },

    logo: {
        width: "100%",
        height: 150,
        flex: 1,
        resizeMode: "contain",
        marginHorizontal: "auto"
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 8,
        color: REACT_COLOR
    },

    subtitle: {
        fontWeight: "bold",
        marginVertical: 8,
        fontSize: 20,
        textAlign: "right",
        color: (colorScheme == "dark") ? "white" : "black"
    },

    label: {
        fontWeight: "600",
        fontSize: 16
    },

    input: {
        borderWidth: 1.5,
        padding: 8,
        height: 40,
        marginVertical: 8,
        borderRadius: 8,

        width: "100%"
    },

});


export const inputStyles = StyleSheet.create({

    inputTypes: {
        ...styles.input,
        borderColor: REACT_COLOR,
    },

    inputKeyboard: {
        ...styles.input,
        borderColor: "gray"
    }

});
