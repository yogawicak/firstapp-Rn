import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeIconNavbar from '../../../components/atoms/HomeIconNavbar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../../pages/Home'
import EmptyReport from '../../../components/molecules/EmptyReport'
import JurnalIcon from '../../../assets/logo/svg/JournalIcon'
import Topbar from '../../../components/molecules/TopBar'
import Profile from '../../pages/Profile'
// import HamburgerIcon from '../../../assets/logo/svg/HamburgerIcon'




const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          // activeColor="#FFFFFF"
          tabBarOptions={{style:{backgroundColor:'#F7482E',height:56},activeTintColor:'#FFFFFF'}}
          // barStyle={{ backgroundColor: '#F7482E', justifyContent:'space-between' }}
        >
          <Tab.Screen
            name="Feed"
            component={EmptyReport}
            options={{
              tabBarLabel: 'Jurnal',
              tabBarIcon: ({ color }) => (
                <JurnalIcon width={24} height={24} size={50} color={'red'} />
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
            component={Profile}
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