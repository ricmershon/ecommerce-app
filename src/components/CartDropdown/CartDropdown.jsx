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
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

/*
 * INTERNAL DEPENDENCIES
 */

import './CartDropdown-styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../selectors/CartSelectors';
import { toggleCartHidden } from '../../actions/CartActions';

/*
 * CartDropdown component
 */

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {/*
            * If there are items in the cart render them here, otherwise
            * render empty cart message.
            */}
            {
                cartItems.length ? (
                    cartItems.map((cartItem) => 
                        <CartItem
                            key={ cartItem.id }
                            item={ cartItem }
                        />
                    )
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton 
            isInverted
            onClick={ () => {
                history.push('/checkout')
                toggleCartHidden()
            } }
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));