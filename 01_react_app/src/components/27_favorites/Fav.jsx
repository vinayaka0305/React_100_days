import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeC from "./HomeC";
import AboutC from "./AboutC";
import Products from "./Products";
import Favorites from "./Favorites";
import SingleProduct from "./SingleProduct";
import "./fav.css";

const Fav = () => {
  return (
    <div>
      <Router>
        <nav className="nav-container">
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<HomeC />} />
          <Route path="/about" element={<AboutC />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Fav;
