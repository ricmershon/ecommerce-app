/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CartIcon/CartIcon.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CartIcon React functional compoonent.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './CartIcon-styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

/*
 * CartIcon component
 */

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);