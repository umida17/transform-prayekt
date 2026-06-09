import React, { useState, useEffect } from 'react';
import './Home.css';
import header from '../../assets/Header.png';

// Sonlar aylanib o'sishi uchun dinamik komponent
const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [endValue, duration]);
  return <>{count}</>;
};

const Home = () => {
  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container"> 
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Idea <br /> Into Reality with <br /> Finsweet
            </h1>
            <p className="hero-subtitle">
              The entire Finsweet team knows what's good with Webflow and <br />
              you can too with 1 week and a good attitude.
            </p>
            <button className="btn-quote">
              Request Quote <span className="arrow">→</span>
            </button>
            
            <div className="clients-logos">
              <div className="clients-text">
                <span>Our Clients</span>
                <h4>We've Worked with</h4>
              </div>
              <div className="logos-grid">
                <span className="logo-item">logoipsum*</span>
                <span className="logo-item">logoipsum'</span>
                <span className="logo-item">logoipsum</span>
                <span className="logo-item">logoipsum</span>
                <span className="logo-item">logoipsum</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="accent-orange-top"></div>
            <div className="accent-blue-right"></div>
            <div className="accent-orange-left"></div>
            <img src={header} alt="Finsweet Team" className="hero-main-img" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="about-left">
              <span className="section-tag">ABOUT US</span>
              <h2 className="about-title">
                The company leads entire webdesign process from concept to delivery.
              </h2>
            </div>
            <div className="about-right">
              <h3 className="about-sub-title">The Era Of Technology.</h3>
              <p className="about-desc">
                Through True Rich Attended does no and it his mother since real had 
                half every him case in packages enquire we up ecstatic unsatiable 
                saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>

          <div className="about-gallery">
            <div className="gallery-card">
              <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=400&auto=format&fit=crop" alt="Meeting 1" />
            </div>
            <div className="gallery-card">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop" alt="Meeting 2" />
            </div>
            <div className="gallery-card decorative-card">
              <div className="accent-orange-vertical"></div>
              <div className="accent-blue-vertical"></div>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" alt="Meeting 3" />
            </div>
          </div>

          <div className="about-stats-footer">
            <div className="stats-grid">
              <div className="stat-item">
                <h3><Counter endValue="1560" />+</h3>
                <div className="stat-line orange"></div>
                <p>Project Delivered</p>
              </div>
              <div className="stat-item">
                <h3><Counter endValue="100" />+</h3>
                <div className="stat-line blue"></div>
                <p>Professional</p>
              </div>
              <div className="stat-item">
                <h3><Counter endValue="950" />+</h3>
                <div className="stat-line yellow"></div>
                <p>Happy Client</p>
              </div>
              <div className="stat-item">
                <h3><Counter endValue="10" /> yrs</h3>
                <div className="stat-line purple"></div>
                <p>Experience</p>
              </div>
            </div>
            <a href="#read-more" className="read-more-link">
              Read about us <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 🎯 3. EXPERTISE SECTION (YANGI QISM) */}
      <section className="expertise-section">
        <div className="container expertise-container">
          
          <div className="expertise-left">
            <span className="section-tag">OUR EXPERTISE</span>
            <h2 className="expertise-title">
              We want to get local identification in every corner of the world in this era of global citizenship
            </h2>
            <p className="expertise-desc">
              Through True Rich Attended does no and it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          <div className="expertise-right">
            <div className="expertise-decor-bar"></div>
            
            <div className="expertise-card">
              <div className="exp-icon-box orange-bg">🚀</div>
              <div className="exp-card-info">
                <h4>On Time Delivery</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="exp-icon-box blue-bg">⚙️</div>
              <div className="exp-card-info">
                <h4>Best Quality</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="exp-icon-box light-orange-bg">🤝</div>
              <div className="exp-card-info">
                <h4>Support Assist</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🎯 4. SERVICES SECTION (YANGI QISM) */}
      <section className="services-section">
        <div className="container">
          
          <div className="services-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="services-main-title">
              We build software solutions <br /> that solve client's business <br /> challenges
            </h2>
            <button className="btn-project">
              Start a Project <span className="arrow">→</span>
            </button>
          </div>

          <div className="services-grid">
            
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h4>Technical support</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <a href="#read" className="service-link">Read more <span>→</span></a>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h4>Testing Management</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <a href="#read" className="service-link">Read more <span>→</span></a>
            </div>

            <div className="service-card">
              <div className="service-icon">💻</div>
              <h4>Development</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <a href="#read" className="service-link">Read more <span>→</span></a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;