import React, { useEffect, useRef, useState } from "react";

const UseeRef = () => {
  // Step 1: Create a state variable to store the text from the input field.
  const [text, setText] = useState("");

  // Step 2: Create references using the useRef hook.
  // `useRef` creates a mutable object with a `.current` property that you can use.
  const count = useRef(0); // A reference to store the count value (not a state).
  const inputRef = useRef(null); // A reference to store the input element.

  // Step 3: Use the useEffect hook to update the count whenever the component re-renders.
  useEffect(() => {
    // Update the `count` ref value on every render.
    count.current = count.current + 1;
  });

  // Step 4: Use the useEffect hook to focus on the input field when the component loads.
  useEffect(() => {
    // Access the input element and call its `focus` method using the ref.
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  return (
    <div id="main">
      <div>
        {/* Display the text entered by the user. */}
        <h1>text: {text}</h1>

        {/* Bind the input field to the `inputRef` for direct access. */}
        <input
          ref={inputRef} // Attach the ref to the input element.
          type="text"
          onChange={(e) => setText(e.target.value)} // Update the text state on input change.
        />
      </div>
      <div>
        {/* Display the count of renders (tracked using `count` ref). */}
        <h3>count: {count.current}</h3>
      </div>
    </div>
  );
};

export default UseeRef;
