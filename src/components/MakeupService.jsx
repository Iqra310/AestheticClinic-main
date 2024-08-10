import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './MakeupService.css';
import lipImage from '../pics/lip.jpg'; 
import two from '../pics/cheek.jpg';
import three from '../pics/lash lift.jpg';
import four from '../pics/eyes.jpeg';
import Header from './Header';
import Footer from './Footer';
import Mainpic from './Mainpic';
import Aboutsectsemi from './Aboutsectsemi';

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MakeupServices = () => {
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
      <Mainpic />
      <Aboutsectsemi />
      <div className="responsive-container">
        <motion.section
          className="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
        </motion.section>
        <div className="boxes-container">
          <div className="box-row">
            <motion.div
              className="box"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={boxVariants}
            >
              <img src={lipImage} alt="Lip Tint" />
              <h2>Lip Tint</h2>
              <p>Add a subtle, natural-looking tint to your lips for a beautiful, long-lasting color.</p>
            </motion.div>
            <motion.div
              className="box"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={boxVariants}
            >
              <img src={two} alt="Cheek Tint" />
              <h2>Cheek Tint</h2>
              <p>Get a healthy, natural-looking flush on your cheeks with our semi-permanent cheek tint.</p>
            </motion.div>
          </div>
          <div className="box-row">
            <motion.div
              className="box"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={boxVariants}
            >
              <img src={three} alt="Lash Lift" />
              <h2>Lash Lift</h2>
              <p>Enhance your natural lashes with a lift that adds curl and definition without the need for extensions.</p>
            </motion.div>
            <motion.div
              className="box"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={boxVariants}
            >
              <img src={four} alt="Brow Lamination" />
              <h2>Brow Lamination</h2>
              <p>Sculpt and set your brows in the perfect shape with our brow lamination service.</p>
            </motion.div>
          </div>
        </div>
        <button type="submit">Book Appointment</button>
      </div>
      <Footer />
    </>
  );
};

export default MakeupServices;
