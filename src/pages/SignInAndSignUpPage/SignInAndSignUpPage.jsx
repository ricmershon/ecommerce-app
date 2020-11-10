/*
 * PROJECT: ecommerce-app client
 * MODULE: SignInAndSignUpPage.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: SignInAndSignUpPage React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './SignInAndSignUpPage-styles.scss';
import SignIn from '../../components/SignIn/SignIn';

/*
 * SignInAndSignUp component
 */

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'><SignIn/></div>
)

export default SignInAndSignUp;