import React, { useEffect, useState } from "react";

const StopWatch1 = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);
  return (
    <div id="main">
      <h3>Stop Watch</h3>
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setRunning(true)}>start</button>
        <button onClick={() => setRunning(false)}>pause</button>
        <button onClick={() => setTime(0)}>reset</button>
      </div>
    </div>
  );
};

export default StopWatch1;
