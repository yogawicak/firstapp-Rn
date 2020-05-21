import React, {useState} from 'react';
import {View,Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import { Cycling_Login } from '../../../assets/logo/svg';
import GoogleLogo from '../../../assets/logo/svg/google-logo'
import InstagramLogo from '../../../assets/logo/svg/instagram-logo'
// import Bike from '../../../assets/logo/svg/Cycling'

const Login = () => {
    const [form, setForm] = useState({
        username:'',
        password:''        
    })

    const sendData = () => {
        console.log('Data yang dikirim',form)
    }

    const onInputChange = (value) => {
        console.log(value)
        setForm({
            ...form,
            username: value
        })
    }
    return(
        <View style={style.container}>
            <View style={style.loginWrapper}>
                <Text style={style.text}>Login</Text>
                <TextInput style={style.textInput} value={form.username} onChangeText={(value) => onInputChange(value) }/>
                <TextInput style={style.textInput} placeholder="Password" value={form.password}/>
                <Text style={style.forgotPassText}>Forgot Password?</Text>
            </View>
            <Button title="Sign In" onPress={sendData}/>
            <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:20}}>Or login with</Text>
            <View style={{justifyContent:'center',flexDirection:'row',marginTop:10}}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <GoogleLogo width={40} height={40}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <InstagramLogo width={40} height={40}/>
                </TouchableOpacity>
            </View>
            {/* <Text>ini halaman login</Text> */}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:30,
        backgroundColor:'rgba(0,0,0,0.07)',
    },
    loginWrapper:{
        paddingHorizontal:16,
        borderColor:'red',
        backgroundColor:'white',
        borderRadius:10,
        paddingTop:16,
        paddingBottom:20,
        marginBottom:20,
        elevation:9
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        paddingBottom:20
    },
    textInput:{
        borderColor:'green',
        borderBottomColor:'#7272FF',
        borderStyle:'solid',
        borderBottomWidth:2
    },
    forgotPassText:{
        // marginTop:10,
        paddingTop:10,
        fontWeight:'bold',
        fontSize:12,
        color:'#7272FF'
    }
})

export default Login