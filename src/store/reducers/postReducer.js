import {ActionTypes} from '../actions/actionTypes';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_POST_START:
            return {
                ...state,
                loading: true
            }
        
        case ActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case ActionTypes.GET_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}