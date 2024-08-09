// src/BBGlowServices.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BBGlowServices.css';
import flawless from '../pics/flawless.jpeg';
import radiant from '../pics/radiant.jpeg';
import hydration from '../pics/hydration.jpeg';
import antiAging from '../pics/antiAging.jpeg';
import evenTone from '../pics/evenTone.jpeg';
import safe from '../pics/safe.jpeg';
import Header from './Header';
import Footer from './Footer';

import Mainpic from './Mainpic';
import Aboutbb from './Aboutbb';

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const BBGlowServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.boxes-container');
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

  return (
    <>
      <Header />
      <Mainpic/>
      <Aboutbb/>
      <div className="responsive-container">
        <div className="boxes-container">
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={boxVariants}
          >
            <img src={flawless} alt="Flawless Coverage" />
            <h2>Flawless Coverage</h2>
            <p>Achieve a naturally flawless complexion with our BB Glow treatment, providing an even skin tone and coverage for imperfections.</p>
          </motion.div>
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={boxVariants}
          >
            <img src={radiant} alt="Radiant Glow" />
            <h2>Radiant Glow</h2>
            <p>Enhance your skin's natural radiance with a healthy, dewy glow that lasts for weeks.</p>
          </motion.div>
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={boxVariants}
          >
            <img src={hydration} alt="Deep Hydration" />
            <h2>Deep Hydration</h2>
            <p>Boost your skin's hydration levels, leaving it plump and youthful with a long-lasting moisturized effect.</p>
          </motion.div>
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={boxVariants}
          >
            <img src={antiAging} alt="Anti-Aging Benefits" />
            <h2>Anti-Aging Benefits</h2>
            <p>Reduce the appearance of fine lines, wrinkles, and other signs of aging with our rejuvenating BB Glow treatment.</p>
          </motion.div>
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 1.0 }}
            variants={boxVariants}
          >
            <img src={evenTone} alt="Even Skin Tone" />
            <h2>Even Skin Tone</h2>
            <p>Minimize pigmentation issues and achieve an even, balanced skin tone for a more youthful appearance.</p>
          </motion.div>
          <motion.div
            className="box"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 1.2 }}
            variants={boxVariants}
          >
            <img src={safe} alt="Safe & Effective" />
            <h2>Safe & Effective</h2>
            <p>Experience safe and effective treatment with minimal downtime and long-lasting results.</p>
          </motion.div>
        </div>
       
      </div>
      <button type="submit">Book Appointment</button>
      <Footer />
    </>
  );
};

export default BBGlowServices;
