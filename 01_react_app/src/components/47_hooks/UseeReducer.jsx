import React, { useReducer } from "react";

// Step 1: Define the initial state for the reducer.
// Here, the initial state is an object with a count property set to 0.
const initialState = { count: 0 };

// Step 2: Define the reducer function.
// This function decides how the state should change based on the action.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // If the action type is "ADD", increase the count by 1.
      return { count: state.count + 1 };
    case "DELETE":
      // If the action type is "DELETE", decrease the count by 1 but not below 0.
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case "ALLCLEAR":
      // If the action type is "ALLCLEAR", reset the count to 0.
      return { count: 0 };
    default:
      // If the action type is not recognized, return the current state without changes.
      return state;
  }
};

// Step 3: Create the UseeReducer component.
const UseeReducer = () => {
  // Step 4: Use the useReducer hook.
  // useReducer takes two arguments: the reducer function and the initial state.
  // It returns the current state and a dispatch function to send actions.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main">
      <h1>Add Tasks</h1>
      <div>
        {/* Dispatch actions by calling dispatch with an action object. */}
        <button onClick={() => dispatch({ type: "ADD" })}>add</button>
        <button onClick={() => dispatch({ type: "DELETE" })}>delete</button>
        <button onClick={() => dispatch({ type: "ALLCLEAR" })}>
          clearTasks
        </button>
      </div>
      <div>
        {/* Display the current state (count). */}
        <h3>count:{state.count}</h3>
      </div>
    </div>
  );
};



export default UseeReducer;
