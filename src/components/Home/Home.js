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
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeWord = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % words.length,
    }));
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
