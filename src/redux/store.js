/*
 * PROJECT: ecommerce-app client
 * MODULE: src/redux/store.js
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
import { composeWithDevTools } from 'redux-devtools-extension';

/*
 * INTERNAL DEPENDENCIES
 */

import rootReducer from './root-reducer';

/*
 * Redux store configuration
 */

const middlewares = [logger];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;