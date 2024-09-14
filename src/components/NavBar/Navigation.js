// Navigation.js
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={classes.Navigation}>
      <NavLinks activeLink={activeLink} onLinkClick={handleLinkClick} />
    </nav>
  );
};

export default Navigation;
