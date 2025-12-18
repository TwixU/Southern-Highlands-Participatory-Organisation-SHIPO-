import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import footerData from '../../data/footer.json';

const Footer = () => {
    const { organization, quick_links, contact, social_links, copyright, company_number, registered_in } = footerData;

    const getSocialIcon = (label: string) => {
        switch (label.toLowerCase()) {
            case 'facebook': return <Facebook size={20} />;
            case 'twitter': return <Twitter size={20} />;
            default: return null;
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Organization Info */}
                    <div className="footer-col">
                        <h3 className="footer-title">{organization.name}</h3>
                        <p className="footer-mission">{organization.short_mission}</p>
                        <div className="reg-info">
                            <small>Reg. No: {company_number}</small>
                            <small>Registered in {registered_in}</small>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            {quick_links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.url}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <Mail size={16} className="contact-icon" />
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </li>
                            <li>
                                <Phone size={16} className="contact-icon" />
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </li>
                            <li>
                                <MapPin size={16} className="contact-icon" />
                                <span>{contact.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Follow Us</h4>
                        <div className="social-icons">
                            {social_links.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                >
                                    {getSocialIcon(social.label)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{copyright}</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-title {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .footer-subtitle {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          font-weight: 600;
        }

        .footer-mission {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .reg-info {
          display: flex;
          flex-direction: column;
          color: #6B7280;
          font-size: 0.8rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #9CA3AF;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--accent);
          transform: translateX(4px);
          display: inline-block;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-list li {
          display: flex;
          gap: 0.75rem;
          color: #9CA3AF;
          font-size: 0.95rem;
        }

        .contact-icon {
          color: var(--primary-light);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem;
          border-radius: 50%;
          transition: background 0.2s, color 0.2s;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #6B7280;
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
