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
import { createStructuredSelector } from 'reselect';

/*
 * INTERNAL DEPENDENCIES
 */

import './CartIcon-styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../actions/CartActions';
import { selectCartItemsCount } from '../../selectors/CartSelectors';

/*
 * CartIcon component
 */

const CartIcon = ({ toggleCartHidden, numCartItems }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ numCartItems }</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    numCartItems: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);