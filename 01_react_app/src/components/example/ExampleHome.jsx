import React, { useCallback, useState } from "react";

const ExampleHome = () => {
  const [dInput, setDinput] = useState("");
  const [tInput, setTInput] = useState("");

  const myDebounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const myThrottle = (fn, delay) => {
    let timer;
    return (...args) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  };

  const dHandler = (e) => {
    console.log(e.target.value);
    setDinput(e.target.value);
  };

  const tHandler = (e) => {
    console.log(e.target.value);
    setTInput(e.target.value);
  };

  const handleDebounce = useCallback(myDebounce(dHandler, 2000), []);
  const handleThrottle = useCallback(myThrottle(tHandler, 900), []);
  return (
    <div id="main">
      <div>
        <input type="text" onChange={handleDebounce} />
        <br />
        <h3>Debounce Input:{dInput}</h3>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <input type="text" onChange={handleThrottle} />
        <br />
        <h3>ThrottleInput:{tInput}</h3>
      </div>
    </div>
  );
};

export default ExampleHome;
