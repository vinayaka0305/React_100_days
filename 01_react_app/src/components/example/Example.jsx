import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../25_router/Home";
import Shapesx from "./Shapesx";

const Example = () => {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shapes">Shapes</Link>
          </li>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shapes" element={<Shapesx />} />
      </Routes>
    </Router>
  );
};

export default Example;
