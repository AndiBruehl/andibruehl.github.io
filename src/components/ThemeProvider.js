import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeProvider = ({ children }) => {
  const [theme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const themeVariables = theme === "dark" ? darkTheme : lightTheme;

    Object.keys(themeVariables).forEach((key) => {
      root.style.setProperty(`--${key}`, themeVariables[key]);
    });

    // Apply background image
    document.body.style.backgroundImage = themeVariables.backgroundImage;
    document.body.style.backgroundRepeat = "no-repeat"; // No repeat
    document.body.style.backgroundSize = "cover"; // Cover entire screen
    document.body.style.backgroundPosition = "center"; // Center the background
    document.body.style.backgroundAttachment = "fixed"; // Fixed while scrolling
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
