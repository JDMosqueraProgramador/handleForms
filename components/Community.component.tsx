import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../utilities/styles'

import Checkbox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { REACT_COLOR } from '../utilities/colors';

const Community: React.FC = () => {

    const [toggleCheckbox, setToggleCheckbox] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<String>();

    const [date, setDate] = useState(new Date(22, 1));

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };



    return (
        <View>
            <Text style={styles.subtitle}>Campos instalados</Text>

            {/*//? npm i @react-native-community/checkbox */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                <Checkbox
                    disabled={false}
                    value={toggleCheckbox}
                    onValueChange={(value: boolean) => { setToggleCheckbox(value) }}
                />
                <Text style={styles.label}>Checkbox </Text>

                <Checkbox
                    disabled={false}
                    value={toggleCheckbox}
                    onValueChange={(value: boolean) => { setToggleCheckbox(value) }}
                />
                <Text style={styles.label}>Checkbox </Text>
            </View>

            {/*//? npm install @react-native-picker/picker --save */}
            <Text style={styles.label}>Picker - Select</Text>

            <Picker
                style={st.picker}
                selectedValue={selectedLanguage}
                onValueChange={(value, index) => setSelectedLanguage(value)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="React" value="jsx" />
                <Picker.Item label="Ionic" value="ionic" />
            </Picker>

            {/*//? npm install @react-native-community/datetimepicker --save */}
            <Text style={styles.label}>Entrada de fecha</Text>
            
            <Text style={{marginVertical: 8, fontSize: 16 }}>Fecha seleccionada: {date.toDateString()}, hora: {date.toTimeString()}</Text>
            <View style={{ flexDirection: "row"}}>

                <Pressable style={{...st.pressable, marginRight: 4}} onPress={showDatepicker}>
                    <Text style={st.pressableText}>Calendario de meses</Text>
                </Pressable>
                <Pressable style={{...st.pressable, marginLeft: 4}} onPress={showTimepicker}>
                    <Text style={st.pressableText}>Calendario de horas</Text>
                </Pressable>
            </View>

        </View>
    )
}

const st = StyleSheet.create({
    picker: {
        marginVertical: 8,
        borderRadius: 16,
        backgroundColor: "",

    },

    pressable: {
        padding: 16,
        flex: 1,
        backgroundColor: REACT_COLOR,
        color: "white",
        borderRadius: 16,
        marginVertical: 8,
        justifyContent: 'center'
    },

    pressableText: {
        color: "white",
        width: "100%",
        textAlign: 'center'
    }
})

export default Community

