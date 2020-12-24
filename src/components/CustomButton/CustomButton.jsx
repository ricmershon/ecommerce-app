/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/CustomButton/CustomButton.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: CustomButton React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './CustomButton-styles.scss';

/*
 * CustomButton component
 */

const CustomButton = ({ children, isGoogleSignIn, isInverted, ...otherProps }) => (
    <button
        className={`${isInverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`
        }
        {...otherProps}
    >
        { children }
    </button>
)

export default CustomButton;