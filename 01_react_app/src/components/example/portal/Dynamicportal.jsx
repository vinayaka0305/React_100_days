import React, { useEffect, useState } from "react";
import PortalToolTip from "./PortalToolTip";

const Dynamicportal = () => {
  const [content, setContent] = useState("");

  useEffect(()=>{
    setContent('this is tooltip')
  },[])

  return (
    <PortalToolTip>
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
    </PortalToolTip>
  );
};

export default Dynamicportal;
