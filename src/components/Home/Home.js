import React, { Component } from "react";
import classes from "./Home.module.css";
import code from "./../../assets/code.svg";
import binaryWorld from "./../../assets/binaryWorld.png";
import { motion } from "framer-motion";
import WaveLine from "./WaveLine";
import words from "./wordList"; // Import the word list

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeWord, 4000); // Change every 4 seconds

    // Add click event to the Code image only on desktop (resolution above 1679px)
    if (window.innerWidth > 1679) {
      this.addCodeImageClickHandler();
    }

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.handleResize); // Remove event listener on unmount
  }

  // Change the word in the rotator
  changeWord = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % words.length,
    }));
  };

  // Handle resize event to toggle the click event based on screen width
  handleResize = () => {
    if (window.innerWidth > 1679) {
      this.addCodeImageClickHandler();
    } else {
      this.removeCodeImageClickHandler();
    }
  };

  // Add the click handler for desktop
  addCodeImageClickHandler = () => {
    const codeImage = document.querySelector(`.${classes.Code}`);
    if (codeImage) {
      codeImage.addEventListener("click", this.redirectToPong);
    }
  };

  // Remove the click handler for mobile
  removeCodeImageClickHandler = () => {
    const codeImage = document.querySelector(`.${classes.Code}`);
    if (codeImage) {
      codeImage.removeEventListener("click", this.redirectToPong);
    }
  };

  // Redirect to the /pong route
  redirectToPong = () => {
    window.location.href = "/pong";
  };

  render() {
    const { currentIndex } = this.state;
    const currentWord = words[currentIndex].toUpperCase(); // Get word in uppercase

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.Home}
        id="/"
      >
        <div className={classes.Container}>
          <h1 className={classes.Hello}>Hallo Welt!</h1>
          <h1>Willkommen auf meiner Website!</h1>
          <div className={classes.Rotator}>
            <motion.h1
              key={currentWord}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }} // Smooth fade effect
              className={classes.ChangingTitle}
            >
              {currentWord}
            </motion.h1>
          </div>
        </div>

        <motion.img
          animate={{ scale: [0, 1, 0.5], rotate: 180 }}
          transition={{ delay: 0.41, duration: 5, ease: "easeInOut" }}
          className={classes.Code}
          src={code}
          alt="Code"
        />

        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8] }}
          transition={{ delay: 1.4, duration: 2, ease: "easeInOut" }}
          className={classes.binaryWorld}
          src={binaryWorld}
          alt="Binary World"
        />

        <WaveLine style={{ zIndex: "2" }} />
      </motion.div>
    );
  }
}

export default Home;
