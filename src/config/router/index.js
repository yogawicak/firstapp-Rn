import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../containers/pages/Home'

const Stack = createStackNavigator()

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
                <Stack.Screen name="Home" component={Home}/ >
            </Stack.Navigator>
        </NavigationContainer>
    )
} 

export default Router