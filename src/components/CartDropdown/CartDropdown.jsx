/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CartDropdown/CartDropdown.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CartDropdown React functional compoonent.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './CartDropdown-styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

/*
 * CartDropdown component
 */

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map((cartItem) => (
                <CartItem key={ cartItem.id } item={ cartItem } />
            ))
        }
        </div>
        <CustomButton
            isInverted
        >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);