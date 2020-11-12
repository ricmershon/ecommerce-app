/*
 * PROJECT: ecommerce-app client
 * MODULE: redux/store.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Redux store
 */

/*
 * EXTERNAL DEPENDENCIES
 * Middleware sits between actions and reducers. logger Middleware logs
 * actions that got fired and state before and after the action.
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

/*
 * INTERNAL DEPENDENCIES
 */

import rootReducer from './root-reducer';

/*
 * CONFIGURATION
 */

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;