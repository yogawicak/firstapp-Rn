import React, { Component } from 'react'
import {Text} from 'react-native'
import { createStackNavigator, HeaderTitle, } from '@react-navigation/stack'
import {WelcomeScreen,Login,Register,Profile, Home} from '../../containers/pages/'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Auth = createStackNavigator()
const Tab = createBottomTabNavigator()
const RootStack = createStackNavigator()

const navOptionHandler = () => ({
    headerShown:false
})

const AuthStack = () => {
    return(
        <Auth.Navigator initialRouteName="Login" headerMode={"none"}>
            <Auth.Screen name="Welcome Screen" component={WelcomeScreen}/>
            <Auth.Screen name="Login" component={Login}/>
            <Auth.Screen name="Register" component={Register}/>
        </Auth.Navigator>
    )
}

const HomeStack = () => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
    </Tab.Navigator>
    )
}

export default class Router extends Component {
    render(){
        return(                 
                <RootStack.Navigator headerMode={"none"} initialRouteName="Home Stack">
                    <RootStack.Screen name="Auth Stack" component={AuthStack}/>
                    <RootStack.Screen name="Home Stack" component={HomeStack}/>
                </RootStack.Navigator>
        )
    }
}