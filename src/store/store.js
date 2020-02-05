import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import postReducer from '../reducers/postReducer';

export default createStore(
    combineReducers({
        postReducer
    }),
    {},
    applyMiddleware(logger)
);