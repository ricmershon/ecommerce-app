/*
 * PROJECT: ecommerce-app client
 * MODULE: src/reducers/index.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux root reducer
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

/* use local storage in browser as default storage */ 

import storage from 'redux-persist/lib/storage';

/*
 * INTERNAL DEPENDENCIES
 */

import userReducer from './UserReducer';
import cartReducer from './CartReducer';

/*
 * Redux rootReducer configuration.
 */

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);