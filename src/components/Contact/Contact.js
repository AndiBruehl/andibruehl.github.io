import React, { useState } from "react";
import classes from "./Contact.module.css";
import {
  FaMailBulk,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import credly_white from "../../assets/credly_white.png";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
};

const Contacts = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactForm = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const currentYear = new Date().getFullYear();

  const iconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: "3vw",
    color: "White",
  };

  const credlyIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    width: "6vw",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6 },
    },
  };

  const footerTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.6, duration: 0.6 },
    },
  };

  const contactLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.8, duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={classes.Contact}
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={classes.ContactIcons}>
        <div className={classes.footerIcons}>
          {[
            { href: "https://github.com/AndiBruehl", Icon: FaGithub },
            {
              href: "https://www.linkedin.com/in/andreas-br%C3%BChl/",
              Icon: FaLinkedin,
            },
            { href: "mailto:a.bruehl2019@gmail.com", Icon: FaMailBulk },
            {
              href: "https://www.credly.com/users/andreas-bruhl/badges",
              Icon: () => (
                <img src={credly_white} alt="Credly" style={credlyIconStyle} />
              ),
            },
            {
              href: "https://www.youtube.com/@andreasbruehldev",
              Icon: FaYoutube,
            },
            { href: "https://www.twitch.tv/tigersoul89", Icon: FaTwitch },
            {
              href: "#contact-form",
              Icon: GrContact,
              onClick: openContactForm,
            },
          ].map(({ href, Icon, onClick }, index) => (
            <motion.a
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={onClick}
              key={index}
              variants={iconVariants}
              custom={index}
            >
              <Icon style={iconStyle} />
            </motion.a>
          ))}
        </div>
      </div>
      <br />
      <motion.div
        style={{
          marginTop: "-5px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variants={logoVariants}
      >
        <a
          href="https://shop.tredition.com/author/michael-jeremy-hard"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://shop.tredition.com/img/tredition_SHOP_Logo.svg"
            height="30vw"
            alt="tredition"
            style={svgStyles}
          />
        </a>
      </motion.div>
      <motion.p className={classes.FooterText} variants={footerTextVariants}>
        &copy; {currentYear} A. Brühl - All rights reserved
      </motion.p>

      {/* <motion.a
        href="/imprint"
        style={{ textDecoration: "none", color: "white" }}
        variants={contactLinkVariants}
      >
        Impressum/Imprint
      </motion.a> */}
      {isContactModalOpen && <ContactModal onClose={closeContactModal} />}
    </motion.div>
  );
};

export default Contacts;
