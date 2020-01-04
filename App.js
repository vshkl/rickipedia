import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider } from 'react-native-paper'

import CartScreen from './src/screens/CartScreeen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <PaperProvider>
      <NavigationNativeContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    </PaperProvider>
  )
}

export default App
