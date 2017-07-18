/**
 * Created by pukai on 17/5/10.
 */
import {GO_NEXT_NAVIGATOR, GO_PREVIOUS_NAVIGATOR, GO_NEXT_AND_CLOSE_CURRENT_NAVIGATOR,GO_TARGET_NAVIGATOR_IN_STACK} from './actionTypes'

function nextNavigator(params) {
    return {
        type: GO_NEXT_NAVIGATOR,
        ...params
    };
}

function previousNavigator(params) {
    return {
        type: GO_PREVIOUS_NAVIGATOR,
        ...params
    };
}

function nextAndCloseCurrentNavigator(params) {
    return {
        type: GO_NEXT_AND_CLOSE_CURRENT_NAVIGATOR,
        ...params
    }
}

function targetNavigatorInStack(params) {
    return {
        type: GO_TARGET_NAVIGATOR_IN_STACK,
        ...params
    }
}

export function goNextNavigator(params) {
    return function(dispatch) {
        dispatch(nextNavigator(params));
    }
}

export function goPreviousNavigator(params) {
    return function(dispatch) {
        dispatch(previousNavigator(params));
    }
}
export function goNextAndCloseCurrentNavigator(params) {
    return function(dispatch) {
        dispatch(nextAndCloseCurrentNavigator(params));
    }
}
export function goTargetNavigatorInStack(params) {
    return function(dispatch) {
        dispatch(targetNavigatorInStack(params));
    }
}

