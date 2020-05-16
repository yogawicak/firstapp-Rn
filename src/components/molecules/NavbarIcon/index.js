import React from 'react'
import {View, Text, Image} from 'react-native'

const NavbarIcon = (props) => {
    return(
        <View>
            <Image source={props.img}/>
        </View>
    )
}