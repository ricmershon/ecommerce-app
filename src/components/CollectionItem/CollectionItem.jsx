/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CollectionItem/CollectionItem.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CollectionItem React functional compoonent.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './CollectionItem-styles.scss';

/*
 * CollectionItem component
 */

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={
                    { backgroundImage: `url(${ imageUrl })`}
                }
            />
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
        </div>
    )   
}

export default CollectionItem;