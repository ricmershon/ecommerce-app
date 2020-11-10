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
import { ReactComponent as Logo } from '../../assets/logo.svg';

/*
 * Header component
 */

const Header = () => (
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
        </div>
    </div>
)

export default Header;