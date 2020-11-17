/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/Header/Header.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Header React functional component. Provides header navigation
 * links using react-router-dom.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './Header-styles.scss';
import { auth } from '../../firebase/firebase-utils';
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';

/*
 * Header component
 */

const Header = (state) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>

            { /*
               * If there's a user display SIGN OUT with displayName and
               * auth.signOut() to sign out when clicked. Otherwise display 
               * SIGN IN option with route to '/signin.'
               */ }

            {
                state.currentUser ? (
                    <div
                        className='option'
                        onClick={ () => auth.signOut() }
                    >
                        SIGN OUT { state.currentUser.displayName.toUpperCase() }
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {
            state.hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);