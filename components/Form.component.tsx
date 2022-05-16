import { View, Text, TextInput } from 'react-native'
import React from 'react'
import InputsTypes from './InputsTypes.component'
import { inputStyles, styles } from '../utilities/styles'
import Community from './Community.component'
import Handle from './Handle.component'

const Form: React.FC<{}> = () => {
    return (
        <View>
            {/*//! ---------------------------START INPUTS TYPES---------------------------  */}

            <InputsTypes />

            {/*//! ---------------------------END INPUTS TYPES---------------------------  */}

            <Text style={styles.subtitle}>Tipos de teclado</Text>

            <Text style={styles.label}>Texto</Text>
            <TextInput
                style={inputStyles.inputKeyboard}
                placeholder="Cambia el tipo de teclado"
                keyboardType="visible-password"
            />

            {/*//! ---------------------------START COMMUNITY INPUTS---------------------------  */}

            <Community />

            {/*//! ---------------------------END COMMUNITY INPUTS---------------------------  */}

            <Handle />
        </View>
    )
}

export default Form