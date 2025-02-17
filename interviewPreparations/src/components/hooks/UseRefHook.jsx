import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  // Initializing state variables
  //   const [count, setCount] = useState(0);  // 'count' state with setter 'setCount'
  const [input, setInput] = useState(""); // 'num' state with setter 'setNum'

  // The useEffect hook runs on every render (similar to componentDidMount and componentDidUpdate in class components)
  //   Each re-render triggers useEffect, and each time useEffect runs, it updates count by 1.
  // This creates an infinite loop of re-renders because setCount keeps triggering the component to re-render, and useEffect keeps updating count.
  //   useEffect(() => {
  //     // This effect increments 'count' by 1 on every render
  //     setCount((prev) => prev + 1);
  //   });

  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // console.log(count);
    count.current = count.current + 1;
  });

  const focus =()=>{
    inputRef.current.focus()
  }

  return (
    <div>
      {/* Displaying the current value of 'num' */}
      <h2>Num : {input}</h2>

      {/* Displaying the current value of 'count' */}
      <h2>Count: {count.current}</h2>

      {/* Button to increment 'num' by 1 when clicked */}

      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={focus}>click to focus</button>
    </div>
  );
};

export default UseRefHook;


// useRef Hook:

// const count = useRef(0); initializes a count ref. Refs do not trigger re-renders when they are updated, so they are useful for tracking values across renders without causing performance issues or infinite loops.

// const inputRef = useRef(); creates a ref for the input element. This allows direct manipulation of the DOM, such as focusing the input field.