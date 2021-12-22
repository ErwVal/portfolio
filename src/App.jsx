import React from "react";
import "./styling/App.scss";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Welcome } from "./components/Welcome";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
};
export const App = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <Header />
      <Welcome />
      <ProjectCard />
      <AboutMe />
      <Contact />
    </motion.div>
  );
};