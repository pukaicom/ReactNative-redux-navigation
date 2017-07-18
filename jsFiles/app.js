'use strict'
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/index';
import AppNavigatorContainer from './container/appNavigatorContainer'

let store = configureStore();
/*
* import * as NativeEventListener from './native/native_event_listener'
* Java => JavaScript 消息通信示例代码
NativeEventListener.addListener('heartbeat', (event, data) => {
    console.log('message received from native: ', event, data)
})
*/

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            store: store
        }
    }

    render() {
        return (
            <Provider store = {this.state.store}>
                <AppNavigatorContainer/>
            </Provider>
        )
    }
}

