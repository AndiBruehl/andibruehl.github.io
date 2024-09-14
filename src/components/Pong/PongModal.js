import React from "react";
import classes from "./Pong.module.css";

const PongModal = ({ onClose }) => {
  return (
    <div className={classes.ModalOverlay} onClick={onClose}>
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={classes.CloseButton} onClick={onClose}>
          &times;
        </span>
        <iframe
          src={`${process.env.PUBLIC_URL}/pong.html`}
          title="Pong Game"
          width="1024"
          height="768"
          style={{ border: "none", borderRadius: "10px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default PongModal;
