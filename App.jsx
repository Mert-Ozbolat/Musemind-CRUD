import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigatior from './src/router/rootNavigatior'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigatior />
      </NavigationContainer>
    </Provider>
  )
}

export default App
