import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, Scale, Mail, AlertCircle } from 'lucide-react';
import './Terms.css';

// App-specific data
const appData = {
    pdfhub: {
        name: "PDF Hub",
        icon: "📑",
        description: "PDF management application",
        features: [
            "All PDF processing is done locally on your device",
            "We do not store or access the content of your PDF files",
            "You retain full ownership of all documents you process"
        ]
    },
    pdfgen: {
        name: "PDF Gen",
        icon: "📄",
        description: "PDF creation and conversion application",
        features: [
            "Document conversion happens entirely on your device",
            "We do not upload or store your files on any server",
            "Generated PDFs remain completely private"
        ]
    },
    smartzip: {
        name: "SmartZip",
        icon: "📦",
        description: "File compression and extraction application",
        features: [
            "Compression and extraction is performed locally",
            "We do not access or store your compressed files",
            "Your files never leave your device"
        ]
    },
    focushub: {
        name: "FocusHub",
        icon: "🎯",
        description: "Focus timer and productivity application",
        features: [
            "Your focus sessions and statistics are stored locally",
            "We do not access or share your productivity data",
            "All personal data remains on your device"
        ]
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
        features: [
            "Your animations are stored locally on your device",
            "We do not access or upload your creative content",
            "You retain all rights to animations you create"
        ]
    }
};

