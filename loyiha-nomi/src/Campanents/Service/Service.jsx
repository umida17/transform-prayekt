import React from 'react';
import './Service.css';
import Featur from '../../assets/Featur.png'; // Siz yuklagan rasm o'z joyida
import dastur from '../../assets/dastur.png';
import kanpaniya from '../../assets/kanpaniya.png';
import jamoa from '../../assets/jamoa.png';



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

      {/* 3. ALL SERVICES DETAILS (SHAXMAT TARTIBIDA) */}
      <section className="services-details-block">
        <div className="container">
          
          {/* Service 1: Technical Support (Rasm o'ngda - Sizning Featur.png rasmingiz) */}
          <div className="detail-row" id="tech">
            <div className="detail-text-side">
              <span className="detail-mini-title">Technical Support</span>
              <h2 className="detail-main-title">Best in class tech support for your company. We become your tech backbone</h2>
              <p className="detail-desc">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
            </div>
            <div className="detail-image-side">
              <img src={Featur} alt="Technical Support Team" className="detail-img" />
            </div>
          </div>

          {/* Service 2: Development (Rasm chapda) */}
          <div className="detail-row reverse" id="dev">
            <div className="detail-text-side">
              <span className="detail-mini-title">Development</span>
              <h2 className="detail-main-title">Bring your ideas to reality with certified team of developers, working with latest technologies</h2>
              <p className="detail-desc">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className="detail-image-side">
              <img src={dastur} alt="Development" className="detail-img" />
            </div>
          </div>

          {/* Service 3: AWS/Azure (Rasm o'ngda) */}
          <div className="detail-row" id="aws">
            <div className="detail-text-side">
              <span className="detail-mini-title">AWS/Azure</span>
              <h2 className="detail-main-title">We help you deploy, manage and secure your application on leading web services</h2>
              <p className="detail-desc">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className="detail-image-side">
              <img src={kanpaniya} alt="AWS Azure" className="detail-img" />
            </div>
          </div>

          {/* Service 4: Consulting (Rasm chapda - Maxsus binafsharang borderli) */}
          <div className="detail-row reverse" id="consulting">
            <div className="detail-text-side">
              <span className="detail-mini-title">Consulting</span>
              <h2 className="detail-main-title">Get advice from world class professionals</h2>
              <p className="detail-desc">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className="detail-image-side purple-border">
              <img src={jamoa} alt="Consulting" className="detail-img" />
            </div>
          </div>

          {/* Service 5: Information Technology (Rasm o'ngda) */}
          <div className="detail-row" id="it">
            <div className="detail-text-side">
              <span className="detail-mini-title">Information Technology</span>
              <h2 className="detail-main-title">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
              <p className="detail-desc">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className="detail-image-side">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600" alt="IT" className="detail-img" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. NEWSLETTER BANNER SECTION */}
      <section className="newsletter-section">
        <div className="container newsletter-box">
          
          {/* Chap burchak geometrik naqshlari */}
          <div className="news-decor-left">
            <span className="nd-orange"></span>
            <span className="nd-blue"></span>
          </div>

          {/* O'ng burchak geometrik naqshlari */}
          <div className="news-decor-right">
            <span className="nd-orange-right"></span>
            <span className="nd-light-orange"></span>
            <span className="nd-blue-bottom"></span>
          </div>

          {/* Kontent */}
          <div className="newsletter-content">
            <div className="news-text">
              <span className="news-tag">NEWSLETTER</span>
              <h2>Subscribe our News Letter <br /> to get Latest Updates.</h2>
            </div>
            <div className="news-input-wrapper">
              <input type="email" placeholder="Paresh@Pixelo.com" className="news-input" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Service;