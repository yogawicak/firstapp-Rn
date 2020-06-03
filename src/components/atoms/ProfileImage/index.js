import React from 'react'
import { View, Text, Image } from 'react-native'

const ProfileImage = (props) => {
    return (
        <View>
           <Image style={{height:60,width:60,borderRadius:30,alignSelf:props.alignSelf,marginTop:props.marginTop}}/>
        </View>
    )
}

export default ProfileImage
