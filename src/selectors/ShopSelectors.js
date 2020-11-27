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

/*
 * Configure shoP selectors
 */

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)