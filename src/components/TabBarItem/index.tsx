import React from 'react'
import { icons } from '../../utils/imports'


type ScreenType = 'home' | 'reports' | 'schedule' | 'talks'

const TabBarItem = (screen: ScreenType) => {

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

  return <Icon />

}


export default TabBarItem