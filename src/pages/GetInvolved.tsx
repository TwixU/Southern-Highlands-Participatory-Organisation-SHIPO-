import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Heart, Handshake, Users, GraduationCap, Share2 } from 'lucide-react';

const GetInvolved = () => {
    return (
        <div className="get-involved-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fade-in">Get Involved</h1>
                    <p className="lead-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Join us in making a lasting difference in rural Tanzania.
                    </p>
                </div>
            </section>

            <Section>
                <div className="involvement-grid">
                    {/* Donate */}
                    <div className="involvement-card highlight">
                        <Heart size={48} className="text-secondary mb-4" />
                        <h2>Donate</h2>
                        <p>
                            Your financial contributions go directly toward projects that provide clean water, sanitation facilities, and education. We ensure transparency in how funds are used.
                        </p>
                        <ul className="impact-list">
                            <li>Install a water pump for a village</li>
                            <li>Supply materials for a classroom</li>
                            <li>Support hygiene education</li>
                        </ul>
                        <Button size="lg" className="mt-4">Donate Now</Button>
                    </div>

                    {/* Partner */}
                    <div className="involvement-card">
                        <Handshake size={48} className="text-primary mb-4" />
                        <h2>Partner with Us</h2>
                        <p>
                            We collaborate with international NGOs, corporate sponsors, and government agencies. If your organization shares similar goals, let's work together to amplify our impact.
                        </p>
                        <Button variant="outline" to="/contact" className="mt-4">Contact Partnership Team</Button>
                    </div>

                    {/* Volunteer */}
                    <div className="involvement-card">
                        <Users size={48} className="text-accent mb-4" />
                        <h2>Volunteer</h2>
                        <p>
                            Bring your skills and passion! Whether you are an engineer, educator, or health worker, there are opportunities to contribute on the ground or administratively.
                        </p>
                        <Button variant="outline" to="/contact" className="mt-4">Apply to Volunteer</Button>
                    </div>

                    {/* Training */}
                    <div className="involvement-card">
                        <GraduationCap size={48} className="text-primary mb-4" />
                        <h2>Attend Training</h2>
                        <p>
                            Enroll in our SMART Centre training workshops. Learn about low-cost WASH technologies and sustainable farming to become an ambassador for change.
                        </p>
                        <Button variant="outline" to="/programs" className="mt-4">View Training Programs</Button>
                    </div>

                    {/* Spread Word */}
                    <div className="involvement-card full-width bg-light">
                        <div className="flex flex-col items-center text-center">
                            <Share2 size={48} className="text-secondary mb-4" />
                            <h2>Spread the Word</h2>
                            <p className="max-w-2xl mb-4">
                                Follow us on social media and share our story. By raising awareness about SHIPO’s work, you help us reach potential supporters and communities.
                            </p>
                            <div className="social-buttons">
                                <Button variant="secondary" href="https://facebook.com/SHIPOTanzania">Facebook</Button>
                                <Button variant="secondary" href="https://twitter.com/SHIPOTanzania">Twitter</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <style>{`
        .page-header {
          background: var(--bg-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .involvement-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .involvement-card {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.2s;
        }

        .involvement-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }

        .involvement-card h2 { margin-bottom: 1rem; color: var(--text-main); }
        .involvement-card p { margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.6; }

        .highlight {
          border-color: var(--secondary);
          background: linear-gradient(to bottom right, white, #F0F9FF);
        }

        .impact-list {
          list-style: disc;
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .full-width {
          grid-column: span 2;
        }
        
        .bg-light { background-color: var(--bg-body); }

        .social-buttons {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .involvement-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
        }
      `}</style>
        </div>
    );
};

export default GetInvolved;
