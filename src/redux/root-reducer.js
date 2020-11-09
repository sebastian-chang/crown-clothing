import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
// This is for local storage
import storage from 'redux-persist/lib/storage'
// This is for session storage
// import sessionStorage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'
import directoryReducer from './directory/directory-reducer'
import shopReducer from './shop/shop-reducer'

const persistConfig = {
    // Where in our reducers do we want to start storing
    key: 'root',
    // Storage as the key and the storage where were saving
    storage,
    // List the reducers we would like to store to local storage by key name
    whitelist: ['cart']
}

// Combine all reducers
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

// Modified version of our rootReducer now with persisting capabilities
export default persistReducer(persistConfig, rootReducer)
