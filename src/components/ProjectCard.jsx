import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaSass, FaGit, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiPostgresql } from "react-icons/si";

export const ProjectCard = () => {
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
  }); // add [inView]

  return (
    <div ref={ref}>
      <motion.h2 id="projects" className="subheading" animate={animationLeft}>
        Projects
      </motion.h2>

      <motion.div className="container projects">
        <motion.h2 animate={animationLeft}>Hotel Management Website</motion.h2>
        <motion.div
          class="embed-responsive embed-responsive-16by9 "
          animate={animationRight}
        >
          <Row>
            <Col className="font-non-title">
              <Row>
                <span>
                  {" "}
                  A hotel website in with a React-TS frontend and C# backend
                  with a PostgreSQL relational database.
                </span>
              </Row>

              <Row>
                <span>Authentication is handled with JSON Web Tokens.</span>
              </Row>
              <Row>
                <span>
                  Bootstrap, Sass, and Framer-Motion used for styling and
                  animations.
                </span>
              </Row>

              <Row>
                <span>
                  See the project on{" "}
                  <a href="https://github.com/ErwVal/Hotel-Management-Website">
                    {" "}
                    Github
                  </a>
                </span>
              </Row>
            </Col>
            <Col>
              <motion.video
                controls
                poster="/demo1.png"
                width="640"
                height="480"
                animate={animationRight}
                className="hotel-video"
              >
                <source src="demo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </Col>
          </Row>
        </motion.div>
        <br />

        <motion.div animate={animationRight} className="div-icons">
          <Row>
            <Col>
              <FaReact className="icon-react icon" size={50} />{" "}
            </Col>
            <Col>
              <SiTypescript className="icon-ts icon" size={50} />
            </Col>
            <Col>
              <SiCsharp className="icon-cs icon" size={50} />
            </Col>
            <Col>
              <SiPostgresql className="icon-sql icon" size={50} />
            </Col>
            <Col>
              <FaBootstrap className="icon-bootstrap icon" size={50} />
            </Col>
            <Col>
              <FaSass className="icon-sass icon" size={50} />
            </Col>
            <Col>
              <FaGit className="icon-git icon" size={50} />
            </Col>
          </Row>
        </motion.div>
      </motion.div>
    </div>
  );
};
