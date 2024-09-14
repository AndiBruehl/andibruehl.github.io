import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHeader from "../PageHeader/PageHeader";
import classes from "./Links.module.css";
import linksData from "./LinksData"; // Import the links data

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
};

const containerStyles = {
  margin: "0 15%",
  marginTop: "-4%",
  backgroundColor: "rgba(135, 206, 235, 0.5)",
  padding: "1%",
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

const paragraphStyles = {
  fontWeight: "normal",
  fontSize: "18px",
  fontFamily: '"Playfair Display", serif',
  color: "white",
  textDecoration: "none",
};

const Links = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
  });
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
  });
  const headerAnimation = useAnimation();
  const containerAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (headerInView) {
        await headerAnimation.start({
          opacity: 1,
          transition: { duration: 1 },
        });
      } else {
        await headerAnimation.start({ opacity: 0 });
      }

      if (containerInView) {
        await containerAnimation.start({
          opacity: 1,
          transition: { duration: 1 },
        });
        await textAnimation.start({
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        });
      } else {
        await containerAnimation.start({ opacity: 0 });
        await textAnimation.start({ opacity: 0 });
      }
    };

    animateInView();
  }, [
    headerInView,
    containerInView,
    headerAnimation,
    containerAnimation,
    textAnimation,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.Links}
      id="links"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerAnimation}
        style={{ marginBottom: "1rem" }}
      >
        <PageHeader title="Links" />
      </motion.div>

      <div className={classes.DownloadContent} ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={containerAnimation}
          style={containerStyles}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={textAnimation}
            style={textContainerStyles}
          >
            {linksData.map(({ href, icon, alt, text, extraLink }) => (
              <p style={paragraphStyles} key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  <img
                    src={icon}
                    width="20px"
                    height="20px"
                    alt={alt}
                    style={svgStyles}
                  />{" "}
                  {text}
                  {extraLink && (
                    <a href={extraLink.href} target="_blank" rel="noreferrer">
                      {extraLink.text}
                    </a>
                  )}
                </a>
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Links;
