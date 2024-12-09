import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css"; // Importing the CSS file for styling

// LoginForm component
const LoginForm = () => {
  // State to hold user details (username, password, login status)
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    isLoggedIn: false, // Tracks whether the user is logged in
  });

  // State to hold error messages for invalid login attempts
  const [errorMessage, setErrorMessage] = useState("");

  // Hook for programmatically navigating to other routes
  const navigate = useNavigate();

  // Destructuring the user details for easier access in JSX
  const { username, password, isLoggedIn } = userDetails;

  /**
   * Updates the userDetails state as the user types into the input fields.
   * @param {Object} e - The event object from the input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the input field
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Dynamically update the corresponding field in the state
    }));
  };

  /**
   * Handles form submission for login.
   * Validates the username and password, and either logs the user in
   * or sets an error message if the credentials are invalid.
   * @param {Object} e - The event object from the form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    console.log(userDetails); // Logs the current userDetails state for debugging

    // Check if the username and password match the expected values
    if (username === "admin" && password === "newton_school") {
      setUserDetails((prev) => ({
        ...prev,
        isLoggedIn: true, // Update the isLoggedIn state to true
      }));
    } else {
      // Set an error message if the credentials are invalid
      setErrorMessage("Invalid username or password");
    }
  };

  /**
   * Redirects the user to the dashboard page if they are logged in.
   * The `navigate` function is used for programmatic navigation.
   */
  if (isLoggedIn) {
    return navigate("/dashboard"); // Redirect to the dashboard page upon successful login
  }

  return (
    <div className="login-div">
      <h2>Login Form</h2>
      {/* Form for user login */}
      <form onSubmit={handleSubmit}>
        {/* Username input field */}
        <div className="username-div">
          <label htmlFor="username-label">Username: </label>
          <input
            type="text"
            id="username-label"
            name="username"
            onChange={handleChange}
            value={username} // Controlled input: value comes from state
          />
        </div>
        
        {/* Password input field */}
        <div className="password-div">
          <label htmlFor="password-label">Password: </label>
          <input
            type="password"
            id="password-label"
            name="password"
            onChange={handleChange}
            value={password} // Controlled input: value comes from state
          />
        </div>

        {/* Submit button for logging in */}
        <button className="login-btn" type="submit">
          Login
        </button>

        {/* Error message display for invalid login attempts */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
