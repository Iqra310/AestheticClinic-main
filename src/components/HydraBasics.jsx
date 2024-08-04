import React, { useEffect, useState } from 'react';
import './Hydrabasics.css';
import one from '../pics/face.jpeg';
import two from '../pics/facial.jpeg';
import three from '../pics/girl.jpeg';
import four from "../pics/hydrafacial.jpeg";
import { motion } from 'framer-motion';

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HydraBasics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.content-wrapper');
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
    <div className="main-container">
      <div className="content-wrapper">
        <motion.div
          className="info-box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={boxVariants}
        >
          <img src={one} alt='' />
          <h2>Cleansing and Exfoliation</h2>
          <p>This initial step involves removing dead skin cells and excess sebum from the surface of your skin. The HydraFacial device uses a deplaning tool to open up the pores and sweep away the uppermost layer of debris and dead skin cells, giving the skin a fresh, clean feel.</p>
        </motion.div>
        <motion.div
          className="info-box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={boxVariants}
        >
          <img src={two} alt='' />
          <h2>Acid Peel</h2>
          <p>Unlike traditional chemical peels that can leave your skin feeling tingly and uncomfortable for a while, the HydraFacial uses a non-irritating mix of salicylic and glycolic acids to deliver a gentle yet effective peel. This helps loosen deep pore debris and dirt, which makes extraction easier.</p>
        </motion.div>
        <motion.div
          className="info-box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={boxVariants}
        >
          <img src={three} alt='' />
          <h2>Extraction</h2>
          <p>During this step, the HydraFacial device uses a strong, painless vortex vacuum suction to remove blackheads and impurities from your pores. This method of extraction is much gentler than manual extractions and helps clear out any blockages in the skin.</p>
        </motion.div>
        <motion.div
          className="info-box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={boxVariants}
        >
          <img src={four} alt='' />
          <h2>Hydration</h2>
          <p>The final step involves applying a nourishing, hydrating serum to the skin. The HydraFacial device infuses the skin with antioxidants, peptides, and hyaluronic acid to hydrate, plump, and protect the skin. This step helps improve the skin's overall appearance, leaving it looking radiant and refreshed.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HydraBasics;
