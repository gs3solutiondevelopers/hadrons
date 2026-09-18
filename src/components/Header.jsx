import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Package, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Phone, 
  Menu, 
  X,
  Award,
  FileDown,
  ChevronDown,
  FileText
} from 'lucide-react';

const NAV_ITEMS_BEFORE = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About Us', icon: User },
  { path: '/leadership', label: 'Leadership', icon: Award },
  { path: '/products', label: 'Products', icon: Package },
  { path: '/evolution', label: 'Our Evolution', icon: Sparkles },
  { path: '/quality', label: 'Quality', icon: ShieldCheck },
  { path: '/oem', label: 'OEM & Custom', icon: Layers }
];

const NAV_ITEMS_AFTER = [
  { path: '/contact', label: 'Contact Us', icon: Phone }
];

const CATALOGUE_FILES = [
  {
    title: 'Wires & Cables Catalogue',
    file: '/catalogs/hadrons_wires_cables_catalogue.pdf',
    desc: 'House Wires, Armoured, Submersible & Special Cables'
  },
  {
    title: 'Wiring Harness & Battery Cables',
    file: '/catalogs/hadrons_wiring_harness_catalogue.pdf',
    desc: 'Automotive & Industrial Wiring Looms'
  },
  {
    title: 'AC Grills & Fans Components',
    file: '/catalogs/hadrons_ac_grills_fans_catalogue.pdf',
    desc: 'Aerodynamic Ventilation Diffusers & Motors'
  },
  {
    title: 'Cooler Body, Fans & Moulding Parts',
    file: '/catalogs/Cooler Body,Fans & Other Injection Moulding Parts.pdf',
    desc: 'UV-Stabilized Air Cooler Housings & Blowers'
  },
  {
    title: 'Electrical Extension Board',
    file: '/catalogs/Electrical Extension Board.pdf',
    desc: 'Surge-Protected Multi-Socket Strips'
  },
  {
    title: 'Laptop Chargers Catalogue',
    file: '/catalogs/Laptop Chargers.pdf',
    desc: 'High Efficiency Power Adapters'
  },
  {
    title: 'Modular Switches & Circuit Board',
    file: '/catalogs/Modular Switches & Circuit Board.pdf',
    desc: 'Architectural Switch Panels & Sockets'
  },
  {
    title: 'Solar & Inverter Battery Module',
    file: '/catalogs/Solar & Inverter Battery Module.pdf',
    desc: 'Polymer Battery Casing & Solar Modules'
  }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogueDropdownOpen, setCatalogueDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown when route changes
  useEffect(() => {
    setMobileOpen(false);
    setCatalogueDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCatalogueDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Navigation Links */}
        <nav className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`} id="navMenu">
          
          {/* Main Links before Catalogue */}
          {NAV_ITEMS_BEFORE.map((item) => {
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

          {/* Catalogue Dropdown (Placed RIGHT BEFORE Contact Us) */}
          <div 
            className={`nav-dropdown-wrapper ${catalogueDropdownOpen ? 'open' : ''}`} 
            ref={dropdownRef}
            onMouseEnter={() => window.innerWidth > 991 && setCatalogueDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 991 && setCatalogueDropdownOpen(false)}
          >
            <button 
              className="nav-dropdown-trigger nav-link"
              onClick={() => setCatalogueDropdownOpen(!catalogueDropdownOpen)}
              type="button"
              aria-expanded={catalogueDropdownOpen}
            >
              <FileText className="nav-icon" size={18} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span>Catalogue</span>
                <ChevronDown size={14} style={{ transition: 'transform 0.2s ease', transform: catalogueDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </div>
            </button>

            <div className={`nav-dropdown-menu ${catalogueDropdownOpen ? 'open' : ''}`}>
              <div className="nav-dropdown-header">
                <FileDown size={16} /> OFFICIAL PDF CATALOGUES
              </div>
              <div className="nav-dropdown-list">
                {CATALOGUE_FILES.map((cat, idx) => (
                  <a
                    key={idx}
                    href={cat.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item"
                    onClick={() => setCatalogueDropdownOpen(false)}
                  >
                    <div className="nav-dropdown-item-content">
                      <span className="nav-dropdown-item-title">{cat.title}</span>
                      <span className="nav-dropdown-item-desc">{cat.desc}</span>
                    </div>
                    <span className="nav-dropdown-download-badge">
                      <FileDown size={14} /> Download
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us */}
          {NAV_ITEMS_AFTER.map((item) => {
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

        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="nav-cta-wrapper">
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
