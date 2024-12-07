import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import necessary components from react-router-dom
import React from "react";
import Home from "./Home"; // Import the Home component
import About from "./About"; // Import the About component
import Contact from "./Contact"; // Import the Contact component
import "./navstyle.css"; // Import the CSS file for styling

// Define the RoutersIntro functional component
const RoutersIntro = () => {
  return (
    <Router>
      {/* The Router component wraps the entire application to enable routing functionality */}
      <div>
        {/* Navigation bar */}
        <nav className="navbar">
          <ul className="navbar-nav">
            {/* Navigation link to the Home route */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* Navigation link to the About route */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* Navigation link to the Contact route */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the Home component */}
        <Route path="" element={<Home />} />
        {/* Route for the About component */}
        <Route path="/about" element={<About />} />
        {/* Route for the Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutersIntro;
