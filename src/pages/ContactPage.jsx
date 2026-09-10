import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send,
  Zap,
  ShieldCheck,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formFeedback, setFormFeedback] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Valued Customer';
    const phone = formData.get('phone') || 'Not provided';
    const email = formData.get('email') || 'Not provided';
    const product = formData.get('product') || 'General Inquiry';
    const message = formData.get('message') || '';

    const whatsappPhone = "918826722400";
    let formattedText = `*NEW CONTACT INQUIRY — HADRONS ELECTRICALS*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `📦 *Product Interest:* ${product}\n\n`;

    if (message.trim()) {
      formattedText += `📝 *Requirement / Message:* ${message.trim()}\n`;
    }
    formattedText += `\n_Please send the official product catalog, MOQ, and quotation._`;

    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(formattedText)}`;
    
    setFormFeedback(`✓ Thank you, ${name}! Redirecting your inquiry to WhatsApp...`);
    window.open(whatsappUrl, '_blank');
    e.target.reset();

    setTimeout(() => setFormFeedback(''), 6000);
  };

  return (
    <div className="contact-page">
      
      {/* =========================================================================
           2. Contact Us Hero Banner (Elevated High-Impact Presentation)
           ========================================================================= */}
      <section className="page-hero-section" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', padding: '50px 0' }}>
        <div className="container">
          <div className="category-breadcrumb-bar" style={{ marginBottom: '20px' }}>
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link> <span>&gt;</span>
              <span className="trail-current">Contact Us</span>
            </div>
          </div>

          <div className="page-hero-grid" style={{ alignItems: 'center', gap: '40px' }}>
            <div className="page-hero-content">
              
              {/* Glowing Pill Badge */}
              <div className="hero-badge-pill" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(10, 30, 74, 0.04) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.2)',
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--hadrons-blue-primary)',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0, 102, 255, 0.06)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D26A', display: 'inline-block', boxShadow: '0 0 10px #00D26A' }}></span>
                <Headphones size={15} />
                <span>DIRECT SALES &amp; TECHNICAL SUPPORT</span>
              </div>

              {/* Title with Gradient Text */}
              <h1 className="page-hero-title" style={{ fontWeight: 900, lineHeight: 1.25, color: 'var(--hadrons-navy-deep)', margin: '0 0 16px 0' }}>
                CONNECT WITH OUR <span style={{ background: 'linear-gradient(135deg, #0066FF 0%, #0A1E4A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ENGINEERING TEAM</span>
              </h1>

              <p className="page-hero-lead" style={{ color: '#1E293B', fontWeight: 600, lineHeight: 1.6, marginBottom: '12px' }}>
                Have a project requirement for wires, extension boards, modular switches, EV chargers, or custom OEM assemblies?
              </p>
              
              <p className="page-hero-desc" style={{ color: '#64748B', lineHeight: 1.65, marginBottom: '24px' }}>
                Reach out to our central corporate sales desk or submit your technical specifications below for an expedited engineering response.
              </p>

              {/* 3 Key Value Highlight Chips */}
              <div className="contact-hero-chips">
                <div className="chip-item">
                  <Zap size={16} style={{ color: '#0066FF' }} />
                  <span>Fast 24-Hour Response</span>
                </div>
                <div className="chip-item">
                  <ShieldCheck size={16} style={{ color: '#00D26A' }} />
                  <span>BIS &amp; ISO Certified</span>
                </div>
                <div className="chip-item">
                  <MessageSquare size={16} style={{ color: '#25D366' }} />
                  <span>Direct WhatsApp Support</span>
                </div>
              </div>

              {/* Dual Action CTA Buttons */}
              <div className="contact-hero-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    document.getElementById('contactFormSection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>SUBMIT INQUIRY FORM</span>
                  <ArrowRight size={16} />
                </button>
                
                <a 
                  href="https://wa.me/918826722400?text=Hello%20Hadrons%20Electricals,%20I%20am%20interested%20in%20an%20engineering%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp-cta"
                >
                  <MessageSquare size={16} />
                  <span>CHAT ON WHATSAPP (+91 8826722400)</span>
                </a>
              </div>

            </div>

            <div className="page-hero-img-wrap" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(10,30,74,0.12)', border: '1px solid #E2ECF8' }}>
              <img 
                src="/assets/images/about/philosophy_hands.webp" 
                alt="Connect with Hadrons Electricals" 
                className="page-hero-img"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => { e.target.src = '/assets/images/about/philosophy_hands.webp'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. Contact Cards & Interactive Inquiry Form
           ========================================================================= */}
      <section id="contactFormSection" className="contact-section" style={{ padding: '70px 0' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info Card */}
            <div className="contact-info-card">
              <h3>HADRONS ELECTRICALS</h3>
              <p style={{ color: 'var(--hadrons-blue-silver)', marginBottom: '24px' }}>Official Corporate Headquarters &amp; Production Facility</p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><Phone size={20} /></div>
                  <div className="contact-detail-text">
                    <label>Call Sales Department</label>
                    <a href="tel:+918826722400">+91 8826722400</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><Mail size={20} /></div>
                  <div className="contact-detail-text">
                    <label>Official Email Inquiries</label>
                    <a href="mailto:gaurav.gautam@hadronpower.com">gaurav.gautam@hadronpower.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><MessageCircle size={20} /></div>
                  <div className="contact-detail-text">
                    <label>WhatsApp Business Direct</label>
                    <a href="https://wa.me/918826722400" target="_blank" rel="noopener noreferrer">+91 8826722400</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><MapPin size={20} /></div>
                  <div className="contact-detail-text">
                    <label>Manufacturing Facility</label>
                    <span>Hadrons Electricals Pvt. Ltd., Industrial Area, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Interactive Form */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.5rem', color: 'var(--hadrons-navy-deep)', marginBottom: '20px', fontWeight: 800 }}>Send Us a Message</h3>
              
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactName">Your Name *</label>
                    <input type="text" id="contactName" name="name" className="form-control" required placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactPhone">Phone Number *</label>
                    <input type="tel" id="contactPhone" name="phone" className="form-control" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail">Email Address *</label>
                  <input type="email" id="contactEmail" name="email" className="form-control" required placeholder="name@company.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="contactProduct">Product Interest *</label>
                  <select id="contactProduct" name="product" className="form-control" defaultValue="Wires & Cables">
                    <option value="Wires & Cables">Wires &amp; Cables</option>
                    <option value="Wiring Harness & Battery Cables">Wiring Harness &amp; Battery Cables</option>
                    <option value="Electrical Extension Boards">Electrical Extension Boards</option>
                    <option value="Modular Switches">Modular Switches</option>
                    <option value="Laptop Chargers">Laptop Chargers</option>
                    <option value="AC Grills & Fans">AC Grills &amp; Fans</option>
                    <option value="Cooler Parts & Bodies">Cooler Parts &amp; Bodies</option>
                    <option value="Power Cords (6A & 16A)">Power Cords (6A &amp; 16A)</option>
                    <option value="Data Center Power Cords">Data Center Power Cords</option>
                    <option value="2 Wheeler EV Chargers">2 Wheeler EV Chargers</option>
                    <option value="Large Injection Moulded Components">Large Injection Moulded Components</option>
                    <option value="OEM & Custom Manufacturing">OEM &amp; Custom Manufacturing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage">Your Requirement / Message</label>
                  <textarea id="contactMessage" name="message" className="form-control" rows={4} placeholder="Please specify quantity, technical specs, or required timeline..."></textarea>
                </div>

                {formFeedback && (
                  <div id="formFeedback" style={{ background: '#EFF6FF', color: '#1E3A8A', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem', border: '1px solid #3B82F6', fontWeight: 600, textAlign: 'center' }}>
                    {formFeedback}
                  </div>
                )}

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  <span>SUBMIT INQUIRY</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
