/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/user/user-reducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for user object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { UserActionTypes } from './user-types'

/*
 * userReducer configuration
 */

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;

    }
}

export default userReducer;