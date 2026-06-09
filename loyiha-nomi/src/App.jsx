import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Campanents/Navbar/Navbar'; 
import Home from './Campanents/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Asosiy sahifa kodi</div>} />
        <Route path="/home" element={<div>Home sahifasi</div>} />
        <Route path="/service" element={<div>Service sahifasi</div>} />
        <Route path="/company" element={<div>Company sahifasi</div>} />
      </Routes>
    </Router>
  );
}

export default App;