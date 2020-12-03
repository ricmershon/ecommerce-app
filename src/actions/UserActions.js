/*
 * PROJECT: ecommerce-app client
 * MODULE: src/actions/UserActions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux action for user object.
 */

let keyMirror = require("keymirror");

export const USER_ACTIONS = keyMirror({
    SET_CURRENT_USER: null
})

/* Set the current user */

export const setCurrentUser = (user) => ({
    type: USER_ACTIONS.SET_CURRENT_USER,
    payload: user
})