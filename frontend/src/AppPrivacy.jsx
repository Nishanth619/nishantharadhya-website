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
    },
    geocam: {
        name: "Geocam Pro",
        icon: "📸",
        description: "Professional geo-tagged camera application",
        isDetailed: true
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

// Detailed Geocam Privacy Policy Component
const GeocamPrivacy = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Shield className="terms-icon" size={40} />
                    <h1>📸 GEOCAM PRO - Privacy Policy</h1>
                    <p className="last-updated">Effective Date: January 31, 2026 | Last Updated: January 31, 2026</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to GEOCAM PRO ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we handle your data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data.
                    </p>
                    <p>
                        By using GEOCAM PRO, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Database size={24} />
                    </div>
                    <h2>1. Information We Collect</h2>

                    <h3>1.1 Location Data</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> GPS coordinates, altitude, heading, and speed from your device's location sensors.</li>
                        <li><strong>How We Collect It:</strong> Only when you actively use the app's camera or map features.</li>
                        <li><strong>Purpose:</strong> To overlay accurate geographic data on your photos and display your position on the mini-map within the app.</li>
                        <li><strong>Storage:</strong> All location data is stored exclusively on your device. We do not transmit, upload, or store location data on external servers.</li>
                    </ul>

                    <h3>1.2 Camera Access</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> Access to your device's camera to capture photos.</li>
                        <li><strong>Purpose:</strong> To enable the core functionality of taking geo-tagged photographs.</li>
                        <li><strong>Storage:</strong> Photos are saved locally to your device's gallery or the app's dedicated album (Pictures/GEOCAM PRO).</li>
                    </ul>

                    <h3>1.3 Photo Metadata (EXIF Data)</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> We embed GPS coordinates, altitude, timestamp, and other metadata into the EXIF data of photos you capture.</li>
                        <li><strong>Purpose:</strong> To provide professional geo-tagged photos with accurate location information.</li>
                        <li><strong>User Control:</strong> You can disable location tagging in the app settings. Metadata remains on your device and is only shared if you choose to export or share the photo.</li>
                    </ul>

                    <h3>1.4 Storage/Photos Access</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> Permission to read and write photos to your device's storage.</li>
                        <li><strong>Purpose:</strong> To save captured photos to your gallery and allow you to view/edit previously taken photos within the app.</li>
                        <li><strong>Storage:</strong> All photos remain on your device. We do not access, upload, or transmit your photos to any external servers.</li>
                    </ul>

                    <h3>1.5 Device Information</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> Device model, operating system version, app version, and crash logs (if the app crashes).</li>
                        <li><strong>Purpose:</strong> To improve app performance, fix bugs, and ensure compatibility across devices.</li>
                        <li><strong>Third-Party Services:</strong> Crash logs may be collected via Google Play Services for diagnostic purposes.</li>
                    </ul>

                    <h3>1.6 Weather Data</h3>
                    <ul>
                        <li><strong>What We Collect:</strong> Your current GPS coordinates are sent to the OpenWeather API to retrieve local weather information (temperature, conditions).</li>
                        <li><strong>Purpose:</strong> To display weather data on your photo overlays.</li>
                        <li><strong>Data Sharing:</strong> Only your coordinates are shared with OpenWeather. No personal identifiers (name, email, device ID) are transmitted.</li>
                        <li><strong>Third-Party Policy:</strong> <a href="https://openweathermap.org/privacy-policy" target="_blank" rel="noopener noreferrer">OpenWeather Privacy Policy</a></li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Eye size={24} />
                    </div>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the collected information solely for the following purposes:</p>
                    <ul>
                        <li><strong>Core Functionality:</strong> To capture, display, and save geo-tagged photos with accurate GPS data.</li>
                        <li><strong>Map Display:</strong> To show your current location on the in-app mini-map and watermark overlays.</li>
                        <li><strong>Weather Overlay:</strong> To fetch and display local weather information on your photos.</li>
                        <li><strong>App Improvement:</strong> To analyze crash logs and performance metrics to improve stability and user experience.</li>
                    </ul>

                    <div className="highlight-box">
                        <h3>We do NOT:</h3>
                        <ul>
                            <li>Sell, rent, or share your personal data with third parties for marketing purposes</li>
                            <li>Upload your photos or location history to cloud servers</li>
                            <li>Track your location when the app is not in use</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <ShieldCheck size={24} />
                    </div>
                    <h2>3. Data Storage and Security</h2>

                    <h3>3.1 Local Storage</h3>
                    <ul>
                        <li>All photos, GPS data, and app settings are stored exclusively on your device.</li>
                        <li>We do not have access to your data. We do not operate cloud servers or databases.</li>
                    </ul>

                    <h3>3.2 Data Security</h3>
                    <ul>
                        <li>Photos and metadata are protected by your device's built-in security features (encryption, lock screen, etc.).</li>
                        <li>We implement industry-standard security practices within the app to prevent unauthorized access.</li>
                    </ul>

                    <h3>3.3 Data Retention</h3>
                    <ul>
                        <li>Data is retained on your device until you manually delete it (via the app's gallery, device storage settings, or uninstalling the app).</li>
                        <li>Uninstalling the app will remove app-specific data, but photos saved to your device's public gallery (Pictures/GEOCAM PRO) will remain unless manually deleted.</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Globe size={24} />
                    </div>
                    <h2>4. Third-Party Services</h2>
                    <p>We integrate the following third-party services:</p>

                    <h3>4.1 Map Tiles</h3>
                    <ul>
                        <li><strong>Provider:</strong> OpenStreetMap / Mapbox</li>
                        <li><strong>Data Shared:</strong> Map tile requests based on your current location (coordinates only).</li>
                        <li><strong>Purpose:</strong> To display map backgrounds in the app's mini-map and watermark overlays.</li>
                        <li><strong>Privacy Policy:</strong> <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">OpenStreetMap Privacy</a> | <a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">Mapbox Privacy</a></li>
                    </ul>

                    <h3>4.2 Weather API</h3>
                    <ul>
                        <li><strong>Provider:</strong> OpenWeather</li>
                        <li><strong>Data Shared:</strong> Your GPS coordinates to fetch local weather data.</li>
                        <li><strong>Purpose:</strong> To display temperature and weather conditions on photo overlays.</li>
                        <li><strong>Privacy Policy:</strong> <a href="https://openweathermap.org/privacy-policy" target="_blank" rel="noopener noreferrer">OpenWeather Privacy Policy</a></li>
                    </ul>

                    <h3>4.3 Google AdMob (Advertising)</h3>
                    <ul>
                        <li><strong>Provider:</strong> Google AdMob</li>
                        <li><strong>Data Shared:</strong> Device advertising ID, app usage data, and approximate location (for ad targeting).</li>
                        <li><strong>Purpose:</strong> To display banner and interstitial ads (free version only).</li>
                        <li><strong>User Control:</strong> You can opt out of personalized ads via your device's privacy settings (Android: Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization).</li>
                        <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google AdMob Privacy</a></li>
                    </ul>

                    <h3>4.4 Google Play Billing</h3>
                    <ul>
                        <li><strong>Provider:</strong> Google Play Store</li>
                        <li><strong>Data Shared:</strong> Purchase information for premium subscriptions.</li>
                        <li><strong>Purpose:</strong> To process in-app purchases and manage premium features.</li>
                        <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Privacy</a></li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Lock size={24} />
                    </div>
                    <h2>5. Your Rights (GDPR & CCPA Compliance)</h2>
                    <p>We respect your privacy rights under international regulations, including GDPR (EU) and CCPA (California, USA).</p>

                    <h3>5.1 Right to Access</h3>
                    <p>You have the right to access all personal data stored by the app. Since all data is stored locally on your device, you can access it directly via the app's gallery and settings.</p>

                    <h3>5.2 Right to Deletion</h3>
                    <p>You can delete your data at any time by:</p>
                    <ul>
                        <li>Deleting individual photos from the app's gallery or device storage</li>
                        <li>Clearing app data via your device settings (Settings &gt; Apps &gt; GEOCAM PRO &gt; Storage &gt; Clear Data)</li>
                        <li>Uninstalling the app</li>
                    </ul>

                    <h3>5.3 Right to Opt-Out</h3>
                    <ul>
                        <li><strong>Location Services:</strong> You can disable location access at any time via your device settings (Settings &gt; Apps &gt; GEOCAM PRO &gt; Permissions &gt; Location &gt; Deny).</li>
                        <li><strong>Personalized Ads:</strong> You can opt out of personalized advertising via your device's ad settings.</li>
                    </ul>

                    <h3>5.4 Right to Portability</h3>
                    <p>You can export your photos and metadata at any time by sharing them via email, cloud storage, or other apps.</p>

                    <h3>5.5 Right to Withdraw Consent</h3>
                    <p>You can withdraw consent for any permission (camera, location, storage) at any time via your device settings. Note that withdrawing essential permissions may limit app functionality.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Users size={24} />
                    </div>
                    <h2>6. Children's Privacy</h2>
                    <p>
                        GEOCAM PRO is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us, and we will take steps to delete such information.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. International Data Transfers</h2>
                    <p>
                        Since all data is stored locally on your device, there are no international data transfers. The only external data transmissions are:
                    </p>
                    <ul>
                        <li>GPS coordinates to OpenWeather API (for weather data)</li>
                        <li>Map tile requests to OpenStreetMap/Mapbox (for map display)</li>
                        <li>Advertising data to Google AdMob (for ad serving)</li>
                    </ul>
                    <p>
                        These services may process data in countries outside your region. Please review their respective privacy policies for details.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Bell size={24} />
                    </div>
                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                    </p>
                    <ul>
                        <li>Displaying a notice within the app</li>
                        <li>Updating the "Last Updated" date at the top of this policy</li>
                    </ul>
                    <p>
                        Your continued use of the app after changes are posted constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>9. Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> nishantharadhya4@gmail.com</p>
                        <p><strong>Website:</strong> <a href="https://www.nexaaradhya.site/" target="_blank" rel="noopener noreferrer">https://www.nexaaradhya.site/</a></p>
                        <p><strong>Developer:</strong> Nishanth Aradhya AG</p>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>10. Governing Law</h2>
                    <p>
                        This Privacy Policy is governed by the laws of India, without regard to its conflict of law provisions.
                    </p>
                    <p>
                        By using GEOCAM PRO, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                    </p>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2026 GEOCAM PRO. All rights reserved.</p>
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

    // Use detailed Geocam privacy policy
    if (appId === 'geocam') {
        return <GeocamPrivacy navigate={navigate} />;
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
