/*
 * PROJECT: ecommerce-app client
 * MODULE: src/stores/store.js
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
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
 * INTERNAL DEPENDENCIES
 */

/* From combineReducers() redux method */

import rootReducer from '../reducers/RootReducer';

/*
 * Redux store configuration
 */

const middlewares = [logger];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
export const persistor = persistStore(store);