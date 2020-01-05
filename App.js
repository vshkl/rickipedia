import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { MainNavigator } from './src/navigation'

const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  )
}

export default App
