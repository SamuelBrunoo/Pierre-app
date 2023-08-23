import React from 'react'
import { icons } from '../../utils/imports'
import { Text, View } from 'react-native'


type ScreenType = 'home' | 'reports' | 'schedule' | 'talks'

const TabBarItem = (screen: ScreenType, focused: boolean) => {

  const Icon = () => {
    switch (screen) {
      case 'home':
        return <icons.HomeIcon />
      case 'reports':
        return <icons.ReportsIcon />
      case 'schedule':
        return <icons.ScheduleIcon />
      case 'talks':
        return <icons.TalksIcon />
      default:
        return <icons.HomeIcon />
    }
  }


  return (
    <View style={{
      backgroundColor: focused ?
        'rgba(35, 35, 35, 1)' :
        'rgba(35, 35, 35, 0)',
      width: 44,
      height: 44,
      borderRadius: 44,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: focused ? 1 : .5
    }}>
      <Icon />
    </View>
  )

}


export default TabBarItem