/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/Directory/Directory.jsx
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Directory React class component. Departments data maintained
 * in local state.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/*
 * INTERNAL DEPENDENCIES
 */

import './Directory-styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectoryDepartments } from '../../selectors/DirectorySelector';

/*
 * Directory component
 */

const Directory = ({ departments }) => (
    <div className='directory-menu'>
    {
        departments.map(({ id, ...otherDepartmentProps }) => (
            <MenuItem key={ id } { ...otherDepartmentProps } />
        ))
    } 
    </div>
)

const mapStateToProps = createStructuredSelector({
    departments: selectDirectoryDepartments
})

export default connect(mapStateToProps)(Directory);