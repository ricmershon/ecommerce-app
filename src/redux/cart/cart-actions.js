/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/cart/cart-actions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux actions for cart object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { CartActionTypes } from './cart-types'

/*
 * Cart actions configuration
 */

/* Toggle the cart dropdown */

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

/* Add an item to the cart */

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})