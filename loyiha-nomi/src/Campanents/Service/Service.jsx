import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="service-page">
      
      {/* 1. HERO SECTION (KREM FONDA) */}
      <section className="service-hero">
        <div className="container service-hero-container">
          
          {/* Chap tomon kontent */}
          <div className="service-hero-left">
            <span className="section-tag">OUR SERVICES</span>
            <h1 className="service-hero-title">
              We Build Software Solution <br /> that Solve Clients <br /> Business Challenges
            </h1>
            <p className="service-hero-desc">
              Through True Rich Attended does no end it his mother since favourable real <br />
              had half every him case in packages enquire we up ecstatic.
            </p>
            <div className="hero-btn-wrapper">
              <span className="hero-btn-decor"></span>
              <button className="btn-request-quote">
                Request A Quote <span>→</span>
              </button>
            </div>
          </div>

          {/* O'ng tomon navigatsiya ro'yxati */}
          <div className="service-hero-right">
            <ul className="service-list-menu">
              <li><a href="#tech">Technical support</a></li>
              <li className="active"><a href="#dev">Development <span>→</span></a></li>
              <li><a href="#aws">AWS/Azure</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#it">Information Technology</a></li>
            </ul>
          </div>

        </div>
      </section>

      {/* 2. OUR PROCESS SECTION */}
      <section className="service-process">
        <div className="container">
          
          <div className="process-header-row">
            <div>
              <span className="section-tag">OUR PROCESS</span>
              <h2 className="process-main-title">
                The process we are working <br /> With Our client Worldwide
              </h2>
              <p className="process-main-desc">
                Through True Rich Attended does no end it his mother since real had half every <br />
                him case in packages enquire we up ecstatic unsatiable.
              </p>
            </div>
            {/* Burchakdagi kichik logo dekoratsiyasi */}
            <div className="process-top-logo-decor">
              <span className="p-orange"></span>
              <span className="p-blue"></span>
            </div>
          </div>

          {/* 6 ta qadamdan iborat Grid */}
          <div className="process-steps-grid">
            
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">💡</div>
                <span className="step-number">01</span>
              </div>
              <h4>Discover</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line orange-blue-line"></div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">📝</div>
                <span className="step-number">02</span>
              </div>
              <h4>Designing</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line gray-line"></div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">💻</div>
                <span className="step-number">03</span>
              </div>
              <h4>Development</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line gray-line"></div>
            </div>

            {/* Step 4 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">🎯</div>
                <span className="step-number">04</span>
              </div>
              <h4>Testing</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line gray-line"></div>
            </div>

            {/* Step 5 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">🚀</div>
                <span className="step-number">05</span>
              </div>
              <h4>Deployment</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line gray-line"></div>
            </div>

            {/* Step 6 */}
            <div className="step-card">
              <div className="step-card-header">
                <div className="step-icon">⚙️</div>
                <span className="step-number">06</span>
              </div>
              <h4>Maintenance</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="step-bottom-line orange-blue-line-reverse"></div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TECHNICAL SUPPORT DETAIL SECTION */}
      <section className="service-detail">
        <div className="container service-detail-container">
          
          {/* Chap tomon matnlar */}
          <div className="service-detail-text">
            <span className="detail-mini-title">Technical Support</span>
            <h2 className="detail-main-title">
              Best in class tech support for your company. We become your tech backbone
            </h2>
            <p className="detail-desc">
              Through True Rich Attended does no end it his mother since real had half <br />
              every him case in packages enquire we up ecstatic unsatiable saw his giving <br />
              Remain expense you position concluded. Through True Rich Attended does no <br />
              end it his mother since real had half every.
            </p>
          </div>

          {/* O'ng tomon rasm qismi */}
          <div className="service-detail-image-side">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
              alt="Technical Support Team" 
              className="detail-img"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Service;