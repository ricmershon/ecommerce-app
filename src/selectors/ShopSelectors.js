/*
 * PROJECT: ecommerce-app client
 * MODULE: src/selectors/ShopSelectors.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux selectors for shop object.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

/*
 * Configure shoP selectors
 */

const COLLECTION_ID_MAP = {
    hats: 1,
    sneaker: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectShopCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections =>
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
))