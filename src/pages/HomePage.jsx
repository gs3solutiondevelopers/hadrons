import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  Gem, 
  Leaf, 
  MapPin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  ToggleRight, 
  Server, 
  BatteryCharging, 
  Shield, 
  Award, 
  CheckCircle2, 
  CheckSquare, 
  Flame, 
  Settings, 
  FileText, 
  Phone, 
  Mail, 
  Send 
} from 'lucide-react';
import ProductModal from '../components/ProductModal';
import FilterTrack from '../components/FilterTrack';
import { PRODUCT_CATEGORIES } from '../data/productsData';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formFeedback, setFormFeedback] = useState('');

  const handleFilterClick = (cat) => {
    navigate(`/product-details?id=${cat}`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Valued Customer';
    const phone = formData.get('phone') || 'Not provided';
    const email = formData.get('email') || 'Not provided';
    const product = formData.get('product') || 'General Inquiry';
    const message = formData.get('message') || '';

    const whatsappPhone = "918826722400";
    let formattedText = `*NEW PRODUCT INQUIRY — HADRONS ELECTRICALS*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📧 *Email:* ${email}\n` +
      `📦 *Product Interest:* ${product}\n`;

    if (message.trim()) {
      formattedText += `📝 *Message:* ${message.trim()}\n`;
    }
    formattedText += `\n_Please send official product datasheets and wholesale pricing._`;

    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(formattedText)}`;
    
    setFormFeedback(`✓ Thank you, ${name}! Redirecting your inquiry to WhatsApp...`);
    window.open(whatsappUrl, '_blank');
    e.target.reset();

    setTimeout(() => setFormFeedback(''), 6000);
  };

  return (
    <div className="home-page">
      
      {/* =========================================================================
           1. Hero Section (Futuristic White & Electric Blue Theme)
           ========================================================================= */}
      <section className="hero-section" id="home">
        <div className="hero-ambient-glow"></div>
        <div className="hero-circuit-bg"></div>

        <div className="container hero-container">
          <div className="hero-grid">
            
            {/* Left Content Column */}
            <div className="hero-content">
              <div className="hero-category-tag">
                ADVANCED ELECTRICAL ENGINEERING
              </div>
              
              <h1 className="hero-main-title">
                POWERING<br />
                CONNECTIONS.<br />
                <span className="hero-title-blue">ENERGIZING<br />FUTURES.</span>
              </h1>
              
              <div className="hero-tagline">
                <span className="tagline-icon-wrap">
                  <Zap className="tagline-zap" size={18} />
                </span>
                <span className="tagline-text">Hadron Wires — Power flows without fire.</span>
              </div>

              {/* 4 Trust Badges */}
              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <ShieldCheck className="badge-icon" size={20} />
                  <div className="badge-text">SAFE &amp;<br />RELIABLE</div>
                </div>
                <div className="trust-badge-item">
                  <Gem className="badge-icon" size={20} />
                  <div className="badge-text">PREMIUM<br />QUALITY</div>
                </div>
                <div className="trust-badge-item">
                  <Leaf className="badge-icon" size={20} />
                  <div className="badge-text">FUTURE<br />READY</div>
                </div>
                <div className="trust-badge-item">
                  <MapPin className="badge-icon" size={20} />
                  <div className="badge-text">MADE IN<br />INDIA</div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="hero-actions">
                <Link to="/products" className="btn btn-primary btn-hero-explore">
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-secondary btn-hero-about">
                  <span>ABOUT US</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="hero-visual-stage" id="heroVisualStage">
              <div className="hero-stage-card">
                <div className="stage-image-container">
                  <img 
                    src="/assets/images/hero_image_main.webp" 
                    alt="Hadrons 3D Electrical Engineering Showcase" 
                    className="stage-main-img" 
                    id="heroStageImg"
                    onError={(e) => { e.target.src = '/assets/images/hero_official_visual_trimmed.webp'; }}
                  />
                  <div className="stage-pedestal-glow"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           2. About Us & Manufacturing Standards Section
           ========================================================================= */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            
            <div className="about-content">
              <div className="section-tag"><Shield size={16} /> About Hadrons</div>
              <h2 className="section-heading">ENGINEERING <span>ELECTRICAL EXCELLENCE</span></h2>
              <p className="about-lead">
                <strong>Hadrons Electricals</strong> is an industry leader in electrical conductors, power connectivity systems, EV charging infrastructure, and custom engineering manufacturing in India.
              </p>
              <p style={{ color: 'var(--text-body)', marginBottom: '20px', lineHeight: 1.7 }}>
                Our manufacturing facility incorporates automated rod breakdown wire drawing machines, high-speed bunching, inline continuous vulcanization, and computer-controlled plastic injection moulding.
              </p>
              
              <div className="about-metrics">
                <div className="metric-box">
                  <span className="metric-num">99.99%</span>
                  <span className="metric-label">Pure ETP Copper</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">100%</span>
                  <span className="metric-label">Spark Tested</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">11+</span>
                  <span className="metric-label">Product Lines</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">Pan-India</span>
                  <span className="metric-label">Supply Network</span>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary" style={{ marginTop: '24px' }}>
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-visual">
              <div className="about-image-card">
                <img src="/assets/images/about/hadrons_factory_building.webp" alt="Hadrons Electricals Advanced Manufacturing Plant" className="about-plant-img" />
                <div className="about-glow-badge">
                  <Award size={24} />
                  <div>
                    <strong>ISO 9001:2015</strong>
                    <span>Certified Production Quality</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           5. Quality Standards & Certifications
           ========================================================================= */}
      <section className="quality-section" id="quality">
        <div className="container">
          <div className="quality-grid">
            
            <div>
              <div className="section-tag"><ShieldCheck size={16} /> Standards of Excellence</div>
              <h2 className="section-heading">ZERO COMPROMISE <span>ON SAFETY</span></h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', marginBottom: '24px', lineHeight: 1.7 }}>
                At Hadrons Electricals, safety is paramount. Every coil of wire, extension board, power cord, and charger undergoes multi-stage automated validation before leaving our factory floor.
              </p>
              
              <div className="quality-checklist">
                <div className="check-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>100% Electrolytic ETP Grade High-Purity Copper Conductors</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>Flame Retardant Low Smoke (FRLS) Self-Extinguishing Insulation</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>10kV Inline Spark &amp; Dielectric Breakdown Testing</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>Strict Conformance with IS/IEC, BIS, CE &amp; RoHS Directives</span>
                </div>
              </div>

              <Link to="/quality" className="btn btn-primary" style={{ marginTop: '28px' }}>
                <span>REQUEST TEST CERTIFICATES</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="quality-card-list">
              <div className="quality-box">
                <div className="quality-icon"><CheckSquare size={24} /></div>
                <h4>Spectrometer Purity Test</h4>
                <p>Optical emission spectrometry verifies 99.99% pure copper conductivity.</p>
              </div>

              <div className="quality-box">
                <div className="quality-icon"><Flame size={24} /></div>
                <h4>FRLS Thermal Barrier</h4>
                <p>High oxygen-index PVC prevents fire spread and releases non-toxic low smoke.</p>
              </div>

              <div className="quality-box">
                <div className="quality-icon"><Zap size={24} /></div>
                <h4>10kV Spark Validation</h4>
                <p>100% continuous spark testing eliminates any microscopic insulation pinholes.</p>
              </div>

              <div className="quality-box">
                <div className="quality-icon"><Settings size={24} /></div>
                <h4>CNC Injection Tooling</h4>
                <p>Micron-precision CNC tooling guarantees perfect fit for all moulded components.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           6. Quick Inquiry / Contact Form Section
           ========================================================================= */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            
            <div>
              <div className="section-tag"><Phone size={16} /> Contact Sales</div>
              <h2 className="section-heading">GET IN <span>TOUCH WITH US</span></h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', marginBottom: '24px', lineHeight: 1.7 }}>
                Have bulk purchasing requirements, custom OEM specifications, or technical inquiries? Contact our engineering team for instant response.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', padding: '12px', borderRadius: '10px' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--hadrons-navy-deep)', fontWeight: 700 }}>Direct WhatsApp Helpline</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 8826722400</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', padding: '12px', borderRadius: '10px' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--hadrons-navy-deep)', fontWeight: 700 }}>Official Email</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>gaurav.gautam@hadronpower.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem', color: 'var(--hadrons-navy-deep)' }}>
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter your name" 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem', color: 'var(--hadrons-navy-deep)' }}>
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+91 9876543210" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem', color: 'var(--hadrons-navy-deep)' }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="name@company.com" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem', color: 'var(--hadrons-navy-deep)' }}>
                    Product Category Interest
                  </label>
                  <select 
                    name="product" 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', background: '#FFF' }}
                  >
                    <option value="Wires & Cables">Wires &amp; Cables</option>
                    <option value="Extension Boards">Extension Boards</option>
                    <option value="Modular Switches">Modular Switches</option>
                    <option value="Power Cords">Power Cords &amp; Data Center</option>
                    <option value="EV Chargers">EV Chargers</option>
                    <option value="OEM Manufacturing">OEM &amp; Plastic Moulding</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem', color: 'var(--hadrons-navy-deep)' }}>
                    Requirement Details / Message
                  </label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    placeholder="Mention quantity, wire gauge, or specific OEM requirements..."
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  <span>SUBMIT INQUIRY ON WHATSAPP</span>
                </button>

                {formFeedback && (
                  <div style={{ background: '#EFF6FF', color: '#1E3A8A', padding: '12px', borderRadius: '8px', border: '1px solid #3B82F6', textAlign: 'center', fontWeight: 600 }}>
                    {formFeedback}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Shared Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
