import React, { useCallback, useState } from "react";
import PrintNum from "./PrintNum"; // Importing a child component

const UseCallHook = () => {
  // State to hold the input number
  const [num, setNum] = useState(0);
  // State to toggle between dark and light theme
  const [dark, setDark] = useState(false);

  // Dynamically adjust the style based on the `dark` state
  const divStyle = {
    backgroundColor: dark ? "#444" : "#fff", // Dark theme: #444, Light theme: #fff
    color: dark ? "#fff" : "#444", // Text color adjusts based on the theme
  };

  // Using `useCallback` to memoize the `printFn` function
  // Ensures the same function reference is passed to `PrintNum` unless `num` changes
  const printFn = useCallback(() => {
    // Returns an array of numbers based on the input
    return [num * 1, num * 2, num * 3];
  }, [num]); // Dependency array ensures this function is re-created only when `num` changes

  return (
    <div style={divStyle}>
      {/* Input field to update the `num` state */}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)} // Update `num` state with the input value
      />
      {/* Pass the memoized function as a prop to the child component */}
      <PrintNum number={printFn} />
      {/* Button to toggle between dark and light themes */}
      <button onClick={() => setDark((prev) => !prev)}>toggle</button>
    </div>
  );
};

export default UseCallHook;
