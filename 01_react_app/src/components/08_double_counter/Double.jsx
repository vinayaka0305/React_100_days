import React, { useState } from 'react'

const Double = () => {
    const[increment,setIncrement] = useState(0);
    const[increment2,setIncrement2] = useState(0);

    const firIncrement = ()=>{
        setIncrement((prev)=>prev+1);
    }
    const secIncrement = ()=>{
        setIncrement2((prev)=>prev+1);
    }
    
  return (
    <div>
        <div>
            <h2>Increment A:{increment}</h2>
            <h2>Increment B:{increment2}</h2>
        </div>
        <button onClick={firIncrement}>increamet A</button>
        <button onClick={secIncrement}>increamet B</button>
    </div>
  )
}

export default Double