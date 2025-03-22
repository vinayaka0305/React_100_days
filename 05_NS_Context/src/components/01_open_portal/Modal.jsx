import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ close }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>Hello, I'm a modal</h2>
      <button id="close-modal-btn" onClick={close}>
        Close Modal
      </button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
