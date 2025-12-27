import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Download, Star, ChevronRight, Check } from 'lucide-react';
import { apps } from './mock';
import './AppShowcase.css';

const AppShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState({});
    const rafRef = useRef(null);

    // Smooth easing function for more natural animation
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const handleScroll = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            const newProgress = {};

            sectionRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementTop = rect.top;
                    const elementHeight = rect.height;

                    // Calculate progress: 0 when entering from bottom, 1 when centered, 0 when leaving top
                    let progress = 0;

                    if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                        // Element is in viewport
                        const elementCenter = elementTop + elementHeight / 2;
                        const viewportCenter = windowHeight / 2;
                        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
                        const maxDistance = windowHeight * 0.6;

                        progress = Math.max(0, Math.min(1, 1 - distanceFromCenter / maxDistance));
                        progress = easeOutCubic(progress); // Apply easing
                    }

                    newProgress[index] = progress;

                    // Set active index based on which element is most centered
                    if (progress > 0.6) {
                        setActiveIndex(index);
                    }
                }
            });

            setScrollProgress(newProgress);
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleScroll]);

    const getPhoneTransform = (index) => {
        const progress = scrollProgress[index] || 0;
        const easedProgress = easeInOutQuad(progress);

        // More dramatic 3D rotation - starts rotated and flattens out
        const rotateY = 35 * (1 - easedProgress); // Rotate from 35deg to 0deg
        const rotateX = 15 * (1 - easedProgress); // Slight tilt from 15deg to 0deg
        const rotateZ = -5 * (1 - easedProgress); // Subtle Z rotation

        // Scale with bounce effect
        const baseScale = 0.6 + (easedProgress * 0.4);
        const scale = baseScale;

        // Slide in from left with depth
        const translateX = -80 * (1 - easedProgress);
        const translateZ = -100 * (1 - easedProgress);

        return {
            transform: `
                perspective(1200px) 
                translateX(${translateX}px) 
                translateZ(${translateZ}px)
                rotateY(${rotateY}deg) 
                rotateX(${rotateX}deg) 
                rotateZ(${rotateZ}deg)
                scale(${scale})
            `,
            opacity: 0.2 + (easedProgress * 0.8),
            filter: `blur(${(1 - easedProgress) * 2}px)`
        };
    };

    const getDescriptionStyle = (index) => {
        const progress = scrollProgress[index] || 0;
        const easedProgress = easeInOutQuad(progress);

        // Slide in from right with fade
        const translateX = 100 * (1 - easedProgress);
        const translateY = 30 * (1 - easedProgress);

        return {
            transform: `translateX(${translateX}px) translateY(${translateY}px)`,
            opacity: 0.1 + (easedProgress * 0.9)
        };
    };

    const getGlowStyle = (index) => {
        const progress = scrollProgress[index] || 0;
        return {
            opacity: progress * 0.8,
            transform: `scale(${0.5 + progress * 0.5})`
        };
    };

    return (
        <section className="app-showcase-section" id="apps" ref={containerRef}>
            <div className="showcase-header">
                <div className="section-badge">
                    <span>✨</span>
                    <span>Featured Apps</span>
                </div>
                <h2 className="section-title">Discover Our Apps</h2>
                <p className="section-description">Scroll to explore each app in detail</p>
            </div>

            <div className="showcase-container">
                {apps.map((app, index) => (
                    <div
                        key={app.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className={`showcase-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <div className="showcase-content">
                            {/* 3D Phone Mockup - Left Side */}
                            <div className="showcase-phone-wrapper" style={getPhoneTransform(index)}>
                                <div className="showcase-phone-glow" style={getGlowStyle(index)}></div>
                                <div className="showcase-phone-frame">
                                    <div className="showcase-phone-notch"></div>
                                    <div className="showcase-phone-screen">
                                        <img
                                            src={app.screenshot}
                                            alt={`${app.name} screenshot`}
                                            className="showcase-screenshot"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="showcase-placeholder">
                                            <span className="showcase-placeholder-icon">{app.icon}</span>
                                            <span className="showcase-placeholder-text">{app.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* App Description - Right Side */}
                            <div className="showcase-description" style={getDescriptionStyle(index)}>
                                <div className="showcase-app-badge">
                                    <span className="showcase-app-icon">{app.icon}</span>
                                    <span className="showcase-category">{app.category}</span>
                                </div>

                                <h3 className="showcase-app-title">{app.name}</h3>
                                <p className="showcase-app-description">{app.description}</p>

                                <div className="showcase-meta">
                                    <div className="showcase-rating">
                                        <Star size={18} fill="#00FFD1" color="#00FFD1" />
                                        <span>{app.rating}</span>
                                    </div>
                                    <div className="showcase-downloads">
                                        <Download size={18} />
                                        <span>{app.downloads}</span>
                                    </div>
                                </div>

                                {app.features && (
                                    <div className="showcase-features">
                                        <h4>Key Features</h4>
                                        <ul>
                                            {app.features.map((feature, idx) => (
                                                <li key={idx} style={{ transitionDelay: `${idx * 0.05}s` }}>
                                                    <Check size={16} className="feature-check" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <button
                                    className="showcase-cta"
                                    onClick={() => window.open(app.downloadLink, '_blank')}
                                >
                                    <Download size={18} />
                                    <span>Download Now</span>
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="showcase-progress">
                {apps.map((app, index) => (
                    <button
                        key={app.id}
                        className={`progress-dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => {
                            sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        aria-label={`Go to ${app.name}`}
                    >
                        <span className="progress-dot-inner"></span>
                        <span className="progress-dot-label">{app.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default AppShowcase;
