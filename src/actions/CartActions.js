/*
 * PROJECT: ecommerce-app client
 * MODULE: src/actions/CartActions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux actions for cart object.
 */

export const CartActionTypes = {
    TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
    ADD_ITEM: 'ADD_ITEM'
}

/* Toggle cart hidden */

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

/* Add an item to the cart */

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})