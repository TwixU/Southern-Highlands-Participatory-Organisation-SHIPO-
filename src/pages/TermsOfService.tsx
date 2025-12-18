import Section from '../components/ui/Section';
import termsData from '../data/terms_of_service.json';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <Section className="py-8">
                <h1 className="mb-2">Terms of Service</h1>
                <p className="text-muted mb-8">Last Updated: {termsData.last_updated}</p>

                <div className="legal-content">
                    <section className="mb-8">
                        <h2>1. Introduction</h2>
                        <p>{termsData.introduction}</p>
                    </section>

                    <section className="mb-8">
                        <h2>2. User Agreement</h2>
                        <p>{termsData.user_agreement}</p>
                    </section>

                    <section className="mb-8">
                        <h2>3. Acceptable Use</h2>
                        <p>{termsData.acceptable_use}</p>
                    </section>

                    <section className="mb-8">
                        <h2>4. Intellectual Property</h2>
                        <p>{termsData.content_ownership}</p>
                    </section>

                    <section className="mb-8">
                        <h2>5. Liability Disclaimer</h2>
                        <p>{termsData.liability_disclaimer}</p>
                    </section>

                    <section className="mb-8">
                        <h2>6. Donations</h2>
                        <p>{termsData.donation_disclaimer}</p>
                    </section>

                    <section className="mb-8">
                        <h2>7. Privacy & Cookies</h2>
                        <p>{termsData.privacy_and_cookies}</p>
                    </section>

                    <section className="mb-8">
                        <h2>8. Governing Law</h2>
                        <p>{termsData.governing_law}</p>
                    </section>

                    <section className="mb-8">
                        <h2>9. Contact</h2>
                        <p>{termsData.contact_information}</p>
                    </section>
                </div>
            </Section>
            <style>{`
        .legal-page { max-width: 800px; margin: 0 auto; }
        .legal-content h2 { margin-bottom: 0.75rem; font-size: 1.5rem; color: var(--primary-dark); }
        .legal-content p { margin-bottom: 0.5rem; line-height: 1.7; color: var(--text-main); }
      `}</style>
        </div>
    );
};

export default TermsOfService;
