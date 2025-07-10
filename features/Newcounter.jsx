import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counter'

const Newcounter = () => {
    const count = useSelector((state)=> state.countkey.counter);
    const dispatch = useDispatch()
    console.log(count);
    
    
  return (
    <div>
        {/* <h1>{count}</h1> */}
        <button onClick={()=>dispatch(increment())}>add</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(decrement())}>sub</button>
    </div>
  )
}

export default Newcounter