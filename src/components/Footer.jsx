import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Intro Column */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src="/assets/images/hadrons_official_logo.webp" alt="Hadrons Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-title">HADRONS</span>
                <span className="footer-brand-subtitle">ELECTRICALS</span>
              </div>
            </div>
            <p className="footer-desc">
              Hadrons Electricals is an established Indian electrical and engineering manufacturer producing high-safety copper wires &amp; cables, modular switches, power cords, EV chargers, and OEM components.
            </p>
            <div className="footer-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/918826722400" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/leadership">Leadership &amp; Vision</Link>
              <Link to="/products">Product Ecosystem</Link>
              <Link to="/evolution">Our Evolution</Link>
              <Link to="/quality">Quality Standards</Link>
              <Link to="/oem">OEM &amp; Custom</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Product Portfolio Links */}
          <div>
            <h4 className="footer-title">Product Portfolio</h4>
            <div className="footer-links">
              <Link to="/wires-cables">Wires &amp; Cables</Link>
              <Link to="/products?filter=extension-boards">Extension Boards</Link>
              <Link to="/products?filter=ev-chargers">EV Chargers</Link>
              <Link to="/products?filter=power-cords">Power Cords (3 Pin / Data Center)</Link>
              <Link to="/products?filter=ac-components">AC &amp; Air Cooler Parts</Link>
              <Link to="/products?filter=moulded-parts">Moulded Components</Link>
            </div>
          </div>

          {/* Contact Helpline */}
          <div>
            <h4 className="footer-title">Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div>
                <strong style={{ color: 'var(--hadrons-white)', display: 'block' }}>Sales Helpline:</strong>
                <span>+91 8826722400</span>
              </div>
              <div>
                <strong style={{ color: 'var(--hadrons-white)', display: 'block' }}>Official Email:</strong>
                <span>gaurav.gautam@hadronpower.com</span>
              </div>
              <div>
                <strong style={{ color: 'var(--hadrons-white)', display: 'block' }}>WhatsApp Support:</strong>
                <span>+91 8826722400</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hadrons Electricals Pvt. Ltd. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" style={{ color: 'var(--hadrons-blue-silver)', textDecoration: 'none' }}>Privacy Policy</Link> • 
            <Link to="/terms" style={{ color: 'var(--hadrons-blue-silver)', textDecoration: 'none', marginLeft: '6px', marginRight: '6px' }}>Terms of Service</Link> • 
            <Link to="/compliance" style={{ color: 'var(--hadrons-blue-silver)', textDecoration: 'none', marginLeft: '6px' }}>BIS / IS / IEC Compliant</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
