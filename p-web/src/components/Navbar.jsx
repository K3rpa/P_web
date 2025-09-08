// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const reduce = useReducedMotion();


  const containerVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {

        duration: reduce ? 0 : 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: reduce ? 0 : 0.08,
      },
    },
  };


  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: reduce ? 0 : 0.25 } },
  };

  return (
    <motion.nav
      style={styles.nav}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     <motion.img
        src="/web_logo.png"
        alt="logo"
        style={styles.logo}
        variants={itemVariants}
      />

      <motion.ul style={styles.navLinks}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/projects", label: "Projects" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <motion.li key={to} variants={itemVariants}>
            <NavLink
              to={to}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? "gray" : "white",
              })}
              onMouseEnter={(e) => {
                if (e.target.style.color !== "gray") e.target.style.color = "#6d6d6dff";
              }}
              onMouseLeave={(e) => {
                if (e.target.style.color !== "gray") e.target.style.color = "white";
              }}
            >
              {label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

const styles = {
  logo: {
    height: "96px",
    marginRight: "2rem",
    objectFit: "contain", 
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.1rem 2rem 0.1rem 4rem",
    background: "black",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "3rem",
    margin: 0,
    padding: 0,
    fontFamily: "monospace",
  },
  link: {
    textDecoration: "none",
    fontSize: "1.5rem",
    transition: "color 0.2s ease",
  },
};
