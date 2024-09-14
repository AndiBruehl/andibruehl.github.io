import React, { useEffect } from "react";
import classes from "./About.module.css";
import me from "./../../assets/me.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutText from "./AboutText";

// Animation variants
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const containerStyles = {
  margin: "0 5%",
  marginTop: "2.5%",
  backgroundColor: "rgba(135, 206, 235, 0.5)",
  padding: "2%",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  display: "flex",
  zIndex: 2000000000000,
  maxWidth: "100vw",
  marginLeft: "25vw",
};

const textContainerStyles = {
  flex: 1,
  textAlign: "center",
  fontStyle: "larger",
  paddingRight: "20px",
  paddingLeft: "15px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fontSize: "5rem !important", // Schriftgröße mit !important
};

const About = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
  });
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();
  const containerAnimationControl = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (containerInView) {
        await containerAnimationControl.start({
          opacity: 1,
          transition: { duration: 1 },
        });
        // After the container fades in, start the image and text animations sequentially
        await imageAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        });
        await textAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        });
      } else {
        await containerAnimationControl.start({
          opacity: 0,
        });
        await imageAnimation.start({
          opacity: 0,
        });
        await textAnimation.start({
          opacity: 0,
        });
      }
    };

    animateInView();
  }, [
    containerInView,
    containerAnimationControl,
    imageAnimation,
    textAnimation,
  ]);

  return (
    <motion.div
      className={classes.AboutMe}
      id="about"
      ref={containerRef}
      initial="hidden"
      animate={containerAnimationControl}
      variants={containerAnimation}
    >
      <motion.div className={classes.Container} style={containerStyles}>
        <motion.div
          className={classes.Photo}
          initial="hidden"
          animate={imageAnimation}
          variants={fadeInAnimation}
        >
          <img className={classes.Me} src={me} alt="Profilepic" />
        </motion.div>
        <motion.div
          style={textContainerStyles}
          initial="hidden"
          animate={textAnimation}
          variants={fadeInAnimation}
        >
          <AboutText />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
