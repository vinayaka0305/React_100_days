import React, { useEffect, useState } from "react";
import ToolTipPortal from "./ToolTipPortal";

const DynamicToolTip = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("this is a tooltip");
  });
  return (
    <ToolTipPortal>
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          backgroundColor: "gray",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {content}
      </div>
    </ToolTipPortal>
  );
};

export default DynamicToolTip;
