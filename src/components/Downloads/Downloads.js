// src/components/Downloads/Downloads.js

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./Downloads.module.css";
import PageHeader from "../PageHeader/PageHeader";
import downloadsData from "./DownloadsData"; // Import the downloads data

const Downloads = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const headerAnimation = useAnimation();
  const containerAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (inView) {
        await headerAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        });
        await containerAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        });
        await textAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 1.5 },
        });
      } else {
        await headerAnimation.start({ opacity: 0 });
        await containerAnimation.start({ opacity: 0 });
        await textAnimation.start({ opacity: 0 });
      }
    };

    animateInView(); // Call the animation
  }, [inView, headerAnimation, containerAnimation, textAnimation]);

  const handleDownload = (event, link) => {
    event.preventDefault(); // Prevent the default action of the link

    // Create a link to the PDF file
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = link;
    a.target = "_blank"; // Open in a new tab
    a.rel = "noopener noreferrer"; // Security best practice for opening in a new tab

    // Append the a element to the DOM and simulate the click
    document.body.appendChild(a);
    a.click();

    // Remove the a element from the DOM
    document.body.removeChild(a);
  };

  const containerStyles = {
    margin: "0 15%",
    marginTop: "-2.75%",
    backgroundColor: "rgba(135, 206, 235, 0.5)",
    padding: "2%",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    zIndex: 2000000000000,
    maxWidth: "100vw",
    marginLeft: "20vw",
  };

  const textContainerStyles = {
    flex: 1,
    paddingRight: "20px",
  };

  const h2Style = {
    fontWeight: "normal",
    fontSize: "26px",
    marginBottom: "15px",
    fontStyle: "italic bold",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const h3Style = {
    fontWeight: "normal",
    fontSize: "16px",
    marginBottom: "16px",
    fontStyle: "italic bold",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const paragraphStyles = {
    fontWeight: "normal",
    fontSize: "18px",
    marginBottom: "20px",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none", // No underline
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.Downloads}
      id="downloads"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerAnimation}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <PageHeader title={"Downloads"} />
      </motion.div>
      <div ref={ref} className={classes.DownloadContent}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={containerAnimation}
          transition={{ duration: 1, delay: 1 }}
          style={containerStyles}
        >
          <div style={textContainerStyles}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={textAnimation}
              transition={{ duration: 1, delay: 1.5 }}
              style={h2Style}
            >
              Downloads
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={textAnimation}
              transition={{ duration: 1, delay: 1.5 }}
              style={h3Style}
            >
              (Weiterleitung erfolgt auf GoogleDrive, dort stehen die Dateien
              zur Verfügung.)
            </motion.h3>
            <br />
            {downloadsData.map((download) => (
              <motion.p
                initial={{ opacity: 0 }}
                animate={textAnimation}
                transition={{ duration: 1, delay: 1.5 }}
                style={paragraphStyles}
                key={download.id}
              >
                <a
                  href={download.id}
                  onClick={(e) => handleDownload(e, download.link)}
                  style={linkStyles}
                >
                  {download.text}
                </a>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Downloads;
