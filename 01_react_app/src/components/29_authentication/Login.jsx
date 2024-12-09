import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ email, password, setNavigate, setIsLoggedIn }) => {
  const [loginDetails, setLoginDetail] = useState({
    emailVal: "",
    passwordVal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const { emailVal, passwordVal } = loginDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailVal == email && passwordVal == password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div id="register-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-div">
          <label htmlFor="newEmail">Email: </label>
          <input
            type="email"
            id="emailVal"
            name="emailVal"
            onChange={handleChange}
          />
        </div>
        <div className="password-div">
          <label htmlFor="newPassword">Password: </label>
          <input
            type="password"
            id="passwordVal"
            name="passwordVal"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        Don't have account ?
        <button onClick={() => setNavigate(false)}>
          <Link to="/register">Register here</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
