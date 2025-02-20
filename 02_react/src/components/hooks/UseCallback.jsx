import React, { useCallback, useMemo, useState } from "react";
import PrintNum from "./PrintNum";

const UseCallback = () => {
  const [count, setCount] = useState(1);
  const [dark, setDark] = useState(false);

  const cStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

//   const myCal = () => {
//     return [count * 1, count * 2, count * 3];
//   };

    const myCal = useCallback(()=>{
        return [count * 1, count * 2, count * 3];
    },[count])

  return (
    <div style={cStyle}>
      {/* <h2>count:{myCal}</h2> */}
      <PrintNum myCal={myCal} />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
      />
      <div>
        <button onClick={() => setDark((prev) => !prev)}>toggle</button>
      </div>
    </div>
  );
};

const expensiveCal = (count) => {
  console.log("rendering");
  for (let i = 0; i < 1000; i++) {}
  return count;
};

export default UseCallback;
