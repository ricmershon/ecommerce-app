/*
 * PROJECT: ecommerce-app client
 * MODULE: src/pages/CollectionPage/CollectionPage.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Collection page React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './CollectionPage-styles.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { selectShopCollection } from '../../selectors/ShopSelectors';

/*
 * CollectionPage component
 */

 const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
            {
                items.map((item) => (
                    <CollectionItem
                        key={ item.id }
                        item={ item }>
                    </CollectionItem>
                ))
            }
            </div>
        </div>
    )
 }

 const mapStateToProps = (state, ownProps) => ({
     collection: selectShopCollection(ownProps.match.params.collectionId)(state)
 })

 export default connect(mapStateToProps)(CollectionPage);