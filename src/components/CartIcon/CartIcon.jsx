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

const CartIcon = (state) => (
    <div className='cart-icon' onClick={ state.toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ state.numCartItems }</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    numCartItems: state.cart.cartItems.length
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);