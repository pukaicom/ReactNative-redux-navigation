/**
 * Created by pukai on 17/5/10.
 * navigator 跳转的路由控制
 * @link{GO_NEXT_NAVIGATOR} 跳转到下一个页面
 * @link{GO_PREVIOUS_NAVIGATOR} 返回到一个页面
 * @link{GO_NEXT_AND_CLOSE_CURRENT_NAVIGATOR} 跳转到下一个页面 并关闭当前页面
 * @link{GO_TARGET_NAVIGATOR_IN_STACK} 返回栈内的某一个页面
 */

import {GO_NEXT_NAVIGATOR, GO_PREVIOUS_NAVIGATOR, GO_NEXT_AND_CLOSE_CURRENT_NAVIGATOR, GO_TARGET_NAVIGATOR_IN_STACK} from '../action/actionTypes'
import {AppNavigator} from '../container/appNavigatorContainer'
import {NavigationActions} from 'react-navigation';
const firstAction = AppNavigator
  .router
  .getActionForPathAndParams('Main');
const initNavState = AppNavigator
  .router
  .getStateForAction(firstAction);
const initAction = {
  type: "init"
}
export default function nav(navState = initNavState, action = initAction) {
    let nextState;
  switch (action.type) {
    case GO_NEXT_NAVIGATOR:
      nextState = AppNavigator
        .router
        .getStateForAction(NavigationActions.navigate({routeName: action.routeName,params:action.params}), navState);
      break;
    case GO_PREVIOUS_NAVIGATOR:
      routes = navState.routes;
      nextState = AppNavigator
        .router
        .getStateForAction(NavigationActions.back(), navState);
      break;
    case GO_NEXT_AND_CLOSE_CURRENT_NAVIGATOR:
      let middleState = AppNavigator
        .router
        .getStateForAction(NavigationActions.back(), navState);
      nextState = AppNavigator
        .router
        .getStateForAction(NavigationActions.navigate({routeName: action.routeName,params:action.params}), middleState);
      break
    case GO_TARGET_NAVIGATOR_IN_STACK:
      let routes = navState.routes;
      nextState = navState;
      for(var i= routes.length-1;i>=0;i--){
        if(routes[i].routeName!==action.routeName){
         nextState = AppNavigator.router
        .getStateForAction(NavigationActions.back(), nextState);
      }else{
        break;
      }
    }
      break;
    default:
      break;
  }
  return nextState || navState;
}