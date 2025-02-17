import React, { useRef, useState } from "react";

const SportsWatch = () => {
  let startTime = useRef(0);
  let timerId = useRef();
  let secondsLapsed = 0;
  const [currTime, setCurrTime] = useState(0);
  const [prevTime, setPrevTime] = useState(0);
  const [lap, setLaps] = useState([]);

  const startwatch = () => {
    startTime.current = Date.now() - prevTime;
    timerId.current = setInterval(() => {
      setCurrTime(Date.now());
    }, 10);
  };

  secondsLapsed = (currTime - startTime.current) / 1000;

  const stopwatch = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    setPrevTime(currTime - startTime.current);
  };

  const resetTime = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    startTime.current = 0;
    setCurrTime(0);
    setPrevTime(0);
    setLaps([]);
  };

  const timeLaps = () => setLaps([...lap, secondsLapsed]);
  return (
    <div>
      <h1>{secondsLapsed.toFixed(3)}</h1>
      <div>
        <button onClick={startwatch}>start</button>
        <button onClick={stopwatch}>stop</button>
        <button onClick={timeLaps}>laps</button>
        <button onClick={resetTime}>reset</button>
      </div>
      <div>
        {lap?.map((time, index) => (
          <p key={index}>{time}</p>
        ))}
      </div>
    </div>
  );
};

export default SportsWatch;
