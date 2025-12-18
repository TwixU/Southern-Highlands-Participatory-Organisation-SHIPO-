import Section from '../components/ui/Section';

const About = () => {
    return (
        <div className="about-page">
            {/* Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fade-in">About SHIPO</h1>
                    <p className="lead-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Over two decades of experience working in rural Tanzania.
                    </p>
                </div>
            </section>

            {/* History & Who We Are */}
            <Section>
                <div className="grid-2 gap-8">
                    <div>
                        <h2 className="section-title">Who We Are</h2>
                        <p className="mb-4">
                            Founded in 2001, SHIPO has over two decades of experience working in rural Tanzania. We were registered as a Non-Governmental Organization on May 7, 2001, under the Ministry of Home Affairs.
                        </p>
                        <p className="mb-4">
                            Our legal registration, Certificate of Compliance No. 1629 (issued 27 September 2005), allows us to operate across the entire mainland of Tanzania. Based in Njombe, our work spans the Southern Highlands and beyond.
                        </p>
                        <p>
                            Our team comprises local experts and community development professionals passionate about participatory development.
                        </p>
                    </div>
                    <div className="bg-light p-8 rounded-lg">
                        <h3 className="mb-4">Quick Facts</h3>
                        <ul className="fact-list">
                            <li><strong>Founded:</strong> 2001</li>
                            <li><strong>Registration:</strong> NGO Compliance No. 1629</li>
                            <li><strong>Location:</strong> Njombe, Tanzania</li>
                            <li><strong>Focus Areas:</strong> WASH, Education, Microfinance, Agriculture</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Mission Statements */}
            <Section bg="primary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-white mb-6">Our Mission</h2>
                    <div className="bg-white/10 p-6 rounded-lg mb-8 backdrop-blur">
                        <h3 className="text-accent mb-2">Short Mission</h3>
                        <p className="text-xl text-white">
                            "Sustained improvements in livelihoods through community-led water, sanitation, education, and capacity-building projects."
                        </p>
                    </div>
                    <div className="text-white/80 text-sm">
                        <p><strong>Full Mission:</strong> To contribute effectively to sustained improvement through increased self-awareness and facilitation of projects, based on the priority needs and capacities of people and other stakeholders, and through facilitation of private sector development.</p>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section bg="white">
                <h2 className="section-title text-center mb-8">Our Values</h2>
                <div className="grid-3 gap-6">
                    <div className="value-card">
                        <h3>Transparency</h3>
                        <p>We believe in good governance and accountability in all our operations.</p>
                    </div>
                    <div className="value-card">
                        <h3>Community Participation</h3>
                        <p>We work with communities to ensure ownership and long-term sustainability.</p>
                    </div>
                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>We combine simple, affordable technologies with extensive training.</p>
                    </div>
                </div>
            </Section>

            {/* Where We Work & Audience */}
            <Section bg="light">
                <div className="grid-2 gap-8">
                    <div>
                        <h2 className="section-title">Where We Work</h2>
                        <p className="mb-4">
                            Primarily in the <strong>Southern Highlands of Tanzania</strong>, including Njombe, Ludewa, and Mufindi districts. However, our projects and training programs have benefited other regions in Tanzania and even neighboring countries.
                        </p>
                        <p>We target rural areas where resources are scarce and infrastructure needs are high.</p>
                    </div>
                    <div>
                        <h2 className="section-title">Target Audience</h2>
                        <p className="mb-4">
                            SHIPO serves rural communities, farmers, children, and people with disabilities.
                        </p>
                        <p>
                            We also engage with donors, funding partners, volunteers, and collaborate with government institutions, NGOs, and companies.
                        </p>
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

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .p-8 { padding: 2rem; }
        .bg-light { background-color: var(--bg-body); }
        .bg-white\\/10 { background-color: rgba(255,255,255,0.1); }
        .backdrop-blur { backdrop-filter: blur(5px); }
        .text-xl { font-size: 1.25rem; line-height: 1.6; }
        .rounded-lg { border-radius: var(--radius-lg); }
        .max-w-3xl { max-width: 48rem; }
        
        .fact-list li {
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.75rem;
        }
        .fact-list li:last-child { border-bottom: none; }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .value-card {
          padding: 2rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          text-align: center;
          transition: transform 0.2s;
        }
        .value-card:hover { transform: translateY(-5px); }
        .value-card h3 { margin-bottom: 1rem; color: var(--primary); }

        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default About;
