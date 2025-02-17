import React, { useEffect, useState } from "react";

const StopWatch = () => {
  // State to keep track of the elapsed time (in milliseconds)
  const [time, setTime] = useState(0);
  
  // State to control whether the stopwatch is running or stopped
  const [running, setRunning] = useState(false);

  // useEffect hook to manage the timer logic
  useEffect(() => {
    let timer; // Variable to store the interval ID

    // If the stopwatch is running, set up an interval to update time every second (1000 milliseconds)
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1000); // Increment the time by 1000ms (1 second)
      }, 1000);
    } else {
      // If the stopwatch is not running, clear the interval to stop the timer
      clearInterval(timer);
    }

    // Cleanup function to clear the interval when the component is unmounted or `running` changes
    return () => {
      clearInterval(timer);
    };
  }, [running]); // Effect depends on the `running` state

  return (
    <div>
      {/* Displaying the time in HH:MM:SS format */}
      <span>{("0" + Math.floor((time / 360000) % 24)).slice(-2)}:</span> {/* Hours */}
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> {/* Minutes */}
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span> {/* Seconds */}
      
      {/* Buttons for controlling the stopwatch */}
      <div>
        <button onClick={() => setRunning(true)}>Start</button>  {/* Starts the stopwatch */}
        <button onClick={() => setRunning(false)}>Stop</button>   {/* Stops the stopwatch */}
        <button onClick={() => setTime(0)}>Reset</button>        {/* Resets the stopwatch to 0 */}
      </div>
    </div>
  );
};

export default StopWatch;
