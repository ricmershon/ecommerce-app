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
import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './CollectionItem-styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../actions/CartActions';

/*
 * CollectionItem component
 */

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
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
            <CustomButton isInverted onClick={ () => addItem(item) }>
                Add to cart
            </CustomButton>
        </div>
    )   
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);