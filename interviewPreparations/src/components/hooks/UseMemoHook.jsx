import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  // State to hold the input number value
  const [num, setNum] = useState(0);
  // State to toggle the theme (dark/light)
  const [dark, setDark] = useState(false);

  // Use `useMemo` to memoize the result of `expCalculation(num)`
  // This ensures the expensive computation only runs when `num` changes
  const myCal = useMemo(() => {
    return expCalculation(num);
  }, [num]);

  // Define the styles dynamically based on the `dark` state
  const divStyle = {
    backgroundColor: dark ? "#444" : "#fff", // Dark theme: #444, Light theme: #fff
    color: dark ? "#fff" : "#444", // Text color adjusts based on the theme
  };

  return (
    <div style={divStyle}>
      {/* Display the calculated number */}
      <h2>number: {myCal}</h2>
      {/* Input field to update the number */}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)} // Update `num` state with input value
      />
      {/* Button to toggle between dark and light theme */}
      <button onClick={() => setDark((prev) => !prev)}>toggle</button>
    </div>
  );
};

// Function to simulate an expensive calculation
const expCalculation = (num) => {
  console.log("function called"); // Log to demonstrate when the function is executed
  for (let i = 0; i < 1000; i++) {} // Simulate heavy computation
  return num; // Return the input number
};

export default UseMemoHook;
