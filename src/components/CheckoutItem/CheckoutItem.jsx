/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CheckoutItem/CheckoutItem.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CheckoutItem React functional compoonent.
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

import './CheckoutItem-styles.scss';
import { removeItem } from '../../actions/CartActions';

/*
 * CheckoutItem component
 */

const CheckoutItem = ({ cartItem, removeItem } ) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={ imageUrl } alt='item' />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity }</span>
            <span className='price'>{ price }</span>
            <div
                className='remove-button'
                onClick={ () => removeItem(cartItem) }
            >&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);