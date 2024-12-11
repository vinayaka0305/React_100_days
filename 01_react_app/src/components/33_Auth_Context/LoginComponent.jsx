import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const LoginComponent = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>You are logged in</p>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <p>yor are not logged in</p>
          <button onClick={() => login("sampleToken_AV")}>login</button>
        </>
      )}
    </div>
  );
};

export default LoginComponent;
