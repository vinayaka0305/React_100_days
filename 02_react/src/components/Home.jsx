import React, { useState } from 'react'
import SimpleIntrest from './SimpleIntrest'
import StopWatch from './StopWatch';

const Home = () => {
  const[amount,setAmount] = useState(0);
  const[intrest,setIntrest] = useState(0);
  const[time,setTime] = useState(0);
  const[result,setResult] = useState(0);

  const calIntrest =()=>{
      const si = (amount * intrest * time) /(100)
      setResult(si);
  }


  return (
    // <>
    //   <h2>Simple Intrest CalCulator</h2>
    //     <SimpleIntrest name="Pricipal Amount" num={setAmount}/> 
    //     <SimpleIntrest name="Intrest Rate (%)" num={setIntrest}/> 
    //     <SimpleIntrest name="Time(years)" num={setTime}/> 

    //     <div>
    //       <button onClick={calIntrest}>click</button>
    //       <h3>Simple Intreset: {result}</h3>
    //     </div>
    // </>
    <>
      <StopWatch/>
    </>
  )
}

export default Home