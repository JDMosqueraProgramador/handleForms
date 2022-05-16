import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik'
import { styles } from '../utilities/styles'
import { REACT_COLOR } from '../utilities/colors'


const formikSchema = Yup.object().shape({
    name: Yup.string().required("Debe completar este campo"),
    email: Yup.string().email("Debe ingresar un email correcto").required("Debe completar este campo"),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'La contraseña debe contener mínimo una letra minúscula')
        .matches(/\w*[A-Z]\w*/, 'La contraseña debe contener mínimo una letra mayúscula')
        .matches(/\d/, 'La contraseña debe contener un número')
        .min(8, ({ min }) => `la contraseña cobtener más de ${min} caracteres`)
        .required('Debe completar este campo')
        .label('password')
})

const FormikLibrary: React.FC<{}> = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={formikSchema}
            onSubmit={values => console.log(values)}
        >

            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, dirty }) => (
                <View>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        placeholder='Ingrese su nombre completo'
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        style={st.input}
                    />
                    {errors.name && touched.name && (
                        <Text style={{ color: 'red' }}>{errors.name}</Text>
                    )}

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Ingrese su correo'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={st.input}
                        keyboardType='email-address'
                    />
                    {errors.email && touched.email && (
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                    )}

                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder='Ingrese su contraseña'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={st.input}
                        secureTextEntry={true}
                        
                    />
                    {errors.password && touched.password && (
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                    )}

                    <Pressable onPress={handleSubmit} style={(isValid && dirty) ? st.btnEnlabed : st.btnDislabed} disabled={!isValid}>
                        <Text style={{ color: "white", textAlign: 'center' }}>Enviar</Text>
                    </Pressable>
                </View>
            )}

        </Formik>
    )
}

export default FormikLibrary

const st = StyleSheet.create({
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

    },

    input: {
        ...styles.input,
        borderColor: REACT_COLOR
    }
})