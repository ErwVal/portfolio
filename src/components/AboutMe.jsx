import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
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
      <motion.h2 id="about" className="subheading" animate={animationLeft}>
        About me
      </motion.h2>
      <motion.div
        id="about"
        className="container about"
        animate={animationRight}
      >
        <ul className="font-non-title">
          <li>
            {" "}
            I'm a software developer with experience in React, TypeScript, C#,
            PostgreSQL, Bootstrap, Sass, etc.
          </li>
          <li>
            I recently completed a 12-week full-stack development bootcamp.
          </li>
          <li>
            My previous experience consists on 5 years doing data analysis and
            working with geographical information systems.
          </li>{" "}
          <li>
            I also have a year and a half of experience teaching Python, Statistics, and R at
            University College London.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutMe;
