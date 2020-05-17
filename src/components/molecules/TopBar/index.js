import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Topbar = () => {
    return(
        // <View style={{elevation:4}}>
        <View style={style.containerBox}>
            <Text style={style.text}>EJournal</Text>
        </View>
        // </View>
    )
}

const style = StyleSheet.create({
    containerBox:{
        marginHorizontal:40,
        marginTop:30,
        height:49,
        // paddingBottom:20,
        flexDirection:'row',
        justifyContent:"center",
        shadowOffset:{width:0, height:7},
        shadowColor:'#FFFFFF',
        shadowColor:'red',
        borderRadius:8,
        borderColor:'red',
        borderStyle:'solid',
        borderWidth:1,
        textAlign:"center"
        // border
    },
    text:{
        fontFamily: 'Poppins',
        fontSize:16,
        // textAlign:'center',
        fontWeight:'bold'
    }
})

export default Topbar