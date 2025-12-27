import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Lock, Bell, Users, Globe, AlertCircle } from 'lucide-react';
import './Terms.css';

// App-specific data
const appData = {
    pdfhub: {
        name: "PDF Hub",
        icon: "📑",
        description: "PDF management application",
        dataCollection: [
            "No personal documents are collected or stored",
            "PDF processing happens entirely on your device",
            "We cannot access the content of your files"
        ],
        permissions: ["Storage access to read and save PDF files"]
    },
    pdfgen: {
        name: "PDF Gen",
        icon: "📄",
        description: "PDF creation and conversion application",
        dataCollection: [
            "No documents are uploaded to any server",
            "All conversions happen locally on your device",
            "Generated PDFs remain private on your device"
        ],
        permissions: ["Storage access to save generated PDFs", "Camera access for document scanning (optional)"]
    },
    smartzip: {
        name: "SmartZip",
        icon: "📦",
        description: "File compression and extraction application",
        dataCollection: [
            "No files are uploaded or stored externally",
            "Compression happens entirely on your device",
            "We cannot see your file contents"
        ],
        permissions: ["Storage access to read and write files"]
    },
    focushub: {
        name: "FocusHub",
        icon: "🎯",
        description: "Focus timer and productivity application",
        dataCollection: [
            "Focus session data is stored only on your device",
            "We do not collect or share productivity statistics",
            "No account or login required"
        ],
        permissions: ["Notification access for timer alerts"]
    },
    neartransfer: {
        name: "NearTransfer",
        icon: "📲",
        description: "WiFi Direct file transfer application",
        dataCollection: [
            "Files are transferred directly between devices",
            "No data passes through our servers",
            "Transfer history is stored locally only"
        ],
        permissions: ["WiFi access for device discovery", "Storage access to share files", "Location for WiFi Direct (Android requirement)"]
    },
    novacraft: {
        name: "NovaCraft Studio",
        icon: "🎬",
        description: "Stop motion animation application",
        dataCollection: [
            "Animations are stored only on your device",
            "We do not access your creative projects",
            "No cloud sync or upload features"
        ],
        permissions: ["Camera access for capturing frames", "Storage access to save animations"]
    }
};

const AppPrivacy = () => {
    const { appId } = useParams();
    const navigate = useNavigate();
    const app = appData[appId];

    if (!app) {
        return (
            <div className="terms-container" data-theme="dark">
                <div className="terms-header">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </button>
                    <div className="terms-title-section">
                        <AlertCircle className="terms-icon" size={40} />
                        <h1>App Not Found</h1>
                    </div>
                </div>
                <div className="terms-content">
                    <p>The requested app was not found. Please check the URL.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Shield className="terms-icon" size={40} />
                    <h1>{app.icon} {app.name} - Privacy Policy</h1>
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
                        NishanthAradhya ("we," "our," or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how {app.name} handles your information.
                        {app.name} is a {app.description}.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>2. Information We Collect</h2>
                    <p>{app.name} is designed with privacy as a priority:</p>
                    <ul>
                        {app.dataCollection.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <p><strong>Anonymous Data:</strong> We may collect anonymous crash reports and usage statistics to improve app performance.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Lock size={24} />
                    </div>
                    <h2>3. App Permissions</h2>
                    <p>{app.name} requires the following permissions:</p>
                    <ul>
                        {app.permissions.map((perm, idx) => (
                            <li key={idx}>{perm}</li>
                        ))}
                    </ul>
                    <p>These permissions are used solely for app functionality and not for data collection.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Users size={24} />
                    </div>
                    <h2>4. Third-Party Services</h2>
                    <p>{app.name} may use these third-party services:</p>
                    <ul>
                        <li><strong>Google AdMob:</strong> For displaying advertisements (collects anonymous ad identifiers)</li>
                        <li><strong>Google Play Services:</strong> For app updates and in-app purchases</li>
                        <li><strong>Firebase Crashlytics:</strong> For anonymous crash reporting</li>
                    </ul>
                    <p>These services have their own privacy policies.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Bell size={24} />
                    </div>
                    <h2>5. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Opt-out of personalized ads in your device settings</li>
                        <li>Request deletion of any analytics data</li>
                        <li>Uninstall the app at any time (removes all local data)</li>
                        <li>Contact us with privacy concerns</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>6. Children's Privacy</h2>
                    <p>
                        {app.name} is not directed to children under 13. We do not knowingly collect
                        personal information from children. If you believe a child has provided us with
                        personal information, please contact us.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. Data Security</h2>
                    <p>
                        Since {app.name} processes data locally on your device, your files and data
                        remain under your control. We implement industry-standard security practices
                        for any analytics data we collect.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any
                        changes by updating the "Last Updated" date at the top of this page.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <h2>9. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default AppPrivacy;
