import React from "react";
import AuthProvider from "./contexts/AuthContext";
import LoginComponent from "./LoginComponent";

const HomeAuth = () => {
  return (
    <>
      <AuthProvider>
        <h2>Welcome to Home</h2>
        <LoginComponent />
      </AuthProvider>
    </>
  );
};

export default HomeAuth;
