import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.5,
      duration: 1.5,
      when: "beforeChildren",
    },
  },
};

const headerVariantsTwo = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4,
      duration: 1.5,
    },
  },
};

export const Welcome = () => {
  return (
    <motion.div
      id="welcome"
      className="welcome"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Welcome</h1>
      <motion.h2 variants={headerVariants} initial="hidden" animate="visible">
        I'm Erwin{" "}
      </motion.h2>

      <motion.h2
        variants={headerVariantsTwo}
        initial="hidden"
        animate="visible"
      >
        A software developer
      </motion.h2>
    </motion.div>
  );
};
