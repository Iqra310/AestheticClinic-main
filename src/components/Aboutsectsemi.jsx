import React from 'react';
import { motion } from 'framer-motion';
import './Aboutsectsemi.css';

const aboutTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const Aboutsectsemi = () => {
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
          <h2>About Semi-Permanent Makeup</h2>
          <p>
            Semi-permanent makeup is a revolutionary technique that enhances your natural beauty by applying pigments to the skin's surface. This cosmetic procedure provides long-lasting results for eyebrows, eyeliner, and lip color, offering a flawless look that requires minimal maintenance. It’s ideal for those looking to simplify their beauty routine and maintain a polished appearance every day.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutsectsemi;
