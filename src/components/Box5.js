import React from "react";

import { motion, useAnimation } from "framer-motion";

const Box5 = () => {
  const controls = useAnimation();
  return (
    <div className="box-container">
      <button>Move Right</button>
      <button>Move Left</button>
      <button>Circle</button>
      <button>square</button>
      <button>Stop</button>
      <motion.div className="box" animate={controls}></motion.div>
    </div>
  );
};

export default Box5;
