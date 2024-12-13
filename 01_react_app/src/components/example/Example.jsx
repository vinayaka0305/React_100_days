import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "delete":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case "deleteAll":
      return { count: 0 };
    default:
      return state;
  }
};

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="main">
      <h4>Tasks</h4>
      <button onClick={() => dispatch({ type: "add" })}>add task</button>
      <button onClick={() => dispatch({ type: "delete" })}>delete task</button>
      <button onClick={() => dispatch({ type: "deleteAll" })}>
        delete all
      </button>
      <h4>count:{state.count}</h4>
    </div>
  );
};

export default Example;
