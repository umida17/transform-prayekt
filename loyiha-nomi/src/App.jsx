import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Campanents/Navbar/Navbar'; 
import Home from './Campanents/Home/Home'; 
import Footer from './Campanents/Footer/Footer'; 
import Service from './Campanents/Service/Service'; 

// 🎯 1. Siz xohlagan Layout komponenti (Faqat bitta fayl ichida export default bo'lmasligi uchun pastda oddiy funksiya qildik)
const Layout = () => {
  return (
    <div>
      {/* Navbar doimiy tepada turadi */}
      <Navbar />
      
      {/* 💡 Outlet - bu sahifaga qarab o'rtada Home yoki Service almashib chiqadigan joy */}
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
          <Route path="company" element={<div>Company sahifasi</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

// Faylda faqat BITTA export default qoldi - endi oq ekran bermaydi!
export default App;