import React, {Component, PropTypes} from 'react';
import {BackAndroid, Platform, NativeModules, DeviceEventEmitter} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import * as navigatorActions from '../action/navigatorActions';
import HomeContainer from './homeContainer';
import ChatContainer1 from './chatContainer1';
import ChatContainer2 from './chatContainer2';


export const AppNavigator = StackNavigator({
	'Main': {
		screen: HomeContainer
	},
	'Chat1': {
		screen: ChatContainer1
	},
	'Chat2': {
		screen: ChatContainer2
	}
})

class AppNavigatorContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {dispatch, nav, action} = this.props;
		return (<AppNavigator navigation={addNavigationHelpers({dispatch, state: nav, action})}/>)
	}

	componentWillMount() {
		DeviceEventEmitter.addListener("test", (result) => {
		})
		BackAndroid.addEventListener('hardwareBackPress', this._onAndroidBackPressed);
	}

	_onAndroidBackPressed = () => {
		let index = this.props.nav.index;
		if (index <= 0) {
			NativeModules.Api.newInstance();
		} else {
			this.props.action.goPreviousNavigator({});
		}
		return true;
	}

	componentWillUnmount() {
		if (Platform.OS === 'android') {
			BackAndroid.removeEventListener('hardwareBackPress')
		}
	}
}

AppNavigatorContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
	action: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		nav: state.nav,
		config: state.config
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		action: bindActionCreators({...navigatorActions}, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigatorContainer)