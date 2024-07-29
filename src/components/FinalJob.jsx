import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './FinalJob.css';


const FinalJob= () => {
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
      className="Job Duties"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >

      <div className="ab">
        <motion.div
          className="tt"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
    
          <h2>Job Duties</h2>
          <ul>
        <li>Collect blood samples from patients using appropriate techniques.</li>
        <li>Perform laboratory tests, such as blood typing and cholesterol screening.</li>
        <li>Maintaine accurate records of samples and test results.</li>
        <li>Follow safety protocols and maintaine cleanliness in the lab.</li>
        <li>Assist in the calibration and maintenance of lab equipment.</li>
      </ul>
     
          </motion.div>
      </div>
      
    <div className="appointment-done">
      <div>To apply, please email your resume to</div>
      <motion.button
        className="le"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="mailto:contact@sereneskinesthetics.com" className="apply-email">
          contact@sereneskinesthetics.com
        </a>
      </motion.button>
    </div>
      
   
      </motion.section>
  );
};

export default FinalJob;