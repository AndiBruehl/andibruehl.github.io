import React, { useState } from "react";
import classes from "./Pong.module.css";
import PongModal from "./PongModal";
import { motion } from "framer-motion";

const Pong = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPongGame = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className={classes.pong}
      id="pong"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.pongIcons}>
        <div className="footer-icons">
          <a href="#pong" onClick={openPongGame}>
            PONG
          </a>
        </div>
      </div>
      {isModalOpen && <PongModal onClose={closeModal} />}
    </motion.div>
  );
};

export default Pong;
