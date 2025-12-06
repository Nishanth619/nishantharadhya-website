import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { companyInfo, apps, features, testimonials } from './mock';
import { Download, Star, Users, ChevronRight, Mail, Phone, MapPin, Menu, X, Sparkles, Zap, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import ParticleBackground from './ParticleBackground';
import './Home.css';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="home-container">
      <ParticleBackground />
      
      {/* Cursor follower */}
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <div className="logo-container">
            <Sparkles className="logo-icon" size={24} />
            <h1 className="logo-text">{companyInfo.name}</h1>
          </div>
          
          <nav className="dark-nav desktop-nav">
            <button onClick={() => scrollToSection('apps')} className="dark-nav-link">
              <span className="nav-text">Apps</span>
              <span className="nav-line"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="dark-nav-link">
              <span className="nav-text">About</span>
              <span className="nav-line"></span>
            </button>
            <button onClick={() => scrollToSection('features')} className="dark-nav-link">
              <span className="nav-text">Features</span>
              <span className="nav-line"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="dark-nav-link">
              <span className="nav-text">Contact</span>
              <span className="nav-line"></span>
            </button>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('apps')} className="mobile-nav-link">Apps</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
            <button onClick={() => scrollToSection('features')} className="mobile-nav-link">Features</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={16} />
              <span>Next-Gen Development</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Innovating the</span>
              <span className="title-line gradient-text">Future of Mobile</span>
              <span className="title-line">Applications</span>
            </h1>
            <p className="hero-description">{companyInfo.description}</p>
            <div className="hero-stats">
              <div className="stat-item-hero">
                <div className="stat-number-hero">8M+</div>
                <div className="stat-label-hero">Downloads</div>
              </div>
              <div className="stat-item-hero">
                <div className="stat-number-hero">4.8</div>
                <div className="stat-label-hero">Rating</div>
              </div>
              <div className="stat-item-hero">
                <div className="stat-number-hero">6+</div>
                <div className="stat-label-hero">Apps</div>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('apps')}>
                <span>Explore Apps</span>
                <ChevronRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
          <div className="hero-3d">
            <div className="spline-wrapper">
              <div className="spline-glow"></div>
              <div className="spline-container">
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="apps-section">
        <div className="section-header">
          <div className="section-badge">
            <Rocket size={16} />
            <span>Our Portfolio</span>
          </div>
          <h2 className="section-title">Android Applications</h2>
          <p className="section-description">Discover our portfolio of innovative mobile solutions</p>
        </div>
        <div className="apps-grid">
          {apps.map((app, index) => (
            <div key={app.id} className="app-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="app-card-inner">
                <div className="app-card-glow"></div>
                <div className="app-icon-wrapper">
                  <div className="app-icon">{app.icon}</div>
                  <div className="app-icon-bg"></div>
                </div>
                <div className="app-header">
                  <h3 className="app-title">{app.name}</h3>
                  <div className="app-meta">
                    <span className="app-category">{app.category}</span>
                    <div className="app-rating">
                      <Star size={16} fill="#00FFD1" color="#00FFD1" />
                      <span>{app.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="app-description">{app.description}</p>
                <div className="app-stats">
                  <div className="stat-item">
                    <Users size={16} />
                    <span>{app.downloads}</span>
                  </div>
                </div>
                <div className="app-features">
                  {app.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="btn-download" onClick={() => alert(`Download link: ${app.downloadLink}`)}>
                  <Download size={18} />
                  <span>Download APK</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-badge">
              <Sparkles size={16} />
              <span>About Us</span>
            </div>
            <h2 className="section-title">Building The Future</h2>
            <p className="about-text">
              We are a team of passionate developers and designers dedicated to creating exceptional mobile experiences. 
              With years of expertise in Android development, we transform innovative ideas into powerful applications 
              that make a difference.
            </p>
            <p className="about-text">
              Our commitment to excellence, combined with cutting-edge technology and user-centric design, 
              ensures that every app we develop exceeds expectations and delivers real value to users.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <Zap className="highlight-icon" />
                <span>Lightning Fast</span>
              </div>
              <div className="highlight-item">
                <Sparkles className="highlight-icon" />
                <span>Innovative Design</span>
              </div>
              <div className="highlight-item">
                <Rocket className="highlight-icon" />
                <span>Rapid Deployment</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">6+</h3>
                <p className="stat-label">Apps Developed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">8M+</h3>
                <p className="stat-label">Total Downloads</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">4.8</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <div className="section-badge">
            <Star size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-description">Excellence in every aspect of development</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="feature-card-inner">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-badge">
            <Star size={16} />
            <span>Testimonials</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">Real feedback from real customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-card-inner">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#00FFD1" color="#00FFD1" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={16} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">Let's discuss your next big idea</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" size={24} />
              </div>
              <div>
                <h4 className="contact-label">Email</h4>
                <p className="contact-value">{companyInfo.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" size={24} />
              </div>
              <div>
                <h4 className="contact-label">Phone</h4>
                <p className="contact-value">{companyInfo.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin className="contact-icon" size={24} />
              </div>
              <div>
                <h4 className="contact-label">Address</h4>
                <p className="contact-value">{companyInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
              <button className="btn-primary btn-submit" onClick={() => alert('Message sent! (This is a demo)')}>
                <span>Send Message</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <Sparkles size={20} />
              <h3 className="footer-logo">{companyInfo.name}</h3>
            </div>
            <p className="footer-tagline">{companyInfo.tagline}</p>
          </div>
          <div className="footer-links">
            <button onClick={() => scrollToSection('apps')} className="footer-link">Apps</button>
            <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
            <button onClick={() => scrollToSection('features')} className="footer-link">Features</button>
            <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 {companyInfo.name}. All rights reserved. Built with passion and innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
