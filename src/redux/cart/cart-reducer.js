/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/cart/cart-reducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for cart object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { CartActionTypes } from './cart-types'

/*
 * cartReducer configuration
 */

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        }
        default:
            return state;
        
    }
}

export default cartReducer;