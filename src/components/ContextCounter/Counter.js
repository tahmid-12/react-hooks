import React from 'react';
import ComponentA from './ComponentA';
import { useReducer } from 'react';

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {

  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
        <div>Count - {count}</div>
        <counterContext.Provider value={{ countDispatch: dispatch }}>
            <ComponentA />
        </counterContext.Provider>
    </div>
  )
}

export default Counter