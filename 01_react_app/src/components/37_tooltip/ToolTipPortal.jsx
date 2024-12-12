import React from "react";
import ReactDOM from "react-dom";

const portalRoot =
  typeof document !== undefined
    ? document.getElementById("tooltip-portal")
    : null;

const ToolTipPortal = ({ children }) => {
  if (!portalRoot) return null;
  return ReactDOM.createPortal(children, portalRoot);
};

export default ToolTipPortal;
