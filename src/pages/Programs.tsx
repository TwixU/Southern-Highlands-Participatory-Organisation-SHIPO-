import Section from '../components/ui/Section';
import { Droplets, BookOpen, HeartPulse, Sprout, Coins, Wrench } from 'lucide-react';

const programs = [
    {
        icon: <Droplets size={32} />,
        title: "Water, Sanitation & Hygiene (WASH)",
        desc: "We support communities to gain sustainable access to clean and safe water through shallow wells, rope pumps, and rainwater harvesting. We also construct sanitation facilities and provide hygiene education.",
        color: "var(--secondary)"
    },
    {
        icon: <BookOpen size={32} />,
        title: "Education Infrastructure",
        desc: "Partnering with communities to build and renovate classrooms, teachers' houses, and dormitories. Improving learning environments increases attendance and academic performance.",
        color: "var(--accent)"
    },
    {
        icon: <HeartPulse size={32} />,
        title: "Healthcare & Health Education",
        desc: "Constructing and upgrading health centers and dispensaries. We also support HIV/AIDS awareness and assist children with disabilities through referrals.",
        color: "#E53935"
    },
    {
        icon: <Sprout size={32} />,
        title: "Agriculture & Irrigation",
        desc: "Introducing small-scale irrigation schemes and climate-smart agriculture to improve livelihoods and food security for farming families.",
        color: "var(--primary)"
    },
    {
        icon: <Coins size={32} />,
        title: "Microfinance Programs",
        desc: "Establishing village savings and loan groups (VICOBA) and SACCOs to provide affordable loans for water technologies and small businesses.",
        color: "#8E24AA"
    },
    {
        icon: <Wrench size={32} />,
        title: "SMART Centre Training",
        desc: "Building local capacity by training technicians and entrepreneurs in low-cost WASH technologies like manual drilling and rope pump fabrication.",
        color: "#FB8C00"
    }
];

const Programs = () => {
    return (
        <div className="programs-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fade-in">Our Programs</h1>
                    <p className="lead-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Holistic development tackling fundamental community needs.
                    </p>
                </div>
            </section>

            <Section>
                <div className="programs-grid">
                    {programs.map((program, idx) => (
                        <div key={idx} className="program-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="program-icon" style={{ color: program.color }}>
                                {program.icon}
                            </div>
                            <h3>{program.title}</h3>
                            <p>{program.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section bg="light" className="text-center">
                <h2 className="mb-4">Community-Led Approach</h2>
                <p className="max-w-2xl mx-auto">
                    Each program is designed with community input. We emphasize self-help and ownership, meaning communities contribute labor or resources and take part in decision-making, leading to greater sustainability.
                </p>
            </Section>

            <style>{`
        .page-header {
          background: var(--bg-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .program-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .program-icon {
          margin-bottom: 1.5rem;
          background: var(--bg-body);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .program-card h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .program-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}</style>
        </div>
    );
};

export default Programs;
