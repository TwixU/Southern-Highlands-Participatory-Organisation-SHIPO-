import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import contactData from '../data/contact.json';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fade-in">Contact Us</h1>
                    <p className="lead-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        We would love to hear from you. Reach out with questions, ideas, or inquiries.
                    </p>
                </div>
            </section>

            <Section>
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2 className="mb-6">Get in Touch</h2>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <a href={`mailto:\${contactData.email}`}>{contactData.email}</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Phone</h3>
                                <a href={`tel:\${contactData.phone}`}>{contactData.phone}</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Address</h3>
                                <p>{contactData.operational_office}</p>
                                <p className="text-sm text-muted mt-1">P.O. Box 227, Njombe, Tanzania</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" />
                            <div>
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 7:30 AM – 4:30 PM EAT</p>
                            </div>
                        </div>

                        <div className="map-placeholder mt-8">
                            {/* Map Illustration or Placeholder */}
                            <div className="map-content">
                                <MapPin size={32} />
                                <span>Njombe Office Location</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h2 className="mb-6">Send a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="you@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help?" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Your message here..." required></textarea>
                            </div>

                            <Button type="submit" fullWidth>Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Section bg="light" className="text-center">
                <h2>Stay Connected</h2>
                <p className="mb-6">Sign up for our newsletter to receive quarterly updates on SHIPO’s work.</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <Button variant="secondary">Subscribe</Button>
                </div>
            </Section>

            <style>{`
        .page-header {
          background: var(--bg-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .info-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .info-item a {
          color: var(--secondary);
          text-decoration: underline;
        }

        .contact-form-wrapper {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
        }

        .map-placeholder {
          height: 200px;
          background: var(--bg-body);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .map-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          justify-content: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
