import React, { useState } from "react";

const Toggle = () => {
  const [visible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!visible);
  };

  return (
    <div>
      <h2>Toggle text</h2>
      <button onClick={toggle}>{visible ? "hide text" : "show text"}</button>
      {visible && <p>this is the hidden text</p>}
    </div>
  );
};

export default Toggle;
