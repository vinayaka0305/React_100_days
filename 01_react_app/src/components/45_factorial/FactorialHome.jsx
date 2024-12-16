import React, { useState } from "react";
import Factorial from "./Factorial";

const FactorialHome = () => {
  const [num, setNum] = useState("");

  return (
    <div id="main">
      <h1>Factorial</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <Factorial num={num} />
    </div>
  );
};

export default FactorialHome;
