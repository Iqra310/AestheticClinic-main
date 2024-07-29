import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BookAppointment.css';

const BookAppointment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        const isVisible = top < window.innerHeight && bottom >= 0;
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
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.3 , duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <motion.button
        className="appointment-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book an Appointment
      </motion.button>
    </motion.section>
  );
};

export default BookAppointment;