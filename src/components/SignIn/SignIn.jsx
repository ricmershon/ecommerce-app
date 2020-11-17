/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/SignIn/SignIn.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: SignIn React class component. Email and password maintained
 * in local state.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React, { Component } from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './SignIn-styles.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase-utils';

/*
 * SignIn component
 */

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    /*
     * Class methods to handle form change and submit actions
     */

    handleSubmit = async (event) => {
        const { email, password } = this.state;
        event.preventDefault();

        this.setState({ email: '', password: '' })
        try {
            await auth.signInWithEmailAndPassword(email, password);

            /*
             * Clear the form by clearing state.
             */

            this.setState( { email: '', password: '' })
        } catch(error) {
            console.error('Error sighning into user account', error.message)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    /*
     * SignIn component render
     */

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        required
                    />
                    <div className='buttons'>

                        { /* 
                           * Submit the form on this component to log in a
                           * user registered on the SignUp component
                           */ }
                           
                        <CustomButton type='submit'>Sign In</CustomButton>

                        { /* Sign in with Google account*/}

                        <CustomButton
                            type='button'
                            onClick={ signInWithGoogle }
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;