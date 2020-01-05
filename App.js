import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { prepareStore } from './src/config/store'
import { MainNavigator } from './src/navigation'

const App = () => {
  const { store, persistor } = prepareStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App
