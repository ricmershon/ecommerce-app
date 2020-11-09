import React, { Component } from 'react';
import './Directory-styles.scss';
import DEPARTMENTS_DATA from './DepartmentsData';
import MenuItem from '../MenuItem/MenuItem';

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