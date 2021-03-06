/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/MenuItem/MenuItem.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: MenuItem React functional component.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { withRouter } from 'react-router-dom'

/*
 * INTERNAL DEPENDENCIES
 */

import './MenuItem-styles.scss';

/*
 * MenuItem component
 */

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${ size } menu-item`}
        onClick={ () => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style={
                { backgroundImage: `url(${ imageUrl })`}
            }
        />
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>    
)

export default withRouter(MenuItem);