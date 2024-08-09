import React, { useEffect, useState } from 'react';
import './Aboutchemical.css';
import { motion } from 'framer-motion';
const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  
  const aboutTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };


const Aboutchemical = () => {
    return (
    
        <motion.section
          className="chemical-peels-section"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="chemical-heading-container"
            variants={headingVariants}
          >
            <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
          </motion.div>
          <div className="chemical-about-container">
            <motion.div
              className="chemical-about-text"
              variants={aboutTextVariants}
            >
              <h2>Chemical Peels</h2>
              <p>
                Offering Chemical Peels at Serene Skincare Aesthetics Clinic & Wellness Centre provides exceptional skincare benefits by exfoliating the outer layers of skin to improve texture, tone, and clarity. This treatment addresses various skin concerns, such as acne, hyperpigmentation, and fine lines, with minimal downtime. Chemical peels can be tailored to different skin types and concerns, attracting a diverse clientele and enhancing satisfaction. By incorporating chemical peels, we can increase our service offerings, boost client engagement, and reinforce our reputation as a leading skincare facility.
              </p>
            </motion.div>
          </div>
          
        </motion.section>
      
    );
  };
  
  export default Aboutchemical;