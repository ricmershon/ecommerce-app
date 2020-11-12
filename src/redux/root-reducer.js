/*
 * PROJECT: ecommerce-app client
 * MODULE: redux/root-reducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux root reducer
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { combineReducers } from 'redux';

/*
 * INTERNAL DEPENDENCIES
 */

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

/*
 * Redux rootReducer configuration. combineReducers() returns the rootReducer()
 * method containing the combined reducers.
 */

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})