/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/cart/cart-utils.js
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
 * 
 * A new cart object is returned in order fore React change detection to trigger.
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
                ? { ...cartItem, quantity: cartItem.quantity += 1 }
                : cartItem
            )
    }

    /*
     * Otherwise return new cart object with the new cart item added to it.
     */

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}