import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileDown, 
  CheckCircle2, 
  Award, 
  Layers, 
  Zap, 
  Building2, 
  Send, 
  CheckSquare,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function ProductDetailsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('id') || 'wires';
  
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  const [lightboxImage, setLightboxImage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState('');

  const handleWhatsAppInquiry = (customMsg) => {
    const phone = "918826722400";
    const rawTitle = product.title;
    const cat = product.categoryLabel || 'Electrical Components';
    
    let message = customMsg || `Hello Hadrons Electricals,\n\nI am interested in placing an official inquiry for:\n📦 *Product:* ${rawTitle}\n🏷️ *Category:* ${cat}\n\nPlease share technical datasheets, wholesale price list, and minimum order quantity (MOQ).`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Valued Customer';
    const phoneNum = formData.get('phone') || 'Not provided';
    const company = formData.get('company') || 'N/A';
    const qty = formData.get('quantity') || 'Not specified';
    const note = formData.get('note') || '';

    const text = `*OFFICIAL PRODUCT INQUIRY — HADRONS ELECTRICALS*\n\n` +
      `📦 *Product:* ${product.title}\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phoneNum}\n` +
      `🏢 *Company:* ${company}\n` +
      `📊 *Quantity:* ${qty}\n` +
      (note ? `📝 *Message:* ${note}\n` : '') +
      `\n_Please send technical specifications and commercial quotation._`;

    setFormSubmitted(`✓ Redirecting your inquiry to sales team on WhatsApp...`);
    handleWhatsAppInquiry(text);
    e.target.reset();

    setTimeout(() => setFormSubmitted(''), 5000);
  };

  return (
    <div className="product-details-page" style={{ paddingBottom: '70px', background: '#F8FAFC' }}>
      
      {/* =========================================================================
           1. Header Breadcrumb Banner
           ========================================================================= */}
      <section style={{ background: 'linear-gradient(135deg, #051937 0%, #004d7a 100%)', padding: '36px 0 32px 0', color: '#FFF' }}>
        <div className="container">
          <div className="category-breadcrumb-bar" style={{ marginBottom: '12px' }}>
            <div className="breadcrumb-trail" style={{ color: '#90CDF4' }}>
              <Link to="/" style={{ color: '#90CDF4', textDecoration: 'none' }}>Home</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <Link to="/products" style={{ color: '#90CDF4', textDecoration: 'none' }}>Products Ecosystem</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <span className="trail-current" style={{ color: '#FFF', fontWeight: 600 }}>{product.title}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <button 
                onClick={() => navigate(-1)} 
                style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#FFF', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginBottom: '10px' }}
              >
                <ArrowLeft size={16} /> Back to Products
              </button>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                {product.title}
              </h1>
              <p style={{ fontSize: '0.98rem', color: '#63B3ED', fontWeight: 600, margin: 0 }}>
                {product.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. Main 2-Column Product Details Area
           ========================================================================= */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="product-details-grid">
            
            {/* LEFT COLUMN: Product Overview, Specs, Features, Certifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* Product Showcase Hero Card */}
              <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-blue)', padding: '28px', boxShadow: '0 4px 20px rgba(10,30,74,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', padding: '4px 12px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 800 }}>
                    CARD #{product.badgeNum} • {product.categoryLabel}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#16A34A', background: '#DCFCE7', padding: '4px 10px', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} /> 100% Quality Tested
                  </span>
                </div>

                {/* Main Product Image Wrap */}
                <div 
                  className="product-details-img-wrap"
                  onClick={() => setLightboxImage({ src: product.img, title: product.title })}
                  title="Click to view full image"
                >
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  />
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(10, 30, 74, 0.75)', color: '#FFF', padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)' }}>
                    <Maximize2 size={14} /> Zoom Image
                  </div>
                </div>

                {/* Product Description */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '10px' }}>
                  Product Overview
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.75', marginBottom: '20px' }}>
                  {product.desc}
                </p>

                {/* Key Features Bullet Grid */}
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  Key Performance Features:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', padding: '12px 14px', borderRadius: '10px', border: '1px solid #E2ECF8', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--hadrons-blue-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600, lineHeight: '1.4' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-blue)', padding: '28px', boxShadow: '0 4px 20px rgba(10,30,74,0.04)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Zap size={20} style={{ color: 'var(--hadrons-blue-primary)' }} />
                    Technical Specifications
                  </h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                      <tbody>
                        {product.specs.map((spec, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9', background: idx % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                            <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--hadrons-navy-deep)', width: '38%' }}>{spec.label}</td>
                            <td style={{ padding: '12px 16px', color: 'var(--text-dark)', fontWeight: 500 }}>{spec.val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Certifications & Applications Split Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                
                {/* Certifications Card */}
                {product.certifications && (
                  <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border-blue)', padding: '24px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={18} style={{ color: 'var(--hadrons-blue-primary)' }} />
                      Certifications &amp; Standards
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {product.certifications.map((c, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          <CheckSquare size={16} style={{ color: '#16A34A' }} />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Applications Card */}
                {product.applications && (
                  <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border-blue)', padding: '24px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Building2 size={18} style={{ color: 'var(--hadrons-blue-primary)' }} />
                      Applications &amp; Usage
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {product.applications.map((app, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          <ChevronRight size={16} style={{ color: 'var(--hadrons-blue-primary)' }} />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* RIGHT COLUMN: Sticky WhatsApp & Sales Inquiry Side Card */}
            <div className="product-details-sidebar">
              <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '2px solid var(--hadrons-blue-electric)', padding: '28px', boxShadow: '0 8px 30px rgba(0,102,255,0.12)' }}>
                
                {/* Instant WhatsApp Action Header */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#FFF', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', boxShadow: '0 6px 18px rgba(37,211,102,0.3)' }}>
                    <MessageSquare size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', margin: '0 0 4px 0' }}>
                    Instant Inquiry
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Direct WhatsApp response for wholesale pricing &amp; technical datasheets.
                  </p>
                </div>

                {/* Dedicated WhatsApp Button */}
                <button 
                  onClick={() => handleWhatsAppInquiry()}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                    marginBottom: '16px',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <MessageSquare size={20} />
                  <span>INQUIRE ON WHATSAPP</span>
                </button>

                {/* Direct Call Line */}
                <a 
                  href="tel:+918826722400"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: 'var(--hadrons-blue-ice)',
                    color: 'var(--hadrons-navy-deep)',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '24px',
                    border: '1px solid var(--border-blue)'
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--hadrons-blue-primary)' }} />
                  <span>Call Helpline: +91 8826722400</span>
                </a>

                {/* Download Official PDF Brochure Button */}
                {product.catalogPdf && (
                  <a 
                    href={product.catalogPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      background: '#F1F5F9',
                      color: '#334155',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginBottom: '24px',
                      border: '1px solid #CBD5E1'
                    }}
                  >
                    <FileDown size={18} style={{ color: '#0284C7' }} />
                    <span>Download PDF Catalogue</span>
                  </a>
                )}

                <hr style={{ border: 'none', borderTop: '1px solid #E2ECF8', margin: '0 0 20px 0' }} />

                {/* Quick Inquiry Form */}
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Send Custom Quotation Request:
                </h4>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Your Name *" 
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="Phone Number *" 
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="company" 
                      placeholder="Company Name (Optional)" 
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="quantity" 
                      placeholder="Target Quantity (e.g. 500 Coils / 1000 Pcs)" 
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <textarea 
                      name="note" 
                      rows={2} 
                      placeholder="Additional Requirements / Specs..." 
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-blue)', outline: 'none', fontSize: '0.88rem' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                  >
                    <Send size={16} />
                    <span>SUBMIT INQUIRY</span>
                  </button>

                  {formSubmitted && (
                    <div style={{ background: '#EFF6FF', color: '#1E3A8A', padding: '10px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, textAlign: 'center', border: '1px solid #3B82F6' }}>
                      {formSubmitted}
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal for Product Image Zoom */}
      {lightboxImage && (
        <ImageLightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

    </div>
  );
}
