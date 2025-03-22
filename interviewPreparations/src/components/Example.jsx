import React, { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(9);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCount((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Example;
