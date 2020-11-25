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

/*
 * INTERNAL DEPENDENCIES
 */

import './CheckoutItem-styles.scss';
import { addItem, removeItem, removeAllItem } from '../../actions/CartActions';

/*
 * CheckoutItem component
 */

const CheckoutItem = ({ cartItem, addItem, removeItem, removeAllItem } ) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={ imageUrl } alt='item' />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>
                <div className='arrow' onClick={ () => removeItem(cartItem) }>
                    &#10094;
                </div>
                <span className='value'>{ quantity }</span>
                <div className='arrow' onClick={ () => addItem(cartItem) }>
                    &#10095;
                </div>
            </span>
            <span className='price'>{ price }</span>
            <div className='remove-button'
                onClick={ () => removeAllItem(cartItem) }
            >
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    removeAllItem: item => dispatch(removeAllItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);