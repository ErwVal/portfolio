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
      <motion.h2 id="about" className="subheading" animate={animationLeft}>
        About me
      </motion.h2>
      <motion.div id="about" className="container about" animate={animationRight}>
        <ul className="font-non-title">
          <li>Completed a 12-week full-stack development bootcamp.</li>
          <li>
            {" "}
            Experience in TypeScript,
            C#, Python, and R.
          </li>
          <li>
            React, CRUD, APIs, PostgreSQL, Entity Framework. 
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutMe;
