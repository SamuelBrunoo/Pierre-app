import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/Login'
import MainNavigator from '../Main'
import useStore from '../../store'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {

  const { logged } = useStore(store => store.user)

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      initialRouteName={logged ? 'Main' : 'Login'}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  )

}


export default AppNavigator