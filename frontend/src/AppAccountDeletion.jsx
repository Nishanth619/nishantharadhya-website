import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, AlertTriangle, CheckCircle, Mail, ShieldOff, UserX } from 'lucide-react';
import './Terms.css';

// Per-app account deletion data
const appData = {
    atsai: {
        name: 'Ats.Ai',
        icon: '🤖',
        email: 'nishantharadhya7@gmail.com',
        hasAccount: true,
        steps: [
            'Send an email to nishantharadhya7@gmail.com with the subject line "Account Deletion Request".',
            'Include the email address associated with your account.',
            'We may ask you to verify account ownership before processing the request.',
        ],
        dataDeleted: [
            'Account profile information',
            'Saved resumes and resume versions',
            'Saved cover letters',
            'Job tracker entries',
            'Uploaded profile photos and generated resume PDFs',
            'App-specific usage records tied to your account',
        ],
        dataRetained: [
            'Purchase records handled by Google Play or subscription providers',
            'Security logs and support records',
            'Records required to comply with applicable law',
        ],
        notes: [
            'We aim to complete verified deletion requests within 30 days.',
            'Some information may be retained for legal, security, or billing reasons.',
            'Account deletion is permanent once processed.',
        ],
    },
    neartransfer: {
        name: 'NearTransfer',
        icon: '📲',
        email: 'agnishanth609@gmail.com',
        hasAccount: false,
    },
    pdfhub: {
        name: 'PDF Hub',
        icon: '📑',
        email: 'aradhyanishanth84@gmail.com',
        hasAccount: false,
    },
    pdfgen: {
        name: 'PDF Gen',
        icon: '📄',
        email: 'pdfgen09@gmail.com',
        hasAccount: false,
    },
    geocam: {
        name: 'GeoCam Pro',
        icon: '📸',
        email: 'nishantharadhya4@gmail.com',
        hasAccount: false,
    },
};

