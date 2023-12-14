import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigators/App'
import { ThemeProvider } from 'styled-components'
import theme from './src/assets/styles/themes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={theme.background.default}
        />
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
