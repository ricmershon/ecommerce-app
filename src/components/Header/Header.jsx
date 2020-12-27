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
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/*
 * INTERNAL DEPENDENCIES
 */

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './HeaderStyles'
import { auth } from '../../firebase/firebase-utils';
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../selectors/CartSelectors';
import { selectCurrentUser } from '../../selectors/UserSelectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

/*
 * Header component
 */

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            { /*
               * If there's a user display SIGN OUT with displayName and
               * auth.signOut() to sign out when clicked. Otherwise display 
               * SIGN IN option with route to '/signin.'
               */ }

            {
                currentUser ? (
                    <OptionDiv onClick={ () => auth.signOut() }>
                        SIGN OUT { currentUser.displayName.toUpperCase() }
                    </OptionDiv>
                ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);