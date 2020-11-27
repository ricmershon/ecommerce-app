/*
 * PROJECT: ecommerce-app client
 * MODULE: src/pages/Shop/Shop.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Shop page React class component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

/*
 * ShowPage component
 */

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview />
    </div>
)


export default ShopPage;