/*
 * PROJECT: ecommerce-app client
 * MODULE: redux/user/user-actions.js
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
 * USER ACTION CONFIGURATION
 */

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})