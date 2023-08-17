import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppNavigator from './src/navigators/App'

function App() {

  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App
