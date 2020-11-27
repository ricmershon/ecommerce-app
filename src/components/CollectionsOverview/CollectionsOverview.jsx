/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CollectionsOverview/CollectionsOverview.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CollectionsOverview page React class component.
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

import './CollectionsOverview-styles.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectShopCollections } from '../../selectors/ShopSelectors';

/*
 * CollectionsOverview component
 */

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
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


export default connect(mapStateToProps)(CollectionsOverview);