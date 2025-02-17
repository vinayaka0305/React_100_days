import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Header;
