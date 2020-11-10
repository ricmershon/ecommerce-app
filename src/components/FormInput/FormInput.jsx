/*
 * PROJECT: ecommerce-app client
 * MODULE: FormInput.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: FormInput React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './FormInput-styles.scss';

/*
 * FormInput component
 */

 const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={ handleChange } { ...otherProps } />
        {
            label ? (
                <label className={ `${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
                    { label }
                </label>
            ) : null
        }
    </div>
)

export default FormInput;