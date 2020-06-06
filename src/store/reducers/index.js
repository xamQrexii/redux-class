import {combineReducers} from 'redux';
import {countReducer} from "./countReducer";
import {postReducer} from "./postReducer";


export const rootReducer = combineReducers({
    count: countReducer,
    post: postReducer,
  })

