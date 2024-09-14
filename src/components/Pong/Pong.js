import React, { useState, useEffect } from "react";
import classes from "./Pong.module.css";
import PongModal from "./PongModal";
import { motion } from "framer-motion";

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
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
            <h6>
              Herzlichen Glückwunsch, du hast das Easter-Egg gefunden! Viel Spaß
              beim Spielen! (klick auf das Ei!)
            </h6>
            <br />
            <img
              src="https://www.svgrepo.com/show/116037/easter-egg.svg"
              width="50px"
              height="50px"
              alt="Pong"
              style={svgStyles}
            />
          </a>
        </div>
      </div>
      {isModalOpen && <PongModal onClose={closeModal} />}
    </motion.div>
  );
};

export default Pong;
