/*
 * PROJECT: ecommerce-app client
 * MODULE: src/actions/UserActions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux action for user object.
 */

export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

/* Set the current user */

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})