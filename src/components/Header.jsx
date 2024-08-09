import React from 'react';
import './Header.css';
import Main from '../pics/jpg.jpg';  // Ensure this path is correct
import { Link } from 'react-router-dom';
import Main1 from '../pics/L.png'; 

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={Main} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book">Book An Appointment</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li>
              <Link to="/services">Services</Link>
              <ul className="dropdown">
                <li><Link to="/services/hydra-facial">HydraFacial</Link></li>
                <li><Link to="/services/chemical-peel">Chemical Peel</Link></li>
                <li><Link to="/laser">Laser Hair Removal</Link></li>
                <li><Link to="/services/semi-permanent-makeup">Semi Permanent Makeup</Link></li>
                <li><Link to="/services/prp">PRP</Link></li>
                <li><Link to="/services/bbglow">BBglow</Link></li>
              </ul>
            </li>
            <li><Link to="/academy">Serene Academy</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;