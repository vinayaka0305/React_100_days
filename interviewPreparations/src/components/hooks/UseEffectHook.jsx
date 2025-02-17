import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // useEffect with no dependencies (runs on every render)
  useEffect(() => {
    console.log("rendering");  // Logs each time the component renders
  });

  // useEffect with an empty dependency array (runs only once, after the initial render)
  useEffect(() => {
    console.log("rendering");  // Logs after the first render
  }, []);

  // useEffect with a dependency array that includes 'count' (runs whenever 'count' changes)
  useEffect(() => {
    console.log("rendering");  // Logs when 'count' changes
  }, [count]);

  return (
    <div>
      {/* Display the current count */}
      <h2>{count}</h2>
      {/* Button to increase the count value */}
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
    </div>
  );
};

export default UseEffectHook;
