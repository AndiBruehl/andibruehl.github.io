import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { darkTheme, lightTheme } from "../../styles/themes"; // Import themes

const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode

  // Update the currentDateTime every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
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
    document.body.style.backgroundColor = !darkMode
      ? darkTheme.background
      : lightTheme.background;
    document.body.style.color = !darkMode ? darkTheme.text : lightTheme.text;
    document.body.style.backgroundImage = !darkMode
      ? darkTheme.backgroundImage
      : lightTheme.backgroundImage; // Update background image
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  useEffect(() => {
    // Lade den gespeicherten Modus aus dem localStorage, falls vorhanden
    const savedMode = localStorage.getItem("darkMode");
    const isDarkMode = savedMode === "true"; // Standard ist false (Light Mode)

    setDarkMode(isDarkMode); // Setze den Modus basierend auf dem gespeicherten Wert
    document.body.style.backgroundColor = isDarkMode
      ? darkTheme.background
      : lightTheme.background;
    document.body.style.color = isDarkMode ? darkTheme.text : lightTheme.text;
    document.body.style.backgroundImage = isDarkMode
      ? darkTheme.backgroundImage
      : lightTheme.backgroundImage; // Setze das entsprechende Hintergrundbild
    document.body.classList.toggle("dark-mode", isDarkMode);
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
          {currentDayOfWeek}, {formattedDateTime}
        </div>
        <button onClick={toggleTheme} className={classes.modeToggleButton}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
