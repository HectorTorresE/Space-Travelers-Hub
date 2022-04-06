import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const reducer = combineReducers({ rockets, missions });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
