import React, { useState } from "react";

const Theme = () => {
  const [dark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!dark);
  };

  return (
    <div
      style={
        dark
          ? { background: "#333", color: "#fff" }
          : { background: "#fff", color: "#333" }
      }
    >
      <h1>{dark?"dark mode activated":"light mode activated"}</h1>
      <button onClick={toggle}>{dark?"switch to lightmode":"switch to darkmode"}</button>
    </div>
  );
};

export default Theme;
