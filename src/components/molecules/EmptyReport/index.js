import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BookNote from '../../../assets/logo/svg/book-pencil-note'


const EmptyReport = () => {
    return(
        <View style={styles.container}>
            <View style={{marginBottom:20,justifyContent:'center',flexDirection:'row'}}> 
            <BookNote style={{justifyContent:'center'}} width={175} height={137}/>
            </View>
            <Text style={[styles.title, styles.bigText]}>Tetap Catat Jurnal Harianmu</Text>
            <Text style={[styles.title, styles.smallText]}>Belum ada laporan yang terkumpul</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        textAlign: "center",
        justifyContent: 'center',
        // marginLeft:'20%',
        // borderRadius:10,
        // borderColor:'red',
        // borderStyle:'solid',
        // borderWidth:1
    },
    title:{
        textAlign:"center",
    },
    bigText:{
        fontFamily: "Roboto",
        fontSize: 22
    },
    smallText:{
        fontFamily: "Roboto",
        fontSize:16
    }
})

export default EmptyReport