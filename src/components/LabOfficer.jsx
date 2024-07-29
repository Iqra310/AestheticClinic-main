import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LabOfficer.css';


const LabOfficer = () => {
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
      className="lab-officer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >

     
        <motion.div
          className="Paragraph"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
    
          <h2>Lab Officer</h2>
          <p>
            We are looking for a detail-oriented Lab Officer to join our team. The Lab Officer will be responsible for collecting blood samples, performing tests, and maintaining accurate records. Experience in phlebotomy and laboratory procedures is required.
          </p>
          </motion.div>
         
  
   
      
    
    </motion.section>
  );
};

export default LabOfficer;