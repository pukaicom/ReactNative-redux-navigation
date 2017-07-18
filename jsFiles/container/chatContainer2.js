/**
 * Created by pukai on 17/7/17.
 */
import React from 'react';
import BaseContainer from './baseContainer';
import Chat2 from '../component/chat2';

export default class ChatContainer2 extends BaseContainer{
	constructor(props){
		super(props);
	}
	render(){
		return <Chat2 />
	}
}