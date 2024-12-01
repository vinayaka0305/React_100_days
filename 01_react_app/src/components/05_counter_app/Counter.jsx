import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0);

    const increase = ()=>{
        setCount((prev)=>prev+1);
    }

    const decrease = ()=>{
        setCount((prev)=>prev-1);
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increase}>increment</button>
        <button onClick={decrease}>decrement</button>
    </div>
  )
}

export default Counter