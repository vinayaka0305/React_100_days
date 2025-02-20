import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  // const[count,setCount] = useState(0);
  const [uInput, setUinpt] = useState("");
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setCount((prev)=>prev+1);
    count.current = count.current + 1;
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>text:{uInput}</h2>
      <h2>count:{count.current}</h2>
      <div>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setUinpt(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
