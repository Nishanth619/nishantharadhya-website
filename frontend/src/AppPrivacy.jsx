import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Lock, Bell, Users, Globe, AlertCircle, Wifi, FileText, CreditCard, ShieldCheck } from 'lucide-react';
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
        isDetailed: true
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
        description: "cross-platform file sharing application that enables seamless file transfers between Android and Windows devices over the same WiFi network",
        isDetailed: true
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

// Detailed NearTransfer Privacy Policy Component
const NearTransferPrivacy = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Shield className="terms-icon" size={40} />
                    <h1>📲 NearTransfer - Privacy Policy</h1>
                    <p className="last-updated">Effective Date: January 1, 2026</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <p>
                        Welcome to NearTransfer ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you use our mobile application NearTransfer (the "App"). Please read this
                        Privacy Policy carefully.
                    </p>
                    <p>
                        By downloading, installing, or using NearTransfer, you agree to the collection and use of information in
                        accordance with this policy.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Eye size={24} />
                    </div>
                    <h2>1. App Overview</h2>
                    <p>
                        NearTransfer is a cross-platform file sharing application that enables seamless file transfers between Android and Windows devices over the same WiFi network. Share files from phone to PC, PC to phone, or between devices of the same platform — all without requiring internet or cloud storage.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>2. Information We Collect</h2>

                    <h3>2.1 Information We Do NOT Collect</h3>
                    <div className="highlight-box">
                        <p><strong>We do NOT collect, store, or have access to:</strong></p>
                        <ul>
                            <li>The content of files you transfer (photos, videos, documents, etc.)</li>
                            <li>Your contacts or contact information</li>
                            <li>Your call logs or SMS messages</li>
                            <li>Your precise location</li>
                            <li>Personal identification information (name, email, phone number)</li>
                            <li>Login credentials (no account required)</li>
                        </ul>
                        <p><strong>All file transfers happen directly between devices on your local network. We never see or store your transferred files.</strong></p>
                    </div>

                    <h3>2.2 Information Automatically Collected</h3>
                    <p>We may collect limited technical information through our advertising partner (Google AdMob):</p>
                    <ul>
                        <li><strong>Device Information:</strong> Device type, model, operating system version</li>
                        <li><strong>Advertising Identifier:</strong> A resettable identifier used for personalized advertising</li>
                        <li><strong>IP Address:</strong> Used for approximate geographic location (country-level) for ad targeting</li>
                        <li><strong>App Usage:</strong> General usage statistics such as app opens, session duration</li>
                    </ul>

                    <h3>2.3 Local Data Storage</h3>
                    <p>The App stores the following data locally on your device (NOT on our servers):</p>
                    <ul>
                        <li><strong>Transfer History:</strong> Records of files you've received (stored in local database)</li>
                        <li><strong>App Settings:</strong> Your preferences such as device name, save location</li>
                        <li><strong>Premium Status:</strong> Whether you've purchased the ad-free version</li>
                    </ul>
                    <p>This data remains on your device and is not transmitted to us.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Lock size={24} />
                    </div>
                    <h2>3. Permissions We Request</h2>
                    <p>NearTransfer requires certain permissions to function. Here's a complete list and why we need each:</p>

                    <div className="permissions-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Permission</th>
                                    <th>Purpose</th>
                                    <th>When Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Internet</strong></td>
                                    <td>Display advertisements, check for updates</td>
                                    <td>Throughout app usage</td>
                                </tr>
                                <tr>
                                    <td><strong>WiFi State</strong></td>
                                    <td>Discover nearby devices on the same network</td>
                                    <td>When sending/receiving files</td>
                                </tr>
                                <tr>
                                    <td><strong>Network State</strong></td>
                                    <td>Check network connectivity status</td>
                                    <td>Before file transfers</td>
                                </tr>
                                <tr>
                                    <td><strong>Storage (Read/Write)</strong></td>
                                    <td>Access files you select to send, save received files</td>
                                    <td>Only when you initiate transfers</td>
                                </tr>
                                <tr>
                                    <td><strong>Contacts (Read/Write)</strong></td>
                                    <td>Export contacts to share, import received contacts</td>
                                    <td>Only in Contact Sharing feature</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p><strong>Note:</strong> Contacts are accessed only when you explicitly choose to use the Contact Sharing feature and are never collected, stored, or transmitted to our servers.</p>

                    <div className="permissions-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Permission</th>
                                    <th>Purpose</th>
                                    <th>When Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Query All Packages</strong></td>
                                    <td>List installed apps for app sharing feature</td>
                                    <td>Only in App Sharing feature</td>
                                </tr>
                                <tr>
                                    <td><strong>Install Packages</strong></td>
                                    <td>Install received APK files (with your permission)</td>
                                    <td>Only when you choose to install</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="warning-box">
                        <p><strong>Note:</strong> All permissions are optional and requested only when you use the specific feature. You can deny permissions, but some features may not work without them.</p>
                    </div>

                    <p><strong>Important:</strong> NearTransfer does not track app usage, behavior, or analytics related to installed applications. Installed app information is used only to display apps for user-initiated sharing.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>4. How We Use Information</h2>
                    <p>The limited information we collect is used to:</p>
                    <ul>
                        <li>Display relevant advertisements (via Google AdMob)</li>
                        <li>Process in-app purchases (via Google Play Billing)</li>
                        <li>Improve app performance and fix bugs</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Users size={24} />
                    </div>
                    <h2>5. Third-Party Services</h2>

                    <h3>5.1 Google AdMob</h3>
                    <p>We use Google AdMob to display advertisements. AdMob collects data to provide personalized ads:</p>
                    <ul>
                        <li>Device advertising identifier</li>
                        <li>IP address for location targeting</li>
                        <li>App and device information</li>
                    </ul>
                    <p><strong>How to opt out:</strong> Go to Settings → Google → Ads → Opt out of Ads Personalization</p>
                    <p>Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>

                    <h3>5.2 Google Play Billing</h3>
                    <p>For premium purchases, we use Google Play Billing. All payment processing is handled by Google. We receive only:</p>
                    <ul>
                        <li>Confirmation of purchase (purchase token)</li>
                        <li>Product purchased (remove ads)</li>
                    </ul>
                    <p>We do NOT receive your payment details, credit card information, or billing address.</p>

                    <h3>5.3 Local Network Transfer Protocol</h3>
                    <p>File transfers use TCP and HTTP protocols over your local WiFi network. All transfers happen directly between devices without routing through external servers.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <ShieldCheck size={24} />
                    </div>
                    <h2>6. Data Transfer and Security</h2>
                    <div className="highlight-box">
                        <p><strong>How File Transfers Work:</strong></p>
                        <ul>
                            <li>All file transfers happen directly between devices on your local WiFi network</li>
                            <li>Files are NOT uploaded to any cloud server</li>
                            <li>Files are NOT routed through our servers</li>
                            <li>We have no access to the content of your transfers</li>
                        </ul>
                    </div>

                    <p><strong>Security Recommendations:</strong></p>
                    <ul>
                        <li>Use secure, password-protected WiFi networks</li>
                        <li>Only accept file transfers from trusted devices</li>
                        <li>The security of transfers depends on your network security</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>7. Data Retention</h2>
                    <ul>
                        <li><strong>Local Data:</strong> Transfer history and settings remain on your device until you clear app data or uninstall</li>
                        <li><strong>Advertising Data:</strong> Managed by Google AdMob per their retention policies</li>
                        <li><strong>Purchase Data:</strong> Managed by Google Play per their retention policies</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>8. Children's Privacy</h2>
                    <p>
                        NearTransfer is not intended for children under 13 years of age. We do not knowingly collect personal information
                        from children under 13. If you are a parent or guardian and believe your child has provided personal
                        information, please contact us at the email below, and we will delete such information.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Bell size={24} />
                    </div>
                    <h2>9. Your Rights and Choices</h2>
                    <p>You have the following rights regarding your data:</p>
                    <ul>
                        <li><strong>Opt-out of Personalized Ads:</strong> Adjust settings in your device's Google settings</li>
                        <li><strong>Clear Local Data:</strong> Clear app data in Android settings or uninstall the app</li>
                        <li><strong>Deny Permissions:</strong> You can deny any permission; features may be limited</li>
                        <li><strong>Request Information:</strong> Contact us to inquire about data practices</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>10. International Users</h2>
                    <p>
                        NearTransfer is operated from India. If you are accessing the App from outside India, please be aware that any
                        limited data collected may be transferred to and processed in India. By using the App, you consent to this
                        transfer. The app primarily operates locally on your device, minimizing international data transfers.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>11. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                        "Effective Date." We encourage you to review this Privacy Policy periodically. Continued use of the App after
                        changes constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <h2>12. Contact Us</h2>
                    <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> agnishanth609@gmail.com</p>
                        <p><strong>Developer:</strong> NearTransfer</p>
                    </div>
                    <p>We aim to respond to all inquiries within 48 business hours.</p>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2026 NearTransfer. All rights reserved.</p>
            </div>
        </div>
    );
};

