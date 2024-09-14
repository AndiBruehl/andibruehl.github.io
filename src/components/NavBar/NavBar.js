import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { darkTheme, lightTheme } from "../../styles/themes"; // Pfad zu deiner themes.js

const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true); // Standard auf Dark Mode

  // Update the currentDateTime every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Get the current day of the week
  const daysOfWeek = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const currentDayOfWeek = daysOfWeek[currentDateTime.getDay()];

  // Format the date and time
  const formattedDateTime = currentDateTime.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.body.style.backgroundColor = darkMode
      ? darkTheme.background
      : lightTheme.background;
    document.body.style.color = darkMode ? darkTheme.text : lightTheme.text;
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  useEffect(() => {
    // Apply saved theme from localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.style.backgroundColor = savedMode
      ? darkTheme.background
      : lightTheme.background;
    document.body.style.color = savedMode ? darkTheme.text : lightTheme.text;
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  return (
    <div>
      <div
        className={classes.NavBar}
        style={{
          background: darkMode
            ? darkTheme.navbarBackground
            : lightTheme.navbarBackground,
          transition: "background 0.3s ease",
        }}
      >
        <Navigation />
        <MobileNavigation />
        <div className={classes.Time}>
          {currentDayOfWeek}, {formattedDateTime} Uhr
        </div>
        <button onClick={toggleTheme} className={classes.modeToggleButton}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
