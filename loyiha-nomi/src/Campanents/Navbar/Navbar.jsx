import React from 'react'
import { Link } from 'react-router-dom' // Sahifadan sahifaga o'tish uchun
import logo from '../../assets/Logo .svg'
import './Navbar.css' // CSS faylimiz

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar-container">
          {/* Logo qismi */}
          <div className="logo-area">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Menyular qismi */}
          <ul className="nav-menu">
            {/* O'sha sen aytgan, bosganda boshqa bo'limga o'tadigan 3 ta maxsus menyu */}
            <li><Link to="/home" className="nav-link special-link">Home</Link></li>
            <li><Link to="/service" className="nav-link special-link">Service</Link></li>
            <li><Link to="/company" className="nav-link special-link">Company</Link></li>
            
            {/* Qolgan oddiy menyular */}
            <li><Link to="/career" className="nav-link">Career</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/contact" className="nav-link">Contact us</Link></li>
            <li><Link to="/clone" className="nav-link clone-btn">Clone project</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar