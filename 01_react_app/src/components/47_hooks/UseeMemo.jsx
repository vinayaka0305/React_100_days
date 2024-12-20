import React, { useMemo, useState } from "react";

const UseeMemo = () => {
  // Step 1: State to manage the number input.
  const [num, setNum] = useState(0);

  // Step 2: State to manage the theme (dark or light).
  const [dark, setDark] = useState(false);

  // Step 3: Use useMemo to memoize the result of `expensiveCalculation`.
  // The function `expensiveCalculation` will only be called again if `num` changes.
  const myCal = useMemo(() => {
    return expensiveCalculation(num); // Memoized function.
  }, [num]); // Dependency array ensures `num` changes trigger recomputation.

  // Step 4: Dynamic styling based on the theme (dark or light).
  const cssS = {
    height: "400px",
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  // console.log(myCal);
  return (
    <div id="main">
      <div style={cssS}>
        {/* Display the result of the calculation. */}
        <h1>myCal: {myCal}</h1>

        {/* Input to update the `num` state. */}
        <input
          type="number"
          onChange={(e) => setNum(e.target.valueAsNumber || 0)} // Handle empty or invalid input.
        />

        {/* Button to toggle the theme. */}
        <button onClick={() => setDark((prev) => !prev)}>toggle</button>
      </div>
    </div>
  );
};

// A computationally expensive function.
const expensiveCalculation = (num) => {
  console.log("expensive calculation called");
  for (let i = 0; i <= 10000; i++) {} // Simulate heavy computation.
  return num;
};

export default UseeMemo;
