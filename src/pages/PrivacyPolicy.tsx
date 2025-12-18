import Section from '../components/ui/Section';
import privacyData from '../data/privacy_policy.json';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <Section className="py-8">
                <h1 className="mb-2">Privacy Policy</h1>
                <p className="text-muted mb-8">Last Updated: {privacyData.last_updated}</p>

                <div className="legal-content">
                    <section className="mb-8">
                        <h2>1. Introduction</h2>
                        <p>{privacyData.introduction}</p>
                    </section>

                    <section className="mb-8">
                        <h2>2. Information We Collect</h2>
                        <div className="pl-4">
                            <h3 className="h5 mb-2">Personal Data</h3>
                            <p className="mb-4">{privacyData.personal_data_collected}</p>

                            <h3 className="h5 mb-2">Derivative Data</h3>
                            <p>{privacyData.derivative_data_collected}</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2>3. Use of Information</h2>
                        <p>{privacyData.use_of_information}</p>
                    </section>

                    <section className="mb-8">
                        <h2>4. Data Sharing</h2>
                        <p>{privacyData.data_sharing}</p>
                    </section>

                    <section className="mb-8">
                        <h2>5. Data Security</h2>
                        <p>{privacyData.data_security}</p>
                    </section>

                    <section className="mb-8">
                        <h2>6. Cookies and Tracking</h2>
                        <p>{privacyData.cookies_policy}</p>
                    </section>

                    <section className="mb-8">
                        <h2>7. Your Rights</h2>
                        <p>{privacyData.user_rights}</p>
                    </section>

                    <section className="mb-8">
                        <h2>8. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact us at:</p>
                        <div className="bg-light p-4 rounded mt-4">
                            <p><strong>{privacyData.organization.company_name}</strong></p>
                            <p>Email: <a href={`mailto:\${privacyData.contact_details.contact_email}`} className="text-primary">{privacyData.contact_details.contact_email}</a></p>
                            <p>Phone: {privacyData.contact_details.contact_phone}</p>
                            <p>Address: {privacyData.contact_details.contact_address}</p>
                        </div>
                    </section>
                </div>
            </Section>
            <style>{`
        .legal-page { max-width: 800px; margin: 0 auto; }
        .h5 { font-size: 1.1rem; font-weight: 600; color: var(--text-main); }
        .pl-4 { padding-left: 1rem; border-left: 2px solid var(--border); }
        .bg-light { background-color: var(--bg-body); }
        .rounded { border-radius: var(--radius-md); }
        .p-4 { padding: 1rem; }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;
