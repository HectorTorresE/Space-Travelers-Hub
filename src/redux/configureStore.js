import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './rockets/rockets';

const reducer = combineReducers({ rockets });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
