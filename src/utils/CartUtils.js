/*
 * PROJECT: ecommerce-app client
 * MODULE: src/utils/CartUtils.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux utilities for cart object.
 */

/*
 * addItemToCard() receives the existing cart object (cartItems) and an item
 * to add to the cart (cartItemToAdd). If cartItems already contains 1 or more
 * of cartItemToAdd it increments the quantity of that cart item. Otherwise,
 * it's added to the cart object.
 */

export const addItemToCart = (cartItems, cartItemToAdd) => {

    /*
     * Find the cartItemToAdd in cartItems.
     */

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    )

    /*
     * If the cart item exists return a new cart object with the quantity of
     * only that item incremented.
     */

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    /*
     * Otherwise return new cart object with the new cart item added to it.
     */

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

/*
 * removeItemFromCart() receives the existing cart object (cartItems) and an
 * item to remove from the cart (cartItemToRemove). If cartItems contains 
 * only 1 of cartItemToRemove then it is removed from the cart object.
 * Otherwise, its quantity is decremented.
 */

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    /*
     * Find the cartItemToRemove in cartItems.
     */

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    /*
     * If there is only one of the item in the cart then return a new cart
     * with the cart item removed.
     */

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    /*
     * Otherwise return a new cart object with the quantity of the cart item
     * reduced.
     */

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}