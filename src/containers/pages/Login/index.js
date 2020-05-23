import React, {useState} from 'react';
import {View,Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert} from 'react-native'
import { Cycling_Login } from '../../../assets/logo/svg';
import GoogleLogo from '../../../assets/logo/svg/google-logo'
import InstagramLogo from '../../../assets/logo/svg/instagram-logo'
// import Bike from '../../../assets/logo/svg/Cycling'

const Login = ({navigation}) => {
    const [form, setForm] = useState({
        username:'',
        password:''        
    })
    const [result, setResult] = useState({})

    const sendData = async () => {
        console.log('Data yang dikirim',form)
        let response = await fetch('https://basic-auth-express.herokuapp.com/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        response = await response.json()
        setResult(response)
        console.log(result)
        const status = () => {
            if (response.status === 'fail') {
                console.log('faillll')
            }else{
                navigation.replace('Home')
            }
        }
        
        return Alert.alert('Status',response.message,
        [
          { text: 'OK', onPress: status() }
        ],
        { cancelable: false })
    }

    const onInputChange = (value, input) => {
        console.log(value)
        setForm({
            ...form,
            [input]: value
        })
    }
    return(
        <View style={style.container}>
            {/* <Button title='hello' onPress={() => Alert.alert()}/> */}
            <View style={style.loginWrapper}>
                <Text style={style.text}>Login</Text>
                <TextInput style={style.textInput} value={form.username} onChangeText={(value) => { onInputChange(value, 'username') }}/>
                <TextInput style={style.textInput} placeholder="Password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true}/>
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