import React from 'react';
import Header from '../components/Header';
import L from '../pics/L.png';

import Receptionist from '../components/Receptionist';
import LabOfficer from '../components/LabOfficer';
import JobDuties from '../components/JobDuties';
import FinalJob from '../components/FinalJob';
import Footer from '../components/Footer';




const Career =() => {
  return (
    
   
        <div>
   
    
      <Header />
      <img src={L} alt="Acne" />
      <acneImage/>
      <Receptionist/>
      <JobDuties/>
      <LabOfficer/>
      <FinalJob/>
      <Footer/>
     
      
     
     
  
    
    </div>
  );
}

export default Career;