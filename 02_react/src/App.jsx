import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import ContextProvider from "./components/context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
