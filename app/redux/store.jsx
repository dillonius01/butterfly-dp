/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index';

const middlewares = [thunkMiddleware, createLogger()]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

