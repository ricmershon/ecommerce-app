import React, { Component } from 'react';
import SHOP_PAGE_DATA from './ShopPageData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

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