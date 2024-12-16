import React, { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFn = () => {
    setToggle((prev) => !prev);
  };
  return { toggle, toggleFn };
};

export default useToggle;
