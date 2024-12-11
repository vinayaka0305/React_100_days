import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsTT from "./CoinsTT";
import CoinDetails from "./CoinDetails";
import "./coins.css";

const CoinsHome = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinsTT />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
};

export default CoinsHome;
