import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 0.8, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 770, 0],
          opacity: [1, 0.8, 0.2, 0.9, 2],
        }}
        transition={{
          duration: 3,
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
