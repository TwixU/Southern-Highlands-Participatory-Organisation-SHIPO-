import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <Droplets className="logo-icon" size={32} />
            <div className="logo-text">
              <span className="logo-title">SHIPO</span>
              <span className="logo-subtitle">Southern Highlands Participatory Org.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/get-involved" className="btn-donate-sm">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/get-involved" 
              className="mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--border);
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary);
        }
        
        .logo-icon {
          color: var(--secondary);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .btn-donate-sm {
          background: var(--accent);
          color: var(--text-main);
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-donate-sm:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--text-main);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid var(--border);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-lg);
        }

        .mobile-link {
          padding: 0.75rem;
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .mobile-link:hover, .mobile-link.active {
          background: var(--bg-body);
          color: var(--primary);
        }

        .mobile-btn {
          text-align: center;
          background: var(--accent);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--text-main);
        }

        @media (max-width: 900px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block; }
          
          .logo-subtitle { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
