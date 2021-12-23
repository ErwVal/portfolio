import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const { ref, inView } = useInView();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: { delay: 0.1, duration: 1.5, when: "beforeChildren" },
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
      <motion.h2 id="contact" className="subheading" animate={animationLeft}>
        Media
      </motion.h2>
      <motion.div
        id="contact"
        className="container form-container"
        animate={animationRight}
      >
        <Row>
          <Col>
            <a href="https://github.com/ErwVal">
              {" "}
              <FaGithub className="icon-github icon" size={50} />
            </a>
          </Col>
          <Col>
            <a href="www.linkedin.com/in/erwin-rosas-valdez">
              {" "}
              <FaLinkedin className="icon-linkedin icon" size={50} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>
              <a href="#home">Go to the top</a>
            </Button>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};
