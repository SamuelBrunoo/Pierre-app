import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/Login'
import MainNavigator from '../Main'
import { useMMKVObject } from 'react-native-mmkv'
import { UserInfo } from '../../utils/types/user'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {

  const [localUser] = useMMKVObject<UserInfo>('user')

  const logged = localUser?.logged ?? false

  
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