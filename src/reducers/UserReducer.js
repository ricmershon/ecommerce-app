/*
 * PROJECT: ecommerce-app client
 * MODULE: src/reducers/UserReducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for user object.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import { UserActionTypes } from '../actions/UserActions'

/*
 * userReducer configuration
 */

const INITIAL_USER_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_USER_STATE, action) => {
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