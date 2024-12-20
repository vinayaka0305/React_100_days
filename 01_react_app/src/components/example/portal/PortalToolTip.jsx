import React from "react";
import ReactDOM from "react-dom";

const PortalRoot =
  typeof document !== undefined
    ? document.getElementById("tooltip-portal")
    : null;

const PortalToolTip = ({ children }) => {
  if (!PortalRoot) return null;

  return ReactDOM.createPortal(children, PortalRoot);
};

export default PortalToolTip;
