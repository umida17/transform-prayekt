import React from 'react';
import './Company.css';

// Siz import qilgan barcha rasmlar
import negrlar from '../../assets/negrlar.png';
import Image from '../../assets/Image 2 (3).png';
import ishxona from '../../assets/ishxona.png';
import Images from '../../assets/Image (33).png';

const Company = () => {
  // 8 talik jamoa a'zolari ro'yxati (Rasmga moslab yaratilgan array)
  const teamMembers = [
    { id: 1, name: 'Javena Melo', role: 'Support Assist', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
    { id: 2, name: 'Paul Jones', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
    { id: 3, name: 'Michael Adams', role: 'UX Designer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
    { id: 4, name: 'John Doe', role: 'CEO / Founder', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400' },
    { id: 5, name: 'Robert Fox', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400' },
    { id: 6, name: 'Albert Flores', role: 'QA Engineer', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400' },
    { id: 7, name: 'Devon Lane', role: 'Marketer', img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400' },
    { id: 8, name: 'Marvin McKinney', role: 'DevOps Engineer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
  ];

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
              <img src={Image} alt="Meeting 2" />
            </div>
            <div className="gallery-img-box">
              <img src={ishxona} alt="Meeting 3" />
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

      {/* 5. OUR VISION SECTION */}
      <section className="our-vision-section">
        <div className="container">
          <div className="vision-top">
            <span className="vision-mini-tag">OUR VISION</span>
            <h2>We want to get local identification in <br /> every corner of the world in this era of <br /> global citizenship.</h2>
            <p>
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className="vision-banner">
            {/* O'zingiz import qilgan Images o'zgaruvchisi shu yerga ulandi */}
            <img src={Images} alt="Office Culture" />
          </div>
        </div>
      </section>

      {/* 6. MEET OUR TEAM SECTION */}
      <section className="meet-team-section">
        <div className="container">
          <div className="team-header">
            <span className="team-mini-tag">MEET OUR TEAM</span>
            <h2>Teamwork is the only <br /> way we work</h2>
            <p>
              Through True Rich Attended does no end it his mother since <br />
              real had half every him case in packages enquire we up <br />
              ecstatic unsatiable.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} />
                  {/* Hover effekti */}
                  <div className="team-hover-overlay">
                    <div className="overlay-info">
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                    <div className="team-socials">
                      <span>🐦</span>
                      <span>📷</span>
                      <span>💼</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPANY FOOTER SECTION */}
      <footer className="company-footer-section">
        <div className="container">
          <div className="footer-top-row">
            
            <div className="footer-left-talk">
              <div className="f-logo"><strong>{'{'}Finsweet</strong></div>
              <h2>Let's talk about <br /> your next project</h2>
              <h3>Let's Talk ➔</h3>
              
              <div className="contact-details">
                <p className="phone">002 01010101010</p>
                <p className="email">hello@finsweet.com</p>
                <div className="divider-line"></div>
                <p className="address">
                  Manoel Island, <br />
                  Gzira, Malta
                </p>
              </div>
            </div>

            <div className="footer-right-links">
              <div className="link-column">
                <h4>Our Services</h4>
                <p>Social Media Marketing</p>
                <p>Web Development</p>
                <p>SEO Optimization</p>
                <p>UI/UX Design</p>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Services</p>
                <p>Blog</p>
              </div>
              <div className="link-column">
                <h4>Connect</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
                
                <div className="contact-us-link">
                  <span className="c-decor-bar"></span>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Eng pastki info panel */}
        <div className="footer-bottom-bar">
          <div className="container bottom-bar-flex">
            <div className="copyright">
              © Finsweet <span className="year">2026</span>
            </div>
            <div className="social-icons">
              <a href="#fb">📘</a>
              <a href="#tw">🐦</a>
              <a href="#ln">💼</a>
              <a href="#ins">📷</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Company;