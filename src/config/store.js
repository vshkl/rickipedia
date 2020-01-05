import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import models from 'src/models'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(models.reducers),
)

const prepareStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(models.sagas)

  return { store, persistor }
}

export {
  prepareStore,
}
