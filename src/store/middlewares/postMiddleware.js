import axios from 'axios';
import {PostActions} from '../actions/postActions';

export const getPostMiddleware = () => {
    return async dispatch => {
        try {
            dispatch(PostActions.getPostStart())
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')               
            dispatch(PostActions.getPostSuccess(data))
        } catch (err) {
            dispatch(PostActions.getPostFailue('Something went wrong'))
        }
    }
}