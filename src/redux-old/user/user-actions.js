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
 * User actions configuration
 */

/* Set the current user */

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})