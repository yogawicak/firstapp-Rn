import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Search_icon from '../../../assets/logo/svg/search-icon'
import HamburgerIcon from '../../../assets/logo/svg/HamburgerIcon'

const Topbar = () => {
    return(
        // <View style={{elevation:4}}>
        <View style={style.containerBox}>
            <View>
                <HamburgerIcon width={20} height={40} />
            </View>
            <Text style={style.text}>EJournal</Text>
            <View>                
                <Search_icon width={20} height={30} onPress={() => alert('pencett')}/>
            </View>
        </View>
        // </View>
    )
}

const style = StyleSheet.create({
    containerBox:{
        marginHorizontal:40,
        justifyContent:'space-between',
        marginTop:30,
        height:49,
        paddingHorizontal:10,
        flexDirection:'row',
        // justifyContent:"center",
        borderRadius:8,
        borderColor:'rgba(0,0,0,0.2)',
        // opacity:1,
        borderWidth:1,
        textAlign:"center",
        // elevation: 10
    },
    text:{
        fontFamily: 'Poppins',
        fontSize:16,
        color:'#F7482E',
        paddingTop:10,
        // justifyContent:"center",
        // textAlign:'center',
        fontWeight:'bold'
    }
})

export default Topbar