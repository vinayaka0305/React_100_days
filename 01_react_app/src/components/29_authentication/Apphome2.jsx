import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard2 from "./Dashboard2"; // Dashboard component
import Login from "./Login"; // Login component
import Register from "./Register"; // Registration component
import "./formA.css"; // Import CSS for styling

// Main Apphome2 component
const Apphome2 = () => {
  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to track whether to navigate back to the login page after registration
  const [navigate, setNavigate] = useState(false);

  // State to store the email and password from registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // JSX rendering
  return (
    <div>
      {/* Router provides navigation and route handling */}
      <Router>
        <Routes>
          {/* Route for the home page ("/") */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                // If the user is logged in, redirect to the dashboard
                <Navigate to="/dashboard" />
              ) : (
                // Otherwise, render the Login component
                <Login
                  email={email}
                  password={password}
                  setIsLoggedIn={setIsLoggedIn} // Callback to update login state
                  setNavigate={setNavigate} // Callback to trigger navigation from Login
                />
              )
            }
          />

          {/* Route for the registration page ("/register") */}
          <Route
            path="/register"
            element={
              navigate ? (
                // After successful registration, navigate to the login page
                <Navigate to="/" />
              ) : (
                // Render the Register component
                <Register
                  emailChange={setEmail} // Callback to update email state
                  passwordChange={setPassword} // Callback to update password state
                  setNavigate={setNavigate} // Callback to trigger navigation after registration
                />
              )
            }
          />

          {/* Route for the dashboard page ("/dashboard") */}
          <Route
            path="/dashboard"
            element={
              !isLoggedIn ? (
                // If the user is not logged in, redirect to the login page
                <Navigate to="/" />
              ) : (
                // Otherwise, render the Dashboard2 component
                <Dashboard2 setIsLoggedIn={setIsLoggedIn} // Callback to handle logout
                />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Apphome2;
