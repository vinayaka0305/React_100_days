import React, { useEffect, useState } from "react";

const UseeEffect = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("hiii");
  }, [num]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Num:{num}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        incrementCount
      </button>
      <button onClick={() => setNum((prev) => prev + 1)}> incrementNum</button>
    </div>
  );
};

export default UseeEffect;
