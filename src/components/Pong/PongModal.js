import React from "react";
import classes from "./Pong.module.css";

const PongModal = ({ onClose }) => {
  // Function to go back to the previous page
  const goBack = () => {
    window.history.back();
  };

  // Function to reload the page for a new game
  const reloadPage = () => {
    window.location.reload();
  };

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

        {/* Back and New Game Buttons */}
        <div className={classes.ButtonContainer}>
          <button className={classes.Button} onClick={goBack}>
            Zurück
          </button>
          <button className={classes.Button} onClick={reloadPage}>
            Neues Spiel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PongModal;
