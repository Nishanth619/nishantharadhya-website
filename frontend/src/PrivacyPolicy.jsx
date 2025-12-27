import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Lock, Bell, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Terms.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Shield className="terms-icon" size={40} />
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: December 2024</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <div className="section-icon">
                        <Eye size={24} />
                    </div>
                    <h2>1. Introduction</h2>
                    <p>
                        NishanthAradhya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                        explains how we collect, use, and safeguard your information when you use our mobile applications:
                        PDF Hub, PDF Gen, SmartZip, FocusHub, NearTransfer, and NovaCraft Studio.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>2. Information We Collect</h2>
                    <p>Our applications are designed with privacy in mind. We collect minimal data:</p>
                    <ul>
                        <li><strong>No Personal Data Stored:</strong> We do not collect or store your personal files, documents, or media</li>
                        <li><strong>Local Processing:</strong> All file processing (PDF conversion, compression, etc.) happens locally on your device</li>
                        <li><strong>Anonymous Analytics:</strong> We may collect anonymous usage statistics to improve app performance</li>
                        <li><strong>Crash Reports:</strong> Anonymous crash data to help us fix bugs</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Lock size={24} />
                    </div>
                    <h2>3. How We Use Your Information</h2>
                    <p>The limited information we collect is used to:</p>
                    <ul>
                        <li>Improve app performance and user experience</li>
                        <li>Fix bugs and technical issues</li>
                        <li>Understand feature usage to prioritize development</li>
                        <li>Provide customer support when requested</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. App-Specific Privacy Information</h2>

                    <div className="app-terms">
                        <h3>📑 PDF Hub & 📄 PDF Gen</h3>
                        <ul>
                            <li>All PDF processing is done locally on your device</li>
                            <li>Your documents are never uploaded to our servers</li>
                            <li>We cannot access the content of your PDFs</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>📦 SmartZip</h3>
                        <ul>
                            <li>File compression happens entirely on your device</li>
                            <li>We do not access or store your compressed files</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>🎯 FocusHub</h3>
                        <ul>
                            <li>Your focus sessions and statistics are stored locally</li>
                            <li>No personal productivity data is shared with us</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>📲 NearTransfer</h3>
                        <ul>
                            <li>Files are transferred directly between devices via WiFi Direct</li>
                            <li>Transfers never pass through our servers</li>
                            <li>We cannot see what files you share</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>🎬 NovaCraft Studio</h3>
                        <ul>
                            <li>Your animations and projects are stored locally</li>
                            <li>We do not access your creative content</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Users size={24} />
                    </div>
                    <h2>5. Third-Party Services</h2>
                    <p>Our apps may use the following third-party services:</p>
                    <ul>
                        <li><strong>Google AdMob:</strong> For displaying ads (collects anonymous advertising identifiers)</li>
                        <li><strong>Google Play Services:</strong> For app updates and in-app purchases</li>
                        <li><strong>Firebase Analytics:</strong> For anonymous usage statistics</li>
                    </ul>
                    <p>These services have their own privacy policies which we encourage you to review.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Bell size={24} />
                    </div>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Opt-out of personalized advertising in your device settings</li>
                        <li>Request deletion of any data we may have collected</li>
                        <li>Disable analytics via app settings (where available)</li>
                        <li>Uninstall our apps at any time, which removes all local data</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>7. Children's Privacy</h2>
                    <p>
                        Our applications are not directed to children under 13. We do not knowingly collect
                        personal information from children. If you are a parent and believe your child has
                        provided us with personal information, please contact us.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes
                        by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> aradhyanishanth84@gmail.com</p>
                        <p><strong>Address:</strong> Mysore, Karnataka, India</p>
                    </div>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2024 NishanthAradhya. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
