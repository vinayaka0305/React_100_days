import React from "react";

const ChildComp = ({ shape, color }) => {
  // console.log(shape,color)

  if (shape === "square") {
    return (
      <div style={{ width: "100px", height: "100px", background: color }}></div>
    );
  } else {
    if (shape === "circle") {
      return (
        <div
          style={{
            width: "100px",
            height: "100px",
            background: color,
            borderRadius: "50%",
          }}
        ></div>
      );
    }
  }
  //   return <div>ChildComp</div>;
};

export default ChildComp;
