'use strict'

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const logger = store => next => action => {
    /*
    if (typeof action == 'function') console.log('dispatching a function ');
    else console.log('dispatching ' + action);
    */
    let result = next(action);
    return result;
}

let middlewares = [
    logger,
    thunk
];

let createAppStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
    const store = createAppStoreWithMiddlewares(reducers);
    return store;
}




