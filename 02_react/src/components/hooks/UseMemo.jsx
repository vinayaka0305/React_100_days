import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const cStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

//  const myCal = expensiveCal(count);

const myCal = useMemo(()=>{
   return expensiveCal(count)
},[count])


  return (
    <div style={cStyle}>
      <h2>count:{myCal}</h2>
      <input type="number" onChange={(e) => setCount(e.target.valueAsNumber)} />
      <div>
        <button onClick={() => setDark((prev) => !prev)}>toggle</button>
      </div>
    </div>
  );
};

const expensiveCal=(count)=>{
    console.log('rendering')
    for(let i=0;i<1000;i++){}
    return count;
}   

export default UseMemo;
