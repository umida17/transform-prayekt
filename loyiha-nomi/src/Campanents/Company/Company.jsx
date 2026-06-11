import React from 'react';
import './Company.css';
import negrlar from '../../assets/negrlar.png';


const Company = () => {
  return (
    <div className="company-page">
      
      {/* 1. HERO SECTION */}
      <section className="company-hero">
        <div className="container">
          <div className="company-hero-top">
            <span className="section-tag-orange">COMPANY</span>
            <div className="company-hero-row">
              <h1 className="company-main-title">
                Award-winning Company <br /> seen and used by millions <br /> around the world.
              </h1>
              <div className="company-decor-corner">
                <span className="c-blue-big"></span>
                <span className="c-orange-small"></span>
              </div>
            </div>
            <p className="company-hero-desc">
              It is a long established fact that a reader will be distracted by the readable content of a <br />
              page when looking at its layout. The Maker is a decentralized.
            </p>
          </div>

          {/* 3 ta rasm galereyasi */}
          <div className="company-gallery-grid">
            <div className="gallery-img-box">
              <img src={negrlar} alt="Meeting 1" />
            </div>
            <div className="gallery-img-box">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600" alt="Meeting 2" />
            </div>
            <div className="gallery-img-box">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600" alt="Meeting 3" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & STATS SECTION */}
      <section className="our-story-section">
        <div className="container story-container">
          
          <div className="story-left-text">
            <span className="story-mini-tag">Our Story ⚡</span>
            <h2>From Startups to Titans of <br /> Industry</h2>
            <p>
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ya when in explained Hearts am next over match mr partiality not shout latter thus as out no passed forming middleton exercise up.
            </p>
          </div>

          <div className="story-right-stats">
            <div className="stat-card">
              <h3>1560+</h3>
              <div className="stat-line orange-blue"></div>
              <p>Project Delivered</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <div className="stat-line orange-blue"></div>
              <p>Professional</p>
            </div>
            <div className="stat-card">
              <h3>950+</h3>
              <div className="stat-line orange-blue"></div>
              <p>Happy Client</p>
            </div>
            <div className="stat-card">
              <h3>10 yrs</h3>
              <div className="stat-line orange-blue"></div>
              <p>Experience</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. LOGOS BAR SECTION */}
      <section className="logos-bar-section">
        <div className="container logos-flex">
          <div className="logo-item">🔹 logoipsum</div>
          <div className="logo-item">⬢ logoipsum</div>
          <div className="logo-item">▲ logoipsum</div>
          <div className="logo-item">⚔ logoipsum</div>
          <div className="logo-item">⧉ logoipsum</div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE SECTION */}
      <section className="expertise-section">
        <div className="container expertise-container">
          
          <div className="expertise-left">
            <span className="expertise-mini-tag">OUR EXPERTISE</span>
            <h2>We want to get local <br /> identification in every <br /> corner of the world in this <br /> era of global citizenship</h2>
            <p>
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          <div className="expertise-right-cards">
            
            <div className="expertise-card">
              <div className="exp-icon-box">🧡</div>
              <div className="exp-info">
                <h4>On Time Delivery</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="exp-icon-box">⚙️</div>
              <div className="exp-info">
                <h4>Best Quality</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="exp-icon-box">👤</div>
              <div className="exp-info">
                <h4>Support Assist</h4>
                <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
              <div className="exp-bottom-line"></div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Company;