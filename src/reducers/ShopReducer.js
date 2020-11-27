/*
 * PROJECT: ecommerce-app client
 * MODULE: src/reducers/ShopReducer.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux reducer for shop object. The object doesn't change
 * but putting it into the redux store to make available to other components.
 */

/*
 * INTERNAL DEPENDENCIES
 */

import COLLECTIONS_DATA from '../constants/ShopData';

/*
 * ShopReducer configuration
 */

const INITIAL_COLLECTIONS_STATE = {
    collections: COLLECTIONS_DATA
};

const shopReducer = (state = INITIAL_COLLECTIONS_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        
    }
}

export default shopReducer;