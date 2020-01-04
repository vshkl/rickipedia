import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CartScreen from './src/screens/CartScreeen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}

export default App
