import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Package, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Phone, 
  ArrowRight, 
  Menu, 
  X 
} from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About Us', icon: User },
  { path: '/products', label: 'Products', icon: Package },
  { path: '/evolution', label: 'Our Evolution', icon: Sparkles },
  { path: '/quality', label: 'Quality', icon: ShieldCheck },
  { path: '/oem', label: 'OEM & Custom', icon: Layers },
  { path: '/contact', label: 'Contact Us', icon: Phone }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" aria-label="Hadrons Electricals Home">
          <div className="nav-logo-wrapper">
            <img 
              src="/assets/images/hadrons_official_logo.webp" 
              alt="Hadrons Electricals Logo" 
              className="nav-logo" 
            />
          </div>
          <div className="nav-brand-text">
            <span className="brand-title">HADRONS</span>
            <span className="brand-subtitle">ELECTRICALS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`} id="navMenu">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon className="nav-icon" size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          
          {/* Mobile Menu Drawer CTA Button */}
          <div className="mobile-drawer-cta" style={{ paddingTop: '16px', marginTop: '12px', borderTop: '1px solid #E2ECF8' }}>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>GET IN TOUCH</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Nav CTA Button & Mobile Menu Toggle */}
        <div className="nav-cta-wrapper">
          <Link to="/contact" className="btn btn-primary btn-nav-cta">
            <span>GET IN TOUCH</span>
            <ArrowRight size={16} />
          </Link>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </header>
  );
}
