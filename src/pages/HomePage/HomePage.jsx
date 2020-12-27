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

// import './HomePage-styles.scss';
import { HomePageContainer } from './HomePageStyles';
import Directory from '../../components/Directory/Directory';

/*
 * HomePage component
 */

const HomePage = ({ history }) => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage;