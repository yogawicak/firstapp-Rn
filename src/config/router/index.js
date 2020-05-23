import React from 'react'
import { createStackNavigator, HeaderTitle, } from '@react-navigation/stack'
import {Home,WelcomeScreen,Login,Register,Profile} from '../../containers/pages/'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Auth = createStackNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const LoginStackScreen = () => {
    <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={Login}/>
    </LoginStack.Navigator>
}

const HomeStackScreen = () => {
    return(
    // <Stack.Navigator initialRouteName="Home">
    //     <Stack.screen name="Home" component={Home} />
    // </Stack.Navigator>
    <Tab.Navigator independent={true}>
        <Tab.screen name="Home" component={Home} />
    </Tab.Navigator>
    )
}

const ProfileStackScreen = () => {
    return(
        // <ProfileStack.Navigator>
            <ProfileStack.screen name="Home" component={Profile} />
        // </ProfileStack.Navigator>
        )
}

// const Home = () => {
//     return(
//         <Vi
//     )
// }

const Router = () => {
    const nonHeader = {
        headerShown:false
    }
    return(        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeStackScreen}/>
                {/* <Tab.Screen name="Profile" component={ProfileStackScreen}/> */}
            </Stack.Navigator>
        // <Auth.Navigator>
        //     <Auth.Screen name="WelcomeScreen" component={WelcomeScreen} options={nonHeader} />
        //     <Auth.Screen name="Login" component={Login} options={nonHeader} />
        //     <Auth.Screen name="Register" component={Register} options={nonHeader} /> 
        // </Auth.Navigator>
    )
} 

export default Router