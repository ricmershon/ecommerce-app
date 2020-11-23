/*
 * PROJECT: ecommerce-app client
 * MODULE: src/reducers/CartReducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for cart object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { CART_ACTIONS } from '../actions/CartActions';
import { addItemToCart } from '../utils/CartUtils'

/*
 * cartReducer configuration
 */

const INITIAL_CART_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_CART_STATE, action) => {
    switch (action.type) {
        case CART_ACTIONS.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CART_ACTIONS.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
        
    }
}

export default cartReducer;