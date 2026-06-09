import React from 'react';
import './Home.css';
import header from '../../assets/Header.png'

const Home = () => {
  return (
    <div className="home-page">
      
      {/* HERO SECTION */}
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
            
            {/* LOGOS SUB-SECTION */}
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
            <img 
              src={header} 
              alt="Finsweet Team" 
              className="hero-main-img"
            />
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
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

          {/* THREE IMAGES GALLERY */}
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

          {/* STATISTICS FOOTER */}
          <div className="about-stats-footer">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>1560+</h3>
                <div className="stat-line orange"></div>
                <p>Project Delivered</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <div className="stat-line blue"></div>
                <p>Professional</p>
              </div>
              <div className="stat-item">
                <h3>950+</h3>
                <div className="stat-line yellow"></div>
                <p>Happy Client</p>
              </div>
              <div className="stat-item">
                <h3>10 yrs</h3>
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

    </div>
  );
};

export default Home;