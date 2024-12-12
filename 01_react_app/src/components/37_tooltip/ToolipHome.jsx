import React, { useState } from "react";
import DynamicToolTip from "./DynamicToolTip";

const ToolipHome = () => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div>
      <span
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
      >
        Hover over this text to see the dynamic tooltip.
      </span>
      {showToolTip && <DynamicToolTip />}
    </div>
  );
};

export default ToolipHome;
