import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { styles, inputStyles } from '../utilities/styles';
import { Input } from '../utilities/interfaces/input';
import { REACT_COLOR } from '../utilities/colors';

import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

const Handle: React.FC<{}> = () => {

    const [inputName, setInputName] = useState<Input>({ valid: false, value: "", error: null });
    const [inputPassword, setInputPassword] = useState<Input>({ valid: false, value: "", error: null });
    const [dislabedSubmit, setDislabedSubmit] = useState<boolean>(true);

    useEffect(() => {
        setDislabedSubmit(inputName.valid == false || inputPassword.valid == false);
    }, [inputName, inputPassword])

    const handleChange = async (value: any, callback: Function, setter: Dispatch<SetStateAction<Input>>) => {
        let [valid, error] = callback(value);
        setter({ valid: valid, value: value, error: error });
    }

    const validateEmpty = (value: string) => {
        return (value.length > 0) ? [true, null] : [false, "El texto no debe estar vacío"]
    }

    const validateError = (input: Input): boolean => !input.valid && input.error != null;

    const handleSubmit = () => {
        console.log({
            name: inputName.value,
            password: inputPassword.value
        });
    }

    return (
        <View>
            <Text style={styles.subtitle}>Manejo de formularios</Text>

            <Text style={styles.label}>Nombre completo</Text>
            <TextInput
                style={validateError(inputName) ? st.badInput : { ...inputStyles.inputTypes, color: (colorScheme == "dark") ? "white" : "black" }}
                placeholder="Ingrese su nombre completo"
                value={inputName.value}
                onChangeText={(value) => handleChange(value, validateEmpty, setInputName)}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={validateError(inputPassword) ? st.badInput : { ...inputStyles.inputTypes, color: (colorScheme == "dark") ? "white" : "black" }}
                placeholder="Ingrese aquí su contraseña"
                value={inputPassword.value}
                onChangeText={(value) => handleChange(value, validateEmpty, setInputPassword)}
                secureTextEntry={true}
            />

            <Pressable
                onPress={handleSubmit}
                style={dislabedSubmit ? st.btnDislabed : st.btnEnlabed}
                disabled={dislabedSubmit}
            >
                <Text style={{ color: "white", width: "100%", textAlign: 'center', fontSize: 16 }}>Enviar</Text>
            </Pressable>
        </View>
    )
}


const st = StyleSheet.create({
    badInput: {
        ...styles.input,
        borderColor: "red",
        color: "red"
    },
    btnDislabed: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flex: 1,
        color: "white",
        borderRadius: 16,
        marginVertical: 8,
        justifyContent: 'center',
        backgroundColor: "gray",

    },

    btnEnlabed: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flex: 1,
        color: "white",
        borderRadius: 16,
        marginVertical: 8,
        justifyContent: 'center',
        backgroundColor: REACT_COLOR,

    }
})

export default Handle;