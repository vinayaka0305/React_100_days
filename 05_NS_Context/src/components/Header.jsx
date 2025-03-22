import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>
      <NavLink to="/about">
        <li>About</li>
      </NavLink>
    </nav>
  );
};

export default Header;
