import React, { useState, useEffect } from 'react';
import './Home.css';
import header from '../../assets/Header.png';
import images from '../../assets/Image.png';
import majlis from '../../assets/majlis.png';
import hamkor from '../../assets/hamkor.png';
import dugona from '../../assets/dugona.png';
import ish from '../../assets/ish.png';

// 🚀 Sonlar aylanib o'sishi uchun maxsus dinamik komponent
const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end || isNaN(end)) return;

    const totalMiliseconds = duration;
    const stepTime = 30; // Har 30 millisoniyada yangilanadi
    const totalSteps = totalMiliseconds / stepTime;
    const increment = Math.ceil(end / totalSteps);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, stepTime);

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

          {/* THREE IMAGES GALLERY */}
          <div className="about-gallery">
            <div className="gallery-card">
              <img src={images} alt="Meeting 1" />
            </div>
            <div className="gallery-card">
              <img src={majlis} alt="Meeting 2" />
            </div>
            <div className="gallery-card decorative-card">
              <div className="accent-orange-vertical"></div>
              <div className="accent-blue-vertical"></div>
              <img src={hamkor} alt="Meeting 3" />
            </div>
          </div>

          {/* STATISTICS FOOTER */}
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

      {/* 3. EXPERTISE SECTION */}
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

      {/* 4. SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          
          <div className="services-header">
            <div>
              <span className="section-tag">OUR SERVICES</span>
              <h2 className="services-main-title">
                We build software solutions <br /> that solve client's business <br /> challenges
              </h2>
            </div>
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

      {/* 5. OUR PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          
          <div className="process-header">
            <div>
              <span className="section-tag">OUR PROCESS</span>
              <h2 className="process-title">
                The process we are working <br /> With Our client Worldwide
              </h2>
              <p className="process-subtitle">
                Through True Rich Attended does no end it his mother since real had half every <br /> 
                him case in packages enquire we up ecstatic unsatiable.
              </p>
            </div>
            <div className="process-top-accent">
              <span className="accent-square-orange"></span>
              <span className="accent-square-blue"></span>
            </div>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">💡</div>
                <span className="process-number">01</span>
              </div>
              <h4>Discover</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line orange-line"></div>
            </div>

            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">🎨</div>
                <span className="process-number">02</span>
              </div>
              <h4>Designing</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line gray-line"></div>
            </div>

            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">⚙️</div>
                <span className="process-number">03</span>
              </div>
              <h4>Development</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line gray-line"></div>
            </div>

            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">🧪</div>
                <span className="process-number">04</span>
              </div>
              <h4>Testing</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line gray-line"></div>
            </div>

            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">🚀</div>
                <span className="process-number">05</span>
              </div>
              <h4>Deployment</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line blue-line"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container testimonials-container">
          
          <div className="testimonials-left">
            <div className="blue-square-bullet"></div>
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="testimonials-title">What Our Clients Say About Us</h2>
            <p className="testimonials-desc">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
            
            <div className="customer-reviews-group">
              <div className="customer-avatars">
                <img src={dugona} alt="User 1" />
                <img src={ish} alt="User 2" />
                <img src={majlis} alt="User 3" />
              </div>
              <div className="customer-reviews-text">
                <strong>30k+</strong>
                <p>Worldwide Trust Clients</p>
              </div>
            </div>
          </div>

          <div className="testimonials-right">
            <div className="quote-orange-border"></div>
            <div className="quote-icon">“</div>
            <p className="quote-text">
              "Best service ever! The team was highly professional and delivered our product exactly on time. Their attention to detail is truly unmatched."
            </p>
            
            <div className="quote-author-footer">
              <div className="author-info">
                <img src={dugona} alt="Johnny" />
                <div>
                  <h5>Johnny Thomas</h5>
                  <span>Project Manager</span>
                </div>
              </div>
              <div className="logoipsum-placeholder">Logoipsum</div>
            </div>

            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. LATEST BLOGS SECTION */}
      <section className="blogs-section">
        <div className="container">
          
          <div className="blogs-header">
            <span className="section-tag">OUR BLOG</span>
            <h2 className="blogs-main-title">Latest Posts From Our Blog</h2>
          </div>

          <div className="blogs-grid">
            
            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src={dugona} alt="Blog 1" />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">28 Jan 2026</span>
                <h4>How we improved our development speed by 40% with automated testing</h4>
                <a href="#blog-details" className="blog-link">Read More <span>→</span></a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src={ish} alt="Blog 2" />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">05 Feb 2026</span>
                <h4>Design trends that will dominate the SaaS industry in the upcoming years</h4>
                <a href="#blog-details" className="blog-link">Read More <span>→</span></a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. NEWSLETTER SECTION */}
      <section className="newsletter-section">
        <div className="container">
          
          <div className="newsletter-box">
            <div className="newsletter-decor-left">
              <span className="decor-orange-1"></span>
              <span className="decor-orange-2"></span>
              <span className="decor-blue-1"></span>
            </div>
            
            <div className="newsletter-content">
              <div>
                <span className="newsletter-tag">NEWSLETTER</span>
                <h2 className="newsletter-title">
                  Subscribe our newsletter to <br /> get latest updates & news
                </h2>
              </div>
              <div className="newsletter-action">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="newsletter-input" 
                />
              </div>
            </div>

            <div className="newsletter-decor-right">
              <span className="decor-bar-orange"></span>
              <span className="decor-bar-light"></span>
              <span className="decor-bar-blue"></span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;