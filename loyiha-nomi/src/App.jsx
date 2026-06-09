import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Campanents/Navbar/Navbar'; 
import Home from './Campanents/Home/Home'; // Home to'g'ri import qilingan

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Asosiy sahifada ham, /home sahifasida ham siz yaratgan chiroyli dizayn chiqadi */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        {/* Qolgan sahifalar uchun vaqtinchalik div-lar */}
        <Route path="/service" element={<div>Service sahifasi</div>} />
        <Route path="/company" element={<div>Company sahifasi</div>} />
      </Routes>
    </Router>
  );
}

export default App;