/*
 * PROJECT: ecommerce-app client
 * MODULE: src/pages/HomePage/HomePage.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Home page React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './HomePage-styles.scss';
import Directory from '../../components/Directory/Directory';

/*
 * HomePage component
 */

const HomePage = ({ history }) => (
    <div className='homepage'>
        <Directory />
    </div>
)

export default HomePage;