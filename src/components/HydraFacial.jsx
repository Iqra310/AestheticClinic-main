import React from 'react';
import { motion } from 'framer-motion';
import './Hydra.css';
import Footer from './Footer';
import Header from './Header'; 
import HydraBasics from './HydraBasics'; //

import Mainpic from './Mainpic';
const headingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const aboutTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const HydraFacial = () => {
  return (
    <>
      <Header />
      <Mainpic/> {/* Include Header component */}
      <motion.section
        className="hydra-facial-section"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hydra-heading-container"
          variants={headingVariants}
        >
          <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
        </motion.div>
        <div className="hydra-about-container">
          <motion.div
            className="hydra-about-text"
            variants={aboutTextVariants}
          >
            <h2>Hydra Facial</h2>
            <p>
              Offering HydraFacial at Serene Skincare Aesthetics Clinic & Wellness Centre is incredibly beneficial because it provides comprehensive skincare by cleansing, exfoliating, extracting, and hydrating the skin, delivering immediate, noticeable results without downtime. This customizable, non-invasive treatment is suitable for all skin types, attracting a broad client base and ensuring high satisfaction and retention. Its versatility and effectiveness can boost our revenue, expand our client base, and enhance our reputation as a modern, cutting-edge facility.
            </p>
          </motion.div>
        </div>
     

        <HydraBasics /> 
        <button type="submit">Book Appointment</button>
        <Footer />
      </motion.section>
    </>
  );
};

export default HydraFacial;