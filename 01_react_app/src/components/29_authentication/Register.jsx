import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ emailChange, passwordChange, setNavigate }) => {
  const [newEmailDetails, setNewEmailDetails] = useState({
    newEmail: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmailDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const { newEmail, newPassword } = newEmailDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailChange(newEmail);
    passwordChange(newPassword);
    if (newEmail && newPassword) {
      setNavigate(true);
    }
  };

  return (
    <div id="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-div">
          <label htmlFor="newEmail">Email: </label>
          <input
            type="email"
            id="newEmail"
            name="newEmail"
            onChange={handleChange}
          />
        </div>
        <div className="password-div">
          <label htmlFor="newPassword">Password: </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        Already a user ?
        <Link to="/">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
