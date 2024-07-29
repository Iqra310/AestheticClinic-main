import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './Receptionist.css';


const Receptionist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.receptionist');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controlsText.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
      controlsImage.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
    } else {
      controlsText.start({ opacity: 0, x: -50 });
      controlsImage.start({ opacity: 0, x: 50 });
    }
  }, [isVisible, controlsText, controlsImage]);

  return (
    <motion.section
      className="receptionist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
      <div className="fluid">
        <motion.div
          className="message"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
          <h4>Join Our Team</h4>
          <h2>Receptionist</h2>
          <p>
            We are seeking a friendly and organized Receptionist to join our team.The Receptionist will be responsible for welcoming clients, answering phone calls, scheduling appointments, and maintaining office cleanliness.
          </p>
        </motion.div> 
       
      </div>
    </motion.section>
  );
};

export default Receptionist;