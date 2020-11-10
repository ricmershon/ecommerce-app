/*
 * PROJECT: ecommerce-app client
 * MODULE: Directory.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Directory React class component. Departments data
 * maintained in state.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React, { Component } from 'react';

/*
 * INTERNAL DEPENDENCIES
 */

import './Directory-styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import DEPARTMENTS_DATA from './DepartmentsData';

/*
 * Directory component
 */

class Directory extends Component {
    constructor () {
        super ();
        this.state = {
            departments: DEPARTMENTS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.departments.map(({ id, ...otherDepartmentProps }) => (
                    <MenuItem id={ id } { ...otherDepartmentProps } />
                ))
            } 
            </div>
        )
    }
}

export default Directory;