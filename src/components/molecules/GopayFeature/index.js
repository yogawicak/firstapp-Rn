import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const GopayFeature = (props) => {
    return(
        <View>
            <Image source={props.Image}/>
        <Text style={styles.container}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
    }
})

export default GopayFeature;