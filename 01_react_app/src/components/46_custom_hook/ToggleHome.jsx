import React from "react";
import useToggle from "./useToggle";

const ToggleHome = () => {
  const { toggle, toggleFn } = useToggle();

//   console.log(toggle,toggleFn)

  return (
    <div>
      <button onClick={toggleFn}>
        {toggle ? "toggled" : "click to toggle"}
      </button>
    </div>
  );
};

export default ToggleHome;
