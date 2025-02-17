import React, { useReducer } from "react";

// Initial state with count set to 0
const intialState = { count: 0 };

// Reducer function that defines how the state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    // Case for increasing the count
    case "increase":
      return { count: state.count + 1 };
    
    // Case for decreasing the count
    case "decrease":
      // Prevents count from going below 0
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return { count: 0 }; // Ensures count never goes below 0
      }
    
    // Default case for unsupported actions (optional, but useful for debugging)
    default:
      return state;
  }
};

const UseReducerHook = () => {
  // useReducer hook to manage state using the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, intialState);

  // Function to handle increasing the count
  const increase = () => {
    dispatch({ type: "increase" });
  };

  // Function to handle decreasing the count
  const decrease = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      {/* Display the current count */}
      <h2>{state.count}</h2>
      {/* Button to increment the count */}
      <button onClick={increase}>increment</button>
      {/* Button to decrement the count */}
      <button onClick={decrease}>decrement</button>
    </div>
  );
};

export default UseReducerHook;
