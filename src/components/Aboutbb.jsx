import React from 'react';
import { motion } from 'framer-motion';
import './Aboutbb.css';

const aboutTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const Aboutbb = () => {
  return (
    <motion.section
      className="about-bb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="heading-container">
        <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
      </div>
      <div className="about-container">
        <motion.div
          className="about-text"
          initial="hidden"
          animate="visible"
          variants={aboutTextVariants}
        >
          <h2>About BB Glow</h2>
          <p>
            BB Glow treatment is a semi-permanent foundation for your face that uses nano-needling technology to help your skin look naturally smooth and radiant. It provides immediate skin brightening and rejuvenation, reduces fine lines, and evens out skin tone.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutbb;