import React from "react";
import { motion } from "framer-motion";
import { Navbar, Nav, Container } from "react-bootstrap";

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
    <motion.div variants={headerVariants} initial="hidden" animate="visible" className="div-navbar">
      <Navbar collapseOnSelect expand="sm" variant="dark" bg="transparent">
        <Container>
          <Navbar.Text id="home">EV</Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Media</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};
