import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { companyInfo, apps, features, testimonials } from './mock';
import { Download, Star, Users, ChevronRight, Mail, Phone, MapPin, Menu, X, Sparkles, Zap, Rocket, ArrowUp, Github, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle, FileText, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import ParticleBackground from './ParticleBackground';
import { Toaster, toast } from 'sonner';

import './Home.css';
import AppShowcase from './AppShowcase';

// Custom hook for scroll reveal animations
const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Custom hook for animated counter
const useAnimatedCounter = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current && startOnView) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const numericEnd = parseFloat(end.toString().replace(/[^\d.]/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(numericEnd * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return [ref, count];
};

// Rotating typing effect hook - cycles through multiple phrases
const useRotatingTypingEffect = (phrases, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(waitTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, phraseIndex, isDeleting, isWaiting, phrases, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll reveal refs
  const [appsRef, appsVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  // Animated counters
  const [downloadsRef, downloadsCount] = useAnimatedCounter(10, 2000);
  const [ratingRef, ratingCount] = useAnimatedCounter(4.8, 2000);
  const [appsCountRef, appsCount] = useAnimatedCounter(4, 2000);

  // Rotating typing effect for hero
  const typedText = useRotatingTypingEffect([
    'Powerful Utility Apps',
    'Powerful Productivity Apps',
    'Powerful Creativity Apps',
    'Powerful File Management',
    'Powerful Animation Tools'
  ], 80, 50, 2500);



  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error('Please fix the errors in the form', {
        icon: <AlertCircle size={20} />,
      });
      return;
    }

    // Open Gmail compose in new tab
    const to = 'aradhyanishanth84@gmail.com';
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    toast.success('Opening Gmail to send your message...', {
      icon: <CheckCircle size={20} />,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <div className="home-container">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(17, 17, 17, 0.95)',
            border: '1px solid rgba(0, 255, 209, 0.3)',
            color: '#fff',
          },
        }}
      />
      <ParticleBackground />

      {/* Gradient Mesh Background */}
      <div className="gradient-mesh">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      {/* Cursor follower */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

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
            <button onClick={() => scrollToSection('contact')} className="dark-nav-link">
              <span className="nav-text">Contact</span>
              <span className="nav-line"></span>
            </button>

          </nav>

          <div className="mobile-header-actions">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('apps')} className="mobile-nav-link">Apps</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
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
              <span>{typedText}<span className="typing-cursor">|</span></span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Powerful Tools</span>
              <span className="title-line gradient-text">For Everyday</span>
              <span className="title-line">Tasks</span>
            </h1>
            <p className="hero-description">{companyInfo.description}</p>
            <div className="hero-stats">
              <div className="stat-item-hero" ref={downloadsRef}>
                <div className="stat-number-hero">{Math.round(downloadsCount)}M+</div>
                <div className="stat-label-hero">Downloads</div>
              </div>
              <div className="stat-item-hero" ref={ratingRef}>
                <div className="stat-number-hero">{ratingCount.toFixed(1)}</div>
                <div className="stat-label-hero">Rating</div>
              </div>
              <div className="stat-item-hero" ref={appsCountRef}>
                <div className="stat-number-hero">{Math.round(appsCount)}+</div>
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
              {!splineLoaded && (
                <div className="spline-loader">
                  <div className="loader-spinner"></div>
                  <p>Loading 3D Model...</p>
                </div>
              )}
              <div className={`spline-container ${splineLoaded ? 'loaded' : ''}`}>
                <Spline
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                  onLoad={handleSplineLoad}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section - 3D Phone Mockup */}
      <AppShowcase />

      {/* About Section */}
      <section id="about" className={`about-section ${aboutVisible ? 'reveal-visible' : ''}`} ref={aboutRef}>
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
            <div className="stat-card tilt-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">6+</h3>
                <p className="stat-label">Apps Developed</p>
              </div>
            </div>
            <div className="stat-card tilt-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">8M+</h3>
                <p className="stat-label">Total Downloads</p>
              </div>
            </div>
            <div className="stat-card tilt-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">4.8</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </div>
            <div className="stat-card tilt-card">
              <div className="stat-card-inner">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact-section ${contactVisible ? 'reveal-visible' : ''}`} ref={contactRef}>
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`form-input ${formErrors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              <button
                type="submit"
                className={`btn-primary btn-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-loader"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </form>
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
            <div className="social-links">
              <a href="https://github.com/Nishanth619" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nishanth-aradhya-a28506203/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/nishanth__aradhya/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <button onClick={() => scrollToSection('apps')} className="footer-link">Apps</button>
            <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            <Link to="/terms" className="footer-link"><FileText size={14} /> Terms</Link>
            <Link to="/privacy" className="footer-link"><Shield size={14} /> Privacy</Link>
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
