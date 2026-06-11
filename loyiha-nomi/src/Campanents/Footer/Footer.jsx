import React from 'react';
import './Footer.css';
// Ikonkalar uchun (agar loyihada react-icons bo'lsa, bo'lmasa oddiy so'z yozib qo'yish mumkin)
// import FaFacebookF, { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* YUQORI QISM (OQ FONDA) */}
      <div className="container footer-top">
        
        {/* Chap qism: Kontaktlar va Sarlavha */}
        <div className="footer-brand-side">
          {/* Logo dekoratsiyasi */}
          <div className="footer-logo-decor">
            <span className="logo-orange"></span>
            <span className="logo-blue"></span>
          </div>
          
          <h2 className="footer-heading">Let's make <br /> something special</h2>
          <h4 className="footer-subheading">Let's talk! ✍️</h4>
          
          <div className="footer-contact-info">
            <a href="tel:02079932905" className="contact-link">020 7993 2905</a>
            <a href="mailto:hi@finsweet.com" className="contact-link email-link">hi@finsweet.com</a>
          </div>
          
          <p className="footer-address">
            DLF Cybercity, Bhubaneswar, <br /> India, 751024
          </p>
        </div>

        {/* O'ng qism: Linklar va Tugma */}
        <div className="footer-links-side">
          <div className="footer-menu-grid">
            
            {/* 1-ustun */}
            <ul className="footer-menu-col no-title">
              <li><a href="#home">Home</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#news">News</a></li>
            </ul>

            {/* 2-ustun */}
            <ul className="footer-menu-col">
              <li className="menu-title">Service</li>
              <li><a href="#tech">Technical support</a></li>
              <li><a href="#testing">Testing</a></li>
              <li><a href="#dev">Development</a></li>
              <li><a href="#aws">AWS/Azure</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#it">Information Technology</a></li>
            </ul>

            {/* 3-ustun */}
            <ul className="footer-menu-col">
              <li className="menu-title">Resources</li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of use</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>

          </div>

          {/* Contact Us tugmasi (kichik dekoratsiyasi bilan) */}
          <div className="footer-contact-btn-wrapper">
            <div className="btn-decor">
              <span className="btn-decor-orange"></span>
              <span className="btn-decor-blue"></span>
            </div>
            <a href="#contact" className="footer-contact-btn">
              Contact Us <span>→</span>
            </a>
          </div>
        </div>

      </div>

      {/* PASTKI QISM (KREM FONDA) */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            <strong>{"{"}Finsweet</strong>
            <span>©2021 Finsweet</span>
          </div>
          
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;