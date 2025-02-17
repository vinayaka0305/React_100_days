import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerId;
    if (running) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [running]);
  return (
    <div>
      <div>
        <span>{("0" + (Math.floor(time / 3600000) % 24)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
      </div>

      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>
      <button onClick={() => setTime(0)}>reset</button>
    </div>
  );
};

export default Stopwatch;
