import React, { useRef, useState } from "react";

const StopHome = () => {
  // `useRef` is used to store a mutable value that doesn't cause a re-render when updated.
  const startTime = useRef(0); // Keeps track of when the stopwatch started.
  const interval = useRef(0); // Stores the interval ID so we can stop it later.

  const [currTime, setCurrTime] = useState(0); // Stores the current time for rendering.
  const [laps, setLaps] = useState([]); // Tracks the lap times.
  const[prevTime,setPrevTime] = useState(0);

  let secondsLapsed = 0; // Tracks the elapsed time in seconds.

  const startWatch = () => {
    startTime.current = Date.now() - prevTime; // Set the start time to the current timestamp.
    // Start the interval to update the current time every 10ms.
    interval.current = setInterval(() => {
      setCurrTime(Date.now());
    }, 10);
  };

  // Calculate how many seconds have passed since the stopwatch started.
  secondsLapsed = (currTime - startTime.current) / 1000;

  const stopWatch = () => {
    // Clear the interval to stop the stopwatch.
    clearInterval(interval.current);
    interval.current = 0; // Reset the interval reference.
    setPrevTime(currTime-startTime.current);
  };

  const trackLaps = () => {
    // Add the elapsed time to the list of laps.
    setLaps([...laps, secondsLapsed]);
  };

  const reset = () => {
    // Clear the interval and reset all values.
    clearInterval(interval);
    setLaps([]);
    startTime.current = 0; // Reset the start time reference.
    setCurrTime(0); // Reset the current time.
    secondsLapsed = 0; // Reset the elapsed time.
    setPrevTime(0);
  };

  return (
    <div>
      <h2>{secondsLapsed.toFixed(3)}</h2>
      <button onClick={startWatch}>start</button>
      <button onClick={stopWatch}>stop</button>
      <button onClick={trackLaps}>laps</button>
      <button onClick={reset}>reset</button>
      <div>
        {laps?.length
          ? laps.map((lap, index) => <p key={index}>{lap}</p>)
          : null}
      </div>
    </div>
  );
};

export default StopHome;
