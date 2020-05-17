import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeIconNavbar from '../../../components/atoms/HomeIconNavbar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../../pages/Home'
import EmptyReport from '../../../components/molecules/EmptyReport'
import JurnalIcon from '../../../assets/logo/svg/Group-347'
import Topbar from '../../../components/molecules/TopBar'



const Tab = createMaterialBottomTabNavigator()

const Navbar = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#FFFFFF"
          barStyle={{ backgroundColor: '#F7482E', justifyContent:'space-between' }}
        >
          <Tab.Screen
            name="Feed"
            component={EmptyReport}
            options={{
              tabBarLabel: 'Jurnal',
              tabBarIcon: ({ color }) => (
                <JurnalIcon size={26} color={color} />
                // <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Topbar}
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
          <Tab.Screen
            name="tess"
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