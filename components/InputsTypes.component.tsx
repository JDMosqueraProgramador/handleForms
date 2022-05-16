import { Text, View, TextInput, Switch } from 'react-native'
import React, { FC, useState } from 'react'

import { styles, inputStyles } from "../utilities/styles";

const InputsTypes: FC<{}> = () => {

    const [isEnabledSwitch, setIsEnabledSwitch] = useState<boolean>(false);

    return (
        <View>
            <Text style={styles.subtitle}>Tipos de campos</Text>

            <Text style={styles.label}>Texto</Text>
            <TextInput
                style={inputStyles.inputTypes}
                placeholder="Ingrese texto aquí"
            />

            <Text style={styles.label}>Números</Text>
            <TextInput
                style={inputStyles.inputTypes}
                placeholder="Agregue un número aquí"
                keyboardType="decimal-pad"
            />

            <Text style={styles.label}>Contraseñas</Text>
            <TextInput
                style={inputStyles.inputTypes}
                placeholder="Ingrese la contraseña aquí"
                secureTextEntry={true}
            />

            <Text style={styles.label}>Múltiples lineas</Text>
            <TextInput
                style={{ ...inputStyles.inputTypes, height: "auto" }}
                placeholder="Un texto largo aquí"
                multiline={true}
                numberOfLines={4}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.label}>Switch:</Text>
                <Switch
                    value={isEnabledSwitch}
                    onValueChange={() => setIsEnabledSwitch(!isEnabledSwitch)}
                    style={{ marginHorizontal: 8 }}
                />
            </View>

        </View>
    )
}

export default InputsTypes
