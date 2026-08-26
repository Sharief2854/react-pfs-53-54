import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/counterSlice';

function Demo() {
   
    let state=useSelector(function(state){
        return state;
    })

    let dispatch=useDispatch();
   
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>{state.counter.count}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <button onClick={()=>dispatch(add(10))}>add</button>
    </div>
  )
}
export default Demo
