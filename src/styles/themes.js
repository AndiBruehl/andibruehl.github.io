// src/styles/themes.js
export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  navbarBackground: "rgba(135, 206, 235, 0.5)",
  linkColor: "white",
  navbarScrolledBackground: "rgba(55, 160, 201, 0.885)",
  navbarLinkHoverColor: "#0027b2",
  backgroundImage: 'url("/assets/Background-dark.jpg")', // Light mode image (correct path)
  backgroundImageFilter: "brightness(100%)",
};

export const darkTheme = {
  background: "#121212",
  text: "#E0E0E0",
  navbarBackground: "#333333",
  linkColor: "#E0E0E0",
  navbarScrolledBackground: "#333333",
  navbarLinkHoverColor: "#BB86FC",
  backgroundImage: 'url("/assets/Background.jpg")', // Dark mode image (correct path)
  backgroundImageFilter: "brightness(50%)",
};
