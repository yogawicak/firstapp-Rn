import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeIconNavbar from '../../../components/atoms/HomeIconNavbar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../../pages/Home'



const Tab = createMaterialBottomTabNavigator()

const Navbar = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#e91e63"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Feed"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Home}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Home}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>      
    )
}

export default Navbar