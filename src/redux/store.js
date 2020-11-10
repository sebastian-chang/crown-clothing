import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middlewares = []

// Sets logger for development but not live production site
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

// Creating persisting storage
const persistor = persistStore(store)

export { store, persistor }
