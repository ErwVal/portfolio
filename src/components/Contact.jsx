import React, { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
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
        className="container"  
        animate={animationRight}
      >
        <Form className="form">
          <Row>
            <Form.Control placeholder="First name" />
          </Row>
          <Row>
            <Form.Control placeholder="Last name" />
          </Row>
          <Row>
            <Form.Control type="email" placeholder="e-mail" />
          </Row>
          <Row>
            <Form.Control type="text" placeholder="Message" />
          </Row>
        </Form>
        <br/>
        <br/>
        <a href="#home">Go to the top</a>
      </motion.div>
    </div>
  );
};
