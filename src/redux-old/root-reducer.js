/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/root-reducer.js
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
 * Redux rootReducer configuration.
 */

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})