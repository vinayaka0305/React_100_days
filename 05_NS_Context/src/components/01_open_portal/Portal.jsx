import React, { useState } from "react";
import Modal from "./Modal";

const Portal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);
  return (
    <div>
      <button id="open-modal" onClick={open}>
        Open Modal
      </button>
      {isModalOpen && <Modal close={close} />}
    </div>
  );
};

export default Portal;
