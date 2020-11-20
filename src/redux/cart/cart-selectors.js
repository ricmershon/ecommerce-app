/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/cart/cart-selectors.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux selectors for cart object.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumQuantity, cartItem) => accumQuantity + cartItem.quantity, 0
    )
)