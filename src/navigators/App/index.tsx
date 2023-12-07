import React, { useEffect, useState } from 'react'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import LoginScreen from '../../screens/Login'
import MainNavigator from '../Main'
import useStore from '../../store'
import { getStorageData } from '../../store/mmkv'

export type AppRoutes = 'Login' | 'Main'

type AppNavRoutes = {
  [r in AppRoutes]: undefined
}

export type AppNavProps = NativeStackNavigationProp<AppNavRoutes>

const Stack = createNativeStackNavigator<AppNavRoutes>()

const AppNavigator = () => {
  const { user: localUser, User } = useStore(store => store)

  const [renderInfo, setRenderInfo] = useState({
    isLogged: false,
    canRender: false,
  })

  useEffect(() => {
    if (localUser?.logged) setRenderInfo({ isLogged: true, canRender: true })
    else {
      const pData = getStorageData('user')
      User.storeInfo(pData)

      if (pData.logged) setRenderInfo({ isLogged: true, canRender: true })
      else setRenderInfo({ isLogged: false, canRender: true })
    }
  }, [])

  return renderInfo.canRender ? (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={renderInfo.isLogged ? 'Main' : 'Login'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  ) : null
}

export default AppNavigator
