import React, { useReducer } from "react";

const initialState = {
  userName: "",
  password: "",
  isLogged: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, userName: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "LOGIN":
      return { ...state, isLogged: action.payload };
    case "LOGOUT":
      return {
        ...state,
        userName: "",
        password: "",
        isLogged: false,
        error: false,
      };
    case "ERROR":
      return { ...state, error: true };
  }
};

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUserName = (e) => {
    dispatch({ type: "USERNAME", payload: e.target.value });
  };
  const handlePassword = (e) => {
    dispatch({ type: "PASSWORD", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.userName.length !== 0 && state.password.length !== 0) {
      dispatch({ type: "LOGIN", payload: true });
    } else {
      dispatch({ type: "ERROR" });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div id="main">
      {state.isLogged && (
        <section>
          <h1>login successful</h1>
          <p>Welcome {state.userName}</p>
          <button onClick={handleLogout}>logout</button>
        </section>
      )}
      {!state.isLogged && (
        <form onSubmit={handleSubmit}>
          {state.error && <p>username or password invalid</p>}
          <section>
            <label>username: </label>
            <input type="text" onChange={handleUserName} />
          </section>
          <section>
            <label>password: </label>
            <input type="password" onChange={handlePassword} />
          </section>
          <button type="submit">login</button>
        </form>
      )}
    </div>
  );
};

export default Example;
