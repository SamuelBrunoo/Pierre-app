import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/Login'
import MainNavigator from '../Main'
import useStore from '../../store'
import { getStorageData } from '../../store/mmkv'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const localUser = useStore(store => store.user)

  const [renderInfo, setRenderInfo] = useState({
    isLogged: false,
    canRender: false,
  })

  useEffect(() => {
    let logged = false

    if (localUser?.logged) logged = true
    else {
      const pData = getStorageData('user')
      if (pData.logged) logged = true
    }

    setRenderInfo({
      isLogged: logged,
      canRender: true,
    })
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        renderInfo.canRender && renderInfo.isLogged ? 'Main' : 'Login'
      }>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator
