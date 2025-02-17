import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loginStatus =
    JSON.parse(sessionStorage.getItem("loginStatus")) || false;

  if (!loginStatus) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
