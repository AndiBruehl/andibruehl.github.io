import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_service",
        "portfolio_template",
        e.target,
        "9B5cuouAeSD6WAoCF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const fadeInOut = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div // Wrap the form in a motion.div component
      style={{
        backgroundColor: "#141313",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      initial={{ opacity: 0 }} // Initial opacity set to 0
      animate={{ opacity: 1 }} // Animate opacity to 1
      exit={{ opacity: 0 }} // Animate opacity to 0 when form is closed
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontSize: "medium",
          maxWidth: "100%",
          padding: "4rem",
          paddingTop: "0.01rem",
          borderRadius: "10px",
          // boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        }}
        onSubmit={sendEmail}
      >
        <h2>Deine Mitteilung an mich!</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="user_email"
            required
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "0.5rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="user_name"
            required
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "0.5rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Betreff</label>
          <br />
          <input
            type="text"
            name="tag"
            required
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "0.5rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message</label>
          <br />
          <textarea
            name="message"
            required
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "0.5rem",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            value="Abschicken"
            style={{
              backgroundColor: "transparent",
              color: "white",
              margin: "0.5vh",
              padding: "1vh",
              borderRadius: "10px",
              boxShadow: "3px 4px 5px 2px rgba(0, 0, 0, 0.24)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none", // Remove border
              outline: "none", // Remove outline
              position: "relative", // Position for pseudo-elements
              overflow: "hidden", // Hide overflow for pseudo-elements
              transition: "box-shadow 0.3s ease", // Smooth transition for box-shadow changes
            }}
            // CSS-Pseudoklassen für hover und active
            onMouseOver={(e) => {
              e.target.style.boxShadow = "0 0 30px blue"; // Blaues Leuchten beim Hover
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "3px 4px 5px 2px rgba(0, 0, 0, 0.24)"; // Standard-Schatten
            }}
            onMouseDown={(e) => {
              e.target.style.boxShadow = "0 0 30px green"; // Grünes Leuchten beim Klicken
            }}
            onMouseUp={(e) => {
              e.target.style.boxShadow = "0 0 30px blue"; // Blaues Leuchten beim Loslassen der Maus
            }}
          />
        </div>

        <AnimatePresence>
          {isEmailSent && (
            <motion.p
              key="sent"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInOut}
              transition={{ duration: 2 }}
              // style={{ marginTop: "1rem" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Nachricht erfolgreich gesendet!
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
