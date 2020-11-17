/*
 * PROJECT: ecommerce-app client
 * MODULE: src/pages/Shop/Shop.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Shop page React class component. Information about items
 * available in the store maintined in state.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React, { Component } from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import SHOP_PAGE_DATA from './ShopPageData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

/*
 * ShowPage component
 */

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_PAGE_DATA
        }
    }

    render () {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps}) => (
                    <CollectionPreview key ={ id } { ...otherCollectionProps } />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;