import React, { useReducer } from "react";

const intialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
    
  const [state, dispatch] = useReducer(reducer, intialState);

  const increment = () => {
    dispatch({ type: "increase" });
  };
  const decrement = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      <h2>count: {state.count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default UseReducer;
