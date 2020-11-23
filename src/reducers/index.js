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

/*
 * INTERNAL DEPENDENCIES
 */

import userReducer from './UserReducer';
import cartReducer from './CartReducer';

/*
 * Redux rootReducer configuration.
 */

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default rootReducer;