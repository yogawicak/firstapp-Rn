import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {Home,WelcomeScreen,Login,Register} from '../../containers/pages/'
import Navbar from '../../containers/organism/Navbar'

const Stack = createStackNavigator()

const Router = () => {
    const nonHeader = {
        headerShown:false
    }
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={Home}></Stack.Screen> */}
            <Stack.Screen 
                name="WelcomeScreen" 
                component={WelcomeScreen}
                options={nonHeader}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Home"
                component={Home}
                options={nonHeader}
            ></Stack.Screen>
            <Stack.Screen
                name="Login"
                component={Login}
                options={nonHeader}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Register"
                component={Register}
                options={nonHeader}
            >    
            </Stack.Screen>
        </Stack.Navigator>
    )
} 

export default Router