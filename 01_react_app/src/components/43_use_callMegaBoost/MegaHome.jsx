import React, { useCallback, useState } from "react";
import MegaBoost from "./MegaBoost";

const MegaHome = () => {
  const [count, setCount] = useState(0);

  const handleMeagBoost = useCallback(() => {
    setCount((prev) => prev + 1234);
  }, []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Me</button>
      <MegaBoost handleMeagBoost={handleMeagBoost} />
    </div>
  );
};

export default MegaHome;
