import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AboutSemi.css';
import Image from '../pics/Semi-Permanent-Makeup pic.png';

const AboutSemi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-section');
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
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
           <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsImage}
        >
          <img src={Image} alt="Before and After Treatment" />
        </motion.div>
          <h2>About Semi-Permanent Make-Up</h2>
          <p>
            At Serene Skin Aesthetics & Wellness Centre, we offer a range of semi-permanent make-up services designed to enhance your natural beauty with long.lasting results. Our skilled professionals
            use the latest techniques to ensure your best every day.
          </p>
        </motion.div>
       
      </div>
    </motion.section>
  );
};

export default AboutSemi;