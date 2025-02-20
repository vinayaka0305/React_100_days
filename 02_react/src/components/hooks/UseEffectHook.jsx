import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
      console.log('rendering')
    },[count])
  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount((prev)=>prev+1)}>increase</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>decrease</button>
    </div>
  )
}

export default UseEffectHook