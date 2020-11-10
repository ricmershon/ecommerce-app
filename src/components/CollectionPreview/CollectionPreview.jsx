/*
 * PROJECT: ecommerce-app client
 * MODULE: CollectionPreview.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CollectionPreview React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './CollectionPreview-styles.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

/*
 * CollectionPreview component
 */

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
        {
            items.filter((item, i) => i < 4).map(({ id, ...otherItemProps }) => (
                <CollectionItem key={ id } { ...otherItemProps } />
            ))
        }
        </div>
    </div>
)

    
export default CollectionPreview;