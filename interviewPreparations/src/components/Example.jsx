import React, { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  });

  const reset=()=>{
    setTime(0);
    setRunning(false);
  }

  return (
    <div>
      <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      <div>
        <button onClick={() => setRunning(true)}>start</button>
        <button onClick={()=>setRunning(false)}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Example;
