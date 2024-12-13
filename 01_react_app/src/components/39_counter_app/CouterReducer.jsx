import React, { useReducer } from "react";

// Initial state for the reducer
const initialState = { count: 0 }; 

// Reducer function to manage state transitions
const reducer = (state, action) => {
  // Determine how the state changes based on the action type
  switch (action.type) {
    case "add":
      return { count: state.count + 1 }; // Increment the count
    case "delete":
      return { count: state.count > 0 ? state.count - 1 : 0 }; // Decrement count but ensure it doesn't go below 0
    case "deleteAll":
      return { count: 0 }; // Reset the count to 0
    default:
      return state; // Return the current state if action type is unrecognized
  }
};

const CouterReducer = () => {
  // useReducer is used to manage complex state logic
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main">
      <h1>Task Counter</h1>
      {/* Dispatch actions to update the state */}
      <button onClick={() => dispatch({ type: "add" })}>Add a Task</button>
      <button onClick={() => dispatch({ type: "delete" })}>Delete Task</button>
      <button onClick={() => dispatch({ type: "deleteAll" })}>Delete All</button>
      {/* Display the current count */}
      <h4>Count : {state.count}</h4>
    </div>
  );
};

export default CouterReducer;

// Why useReducer is Used Here:
// Complex State Management:

// The useReducer hook is ideal when state transitions depend on actions, especially when there are multiple ways to update the state (e.g., increment, decrement, reset).
// Better State Transition Handling:

// Instead of managing multiple useState calls for count and various actions (increment, decrement, reset), useReducer centralizes the logic in the reducer function. This makes the code cleaner and easier to maintain.
// Improved Readability and Testability:

// The reducer function isolates the logic for state updates, making it easier to understand and test each transition.
// Scalability:

// If the app grows and more actions or state transitions are required, useReducer provides a structured way to handle them by simply adding new cases to the reducer.
