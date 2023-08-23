import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarItem from '../../components/TabBarItem'

import HomePage from '../../screens/Home'


const MainNavigator = () => {

  const Tab = createBottomTabNavigator()


  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: "#3A3A3A",
        borderTopWidth: 0,
        height: 60
      }
    }}>
      <Tab.Screen name='Home' component={HomePage} options={{
        headerShown: false,
        tabBarIcon: () => TabBarItem('home'),   // boolean as 2nd param to show (in)active item style
        tabBarShowLabel: false,
      }} />
    </Tab.Navigator>
  )

}


export default MainNavigator