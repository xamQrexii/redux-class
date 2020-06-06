import {ActionTypes} from './actionTypes';

export class PostActions {

    static getPostStart = () => ({type: ActionTypes.GET_POST_START})

    static getPostSuccess = (data) => ({type: ActionTypes.GET_POST_SUCCESS, payload: data})

    static getPostFailue = (err) => ({type: ActionTypes.GET_POST_FAILURE, payload: err})

}