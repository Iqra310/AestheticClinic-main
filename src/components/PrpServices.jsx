import React, { useEffect, useState } from 'react';
import './PrpServices.css';
import one from '../pics/one.jpeg'
import two from '../pics/two.jpeg';
import three from '../pics/three.jpeg';
import four from '../pics/four.jpeg';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import BookAppointment from './BookAppointment';
import ImageSection from './ImageSection';
import Aboutprp from './Aboutprp';
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const PrpServices = () => {
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
      <ImageSection/>
    <Aboutprp/>
    <div className="responsive-container">
      
      <div className="boxes-container">
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={boxVariants}
        >
          <img src={one} alt='' />
          <h2>Hair PRP</h2>
          <p>Stimulate hair growth and improve hair density with our Hair PRP treatment, using your own platelet-rich plasma.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={boxVariants}
        >
          <img src={two} alt='' />
          <h2>Face PRP</h2>
          <p>Rejuvenate your skin with Face PRP therapy, promoting collagen production for a smoother, firmer complexion.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={boxVariants}
        >
          <img src={three} alt='' />
          <h2>Face PRP with Microneedling</h2>
          <p>Combine the benefits of PRP and microneedling to enhance skin rejuvenation, improve texture, and reduce fine lines.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={boxVariants}
        >
          <img src={four} alt='' />
          <h2>Mesotherapy</h2>
          <p>Mesotherapy uses microinjections of vitamins, enzymes, and PRP to rejuvenate and tighten skin, as well as remove excess fat.</p>
        </motion.div>
      </div>
    </div>
    <BookAppointment/>
    <Footer/>
  </>
  );
};

export default PrpServices;