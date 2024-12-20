import React, { useEffect, useState } from "react";

const PrintNum = ({ prinNumbers }) => {
  // console.log(prinNumbers);
//   console.log(prinNumbers());
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("child component is rendering");
   setData(prinNumbers())
  }, [prinNumbers]);
  return (
    <div>
      {data.map((val, index) => (
        <li key={index}>{val}</li>
      ))}
    </div>
  );
};

export default PrintNum;
