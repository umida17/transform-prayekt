import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import logo from '../../assets/Logo (2).svg'
import './Navbar.css' 

const Navbar = () => {
  // Telefon variantida menyu ochiq yoki yopiqligini tekshirish uchun state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menyu linklaridan biri bosilganda menyu avtomatik yopilishi uchun
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar-container">
          
          {/* Logo qismi */}
          <div className="logo-area">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* ☰ Hamburger Tugmasi (Faqat telefonda ko'rinadi) */}
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Menyular qismi (`active` klassi orqali ochilib yopiladi) */}
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/home" className="nav-link special-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/service" className="nav-link special-link" onClick={closeMenu}>Service</Link></li>
            <li><Link to="/company" className="nav-link special-link" onClick={closeMenu}>Company</Link></li>
            <li><Link to="/career" className="nav-link" onClick={closeMenu}>Career</Link></li>
            <li><Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact us</Link></li>
            <li><Link to="/clone" className="nav-link clone-btn" onClick={closeMenu}>Clone project</Link></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar;