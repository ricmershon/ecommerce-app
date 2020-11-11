/*
 * PROJECT: ecommerce-app client
 * MODULE: SignUp.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: SignUp React class component. Email and password
 * maintained in state.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React, { Component } from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './SignUp-styles.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

/*
 * Signup component
 */

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    /*
     * Class methods to handle form change and submit actions
     */

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match")
        }

        /*
         * Desctructure user off of UserCredential object returned by the
         * Firebase auth method createUserWithEmailAndPassword().
         */

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );
            await createUserProfileDocument(user, { displayName });

            /*
             * Clear the form by resetting state value.
             */

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''    
            })
        } catch(error) {
            console.error('Error creating user account', error.message);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    /*
     * SignUp component render
     */

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='displayName'
                        type='text'
                        label='Display Name'
                        value={ displayName }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={ email }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={ password }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm password'
                        value={ confirmPassword }
                        handleChange={ this.handleChange }
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;