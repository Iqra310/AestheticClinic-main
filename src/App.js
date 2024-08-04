import React from 'react';
import Home from './Pages/Home';
import Academy from './Pages/SereneAcademy';
import Careers from './Pages/Carrers';  // Correct path
import Services from './Pages/Services';
import ChemicalPeel from './components/ChemicalPeel';  // Correct path and name
import HydraFacial from './components/HydraFacial';
import MakeupServices from './components/MakeupService';  // Correct path and name
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/chemical-peel" element={<ChemicalPeel />} />
          <Route path="/services/hydra-facial" element={<HydraFacial />} />
          <Route path="/services/semi-permanent-makeup" element={<MakeupServices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;