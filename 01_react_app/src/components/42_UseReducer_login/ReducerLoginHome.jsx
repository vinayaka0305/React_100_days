import React, { useReducer } from "react";
import "./us.css"

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "LOGIN":
      return { ...state, isLoggedIn: action.payload };
    case "LOGOUT":
      return {
        ...state,
        username: "",
        password: "",
        isLoggedIn: false,
        error: false,
      };
    case "ERROR":
      return { ...state, error: true };
  }
};

const ReducerLoginHome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUserName = (e) => {
    dispatch({ type: "USERNAME", payload: e.target.value });
  };

  const handlePassword = (e) => {
    dispatch({ type: "PASSWORD", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username.length !== 0 && state.password.length !== 0) {
      dispatch({ type: "LOGIN", payload: true });
    } else {
      dispatch({ type: "ERROR" });
    }
  };

  const LogoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="main">
      {state.isLoggedIn && (
        <section className="logout-section">
          <h1>Login successfully</h1>
          <p>Welcome {state.username}</p>
          <button onClick={LogoutHandler}>logout</button>
        </section>
      )}
      {!state.isLoggedIn && (
        <form onSubmit={handleSubmit}>
          {state.error && <p className="invalid-error">Invalid username or password!</p>}
          <section className="username-input">
            <label>Username: </label>
            <input
              type="text"
              placeholder="username"
              onChange={handleUserName}
            />
          </section>
          <section className="password-input">
            <label>Password: </label>
            <input
              type="password"
              placeholder="password"
              onChange={handlePassword}
            />
          </section>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default ReducerLoginHome;
