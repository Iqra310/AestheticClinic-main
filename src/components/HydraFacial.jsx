import React from 'react';
import { motion } from 'framer-motion';
import './Hydra.css';
import Footer from './Footer';
import Header from './Header'; 
import HydraBasics from './HydraBasics';
import Mainpic from './Mainpic';

// Define animation variants for heading and text
const headingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const aboutTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const HydraFacial = () => {
  return (
    <>
      <Header />
      <Mainpic /> {/* Include Mainpic component */}
      <motion.section
        className="hydrafacial-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="heading-container">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Serene Skincare Aesthetics Clinic & Wellness Centre
          </motion.h1>
        </div>
        <div className="content-container">
          <motion.div
            className="text-box"
            initial="hidden"
            animate="visible"
            variants={aboutTextVariants}
          >
            <h2>About HydraFacial</h2>
            <p>
              HydraFacial is a non-invasive treatment that deeply cleanses, exfoliates, and hydrates your skin using advanced technology. It helps in improving skin texture, reducing fine lines, and giving you a refreshed, radiant look.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <HydraBasics /> 
      <button type="submit">Book Appointment</button>
      <Footer />
    </>
  );
};

export default HydraFacial;