const AppAccountDeletion = () => {
    const { appId } = useParams();
    const navigate = useNavigate();
    const app = appData[appId];

    const [formData, setFormData] = useState({ email: '', reason: '', confirm: false });
    const [submitted, setSubmitted] = useState(false);

    if (!app) {
        return (
            <div className="terms-container" data-theme="dark">
                <div className="terms-header">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </button>
                    <div className="terms-title-section">
                        <AlertTriangle className="terms-icon" size={40} style={{ color: '#ff6b6b' }} />
                        <h1>App Not Found</h1>
                    </div>
                </div>
                <div className="terms-content">
                    <p>The requested app was not found. Please check the URL.</p>
                </div>
            </div>
        );
    }

    // Apps without accounts — just show the info
    if (!app.hasAccount) {
        return (
            <div className="terms-container" data-theme="dark">
                <div className="terms-header">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </button>
                    <div className="terms-title-section">
                        <ShieldOff className="terms-icon" size={40} />
                        <h1>{app.icon} {app.name} — Account Deletion</h1>
                        <p className="last-updated">No account required</p>
                    </div>
                </div>
                <div className="terms-content">
                    <section className="terms-section">
                        <div className="section-icon"><UserX size={24} /></div>
                        <h2>No Account Needed</h2>
                        <div className="highlight-box">
                            <p>
                                <strong>{app.name}</strong> does not require you to create an account.
                                All data is stored locally on your device and is never uploaded to our servers.
                            </p>
                            <p style={{ marginTop: '12px' }}>
                                To remove all app data, simply <strong>uninstall the app</strong> from your device.
                                This will permanently delete all locally stored data.
                            </p>
                        </div>
                    </section>
                    <section className="terms-section contact-section">
                        <div className="section-icon"><Mail size={24} /></div>
                        <h2>Questions?</h2>
                        <p>If you have any privacy-related questions, contact us at:</p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> {app.email}</p>
                        </div>
                    </section>
                </div>
                <div className="terms-footer">
                    <p>© 2026 {app.name}. All rights reserved.</p>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.confirm) return;
        const subject = encodeURIComponent(`Account Deletion Request — ${app.name}`);
        const body = encodeURIComponent(
            `App: ${app.name}\nRegistered Email: ${formData.email}\nReason: ${formData.reason || 'Not specified'}\n\nPlease delete my account and all associated data.`
        );
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${app.email}&su=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="terms-container" data-theme="dark">
            <div className="terms-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <div className="terms-title-section">
                    <Trash2 className="terms-icon" size={40} style={{ color: '#ff6b6b' }} />
                    <h1>{app.icon} {app.name} — Account Deletion</h1>
                    <p className="last-updated">Last Updated: May 2026</p>
                </div>
            </div>

            <div className="terms-content">

                {/* Warning box */}
                <section className="terms-section">
                    <div className="section-icon"><AlertTriangle size={24} style={{ color: '#ffd166' }} /></div>
                    <h2>Before You Delete</h2>
                    <div className="danger-box">
                        <p><strong>Account deletion is permanent and cannot be reversed.</strong> Once your account is deleted, all your data will be permanently removed and cannot be recovered.</p>
                    </div>
                </section>

                {/* Steps */}
                {app.steps && (
                    <section className="terms-section">
                        <div className="section-icon"><CheckCircle size={24} /></div>
                        <h2>How to Delete Your Account</h2>
                        <ol style={{ paddingLeft: '20px', lineHeight: '1.9' }}>
                            {app.steps.map((step, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{step}</li>
                            ))}
                        </ol>
                    </section>
                )}

                {/* What gets deleted */}
                {app.dataDeleted && (
                    <section className="terms-section">
                        <div className="section-icon"><Trash2 size={24} /></div>
                        <h2>Data That Will Be Deleted</h2>
                        <ul>
                            {app.dataDeleted.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </section>
                )}

                {/* What is retained */}
                {app.dataRetained && (
                    <section className="terms-section">
                        <div className="section-icon"><ShieldOff size={24} /></div>
                        <h2>Data We May Retain</h2>
                        <ul>
                            {app.dataRetained.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </section>
                )}

                {/* Notes */}
                {app.notes && (
                    <section className="terms-section">
                        <h2>Important Notes</h2>
                        <div className="highlight-box">
                            <ul>
                                {app.notes.map((note, i) => <li key={i}>{note}</li>)}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Request form */}
                <section className="terms-section contact-section">
                    <div className="section-icon"><Mail size={24} /></div>
                    <h2>Request Account Deletion via Email</h2>
                    <p>Can't access the app? Submit a deletion request below and we'll process it within <strong>30 days</strong>.</p>

                    {submitted ? (
                        <div className="highlight-box" style={{ textAlign: 'center', padding: '28px' }}>
                            <CheckCircle size={40} style={{ color: '#00FFD1', margin: '0 auto 12px' }} />
                            <p><strong>Request Sent!</strong> We'll process your account deletion within 30 days and send a confirmation to your email.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', color: '#aaa', fontSize: '14px' }}>Registered Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="email@example.com"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '15px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', color: '#aaa', fontSize: '14px' }}>Reason (optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us why you're leaving..."
                                    value={formData.reason}
                                    onChange={e => setFormData(p => ({ ...p, reason: e.target.value }))}
                                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '15px', resize: 'vertical' }}
                                />
                            </div>
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '14px', color: '#ccc' }}>
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.confirm}
                                    onChange={e => setFormData(p => ({ ...p, confirm: e.target.checked }))}
                                    style={{ marginTop: '2px', accentColor: '#00FFD1' }}
                                />
                                I understand that deleting my account is <strong style={{ color: '#ff6b6b', margin: '0 4px' }}>permanent and irreversible</strong> and all my data will be lost.
                            </label>
                            <button
                                type="submit"
                                style={{
                                    padding: '13px 28px',
                                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: '#fff',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    width: 'fit-content',
                                }}
                            >
                                <Trash2 size={18} />
                                Send Deletion Request
                            </button>
                        </form>
                    )}
                </section>

            </div>

            <div className="terms-footer">
                <p>© 2026 {app.name}. All rights reserved.</p>
            </div>
        </div>
    );
};

export default AppAccountDeletion;
