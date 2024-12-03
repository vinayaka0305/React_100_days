import React, { useState } from "react";

const Action = () => {
  const [paraflag, setParaFlag] = useState(false);

  const displayP = () => {
    setParaFlag((prev) => !prev);
  };

  return (
    <div>
      {paraflag && (
        <p style={{ color: "#27aedb" }}>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
      <button onClick={displayP}>click</button>
    </div>
  );
};

export default Action;
