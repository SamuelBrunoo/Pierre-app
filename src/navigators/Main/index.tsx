import React from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import mainScreensHeaderProps from './mainScreensHeaderProps'

import TabBarItem from '../../components/TabBarItem'

import HomeScreen from '../../screens/Home'
import TalksScreen from '../../screens/Talks'
import ReportsScreen from '../../screens/Reports'
import ScheduleScreen from '../../screens/Schedule'


const MainNavigator = () => {

  const Tab = createBottomTabNavigator()


  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'rgba(23, 23, 23, 1)',
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#3A3A3A",
          borderTopWidth: 0,
          height: 60
        },
        headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: false,
      }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => TabBarItem('home', focused),
      }} />
      <Tab.Screen name='Talks' component={TalksScreen} options={{
        tabBarIcon: ({ focused }) => TabBarItem('talks', focused),
        headerTitle: 'Pessoas contatadas',
        ...mainScreensHeaderProps as Partial<BottomTabNavigationOptions>
      }} />
      <Tab.Screen name='Reports' component={ReportsScreen} options={{
        tabBarIcon: ({ focused }) => TabBarItem('reports', focused),
        headerTitle: 'Relatórios',
        ...mainScreensHeaderProps as Partial<BottomTabNavigationOptions>
      }} />
      <Tab.Screen name='Schedule' component={ScheduleScreen} options={{
        tabBarIcon: ({ focused }) => TabBarItem('schedule', focused),
        headerTitle: 'Programação',
        ...mainScreensHeaderProps as Partial<BottomTabNavigationOptions>
      }} />
    </Tab.Navigator>
  )

}


export default MainNavigator