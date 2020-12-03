/*
 * PROJECT: ecommerce-app client
 * MODULE: src/actions/CartActions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux actions for cart object.
 */

let keyMirror = require("keymirror");

export const CART_ACTIONS = keyMirror({
    TOGGLE_CART_HIDDEN: null,
    ADD_CART_ITEM: null,
    REMOVE_CART_ITEM: null,
    REMOVE_ALL_CART_ITEM: null
})

/* Toggle cart hidden */

export const toggleCartHidden = () => ({
    type: CART_ACTIONS.TOGGLE_CART_HIDDEN
})

/* Add an item to the cart */

export const addItem = (item) => ({
    type: CART_ACTIONS.ADD_CART_ITEM,
    payload: item
})

/* Remove and item from the cart */

export  const removeItem = (item) => ({
    type: CART_ACTIONS.REMOVE_CART_ITEM,
    payload: item   
})

/* Remove all instances of an item from the cart */

export const removeAllItem = (item) => ({
    type: CART_ACTIONS.REMOVE_ALL_CART_ITEM,
    payload: item
})