// Detailed NearTransfer Terms and Conditions Component
const NearTransferTerms = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <FileText className="terms-icon" size={40} />
                    <h1>📲 NearTransfer - Terms and Conditions</h1>
                    <p className="last-updated">Effective Date: January 1, 2026</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <p>
                        Welcome to NearTransfer! These Terms and Conditions ("Terms") govern your use of the NearTransfer mobile application (the "App"). By downloading, installing, or using NearTransfer, you agree to be bound by these Terms.
                    </p>
                    <p><strong>Please read these Terms carefully before using the App. If you do not agree to these Terms, do not use the App.</strong></p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing or using NearTransfer, you confirm that:</p>
                    <ul>
                        <li>You are at least 13 years of age</li>
                        <li>You have read, understood, and agree to these Terms</li>
                        <li>You have read and agree to our Privacy Policy</li>
                        <li>You are legally capable of entering into a binding agreement</li>
                        <li>If using on behalf of an organization, you have authority to bind that organization</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>2. Description of Service</h2>
                    <p>NearTransfer is a cross-platform file sharing application that provides the following features:</p>

                    <h3>2.1 Core Features</h3>
                    <ul>
                        <li><strong>File Transfer:</strong> Send and receive files between devices on the same WiFi network</li>
                        <li><strong>File Manager:</strong> Browse, select, and manage files on your device</li>
                        <li><strong>Transfer History:</strong> View records of files you have received</li>
                        <li><strong>Device Discovery:</strong> Find nearby devices on your network</li>
                    </ul>

                    <h3>2.2 Additional Features</h3>
                    <ul>
                        <li><strong>App Sharing:</strong> Share installed applications as APK files</li>
                        <li><strong>Contact Sharing:</strong> Export and share contacts in VCF format</li>
                        <li><strong>Shake to Connect:</strong> Connect devices by shaking simultaneously</li>
                        <li><strong>Group Transfer:</strong> Share files with multiple devices at once</li>
                        <li><strong>Clipboard Sync:</strong> Sync clipboard text between devices</li>
                        <li><strong>Speed Test:</strong> Test transfer speed between connected devices</li>
                    </ul>

                    <div className="warning-box">
                        <p><strong>Security Notice:</strong> Installing APK files from external sources may pose security risks. You are responsible for verifying the source and safety of any APK before installation.</p>
                    </div>

                    <h3>2.3 Premium Features</h3>
                    <p>NearTransfer offers a premium upgrade ("Remove Ads") that:</p>
                    <ul>
                        <li>Removes all banner and interstitial advertisements</li>
                        <li>Is a one-time purchase (non-subscription)</li>
                        <li>Is tied to your Google Play account</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Scale size={24} />
                    </div>
                    <h2>3. License Grant</h2>
                    <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
                    <ul>
                        <li>Download and install the App on your personal Android device</li>
                        <li>Use the App for personal, non-commercial purposes</li>
                    </ul>

                    <h3>3.1 License Restrictions</h3>
                    <p>You may NOT:</p>
                    <ul>
                        <li>Copy, modify, distribute, or create derivative works of the App</li>
                        <li>Reverse engineer, decompile, disassemble, or attempt to extract source code</li>
                        <li>Remove, alter, or obscure any proprietary notices, labels, or marks</li>
                        <li>Use the App for any commercial purpose without written authorization</li>
                        <li>Rent, lease, lend, sell, or sublicense the App</li>
                        <li>Use the App in a manner that violates any applicable law or regulation</li>
                        <li>Use automated systems, bots, or scripts to interact with the App</li>
                        <li>Interfere with or disrupt the integrity or performance of the App</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. User Responsibilities</h2>

                    <h3>4.1 Lawful Use</h3>
                    <p>You agree to use NearTransfer only for lawful purposes. You are solely responsible for:</p>
                    <ul>
                        <li>All files you choose to send or receive through the App</li>
                        <li>Ensuring you have legal rights to share any content</li>
                        <li>Verifying the identity of devices you connect with</li>
                        <li>Compliance with all applicable local, state, national, and international laws</li>
                    </ul>

                    <div className="danger-box">
                        <h3>4.2 Prohibited Content and Activities</h3>
                        <p>You MUST NOT use NearTransfer to transfer or share:</p>
                        <ul>
                            <li>Copyrighted material without proper authorization</li>
                            <li>Illegal content including but not limited to pirated software, media, or games</li>
                            <li>Malware, viruses, trojans, spyware, or other harmful software</li>
                            <li>Child sexual abuse material (CSAM) or any content exploiting minors</li>
                            <li>Content promoting terrorism, violence, or hate speech</li>
                            <li>Obscene, pornographic, or sexually explicit material (where illegal)</li>
                            <li>Personal data of others without their consent</li>
                            <li>Any content that violates third-party intellectual property rights</li>
                            <li>Content that facilitates illegal activities</li>
                        </ul>
                        <p><strong>Violation of these prohibitions may result in immediate termination of your access and reporting to appropriate authorities.</strong></p>
                    </div>

                    <h3>4.3 Network and Device Security</h3>
                    <p>You acknowledge that:</p>
                    <ul>
                        <li>File transfers occur over your local WiFi network</li>
                        <li>The security of transfers depends on your network's security</li>
                        <li>You should only use NearTransfer on trusted, secure networks</li>
                        <li>You are responsible for securing your own device</li>
                        <li>We recommend using password-protected WiFi for sensitive transfers</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>5. Intellectual Property</h2>
                    <p>The App and its original content, features, functionality, brand, and design are owned by NearTransfer and are protected by international copyright, trademark, and other intellectual property laws.</p>
                    <ul>
                        <li>The "NearTransfer" name, logo, and visual design are our intellectual property</li>
                        <li>You may not use our branding without prior written permission</li>
                        <li>Third-party trademarks mentioned in the App remain property of their respective owners</li>
                        <li>User-generated content (files transferred) remains your property; we claim no ownership</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>6. In-App Purchases</h2>

                    <h3>6.1 Premium Purchase</h3>
                    <ul>
                        <li>The "Remove Ads" premium purchase is a one-time, non-consumable purchase</li>
                        <li>Purchases are processed through Google Play Billing</li>
                        <li>Prices are displayed before purchase and may vary by region</li>
                        <li>Premium status is tied to your Google Play account</li>
                    </ul>

                    <h3>6.2 Refunds</h3>
                    <p>All purchases and refunds are handled by Google Play in accordance with their refund policies.</p>

                    <h3>6.3 Restore Purchases</h3>
                    <ul>
                        <li>If you previously purchased premium, you can restore it on any device using the same Google account</li>
                        <li>Use the "Restore Purchases" option in the app's Premium screen</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>7. Third-Party Services</h2>
                    <p>NearTransfer integrates with third-party services:</p>

                    <h3>7.1 Google AdMob</h3>
                    <p>Advertisements are provided by Google AdMob. By using the App, you also agree to:</p>
                    <ul>
                        <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Terms of Service</a></li>
                        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                    </ul>

                    <h3>7.2 Google Play Services</h3>
                    <p>Certain features require Google Play Services. Usage is subject to Google's terms.</p>

                    <h3>7.3 Open Source Libraries</h3>
                    <p>The App uses various open source libraries. Their respective licenses apply to those components.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>8. Disclaimers</h2>

                    <div className="warning-box">
                        <h3>8.1 "As Is" Provision</h3>
                        <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                        <ul>
                            <li>Implied warranties of merchantability</li>
                            <li>Fitness for a particular purpose</li>
                            <li>Non-infringement</li>
                            <li>Accuracy, reliability, or completeness</li>
                            <li>Continuous, uninterrupted, or secure access</li>
                        </ul>
                    </div>

                    <h3>8.2 No Guarantees</h3>
                    <p>We do not guarantee that:</p>
                    <ul>
                        <li>The App will function without errors, bugs, or interruptions</li>
                        <li>Defects will be corrected in any specific timeframe</li>
                        <li>The App is free of viruses or harmful components</li>
                        <li>Transfer speeds will meet your expectations</li>
                        <li>The App will be compatible with all Android devices</li>
                        <li>Files will transfer successfully in all network conditions</li>
                        <li>The App will remain available indefinitely</li>
                    </ul>

                    <h3>8.3 File Transfer Disclaimer</h3>
                    <p>We are not responsible for:</p>
                    <ul>
                        <li>Files that fail to transfer or become corrupted during transfer</li>
                        <li>Loss of data during transfers</li>
                        <li>Unauthorized access to transfers on unsecured networks</li>
                        <li>Content of files transferred by users</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>9. Limitation of Liability</h2>
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                    <ul>
                        <li>NearTransfer, its developers, affiliates, and licensors shall NOT be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                        <li>This includes but is not limited to: loss of profits, data, use, goodwill, or other intangible losses</li>
                        <li>Our total liability shall not exceed the amount paid by you for premium features, if any, in the 12 months preceding the claim</li>
                        <li>If you have not made any purchases, our maximum liability is $10 USD</li>
                    </ul>
                    <p>Some jurisdictions do not allow limitation of liability for certain damages. In such cases, liability is limited to the maximum extent permitted by law.</p>
                </section>

                <section className="terms-section">
                    <h2>10. Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless NearTransfer and its developers, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney fees) arising from:</p>
                    <ul>
                        <li>Your use or misuse of the App</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Any content you transfer using the App</li>
                        <li>Your violation of any applicable laws or regulations</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>11. Termination</h2>

                    <h3>11.1 By Us</h3>
                    <p>We may terminate or suspend your access immediately, without prior notice, if:</p>
                    <ul>
                        <li>You breach any provision of these Terms</li>
                        <li>You use the App for illegal activities</li>
                        <li>We are required to do so by law</li>
                        <li>We discontinue the App</li>
                    </ul>

                    <h3>11.2 By You</h3>
                    <p>You may terminate your use at any time by uninstalling the App.</p>

                    <h3>11.3 Effect of Termination</h3>
                    <p>Upon termination:</p>
                    <ul>
                        <li>Your license to use the App immediately ceases</li>
                        <li>You must delete all copies of the App</li>
                        <li>Provisions intended to survive (e.g., indemnification, limitation of liability) remain in effect</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>12. Updates and Modifications</h2>
                    <ul>
                        <li>We may update the App from time to time with new features, bug fixes, or security patches</li>
                        <li>Updates may modify or remove certain features</li>
                        <li>Continued use after updates constitutes acceptance of changes</li>
                        <li>We recommend keeping the App updated for optimal performance and security</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>13. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms at any time. We will notify you of changes by:</p>
                    <ul>
                        <li>Updating the "Effective Date" at the top of this page</li>
                        <li>Posting the revised Terms within the App or on our website</li>
                        <li>Providing in-app notification for significant changes</li>
                    </ul>
                    <p>Continued use of the App after changes constitutes acceptance of the revised Terms.</p>
                </section>

                <section className="terms-section">
                    <h2>14. Governing Law and Dispute Resolution</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
                    <p>Any disputes arising from these Terms or your use of the App shall be:</p>
                    <ul>
                        <li>First, attempted to be resolved through good-faith negotiation</li>
                        <li>If negotiation fails, resolved through the courts of competent jurisdiction in India</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>15. Severability</h2>
                    <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
                </section>

                <section className="terms-section">
                    <h2>16. Waiver</h2>
                    <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision unless acknowledged and agreed to by us in writing.</p>
                </section>

                <section className="terms-section">
                    <h2>17. Entire Agreement</h2>
                    <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and NearTransfer regarding the use of the App. These Terms supersede any prior agreements or communications.</p>
                </section>

                <section className="terms-section">
                    <h2>18. Assignment</h2>
                    <p>You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign our rights and obligations without restriction.</p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <Mail size={24} />
                    </div>
                    <h2>19. Contact Us</h2>
                    <p>If you have questions, concerns, or feedback regarding these Terms and Conditions, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> agnishanth609@gmail.com</p>
                        <p><strong>Developer:</strong> NearTransfer</p>
                        <p><strong>Response Time:</strong> We aim to respond within 48 business hours</p>
                    </div>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2026 NearTransfer. All rights reserved.</p>
            </div>
        </div>
    );
};

