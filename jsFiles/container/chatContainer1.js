/**
 * Created by pukai on 17/7/17.
 */

import React from 'react';
import BaseContainer from './baseContainer';
import Chat1 from '../component/chat1'
export default class ChatContainer1 extends BaseContainer{
	constructor(props){
		super(props);
	}
	render(){
		return <Chat1 />
	}
}