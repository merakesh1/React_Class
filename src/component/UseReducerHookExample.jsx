import React,{useReducer} from 'react'
import reducer from '../Reducer';


const UseReducerHookExample = () => {
    var initialState={
        count:0
    };
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      State Value is-{state.count}
      <button onClick={()=>dispatch("Increment")}>increment</button>
      <button onClick={()=>dispatch("Decrement")}>decrement</button>
      <button onClick={()=>dispatch("Reset")}>reset</button>
    </div>
  )
}

export default UseReducerHookExample

