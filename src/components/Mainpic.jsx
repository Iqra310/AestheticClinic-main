import React from 'react';
import './Mainpic.css';
import Mainpage from '../pics/L.png';
import {motion} from 'framer-motion';

const Mainpic = () => {
  return (
    <section className="image-section">
      <div className="content"> 
       
       
        <img src={Mainpage} alt="Beauty" />
      </div>
    </section>
  );
}

export default Mainpic;