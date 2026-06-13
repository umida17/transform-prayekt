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
      
       <Outlet />
      
       <Footer />
    </div>
  );
};

 function App() {
  return (
    <Router>
      <Routes>
        
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="company" element={<Company />} />  
        </Route>

      </Routes>
    </Router>
  );
}

export default App;