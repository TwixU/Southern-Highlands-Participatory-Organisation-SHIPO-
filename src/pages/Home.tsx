import { ArrowRight, Users, Heart, Globe, Droplets } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title animate-fade-in">
                        Empowering Rural Communities in <span className="text-accent">Tanzania</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        We work with communities to improve water access, sanitation, and education through sustainable self-help projects.
                    </p>
                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <Button to="/get-involved" size="lg">Join Us</Button>
                        <Button to="/programs" variant="outline" size="lg" style={{ color: 'white', borderColor: 'white' }}>
                            Our Programs
                        </Button>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Mission & Vision */}
            <Section className="mission-section">
                <div className="grid-2">
                    <div className="card mission-card">
                        <div className="icon-wrapper">
                            <Globe size={32} className="text-secondary" />
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                            To contribute effectively to sustained improvement in the living standards of poor people in Tanzania through the facilitation of self-help projects, based on the priority needs and capacities of the people.
                        </p>
                    </div>
                    <div className="card vision-card">
                        <div className="icon-wrapper">
                            <Heart size={32} className="text-primary" />
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                            Sustainable development and improved quality of life for Tanzanian communities, where access to clean water, quality education, and economic opportunity are available to all.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Approach */}
            <Section bg="light">
                <div className="grid-2 items-center gap-8">
                    <div>
                        <h2 className="section-title">Our Approach</h2>
                        <p className="lead-text">
                            We work <strong>with</strong> communities, not just for them.
                        </p>
                        <p className="mb-4">
                            Through training and capacity building, SHIPO helps local groups carry out projects that address their own needs. This participatory approach ensures long-term impact and community ownership.
                        </p>
                        <ul className="feature-list">
                            <li><Users size={18} className="text-primary" /> Community Participation</li>
                            <li><Droplets size={18} className="text-secondary" /> Sustainable Technologies</li>
                            <li><Globe size={18} className="text-accent" /> Capacity Building</li>
                        </ul>
                        <Button to="/about" variant="secondary" className="mt-4">
                            Learn More About Us <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                    <div className="approach-image-placeholder">
                        {/* Placeholder for an image demonstrating community work */}
                        <div className="img-content">
                            <span>Community Training in Action</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section bg="primary" className="text-center">
                <h2 className="text-white mb-4">Join Us in Making a Difference</h2>
                <p className="text-white-muted max-w-2xl mx-auto mb-8">
                    Whether you are a donor, volunteer, partner, or community member, your involvement can help create sustainable change in the Southern Highlands.
                </p>
                <div className="flex justify-center gap-4 wrap">
                    <Button to="/get-involved" variant="accent" size="lg">
                        Get Involved
                    </Button>
                    <Button to="/contact" variant="outline" size="lg" style={{ color: 'white', borderColor: 'white' }}>
                        Contact Us
                    </Button>
                </div>
            </Section>

            <style>{`
        .hero {
          position: relative;
          height: 85vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
          color: white;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
          opacity: 0.4;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--border);
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: var(--bg-body);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
        }

        .lead-text {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .feature-list {
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
        }

        .approach-image-placeholder {
          height: 400px;
          background: #E2E8F0;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.unsplash.com/photo-1542601906990-24ccd08d7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
          background-size: cover;
          background-position: center;
        }
        
        .img-content {
           background: rgba(255,255,255,0.9);
           padding: 1rem 2rem;
           border-radius: var(--radius-full);
           font-weight: 600;
           color: var(--primary-dark);
        }

        .ml-2 { margin-left: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .text-white { color: white; }
        .text-white-muted { color: rgba(255,255,255,0.9); }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .grid-2 { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; }
        }
      `}</style>
        </div>
    );
};

export default Home;
