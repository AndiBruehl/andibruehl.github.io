// ContactModal.js

import React from "react";
import classes from "./Contact.module.css";
import Imprint from "./Imprint";

const ImprintModal = ({ onClose }) => {
  return (
    <div className={classes.ModalOverlay} onClick={onClose}>
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={classes.CloseButton} onClick={onClose}>
          &times;
        </span>
        <Imprint />
      </div>
    </div>
  );
};

export default ImprintModal;
