import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const [selectedLink, setSelectedLink] = useState("Home");

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (isMobile) {
      closeMobileMenu();
    }
  };

  const links = [
    { name: "Home", href: "/", delay: 0.05 },
    { name: "About", href: "/about", delay: 0.1 },
    { name: "Skills", href: "/skills", delay: 0.15 },
    { name: "Portfolio", href: "/portfolio", delay: 0.2 },
    { name: "Links", href: "/links", delay: 0.25 },
    { name: "YouTube", href: "/youtube", delay: 0.3 },
    { name: "Certificates", href: "/certs", delay: 0.35 },
    { name: "Downloads", href: "/downloads", delay: 0.4 },
    { name: "Contact", href: "/contact", delay: 0.45 },
    { name: "Imprint", href: "/imprint", delay: 0.45, hidden: true },
  ];

  return (
    <ul>
      {links.map(({ name, href, delay }) => (
        <motion.li
          key={name}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay }}
          onClick={() => handleLinkClick(name)}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.2 }}
          className={selectedLink === name ? "selected" : ""}
        >
          <Link to={href}>{name}</Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;
