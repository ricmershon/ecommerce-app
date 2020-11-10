/*
 * PROJECT: ecommerce-app client
 * MODULE: CustomButton.jsx
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

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' { ...otherProps }>
        { children }
    </button>
)

export default CustomButton;