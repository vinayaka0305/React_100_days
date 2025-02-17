import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const UseReduerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Name: {state.name}</h2>
      <h2>Email: {state.email}</h2>
      <div>
        <label>
          name:
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          email:
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </label>
      </div>
    </div>
  );
};

export default UseReduerExample;
