/*
 * PROJECT: ecommerce-app client
 * MODULE: src/reducers/DirectoryReducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for directory object. The object doesn't change
 * but putting it into the redux store to make available to other components.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import DEPARTMENTS_DATA from '../constants/DirectoryData';
/*
 * cartReducer configuration
 */

const INITIAL_DIRECTORY_STATE = DEPARTMENTS_DATA;

const directoryReducer = (state = INITIAL_DIRECTORY_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        
    }
}

export default directoryReducer;