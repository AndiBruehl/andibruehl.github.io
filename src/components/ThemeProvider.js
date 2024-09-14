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

    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode", theme === "dark");

    // Log the current theme mode
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
