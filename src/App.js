import React from 'react';
import './App.css';
import {CountActions} from './store/actions/countActions'
import {getPostMiddleware} from './store/middlewares/postMiddleware';

import {connect} from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
     <p>
       Count value is: {props.count.value}
     </p>
     <p>
       <button onClick={() => props.increaseValue(10)}>Increase value</button>
     </p>
     <p>
       <button onClick={() => props.descreaseValue(10)}>Decrease value</button>
     </p>
     <hr />   
    <h1>POSTS</h1>

    <div>
    {props.post.data ? <div>{props.post.data.title}</div> : <div>There is no post</div>}
    </div>
    
    <small>
      {props.post.error && props.post.error}
    </small>

    <p>{props.post.loading ? 'Loading true' : 'Loading false'}</p>


    <p>
      <button onClick={props.getPost} disabled={props.post.loading ? true  : false}>Get Post</button>
    </p>

    </div>
  );
}

const mapStateToProps = (state) => ({count: state.count, post: state.post});

const mapDispatchToProps = (dispatch) => ({
  increaseValue: (value) => dispatch(CountActions.increaseValue(value)),
  descreaseValue: (value) => dispatch(CountActions.decreaseValue(value)),
  getPost: () => dispatch(getPostMiddleware())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
