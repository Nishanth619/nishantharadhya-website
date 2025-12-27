import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLeft, FileText, Shield, AlertCircle, Scale, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className="terms-container" data-theme={theme}>
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <FileText className="terms-icon" size={40} />
                    <h1>Terms and Conditions</h1>
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
                        By downloading, installing, or using any of our applications (PDF Hub, PDF Gen, SmartZip,
                        FocusHub, NearTransfer, or NovaCraft Studio), you agree to be bound by these Terms and Conditions.
                        If you do not agree to these terms, please do not use our applications.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <Scale size={24} />
                    </div>
                    <h2>2. License Grant</h2>
                    <p>
                        We grant you a limited, non-exclusive, non-transferable, revocable license to use our applications
                        for personal, non-commercial purposes. This license does not include the right to:
                    </p>
                    <ul>
                        <li>Modify, reverse engineer, or decompile the applications</li>
                        <li>Rent, lease, or lend the applications to third parties</li>
                        <li>Copy, distribute, or create derivative works based on the applications</li>
                        <li>Remove any proprietary notices or labels on the applications</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>3. Application-Specific Terms</h2>

                    <div className="app-terms">
                        <h3>📑 PDF Hub & 📄 PDF Gen</h3>
                        <ul>
                            <li>You are responsible for ensuring you have the right to process any documents</li>
                            <li>We do not store or access the content of your PDF files</li>
                            <li>Processing quality may vary depending on the source document</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>🎬 NovaCraft Studio</h3>
                        <ul>
                            <li>You retain all rights to animations created using our application</li>
                            <li>We may use anonymized usage data to improve the app</li>
                            <li>Exported videos are stored locally on your device</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>📦 SmartZip</h3>
                        <ul>
                            <li>Compression results may vary based on file type and content</li>
                            <li>We recommend keeping original copies of important files</li>
                            <li>Processing is done locally on your device for privacy</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>🎯 FocusHub</h3>
                        <ul>
                            <li>Your focus sessions and productivity data are stored locally</li>
                            <li>We do not access or share your personal statistics</li>
                            <li>Data is kept only on your device for your privacy</li>
                        </ul>
                    </div>

                    <div className="app-terms">
                        <h3>📲 NearTransfer</h3>
                        <ul>
                            <li>File transfers occur directly between devices via WiFi Direct</li>
                            <li>We do not have access to or store any transferred files</li>
                            <li>Users are responsible for the content they share</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>4. User Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul>
                        <li>Use the applications only for lawful purposes</li>
                        <li>Not use the applications to infringe on others' intellectual property rights</li>
                        <li>Not attempt to gain unauthorized access to our systems or services</li>
                        <li>Keep your device and applications updated for security purposes</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>5. Privacy and Data</h2>
                    <p>
                        We are committed to protecting your privacy. Our applications are designed to process data
                        locally on your device whenever possible. We do not collect, store, or share your personal
                        files or documents. For detailed information about data handling, please refer to our Privacy Policy.
                    </p>
                </section>

                <section className="terms-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                        Our applications are provided "as is" without warranties of any kind, either express or implied.
                        We do not warrant that the applications will be uninterrupted, error-free, or completely secure.
                        You use our applications at your own risk.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages arising from your use of our applications.
                        Our total liability shall not exceed the amount paid by you for the application.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                        immediately upon posting. Your continued use of our applications after any changes constitutes
                        acceptance of the new terms.
                    </p>
                </section>

                <section className="terms-section contact-section">
                    <div className="section-icon">
                        <Mail size={24} />
                    </div>
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
