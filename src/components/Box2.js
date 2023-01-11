import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        dragConstraints={{
          right: 100,
          left: 0,
          top: 50,
          bottom: 20,
        }}
        whileHover={{
          scale: 1.1,
        }}
        initial={{
          borderRadius: 0,
        }}
        whileTap={{
          scale: 0.8,
          opacity: 0.5,
          borderRadius: 50,
        }}
      ></motion.div>
    </div>
  );
};

export default Box2;
