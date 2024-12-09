import React from "react";

const Dashboard2 = ({ setIsLoggedIn }) => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={() => setIsLoggedIn(false)}>Log out</button>
    </div>
  );
};

export default Dashboard2;