// Detailed PDFGen Privacy Policy Component
const PDFGenPrivacy = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Shield className="terms-icon" size={40} />
                    <h1>📄 PDFGen - Privacy Policy</h1>
                    <p className="last-updated">Last Updated: January 7, 2026</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>Introduction</h2>
                    <p>
                        PDFGen ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application PDFGen (the "App").
                    </p>
                    <p>This app is developed and published by the PDFGen app developer.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>Information We Collect</h2>

                    <h3>Information You Provide</h3>
                    <ul>
                        <li><strong>PDF Files:</strong> Documents you create, edit, or manage using our app are stored locally on your device only.</li>
                        <li><strong>Images:</strong> Photos you capture or select for PDF conversion are processed locally.</li>
                        <li><strong>Contacts:</strong> When using Business Card Scanner, contact information is extracted via OCR and saved to your device contacts only with your permission.</li>
                        <li><strong>Digital Signatures:</strong> Signature data you create is stored locally on your device.</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <ul>
                        <li><strong>Device Information:</strong> Basic device type and operating system version for compatibility purposes.</li>
                        <li><strong>Crash Reports:</strong> Anonymous crash data to improve app stability.</li>
                        <li><strong>Ad Data:</strong> We use Google AdMob to display advertisements. AdMob may collect device identifiers and usage data as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
                    </ul>

                    <div className="highlight-box">
                        <h3>Information We Do NOT Collect</h3>
                        <ul>
                            <li>We do NOT upload your PDF files to any server</li>
                            <li>We do NOT collect personal identification information</li>
                            <li>We do NOT track your location</li>
                            <li>We do NOT access your files without your explicit action</li>
                            <li>We do NOT share your documents with third parties</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Eye size={24} />
                    </div>
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To provide PDF conversion, scanning, and document management features</li>
                        <li>To save contacts from scanned business cards (with your permission)</li>
                        <li>To display advertisements via Google AdMob, which may be personalized or non-personalized based on user consent and region</li>
                        <li>To improve app performance and fix bugs</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Lock size={24} />
                    </div>
                    <h2>Permissions We Request</h2>
                    <div className="permissions-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Permission</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Camera</td>
                                    <td>Document scanning and photo capture</td>
                                </tr>
                                <tr>
                                    <td>Storage/Photos</td>
                                    <td>Import images and save PDF files</td>
                                </tr>
                                <tr>
                                    <td>Contacts</td>
                                    <td>Save scanned business card contacts (optional)</td>
                                </tr>
                                <tr>
                                    <td>Internet</td>
                                    <td>Display advertisements</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <ShieldCheck size={24} />
                    </div>
                    <h2>Data Storage and Security</h2>
                    <p>
                        All PDF files, images, and documents are stored <strong>locally on your device only</strong>. We do not upload or store your files on any external servers. Your data remains under your control at all times.
                    </p>
                    <p>
                        We implement appropriate security measures including biometric authentication option to protect your documents.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>Third-Party Services</h2>
                    <p>Our app uses the following third-party services:</p>
                    <ul>
                        <li><strong>Google AdMob:</strong> For displaying advertisements. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                        <li><strong>Google ML Kit:</strong> For OCR text recognition and document scanning (processed on-device)</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Users size={24} />
                    </div>
                    <h2>Children's Privacy</h2>
                    <p>
                        Our app is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>Your Rights</h2>
                    <ul>
                        <li>You can delete any PDF or document created by the app at any time</li>
                        <li>You can revoke permissions through your device settings</li>
                        <li>You can uninstall the app to remove all locally stored data</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>Regional Privacy Rights</h2>
                    <p>
                        Depending on your location (such as the European Economic Area), you may have additional rights under data protection laws, including the right to access, correct, or delete your data. Since PDFGen does not store personal data on external servers, most data can be managed directly on your device.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Bell size={24} />
                    </div>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> pdfgen09@gmail.com</p>
                        <p><strong>Developer:</strong> PDFGen</p>
                    </div>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2026 PDFGen. All rights reserved.</p>
            </div>
        </div>
    );
};

const AppPrivacy = () => {
    const { appId } = useParams();
    const navigate = useNavigate();
    const app = appData[appId];

    // Use detailed NearTransfer privacy policy
    if (appId === 'neartransfer') {
        return <NearTransferPrivacy navigate={navigate} />;
    }

    // Use detailed PDFGen privacy policy
    if (appId === 'pdfgen') {
        return <PDFGenPrivacy navigate={navigate} />;
    }

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
