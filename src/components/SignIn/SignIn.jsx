/*
 * PROJECT: ecommerce-app client
 * MODULE: SignIn.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: SignIn React class component. Email and password
 * maintained in state.
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

import { signInWithGoogle } from '../../firebase/firebase-utils';

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

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
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
                        label='email'
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            {' '}Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;