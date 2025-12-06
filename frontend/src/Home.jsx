import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { companyInfo, apps, features, testimonials } from './mock';
import { Download, Star, Users, ChevronRight, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import './Home.css';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <h1 className="logo-text">{companyInfo.name}</h1>
          
          {/* Desktop Navigation */}
          <nav className="dark-nav desktop-nav">
            <button onClick={() => scrollToSection('apps')} className="dark-nav-link">Apps</button>
            <button onClick={() => scrollToSection('about')} className="dark-nav-link">About</button>
            <button onClick={() => scrollToSection('features')} className="dark-nav-link">Features</button>
            <button onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
            <h1 className="hero-title">{companyInfo.tagline}</h1>
            <p className="hero-description">{companyInfo.description}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('apps')}>
                Explore Apps <ChevronRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hero-3d">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="apps-section">
        <div className="section-header">
          <h2 className="section-title">Our Android Applications</h2>
          <p className="section-description">Discover our portfolio of innovative mobile solutions</p>
        </div>
        <div className="apps-grid">
          {apps.map((app) => (
            <Card key={app.id} className="app-card">
              <CardHeader>
                <div className="app-icon">{app.icon}</div>
                <CardTitle className="app-title">{app.name}</CardTitle>
                <div className="app-meta">
                  <span className="app-category">{app.category}</span>
                  <div className="app-rating">
                    <Star size={16} fill="#00FFD1" color="#00FFD1" />
                    <span>{app.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="app-description">{app.description}</CardDescription>
                <div className="app-stats">
                  <div className="stat-item">
                    <Users size={16} />
                    <span>{app.downloads}</span>
                  </div>
                </div>
                <div className="app-features">
                  {app.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="btn-download" onClick={() => alert(`Download link: ${app.downloadLink}`)}>
                  <Download size={18} />
                  Download APK
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About NexaAradhya</h2>
            <p className="about-text">
              We are a team of passionate developers and designers dedicated to creating exceptional mobile experiences. 
              With years of expertise in Android development, we transform innovative ideas into powerful applications 
              that make a difference.
            </p>
            <p className="about-text">
              Our commitment to excellence, combined with cutting-edge technology and user-centric design, 
              ensures that every app we develop exceeds expectations and delivers real value to users.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3 className="stat-number">6+</h3>
              <p className="stat-label">Apps Developed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">8M+</h3>
              <p className="stat-label">Total Downloads</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">What sets us apart from the competition</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">Real feedback from real customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#00FFD1" color="#00FFD1" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">Let's discuss your next big idea</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4 className="contact-label">Email</h4>
                <p className="contact-value">{companyInfo.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4 className="contact-label">Phone</h4>
                <p className="contact-value">{companyInfo.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4 className="contact-label">Address</h4>
                <p className="contact-value">{companyInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
            <button className="btn-primary btn-submit" onClick={() => alert('Message sent! (This is a demo)')}>Send Message</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">{companyInfo.name}</h3>
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
          <p>© 2025 {companyInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
