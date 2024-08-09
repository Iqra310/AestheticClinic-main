import React from 'react';
import './Bookservices.css';

const Bookprp = () => {
  return (
    <>
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
      {/* Add more PRP services as needed */}
    </>
  );
};

export default Bookprp;
