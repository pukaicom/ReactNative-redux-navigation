/**
 * Created by pukai on 17/7/17.
 */

import React, {Component} from 'react';
import BaseContainer from './baseContainer';
import {DrawerNavigator} from 'react-navigation';
import {DrawerItems} from 'react-navigation';

import {
	Button,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';


class MainContainer extends BaseContainer {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		drawerLabel: "nihao",
	};

	render() {
		console.log("test", this.props);
		return (
			<Button onPress={() => this.props.screenProps.action.goNextNavigator({routeName: 'Chat1'})}
				title="Go to chat1"/>
		);
	}
}

class MyDrawerScreen extends React.Component {
	render() {
		console.log("MyDrawerScreen",this.props);
		return (
			<Text>
				I am DrawerContent !!!
			</Text>
		);
	}
}
const DrawerNavigatorContainer = DrawerNavigator({
	Home: {
		screen: MainContainer,
	}
}, {
	contentComponent: props => <MyDrawerScreen />
});
export default class HomeContainer extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		header: null,
	};

	render() {
		return (<DrawerNavigatorContainer screenProps={this.props.navigation}/>)
	}
}