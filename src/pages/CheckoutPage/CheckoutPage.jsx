/*
 * PROJECT: ecommerce-app client
 * MODULE: src/pages/CheckoutPage/CheckoutPage.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Checkout page React functional component.
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

import './CheckoutPage-styles.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import { selectCartItems, selectCartTotalPrice } from '../../selectors/CartSelectors';
import { selectCurrentUser } from '../../selectors/UserSelectors';


/*
 * CheckoutPage component
 */

const CheckoutPage = ({ cartItems, cartTotalPrice, currentUser }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem
                    key={ cartItem.id }
                    cartItem ={ cartItem } 
                />
            )
        }
        <div className='total'>
            <span>TOTAL: ${cartTotalPrice}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton
            price={ cartTotalPrice }
            currentUser={ currentUser }
        />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice,
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(CheckoutPage);