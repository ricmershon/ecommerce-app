/*
 * PROJECT: ecommerce-app client
 * MODULE: src/selectors/DirectorySelectors.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux selectors for directory object.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import { createSelector } from 'reselect';

/*
 * Configure directory selectors
 */

const selectDirectory = state => state.directory;

export const selectDirectoryDepartments = createSelector(
    [selectDirectory],
    (directory) => directory.departments
)