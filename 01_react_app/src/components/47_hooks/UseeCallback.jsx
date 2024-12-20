import React, { useCallback, useState } from "react";
import PrintNum from "./PrintNum";

const UseeCallback = () => {
  // Step 1: State to store the input number.
  const [num, setNum] = useState(0);

  // Step 2: State to toggle between light and dark themes.
  const [dark, setDark] = useState(false);

  // Step 3: Define dynamic CSS styles based on the theme.
  const css = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    height: "400px",
  };

  // Step 4: Use useCallback to memoize the `prinNumbers` function.
  // This ensures the function is not recreated unless `num` changes.
  const prinNumbers = useCallback(() => {
    // Return an array of multiples of `num`.
    return [num * 1, num * 2, num * 3, num * 4, num * 5];
  }, [num]); // Dependency array ensures `prinNumbers` updates only when `num` changes.

  return (
    <div id="main">
      <div style={css}>
        {/* Input field to update the `num` state. */}
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.valueAsNumber || 0)} // Handle invalid input gracefully.
        />

        {/* Button to toggle the theme (dark/light). */}
        <button onClick={() => setDark(!dark)}>toggle</button>

        {/* Pass the memoized `prinNumbers` function to the child component. */}
        <div>
          <PrintNum prinNumbers={prinNumbers} />
        </div>
      </div>
    </div>
  );
};

export default UseeCallback;
