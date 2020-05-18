import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BikingIcon from '../../../assets/logo/svg/Biking'
import { Button } from 'react-native';


const WelcomeScreen = ({navigation}) => {
    // const HandleNavigate = () => {
    //     navigation.navigate('')
    // }
    return(
            <View style={style.container}>
                <BikingIcon width={320} height={225} style={{textAlign:'center'}}/>
                <Text style={style.text}>Explore Your Hobbies</Text>
                <Text style={{textAlign:'center',fontSize:14,marginBottom:30}}>You can explore your bike training with other people by joining some event</Text>
                <Button style={{}} title="Register" onPress={() => navigation.navigate('Register')} />
                <Button style={{marginTop:30}} title="Login" onPress={() => navigation.navigate('Login')}/>
            </View>
    )}

const style = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.07)',
        flex:1,
        // flexDirection:"row",
        justifyContent:"center",
        textAlign:"center",
        alignItems:'center',
        paddingHorizontal:90
    },
    text:{
        paddingTop:20,
        fontSize:22
    }
})

export default WelcomeScreen;
