import { Text, View, Image } from 'react-native'
import React from 'react'

import { styles } from '../utilities/styles'

const Header: React.FC<{}> = () => {
    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png' }} />
            {/* <Image style={styles.logo}  source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} /> */}
            <Text style={styles.title}>Exposición formularios</Text>
        </View>

    )
}

export default Header
