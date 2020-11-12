/*
 * PROJECT: ecommerce-app client
 * MODULE: redux/user/user-actions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux action for user object.
 */

export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})