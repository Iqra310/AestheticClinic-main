import React, { useEffect, useState } from 'react';
import './Aboutchemical.css';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const Aboutchemical = () => {
  return (
    <motion.section
      className="chemical-peels-section" // Updated class name
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="heading-container">
        <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
      </div>
      <div className="content-container"> {/* Updated class name */}
        <motion.div
          className="text-box" // Updated class name
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2>About Chemical Peels</h2>
          <p>
            Chemical peels are a type of skin treatment that involves applying a solution to the skin to remove dead cells and reveal a fresh, new layer. This treatment helps to improve skin texture, reduce signs of aging, and diminish blemishes.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutchemical;
