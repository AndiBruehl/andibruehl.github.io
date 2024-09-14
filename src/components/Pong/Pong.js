import React, { useState, useEffect } from "react";
import classes from "./Pong.module.css";
import PongModal from "./PongModal";
import { motion } from "framer-motion";

const svgStyles = {
  fill: "#0027b2", // Set the egg color to #0027b2
  transform: "rotate(-15deg)", // Rotate the SVG 15 degrees to the left
};

const Pong = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1679) {
        setIsVisible(false);
        setIsModalOpen(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openPongGame = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

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
            <h4>
              Herzlichen Glückwunsch, du hast das Easter-Egg gefunden! Viel Spaß
              beim Spielen! (klick auf das Ei!)
            </h4>
            <br />
            <img
              src="https://www.svgrepo.com/show/116037/easter-egg.svg"
              width="50px"
              height="50px"
              alt="Pong"
              style={svgStyles} // Apply the egg color style
            />
          </a>
        </div>
      </div>
      {isModalOpen && <PongModal onClose={closeModal} />}
    </motion.div>
  );
};

export default Pong;
