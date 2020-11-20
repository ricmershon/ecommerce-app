/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CartItem/CartItem.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CartItem React functional compoonent.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './CartItem-styles.scss';

/*
 * CartItem component
 */

 const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={ imageUrl } alt='item' />
        <div className='item-details'>
            <span className='name'>{ name }</span>
            <span className='price'>{ quantity } x ${ price }</span>
        </div>
    </div>
 )

 export default CartItem;