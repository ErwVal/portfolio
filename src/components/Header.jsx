import React from "react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 3,
      when: "beforeChildren",
    },
  },
};

export const Header = () => {
  return (
    <motion.header
    variants={headerVariants}
    initial="hidden"
    animate="visible">
      <div>
        <h1 id="home">EV</h1>
      </div>
      <div className="navegation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href='/somefile.txt' download>CV</a>
      </div>
    </motion.header>
  );
};