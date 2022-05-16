import React, { FC, useState } from "react";
import { View, Switch, ScrollView, StatusBar, Text } from "react-native";
import { REACT_BACK } from "./utilities/colors";
import Header from "./components/Header.component";
import { styles } from "./utilities/styles";

import FormikLibrary from "./components/FormikLibrary.component";
import Form from "./components/Form.component";
import Example from "./components/Example.component"

const App: FC<{}> = () => {

    const [showFormik, setShowFormik] = useState<boolean>(false);

    return (
        <ScrollView>

            <StatusBar animated={true} backgroundColor={REACT_BACK} />

            <Header />

            <View style={styles.main}>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8 }}>
                    <Text style={{ marginRight: 8 }}>Con formik: </Text>
                    <Switch
                        value={showFormik}
                        onValueChange={(value: boolean) => setShowFormik(value)}
                    />
                </View>

                {showFormik ? <FormikLibrary /> : <Form />}


            </View>
            
            <Example/>

        </ScrollView>

    )
}


export default App;