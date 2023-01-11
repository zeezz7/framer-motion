import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const boxVarient = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visiably: {
      x: 10,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: " beforeChildren",
      },
    },
  };
  const listVarient = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visiably: {
      y: 10,
      opacity: 1,
      staggerChildren: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVarient}
        initial="hidden"
        animate="visiably"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVarient}
              initial="hidden"
              animate="visiably"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
