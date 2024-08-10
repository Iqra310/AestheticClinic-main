import React from 'react';
import './ChemicalPeel.css';
import exfoliation from '../pics/exfoliation.jpeg';
import hydration from '../pics/hydration.jpeg';
import peels from '../pics/peels.jpeg';
import recovery from '../pics/recovery.jpeg';
import Header from './Header';
import Footer from './Footer';
import Mainpic from './Mainpic';
import Aboutchemical from './Aboutchemical';

const ChemicalPeel = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <>
    <Header />
      <Mainpic />
      <Aboutchemical />
    <section className="chemical-peel-section">
    
      <h2 className="section-title">Chemical Peels</h2>
      <div className="peel-categories">
        <div className="peel-category">
          <img src={exfoliation} alt="Exfoliation" className="category-image" />
          <div className="peel-info">
            <h3 className="peel-title">Exfoliation</h3>
            <p className="peel-description">Exfoliation products help remove dead skin cells, revealing a brighter and smoother complexion. Perfect for rejuvenating your skin.</p>
          </div>
        </div>
        <div className="peel-category">
          <img src={hydration} alt="Hydration" className="category-image" />
          <div className="peel-info">
            <h3 className="peel-title">Hydration</h3>
            <p className="peel-description">Hydration treatments provide essential moisture to your skin, leaving it plump and refreshed. Ideal for combating dryness and maintaining a healthy glow.</p>
          </div>
        </div>
        <div className="peel-category">
          <img src={peels} alt="Peels" className="category-image" />
          <div className="peel-info">
            <h3 className="peel-title">Peels</h3>
            <p className="peel-description">Peels help to exfoliate and renew your skin, addressing issues like uneven texture and hyperpigmentation. Great for a more youthful appearance.</p>
          </div>
        </div>
        <div className="peel-category">
          <img src={recovery} alt="Recovery" className="category-image" />
          <div className="peel-info">
            <h3 className="peel-title">Recovery</h3>
            <p className="peel-description">Recovery products soothe and repair the skin, reducing redness and promoting healing. Essential for post-treatment care.</p>
          </div>
        </div>
      </div>
    
      <button type="submit">Book Appointment</button>
      

    </section>
    <Footer />
    </>

  );
};

export default ChemicalPeel;

