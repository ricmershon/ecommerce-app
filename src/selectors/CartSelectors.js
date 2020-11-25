/*
 * PROJECT: ecommerce-app client
 * MODULE: src/selectors/CartSelectors.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux selectors for cart object.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { createSelector } from 'reselect';

/*
 * Configure cart selectors
 */

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumQuantity, cartItem) => accumQuantity + cartItem.quantity, 0
    )
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumPrice, cartItem) => accumPrice + (cartItem.quantity * cartItem.price), 0
    )
)