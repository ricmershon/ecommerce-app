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
import { Route } from 'react-router-dom';

/*
 * INTERNAL DEPENDENCIES
 */

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

/*
 * ShowPage component
 */

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route
            exact path={`${match.path}`}
            component={ CollectionsOverview }
        />
        <Route
            path={`${match.path}/:collectionId`} 
            component={ CollectionPage }
        />
    </div>
)


export default ShopPage;