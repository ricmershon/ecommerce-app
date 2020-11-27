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
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/*
 * INTERNAL DEPENDENCIES
 */

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectShopCollections } from '../../selectors/ShopSelectors';

/*
 * ShowPage component
 */

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
    {
        collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key ={ id } { ...otherCollectionProps } />
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);