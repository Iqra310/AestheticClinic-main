/*import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './JobDuties.css';

const JobDuties = () => {
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
      className="job-duties"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <h2>Job Duties</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <li><strong>Welcome clients and visitors in a professional and courteous manner.</strong> </li>
        <li><strong>Answer phone calls and redirect them as necessary.</strong></li>
        <li><strong>Schedule appoinmtents and maintaine appointment calenders.</strong> </li>
        <li><strong>Assist clients with inquires and provide accurate information.</strong> </li>
        <li><strong>Maintiane cleanliness and organization of the reception area.</strong> </li>
      </motion.ul>
      
    </motion.section>
  );
};

export default JobDuties;*/
import React, { useEffect, useState } from 'react';
import './JobDuties.css';

const JobDuties = () => {
  

  return (
    <section className="job-duties-key">
      <h2>Job Duties</h2>
      
      <ul>
        <li>Welcome clients and visitors in a professional and courteous manner.</li>
        <li>Answer phone calls and redirect them as necessary.</li>
        <li>Schedule appointments and maintain appointment calendars.</li>
        <li>Assist clients with inquiries and provide accurate information.</li>
        <li>Maintain cleanliness and organization of the reception area.</li>
      </ul>
    </section>
  );
};

export default JobDuties;