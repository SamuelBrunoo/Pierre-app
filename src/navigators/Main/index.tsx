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
      },
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name='Home' component={HomePage} options={{
        tabBarIcon: ({ focused }) => TabBarItem('home', focused),
      }} />
      <Tab.Screen name='Talks' component={HomePage} options={{
        tabBarIcon: ({ focused }) => TabBarItem('talks', focused),
      }} />
      <Tab.Screen name='Reports' component={HomePage} options={{
        tabBarIcon: ({ focused }) => TabBarItem('reports', focused),
      }} />
      <Tab.Screen name='Schedule' component={HomePage} options={{
        tabBarIcon: ({ focused }) => TabBarItem('schedule', focused),
      }} />
    </Tab.Navigator>
  )

}


export default MainNavigator