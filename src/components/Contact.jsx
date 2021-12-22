import React, { useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {

  const { ref, inView } = useInView();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: { delay: 0.1, duration: 1.5, when: "beforeChildren"  },
      });

      animationRight.start({
        x: 0,
        transition: { delay: 0.2, duration: 2, when: "beforeChildren" },
      });
    } else {
      animationLeft.start({ x: "-200vw" });
      animationRight.start({ x: "200vw" });
    }
  });

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form
  }

  return (
    <div ref={ref}>
      <motion.h2
      id="contact"
      className="subheading"
        animate={animationLeft}
      >
        Contact
      </motion.h2>
      <motion.div
        id="contact"
        className="container form-container"  
        animate={animationRight}
      >
        <Form onSubmit={handleSubmit} className="form">
          <Row>
            <Form.Control placeholder="First name" onChange={(e) => setFirstName(e)} />
          </Row>
          <Row>
            <Form.Control placeholder="Last name" onChange={(e) => setLastName(e)}/>
          </Row>
          <Row>
            <Form.Control type="email" placeholder="e-mail" onChange={(e) => setEmail(e)}/>
          </Row>
          <Row>
            <Form.Control type="text" placeholder="Message" onChange={(e) => setMessage(e)}/>
          </Row>
          <Button type="submit">Send</Button> <Button><a href="#home">Go to the top</a></Button>
        </Form>
        <br/>
        <br/>
      </motion.div>
    </div>
  );
};
