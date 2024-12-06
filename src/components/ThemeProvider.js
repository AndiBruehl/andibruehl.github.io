import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeProvider = ({ children }) => {
  const [theme] = useState("light");

  const root = document.documentElement;
  const themeVariables = theme === "dark" ? darkTheme : lightTheme;

  Object.keys(themeVariables).forEach((key) => {
    root.style.setProperty(`--${key}`, themeVariables[key]);
  });

  document.body.style.backgroundImage = themeVariables.backgroundImage;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";

  useEffect(() => {
    const root = document.documentElement;
    const themeVariables = theme === "dark" ? darkTheme : lightTheme;

    Object.keys(themeVariables).forEach((key) => {
      root.style.setProperty(`--${key}`, themeVariables[key]);
    });

    document.body.style.backgroundImage = themeVariables.backgroundImage;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
