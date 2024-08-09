
import React, { useState } from 'react';
import './Bookservices.css';
import Booklaser from './Booklaser';
import Bookhydra from './Bookhydra';
import Bookprp from './Bookprp';
import Booksemi from './Booksemi';
import Header from './Header';
import Mainpic from './Mainpic';
const Bookservices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDateTimeForm, setShowDateTimeForm] = useState(false);

  const renderServices = () => {
    switch (selectedCategory) {
      case 'all':
        return (
          <>
       

            <div className="service-card">
         
              <h4>Lip Tint</h4>
              <p>Duration: 30 min</p>
              <p>Price: 5,000.00Rs</p>
            </div>
            <div className="service-card">
              <h4>Cheek Tint</h4>
              <p>Duration: 30 min</p>
              <p>Price: 5,000.00Rs</p>
            </div>
            <div className="service-card">
              <h4>Brow Lamination</h4>
              <p>Duration: 30 min</p>
              <p>Price: 5,000.00Rs</p>
            </div>
            <div className="service-card">
            
              <h4>Brow Tint</h4>
              <p>Duration: 30 min</p>
              <p>Price: 5,000.00Rs</p>
            </div>
            <div className="service-card">
              <h4>Lash Lift</h4>
              <p>Duration: 30 min</p>
              <p>Price: 5,000.00Rs</p>
            </div>
            <div className="service-card">
        <h4>Signature Hydrafacial</h4>
        <p>Duration: 45 min</p>
        <p>Price: 7,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>Deluxe Hydrafacial</h4>
        <p>Duration: 60 min</p>
        <p>Price: 10,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>SSA Basic</h4>
        <p>Duration: 45 min</p>
        <p>Price: 7,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>SSA Clever</h4>
        <p>Duration: 60 min</p>
        <p>Price: 13,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>SSA Glow</h4>
        <p>Duration: 60 min</p>
        <p>Price: 10,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>SSA Signature</h4>
        <p>Duration: 75 min</p>
        <p>Price: 16,000.00Rs</p>
      </div>
      <div className="service-card">
      <h4>Laser Hair Removal</h4>
      <p>Duration: 1 hr</p>
      <p>Price: 15,000.00Rs</p>
    </div>
    <div className="service-card">
        <h4>PRP for Hair Loss</h4>
        <p>Duration: 1 hour</p>
        <p>Price: 10,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>PRP for Skin Rejuvenation</h4>
        <p>Duration: 1.5 hours</p>
        <p>Price: 12,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>Hair PRP</h4>
        <p>Duration: 30 min</p>
        <p>Price: 8,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>Face</h4>
        <p>Duration: 30 min</p>
        <p>Price: 10,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>Face PRP with Micro-Needling</h4>
        <p>Duration: 30 min</p>
        <p>Price: 13,000.00Rs</p>
      </div>
      <div className="service-card">
        <h4>Mesotherapy</h4>
        <p>Duration: 30 min</p>
        <p>Price: 15,000.00Rs</p>
      </div>
          
          </>
        );
      case 'semi-permanent-makeup':
      return <Booksemi />;
      case 'hydrafacial':
        return <Bookhydra />;
      case 'prp':
        return <Bookprp />;
      case 'laser-hair-removal':
        return <Booklaser />;
      default:
        return null;
    }
  };

  const handleNextClick = () => {
    setShowDateTimeForm(true);
  };

  const handleBackClick = () => {
    setShowDateTimeForm(false);
  };

  return (
    
 
    <div className="services-container">
      {!showDateTimeForm && (
      <>
          <Header/>
          <Mainpic/>
          <h2>Select Category</h2>
          <div className="categories">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`category ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('semi-permanent-makeup')}
              className={`category ${selectedCategory === 'semi-permanent-makeup' ? 'active' : ''}`}
            >
              Semi Permanent Makeup
            </button>
            <button
              onClick={() => setSelectedCategory('hydrafacial')}
              className={`category ${selectedCategory === 'hydrafacial' ? 'active' : ''}`}
            >
              Hydrafacial
            </button>
            <button
              onClick={() => setSelectedCategory('prp')}
              className={`category ${selectedCategory === 'prp' ? 'active' : ''}`}
            >
              PRP
            </button>
            <button
              onClick={() => setSelectedCategory('laser-hair-removal')}
              className={`category ${selectedCategory === 'laser-hair-removal' ? 'active' : ''}`}
            >
              Laser Hair Removal
            </button>
         
          </div>
          <h3>Select Service</h3>
          <div className="service-list">
            {renderServices()}
          </div>
          <button className="next-button" onClick={handleNextClick}>
            Next: Dates & Time
          </button>
        </>
      )}

      {showDateTimeForm && (
       
        <div className="date-time-form">
           <Header/>
           <Mainpic/>
          <h3>Book Your Appointment</h3>
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <input type="text" id="day" name="day" placeholder="Enter the day" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <button type="submit">Book Appointment</button>
          <button className="back-button" onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div> 
  );
};

export default Bookservices;

