import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import {SignupTop,GoogleLogo,InstagramLogo} from '../../../assets/logo/svg'



const Register = () => {
    return(
        <View style={style.container}>
            <SignupTop width="420" height="190"></SignupTop>
            <View style={{marginHorizontal:32}}>
            <View style={style.inputBox}>
                <Text style={style.signUpText}>Sign Up</Text>
                <TextInput style={style.textInput} placeholder="Username"></TextInput>
                <TextInput style={style.textInput} placeholder="Full Name"></TextInput>
                <TextInput style={style.textInput} placeholder="Email" ></TextInput>
                <TextInput style={style.textInput} placeholder="Password"></TextInput>
            </View>
                <Text style={{textAlign:"center",paddingBottom:10}}>Or Continue with</Text>
            <View style={{flexDirection:"row",justifyContent:"center",paddingBottom:10}}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <GoogleLogo width={40} height={40}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <InstagramLogo width={40} height={40}/>
                </TouchableOpacity>
            </View>
                <Button title='Sign up' style={style.button}></Button>
            </View>
        </View>
        // <Image source={require('../../../assets/icon/signup-top.png')} />
    )
}

const style = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent:"center",
        // marginHorizontal:20
    },
    inputBox:{
        // alignItems:"center"
        marginHorizontal:20,
        paddingBottom:10
    },
    signUpText:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:14
    },
    text:{
        fontSize:10
    },
    textInput:{
        borderColor:'green',
        borderBottomColor:'#7272FF',
        borderStyle:'solid',
        borderBottomWidth:2
    },
    button:{
        borderRadius:10,
    }    
})

export default Register