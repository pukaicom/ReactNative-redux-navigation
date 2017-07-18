/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import{
	AppRegistry,
	Text,
	DeviceEventEmitter,
	Platform,
	NativeModules,
	BackAndroid,
} from 'react-native';
import App from './jsFiles/app.js';
class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModule: true
		};
		DeviceEventEmitter.addListener("test", (result) => {
			this.setState({
				showModule: true
			})
		});
	}


	render() {
		if (this.state.showModule) {
			return <App />;
		} else {
			return <Text>Place Holder</Text>;
		}
	}
}
AppRegistry.registerComponent('Test', () => Test);
