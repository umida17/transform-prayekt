import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Campanents/Navbar/Navbar'; 
import Home from './Campanents/Home/Home'; 
import Footer from './Campanents/Footer/Footer'; // 1. Footerni shu yerga import qildik

function App() {
  return (
    <Router>
      {/* Saytning tepasida har doim Navbar turadi */}
      <Navbar />
      
      {/* Sahifalar o'zgarganda faqat o'rtadagi kontent o'zgaradi */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<div>Service sahifasi</div>} />
        <Route path="/company" element={<div>Company sahifasi</div>} />
      </Routes>
      
      {/* Saytning eng pastida har doim Footer turadi */}
      <Footer />
    </Router>
  );
}

export default App;