const AppTerms = () => {
    const { appId } = useParams();
    const navigate = useNavigate();
    const app = appData[appId];

    // Use detailed NearTransfer terms
    if (appId === 'neartransfer') {
        return <NearTransferTerms navigate={navigate} />;
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
                    <FileText className="terms-icon" size={40} />
                    <h1>{app.icon} {app.name} - Terms and Conditions</h1>
                    <p className="last-updated">Last Updated: December 2024</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By downloading, installing, or using {app.name}, you agree to be bound by these Terms and Conditions.
                        If you do not agree to these terms, please do not use this application.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Scale size={24} />
                    </div>
                    <h2>2. License Grant</h2>
                    <p>
                        We grant you a limited, non-exclusive, non-transferable, revocable license to use {app.name}
                        for personal, non-commercial purposes. This license does not include the right to:
                    </p>
                    <ul>
                        <li>Modify, reverse engineer, or decompile the application</li>
                        <li>Rent, lease, or lend the application to third parties</li>
                        <li>Copy, distribute, or create derivative works</li>
                        <li>Remove any proprietary notices or labels</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>3. {app.name} Specific Terms</h2>
                    <p>{app.name} is a {app.description}. By using this app:</p>
                    <ul>
                        {app.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. User Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul>
                        <li>Use the application only for lawful purposes</li>
                        <li>Not use the application to infringe on others' intellectual property rights</li>
                        <li>Not attempt to gain unauthorized access to our systems</li>
                        <li>Keep your device and application updated for security</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>5. Disclaimer of Warranties</h2>
                    <p>
                        {app.name} is provided "as is" without warranties of any kind, either express or implied.
                        We do not warrant that the application will be uninterrupted, error-free, or completely secure.
                        You use this application at your own risk.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages arising from your use of {app.name}.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                        immediately upon posting. Your continued use of {app.name} after any changes constitutes
                        acceptance of the new terms.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <Mail size={24} />
                    </div>
                    <h2>8. Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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

export default AppTerms;
