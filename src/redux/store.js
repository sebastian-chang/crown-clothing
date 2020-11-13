import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import { fetchCollectionsStart } from './shop/shop-sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

// Sets logger for development but not live production site
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

// Creating persisting storage
const persistor = persistStore(store)

export { store, persistor }
