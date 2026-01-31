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
        isDetailed: true
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
    },
    geocam: {
        name: "Geocam Pro",
        icon: "📸",
        description: "Professional geo-tagged camera application",
        isDetailed: true
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

// Detailed PDFGen Terms and Conditions Component
const PDFGenTerms = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <FileText className="terms-icon" size={40} />
                    <h1>📄 PDFGen - Terms and Conditions</h1>
                    <p className="last-updated">Last Updated: January 7, 2026</p>
                </div>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By downloading, installing, or using the PDFGen mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.
                    </p>
                    <p>The App is developed and published by the PDFGen app developer.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>2. Description of Service</h2>
                    <p>PDFGen is a mobile application that provides the following services:</p>
                    <ul>
                        <li>Convert images to PDF documents</li>
                        <li>Scan documents using your device camera</li>
                        <li>Extract text from images using OCR (Optical Character Recognition)</li>
                        <li>Add password protection to PDF files</li>
                        <li>Add digital signatures to PDF documents</li>
                        <li>Add watermarks to PDF files</li>
                        <li>Split and merge PDF documents</li>
                        <li>Create ID/passport photos</li>
                        <li>Scan business cards and save contacts</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Scale size={24} />
                    </div>
                    <h2>3. License Grant</h2>
                    <p>
                        Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for personal or professional document management purposes.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>4. User Responsibilities</h2>
                    <p>When using the App, you agree to:</p>
                    <ul>
                        <li>Use the App in compliance with all applicable laws and regulations</li>
                        <li>Not use the App for any illegal, harmful, or unauthorized purposes</li>
                        <li>Not attempt to reverse engineer, decompile, or modify the App</li>
                        <li>Not use the App to create, distribute, or store any illegal or infringing content</li>
                        <li>Take responsibility for the content of documents you create</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>5. User Content</h2>
                    <p>
                        You retain all rights to the PDF files, images, and documents you create using the App. We do not claim any ownership rights to your content.
                    </p>
                    <p>
                        All your documents are stored locally on your device. We do not upload, access, or store your files on any external servers.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>6. In-App Purchases and Subscriptions</h2>
                    <p>
                        The App may offer premium features through in-app purchases. All purchases are processed through Google Play and are subject to Google Play's terms of service.
                    </p>
                    <ul>
                        <li>Prices are displayed in your local currency before purchase</li>
                        <li>Purchases are non-refundable except as required by applicable law</li>
                        <li>Premium features are tied to your Google account</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>7. Advertisements</h2>
                    <p>
                        The free version of the App displays advertisements provided by Google AdMob. Advertisements may be personalized or non-personalized depending on user consent, device settings, and applicable laws.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Intellectual Property</h2>
                    <p>
                        The App and its original content, features, and functionality are owned by PDFGen and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>9. Disclaimer of Warranties</h2>
                    <div className="warning-box">
                        <p>
                            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                        </p>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>10. Limitation of Liability</h2>
                    <div className="warning-box">
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PDFGEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO:
                        </p>
                        <ul>
                            <li>Loss of data or documents</li>
                            <li>Loss of profits or business opportunities</li>
                            <li>Any unauthorized access to your device</li>
                            <li>Any errors or omissions in the App's functionality</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>11. No Professional Advice</h2>
                    <p>
                        The App is provided for general document management purposes only. PDFGen does not provide legal, financial, or professional advice. Users are responsible for verifying the accuracy and suitability of documents created using the App.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>12. Modifications to the App</h2>
                    <p>
                        We reserve the right to modify, suspend, or discontinue the App at any time without notice. We will not be liable for any modification, suspension, or discontinuance of the App.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>13. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or by updating the "Last Updated" date. Continued use of the App after changes constitutes acceptance of the new Terms.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>14. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>15. Severability</h2>
                    <p>
                        If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>16. Entire Agreement</h2>
                    <p>
                        These Terms, together with our Privacy Policy, constitute the entire agreement between you and PDFGen regarding the use of the App.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <Mail size={24} />
                    </div>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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

// Detailed Geocam Terms and Conditions Component
const GeocamTerms = ({ navigate }) => {
    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <FileText className="terms-icon" size={40} />
                    <h1>📸 GEOCAM PRO - Terms and Conditions</h1>
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
                        Welcome to GEOCAM PRO ("the App," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of the GEOCAM PRO mobile application. By downloading, installing, accessing, or using the App, you agree to be bound by these Terms.
                    </p>
                    <p>If you do not agree to these Terms, do not use the App.</p>
                </section>

                <section className="terms-section">
                    <h2>1. Acceptance of Terms</h2>

                    <h3>1.1 Binding Agreement</h3>
                    <p>By using GEOCAM PRO, you enter into a legally binding agreement with the App developer. These Terms apply to all users, including visitors, registered users, and premium subscribers.</p>

                    <h3>1.2 Age Requirement</h3>
                    <p>You must be at least 13 years of age to use this App. If you are under 18, you must have parental or guardian consent to use the App. By using the App, you represent and warrant that you meet these age requirements.</p>

                    <h3>1.3 Updates to Terms</h3>
                    <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by:</p>
                    <ul>
                        <li>Displaying a notice within the App</li>
                        <li>Updating the "Last Updated" date at the top of this document</li>
                    </ul>
                    <p>Your continued use of the App after changes are posted constitutes your acceptance of the updated Terms.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Scale size={24} />
                    </div>
                    <h2>2. License to Use</h2>

                    <h3>2.1 Limited License</h3>
                    <p>GEOCAM PRO grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on your personal mobile device solely for your personal, non-commercial use.</p>

                    <h3>2.2 Ownership</h3>
                    <p>The App, including all content, features, functionality, software, code, design, graphics, and trademarks, is owned by the App developer and is protected by international copyright, trademark, and other intellectual property laws.</p>

                    <h3>2.3 Restrictions</h3>
                    <p>You agree NOT to:</p>
                    <ul>
                        <li>Copy, modify, distribute, sell, or lease any part of the App</li>
                        <li>Reverse engineer, decompile, or disassemble the App</li>
                        <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
                        <li>Use the App for any illegal, harmful, or unauthorized purpose</li>
                        <li>Use automated bots, scripts, or tools to access or interact with the App</li>
                        <li>Attempt to gain unauthorized access to the App's systems, servers, or networks</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>3. User Responsibilities</h2>

                    <h3>3.1 Account Security</h3>
                    <p>If the App requires account creation in the future, you are responsible for:</p>
                    <ul>
                        <li>Providing accurate and complete information</li>
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                    </ul>

                    <h3>3.2 Acceptable Use</h3>
                    <p>You agree to use the App in compliance with all applicable laws and regulations. You will not:</p>
                    <ul>
                        <li>Upload, share, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable</li>
                        <li>Violate the intellectual property rights of others</li>
                        <li>Engage in any activity that disrupts or interferes with the App's functionality</li>
                        <li>Use the App to collect or harvest personal information about other users</li>
                    </ul>

                    <h3>3.3 User-Generated Content</h3>
                    <p>If you create or share content using the App (e.g., geo-tagged photos):</p>
                    <ul>
                        <li>You retain ownership of your content</li>
                        <li>You are solely responsible for the content you create, including ensuring it does not violate any laws or third-party rights</li>
                        <li>You grant us a non-exclusive, royalty-free license to use, display, and distribute your content solely for the purpose of providing App functionality (e.g., displaying photos in the in-app gallery)</li>
                    </ul>

                    <h3>3.4 Location Data Responsibility</h3>
                    <p>You acknowledge that:</p>
                    <ul>
                        <li>GPS data accuracy depends on your device's hardware and environmental factors (e.g., satellite visibility, weather, terrain)</li>
                        <li>We do not guarantee the accuracy, reliability, or completeness of GPS data</li>
                        <li>You are solely responsible for verifying the accuracy of location data before relying on it for navigation, surveying, or any critical purpose</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. Premium Features and Subscriptions</h2>

                    <h3>4.1 Free vs. Premium</h3>
                    <p>GEOCAM PRO offers both free and premium features:</p>
                    <ul>
                        <li><strong>Free Version:</strong> Includes core functionality with ads (banner and interstitial ads)</li>
                        <li><strong>Premium Version:</strong> Unlocks advanced features (e.g., tactical map styles, custom templates, ad-free experience) via in-app purchase or subscription</li>
                    </ul>

                    <h3>4.2 Billing and Payment</h3>
                    <ul>
                        <li>Premium subscriptions are processed securely via Google Play Billing</li>
                        <li>Subscriptions auto-renew unless canceled at least 24 hours before the end of the current billing period</li>
                        <li>You can manage or cancel your subscription at any time via your Google Play account settings</li>
                    </ul>

                    <h3>4.3 Refunds</h3>
                    <ul>
                        <li>Refund policies are governed by Google Play's refund policy</li>
                        <li>We do not provide direct refunds. Please contact Google Play support for refund requests</li>
                    </ul>

                    <h3>4.4 Changes to Pricing</h3>
                    <p>We reserve the right to modify subscription pricing at any time. Price changes will apply to new subscriptions and renewals after the change is announced.</p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>5. Disclaimers and Limitations of Liability</h2>

                    <h3>5.1 "AS IS" and "AS AVAILABLE" Basis</h3>
                    <div className="warning-box">
                        <p>GEOCAM PRO is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:</p>
                        <ul>
                            <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                            <li>Guarantees that the App will be error-free, uninterrupted, secure, or free from viruses or harmful components</li>
                        </ul>
                    </div>

                    <h3>5.2 No Professional Advice</h3>
                    <p>The App is for informational and recreational purposes only. It does not provide:</p>
                    <ul>
                        <li>Professional surveying, navigation, or mapping advice</li>
                        <li>Medical, legal, financial, or other professional advice</li>
                    </ul>
                    <p>You should not rely solely on the App for critical decisions. Always verify information with professional sources.</p>

                    <h3>5.3 GPS Accuracy Disclaimer</h3>
                    <div className="warning-box">
                        <ul>
                            <li>GPS data accuracy depends on your device's hardware, satellite availability, and environmental conditions</li>
                            <li>We do not guarantee the accuracy, precision, or reliability of GPS coordinates, altitude, or other location data</li>
                            <li>Use GPS data at your own risk. We are not liable for any errors, inaccuracies, or consequences arising from reliance on GPS data</li>
                        </ul>
                    </div>

                    <h3>5.4 Third-Party Services Disclaimer</h3>
                    <p>The App integrates third-party services (e.g., OpenWeather, Mapbox, Google AdMob). We are not responsible for:</p>
                    <ul>
                        <li>The accuracy, availability, or reliability of third-party services</li>
                        <li>Any changes, interruptions, or discontinuation of third-party services</li>
                        <li>The privacy practices or content of third-party services (please review their respective privacy policies)</li>
                    </ul>

                    <h3>5.5 Limitation of Liability</h3>
                    <div className="warning-box">
                        <p>To the maximum extent permitted by law, we shall not be liable for any:</p>
                        <ul>
                            <li>Indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill</li>
                            <li>Direct damages exceeding the amount you paid for the App (if any) in the 12 months preceding the claim</li>
                        </ul>
                        <p>This limitation applies even if we have been advised of the possibility of such damages.</p>
                    </div>

                    <h3>5.6 Jurisdictional Limitations</h3>
                    <p>Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such cases, the above limitations may not apply to you, and our liability will be limited to the maximum extent permitted by law.</p>
                </section>

                <section className="terms-section">
                    <h2>6. Intellectual Property</h2>

                    <h3>6.1 Trademarks</h3>
                    <p>"GEOCAM PRO," the GEOCAM PRO logo, and all related trademarks, service marks, and trade names are the property of the App developer. You may not use these marks without our prior written consent.</p>

                    <h3>6.2 Copyright</h3>
                    <p>All content within the App, including text, graphics, logos, icons, images, audio clips, and software, is the property of the App developer or its licensors and is protected by copyright laws.</p>

                    <h3>6.3 User Content</h3>
                    <p>You retain ownership of photos and content you create using the App. However, by using the App, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content solely for the purpose of providing App functionality.</p>
                </section>

                <section className="terms-section">
                    <h2>7. Privacy and Data Protection</h2>
                    <p>Your privacy is important to us. Please review our <a href="/privacy/geocam">Privacy Policy</a> to understand how we collect, use, and protect your personal data.</p>
                    <p>By using the App, you consent to the collection and use of information as described in the Privacy Policy.</p>
                </section>

                <section className="terms-section">
                    <h2>8. Termination</h2>

                    <h3>8.1 Termination by You</h3>
                    <p>You may stop using the App at any time by uninstalling it from your device.</p>

                    <h3>8.2 Termination by Us</h3>
                    <p>We reserve the right to suspend or terminate your access to the App at any time, without notice, for:</p>
                    <ul>
                        <li>Violation of these Terms</li>
                        <li>Fraudulent, abusive, or illegal activity</li>
                        <li>Any other reason at our sole discretion</li>
                    </ul>

                    <h3>8.3 Effect of Termination</h3>
                    <p>Upon termination:</p>
                    <ul>
                        <li>Your license to use the App will immediately cease</li>
                        <li>You must delete the App from your device</li>
                        <li>All provisions of these Terms that by their nature should survive termination (e.g., disclaimers, limitations of liability, intellectual property rights) will remain in effect</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>9. Governing Law and Dispute Resolution</h2>

                    <h3>9.1 Governing Law</h3>
                    <p>These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>

                    <h3>9.2 Dispute Resolution</h3>
                    <p>Any disputes arising out of or relating to these Terms or the App shall be resolved through:</p>
                    <ul>
                        <li><strong>Informal Negotiation:</strong> We encourage you to contact us first to resolve disputes informally</li>
                        <li><strong>Binding Arbitration:</strong> If informal resolution fails, disputes will be resolved through binding arbitration in accordance with applicable Indian arbitration laws</li>
                        <li><strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive the right to participate in class actions or class arbitrations</li>
                    </ul>

                    <h3>9.3 Jurisdiction</h3>
                    <p>For any disputes not subject to arbitration, you agree to submit to the exclusive jurisdiction of the courts located in Karnataka, India.</p>
                </section>

                <section className="terms-section">
                    <h2>10. Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless the App developer, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
                    <ul>
                        <li>Your use or misuse of the App</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
                        <li>Any content you create or share using the App</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>11. Severability</h2>
                    <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect.</p>
                </section>

                <section className="terms-section">
                    <h2>12. Entire Agreement</h2>
                    <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you and the App developer regarding your use of the App and supersede all prior agreements and understandings.</p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <Mail size={24} />
                    </div>
                    <h2>13. Contact Us</h2>
                    <p>If you have any questions, concerns, or feedback regarding these Terms, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> nishantharadhya4@gmail.com</p>
                        <p><strong>Website:</strong> <a href="https://www.nexaaradhya.site/" target="_blank" rel="noopener noreferrer">https://www.nexaaradhya.site/</a></p>
                        <p><strong>Developer:</strong> Nishanth Aradhya AG</p>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>14. Acknowledgment</h2>
                    <p>By using GEOCAM PRO, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                    <p><strong>Thank you for using GEOCAM PRO!</strong></p>
                </section>
            </div>

            <div className="terms-footer">
                <p>© 2026 GEOCAM PRO. All rights reserved.</p>
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

    // Use detailed PDFGen terms
    if (appId === 'pdfgen') {
        return <PDFGenTerms navigate={navigate} />;
    }

    // Use detailed Geocam terms
    if (appId === 'geocam') {
        return <GeocamTerms navigate={navigate} />;
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
