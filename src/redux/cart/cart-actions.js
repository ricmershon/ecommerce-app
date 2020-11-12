/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/cart/cart-actions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux action for cart object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { CartActionTypes } from './cart-types'

/*
 * setCurrentCart action configuration
 */

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})