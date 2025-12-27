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
        description: "WiFi Direct file transfer application",
        features: [
            "Files are transferred directly between devices",
            "Transfers never pass through our servers",
            "We cannot see what files you share"
        ]
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

const AppTerms = () => {
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
