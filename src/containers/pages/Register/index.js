import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert} from 'react-native'
import {SignupTop,GoogleLogo,InstagramLogo} from '../../../assets/logo/svg'
import Spinner from 'react-native-loading-spinner-overlay'


const Register = () => {
    const [form, setForm] = useState({
        username:'',
        password:'',
        email:'',
        fullname:'',
    })

    // const [spinner,setSpinner] = useState(false)
    const [isLoading,SetisLoading] = useState(false)
    const [result,setResult] = useState({})

    const sendData = async () => {
        SetisLoading(true)
        let response = await fetch('https://basic-auth-express.herokuapp.com/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        response = await response.json()
        SetisLoading(false)
        return Alert.alert(response.message)
    }

    console.log(isLoading)

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value
        })
        console.log(form)
    }
    return(
        <View style={style.container}>
            <SignupTop width="100%" height="35%"></SignupTop>
            <Spinner visible={isLoading} textContent={'Loading...'} cancelable={true} />
            <View style={{marginHorizontal:32}}>
            <View style={style.inputBox}>
                <Text style={style.signUpText}>Sign Up</Text>
                <TextInput style={style.textInput} placeholder="Username" onChangeText={(value) => onInputChange(value, 'username')}></TextInput>
                <TextInput style={style.textInput} placeholder="Full Name" onChangeText={(value) => onInputChange(value, 'fullname')}></TextInput>
                <TextInput style={style.textInput} placeholder="Email" onChangeText={(value) => onInputChange(value, 'email')}></TextInput>
                <TextInput style={style.textInput} placeholder="Password" onChangeText={(value) => onInputChange(value, 'password')}></TextInput>
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
                <Button title='Sign up' style={style.button} onPress={sendData}></Button>
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
        marginTop:"-10%",
        // opacity:0.4,
        // backgroundColor:'red'
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