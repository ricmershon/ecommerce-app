/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/user/user-actions.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux action for user object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { UserActionTypes } from './user-types'

/*
 * setCurrentUser action configuration
 */

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})