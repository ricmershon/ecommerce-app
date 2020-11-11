/*
 * PROJECT: ecommerce-app client
 * MODULE: Header.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Header React functional component. Provides header
 * navigation links.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { Link } from 'react-router-dom';

/*
 * INTERNAL DEPENDENCIES
 */

import './Header-styles.scss';
import { auth } from '../../firebase/firebase-utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

/*
 * Header component
 */

const Header = ({ currentUser }) => (
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
            {
                // If there's a user display SIGN OUT with name with onClick()
                // to sign out when clicked. Otherwise display SIGN IN option
                // with route to '/signin.'
                
                currentUser ? (
                    <div
                        className='option'
                        onClick={ () => auth.signOut() }
                    >
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )
            }
        </div>
    </div>
)

export default Header;