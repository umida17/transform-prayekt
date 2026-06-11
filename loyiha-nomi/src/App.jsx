import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Campanents/Navbar/Navbar'; 
import Home from './Campanents/Home/Home'; 
import Footer from './Campanents/Footer/Footer'; 
import Service from './Campanents/Service/Service'; 
import Company from './Campanents/Company/Company'; // 👈 MANA SHU IMPORT QOLIB KETGAN EDI!

// 🎯 1. Layout komponenti
const Layout = () => {
  return (
    <div>
      {/* Navbar doimiy tepada turadi */}
      <Navbar />
      
      {/* Outlet - sahifaga qarab o'rtada Home, Service yoki Company almashib chiqadigan joy */}
      <Outlet />
      
      {/* Footer doimiy pastda turadi */}
      <Footer />
    </div>
  );
};

// 🎯 2. Asosiy App komponenti
function App() {
  return (
    <Router>
      <Routes>
        
        {/* Layout'ni asosiy ota-boshqaruvchi qilib joylashtirdik */}
        <Route path="/" element={<Layout />}>
          {/* Ichki sahifalar (Bular Layout ichidagi Outlet o'rniga kelib o'tiradi) */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="company" element={<Company />} /> {/* 👈 BU YERGA KOMPONENTNI QO'SHDIK */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;