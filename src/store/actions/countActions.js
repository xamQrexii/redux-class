import {ActionTypes} from './actionTypes';

export const increaseValueAction = (value) => ({type: ActionTypes.INCREASE_VALUE, payload: value});
export const decreaseValueAction = (value) => ({type: ActionTypes.DECREASE_VALUE, payload: value});

export class CountActions {
    static increaseValue = (value) => ({type: ActionTypes.INCREASE_VALUE, payload: value})

    static decreaseValue = (value) => ({type: ActionTypes.DECREASE_VALUE, payload: value})
}