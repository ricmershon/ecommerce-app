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
 * Configure shop selectors
 */

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectShopCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
))