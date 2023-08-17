import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
        headerShown: false
      }} />
    </Tab.Navigator>
  )

}


export default MainNavigator