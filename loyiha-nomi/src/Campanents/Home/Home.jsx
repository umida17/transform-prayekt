import React, { useState, useEffect } from 'react';
import './Home.css';
import header from '../../assets/Header.png';
import images from '../../assets/Image.png'
import majlis from '../../assets/majlis.png'
import hamkor from '../../assets/hamkor.png'
import dugona from '../../assets/dugona.png'
import ish from '../../assets/ish.png'

// 🚀 Sonlar aylanib o'sishi uchun maxsus dinamik komponent
const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    // Har bir qadamda qanchaga o'sishi
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

      {/* 🎯 5. OUR PROCESS SECTION */}
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
            {/* Tepangizdagi o'ng burchakdagi kichik dekorativ element */}
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
              <div className="process-card-line gray-line"></div>
            </div>

            <div className="process-card">
              <div className="process-card-header">
                <div className="process-icon">🏢</div>
                <span className="process-number">06</span>
              </div>
              <h4>Maintenance</h4>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="process-card-line blue-line"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 🎯 6. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container testimonials-container">
          
          <div className="testimonials-left">
            <div className="blue-square-bullet"></div>
            <h2 className="testimonials-title">Our customers love what we do</h2>
            <h4 className="testimonials-sub-title">Transform your idea into reality with finsweet</h4>
            <p className="testimonials-desc">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            
            <div className="customer-reviews-group">
              <div className="customer-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 3" />
              </div>
              <div className="customer-reviews-text">
                <strong>30+</strong>
                <p>Customer Reviews</p>
              </div>
            </div>
          </div>

          <div className="testimonials-right">
            <div className="quote-orange-border"></div>
            <span className="quote-icon">“</span>
            
            <h3 className="quote-text">
              Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
            </h3>

            <div className="quote-author-footer">
              <div className="author-info">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Johnny Andro" />
                <div>
                  <h5>Johnny Andro</h5>
                  <span>Director, Company</span>
                </div>
              </div>
              <div className="logoipsum-placeholder">logoipsum'</div>
            </div>

            {/* Slider nuqtalari */}
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

        </div>
      </section>

      {/* 🎯 7. LATEST BLOGS SECTION */}
      <section className="blogs-section">
        <div className="container">
          
          <div className="blogs-header">
            <div className="blue-square-bullet"></div>
            <h2 className="blogs-main-title">Read our latest blogs & news</h2>
          </div>

          <div className="blogs-grid">
            
            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src={dugona} alt="Blog 1" />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">Jan 19, 2021</span>
                <h4>Today's best design trends for digital products</h4>
                <a href="#read" className="blog-link">Read More <span>→</span></a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img-wrapper">"h
                <img src={ish} alt="Blog 2" />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">Jan 19, 2021</span>
                <h4>A practical guide to building a brand strategy</h4>
                <a href="#read" className="blog-link">Read More <span>→</span></a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;