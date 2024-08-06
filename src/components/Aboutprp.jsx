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

const Aboutprp = () => {
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
          <h2>About PRP</h2>
          <p>
          Platelet-Rich Plasma (PRP) therapy is an advanced treatment that uses your own blood's healing properties to rejuvenate and revitalize the skin and hair. PRP is effective for promoting hair growth, enhancing skin texture, and boosting collagen production.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutprp;