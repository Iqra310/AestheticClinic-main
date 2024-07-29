import React from 'react';
import Header from '../components/Header';
import L from '../pics/L.png'
import acneImage from '../pics/Acne.jpg';
import AboutSemi from '../components/AboutSemi';
import MakeupServices from '../components/MakeupService';
import BookAppointment from '../components/BookAppointment';
import Footer from '../components/Footer';




const Service =() => {
  return (
    
   
        <div>
   
    
      <Header />
      <img src={L} alt="Acne" />
      <acneImage/>
      <AboutSemi/>
      <MakeupServices/>
      <BookAppointment/>
      <Footer/>
      
      
     
      
     
     
  
    
    </div>
  );
}

export default Service;