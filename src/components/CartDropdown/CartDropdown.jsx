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

/*
 * INTERNAL DEPENDENCIES
 */

import './CartDropdown-styles.scss';
import CustomButton from '../CustomButton/CustomButton';

/*
 * CartDropdown component
 */

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton
            isInverted
        >GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;