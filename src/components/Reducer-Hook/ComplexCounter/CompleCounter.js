import React from 'react';
import { useReducer } from 'react';

const initialState = {
    counter: 0,
};

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { counter: state.counter + action.value };
    case 'decrement':
      return { counter: state.counter - action.value };
    default:
      return state;
  }
}

function CompleCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <div>Count - {count.counter}</div>
      <button type="button" onClick={() => dispatch({
          type: 'increment',
          value: 1
      })}>Increment</button>
      <button type="button" onClick={() => dispatch({
          type: 'decrement',
          value: 1
      })}>Decrement</button>
    </div>
  )
}

export default CompleCounter