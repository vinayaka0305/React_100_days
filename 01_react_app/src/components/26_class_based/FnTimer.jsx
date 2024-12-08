import React, { useEffect, useState } from 'react'

const FnTimer = () => {
    const[date,setDate] = useState(new Date());
    let timerId;
    useEffect(()=>{
         timerId = setInterval(()=>{
            tick();
        },1000)
        return()=>{
            clearInterval(timerId);
        }
    },[])

    const tick=()=>{
        setDate(new Date())
    }

  return (
    <div id='main'>
        <h1>Function Based Timer</h1>
        <div>
            {date.toLocaleTimeString()}
        </div>
    </div>
  )
}

export default FnTimer