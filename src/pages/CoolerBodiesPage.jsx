import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Gem, 
  Leaf, 
  MapPin, 
  ArrowLeft, 
  MessageSquare, 
  FileDown, 
  CheckCircle2, 
  Info, 
  Maximize2,
  Box,
  Layers,
  Thermometer,
  Zap,
  ChevronRight
} from 'lucide-react';
import ProductModal from '../components/ProductModal';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function CoolerBodiesPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState('all');

  const coolerBodies = [
    {
      badge: '01',
      capacity: '35L',
      title: '35 LTR COOLER BODY',
      img: '/assets/images/coolers/cooler_body_35l.webp?v=3',
      specs: {
        'Material': 'PP (Virgin Grade)',
        'Process': 'Injection Moulding',
        'Tank Capacity': '35 Ltr',
        'Overall Size (W x D x H)': '430 x 430 x 720 mm',
        'Tank Thickness': '2.5 ± 0.3 mm',
        'Wall Thickness': '2.5 ± 0.3 mm',
        'Color': 'Ivory / Grey / Custom',
        'Features': 'UV Stabilized, Rust Proof, Leak Proof'
      },
      desc: 'Optimized high-strength 35 Litre injection moulded plastic cooler body engineered for compact personal and room air coolers.'
    },
    {
      badge: '02',
      capacity: '55L',
      title: '55 LTR COOLER BODY',
      img: '/assets/images/coolers/cooler_body_55l.webp?v=3',
      specs: {
        'Material': 'PP (Virgin Grade)',
        'Process': 'Injection Moulding',
        'Tank Capacity': '55 Ltr',
        'Overall Size (W x D x H)': '510 x 510 x 860 mm',
        'Tank Thickness': '3.0 ± 0.3 mm',
        'Wall Thickness': '3.0 ± 0.3 mm',
        'Color': 'Ivory / Grey / Custom',
        'Features': 'UV Stabilized, Rust Proof, Leak Proof'
      },
      desc: 'Medium-capacity 55 Litre virgin PP air cooler body offering superior structural rigidity, UV stability, and long operational life.'
    },
    {
      badge: '03',
      capacity: '75L',
      title: '75 LTR COOLER BODY',
      img: '/assets/images/coolers/cooler_body_75l.webp?v=3',
      specs: {
        'Material': 'PP (Virgin Grade)',
        'Process': 'Injection Moulding',
        'Tank Capacity': '75 Ltr',
        'Overall Size (W x D x H)': '590 x 590 x 980 mm',
        'Tank Thickness': '3.0 ± 0.3 mm',
        'Wall Thickness': '3.0 ± 0.3 mm',
        'Color': 'Ivory / Grey / Custom',
        'Features': 'UV Stabilized, Rust Proof, Leak Proof'
      },
      desc: 'High-performance 75 Litre injection moulded cooler casing designed for desert and commercial cooling applications.'
    },
    {
      badge: '04',
      capacity: '95L',
      title: '95 LTR COOLER BODY',
      img: '/assets/images/coolers/cooler_body_95l.webp?v=3',
      specs: {
        'Material': 'PP (Virgin Grade)',
        'Process': 'Injection Moulding',
        'Tank Capacity': '95 Ltr',
        'Overall Size (W x D x H)': '680 x 680 x 1080 mm',
        'Tank Thickness': '3.0 ± 0.3 mm',
        'Wall Thickness': '3.0 ± 0.3 mm',
        'Color': 'Ivory / Grey / Custom',
        'Features': 'UV Stabilized, Rust Proof, Leak Proof'
      },
      desc: 'Heavy-duty 95 Litre large capacity cooler body built for high airflow desert cooling with reinforced base and water tank.'
    },
    {
      badge: '05',
      capacity: '120L',
      title: '120 LTR COOLER BODY',
      img: '/assets/images/coolers/cooler_body_120l.webp?v=3',
      specs: {
        'Material': 'PP (Virgin Grade)',
        'Process': 'Injection Moulding',
        'Tank Capacity': '120 Ltr',
        'Overall Size (W x D x H)': '760 x 760 x 1180 mm',
        'Tank Thickness': '3.0 ± 0.3 mm',
        'Wall Thickness': '3.2 ± 0.3 mm',
        'Color': 'Ivory / Grey / Custom',
        'Features': 'UV Stabilized, Rust Proof, Leak Proof'
      },
      desc: 'Maximum-capacity 120 Litre extra heavy-duty cooler body engineered with 3.2mm wall thickness for extreme industrial and commercial cooling.'
    }
  ];

  const filteredCoolers = selectedCapacity === 'all' 
    ? coolerBodies 
    : coolerBodies.filter(c => c.capacity === selectedCapacity);

  const handleWhatsAppInquiry = (productTitle) => {
    const phone = "918826722400";
    const msg = `Hello Hadrons Electricals,\n\nI am interested in placing an inquiry for:\n📦 *Product:* ${productTitle}\n🏷️ *Category:* Cooler Body (Injection Moulding Series)\n\nPlease share wholesale pricing, minimum order quantity (MOQ), and technical tool specifications.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="cooler-bodies-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* =========================================================================
           1. Header & Breadcrumb Bar
           ========================================================================= */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
              <Link to="/" style={{ color: '#0052cc', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <span>/</span>
              <Link to="/products" style={{ color: '#0052cc', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
              <span>/</span>
              <Link to="/products?cat=coolers" style={{ color: '#0052cc', textDecoration: 'none', fontWeight: '500' }}>Coolers (Body &amp; Fans)</Link>
              <span>/</span>
              <span style={{ color: '#0f172a', fontWeight: '700' }}>Cooler Bodies</span>
            </div>

            <button 
              onClick={() => navigate('/products?cat=coolers')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#f1f5f9',
                color: '#0052cc',
                border: '1px solid #cbd5e1',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0052cc'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0052cc'; }}
            >
              <ArrowLeft size={16} /> Back to Cooler Components
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. Hero Banner matching PDF Catalog Header
           ========================================================================= */}
      <section style={{ background: 'linear-gradient(135deg, #071e4a 0%, #0b3e8c 60%, #0052cc 100%)', color: '#ffffff', padding: '36px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ maxWidth: '980px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <Layers size={14} /> INJECTION MOULDING SERIES (≤ 500 TON)
            </div>

            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: '900', letterSpacing: '-0.5px', margin: '0 0 8px 0', lineHeight: 1.25, textTransform: 'uppercase' }}>
              1. COOLER BODY – CAPACITIES SUITABLE FOR ≤ 500 TON INJECTION MOULDING
            </h1>
            
            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: '#bfdbfe', margin: '0 0 20px 0', fontStyle: 'italic', fontWeight: '500' }}>
              (Optimized designs for high strength, low weight &amp; long life)
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Virgin Grade Polypropylene (PP)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px' }}>
                <CheckCircle2 size={16} color="#4ade80" /> UV Stabilized &amp; Weatherproof
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px' }}>
                <CheckCircle2 size={16} color="#4ade80" /> 100% Rust Proof &amp; Leak Proof
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Custom OEM Tooling Available
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
           3. Capacity Filter Tabs Bar
           ========================================================================= */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginRight: '4px' }}>Filter Capacity:</span>
            {[
              { id: 'all', label: 'All Capacities (5)' },
              { id: '35L', label: '35 LTR' },
              { id: '55L', label: '55 LTR' },
              { id: '75L', label: '75 LTR' },
              { id: '95L', label: '95 LTR' },
              { id: '120L', label: '120 LTR' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCapacity(tab.id)}
                style={{
                  background: selectedCapacity === tab.id ? '#0052cc' : '#f8fafc',
                  color: selectedCapacity === tab.id ? '#ffffff' : '#334155',
                  border: selectedCapacity === tab.id ? '1px solid #0052cc' : '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <a 
            href="/catalogs/Cooler Body,Fans & Other Injection Moulding Parts.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#0052cc',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            <FileDown size={16} /> Download Full Cooler Catalog (PDF)
          </a>
        </div>
      </section>

      {/* =========================================================================
           4. 5 Cooler Body Product Cards (Exact Mockup Layout & Specs)
           ========================================================================= */}
      <section style={{ padding: '36px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
              gap: '20px',
              alignItems: 'stretch'
            }}
          >
            {filteredCoolers.map((c) => (
              <div 
                key={c.badge} 
                className="catalog-item-card" 
                style={{ 
                  background: '#ffffff',
                  border: '1.5px solid #d5e4f7',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(10, 30, 74, 0.05)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProduct({
                  title: c.title,
                  desc: c.desc,
                  img: c.img,
                  features: Object.entries(c.specs).map(([k, v]) => `${k}: ${v}`)
                })}
              >
                {/* Card Header */}
                <div className="card-top-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="card-num-badge" style={{ background: '#0b3e8c', color: '#fff', fontSize: '0.7rem', fontWeight: '900', padding: '2px 8px', borderRadius: '4px' }}>
                    {c.badge}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '0.88rem', fontWeight: '900', color: '#0a1e4a', textTransform: 'uppercase', letterSpacing: '0.2px' }}>
                    {c.title}
                  </h3>
                </div>

                {/* Product Image Container */}
                <div 
                  className="card-product-img-wrap"
                  style={{
                    height: '210px',
                    width: '100%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    margin: '0 0 12px 0',
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  title={`Click to view ${c.title}`}
                >
                  <img 
                    src={c.img} 
                    alt={c.title} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      transition: 'transform 0.35s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      right: '8px',
                      bottom: '8px',
                      background: 'rgba(15, 23, 42, 0.65)',
                      color: '#fff',
                      padding: '4px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(c.img);
                    }}
                    title="Zoom Image"
                  >
                    <Maximize2 size={13} />
                  </span>
                </div>

                {/* Construction Details Blue Subheader */}
                <div 
                  style={{
                    background: '#0b3e8c',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: '900',
                    textAlign: 'center',
                    padding: '6px 8px',
                    borderRadius: '4px',
                    letterSpacing: '0.5px',
                    marginBottom: '10px',
                    textTransform: 'uppercase'
                  }}
                >
                  CONSTRUCTION DETAILS
                </div>

                {/* Specs Table */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.76rem', marginBottom: '14px' }}>
                  {Object.entries(c.specs).map(([key, val], idx) => (
                    <div 
                      key={key} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '42% 58%', 
                        padding: '4px 6px',
                        background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                        border: '1px solid #edf2f7',
                        borderRadius: '4px',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ color: '#475569', fontWeight: '600', fontSize: '0.72rem' }}>{key}</span>
                      <span style={{ color: '#0f172a', fontWeight: '700', fontSize: '0.74rem' }}>{val}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Enquiry Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppInquiry(c.title);
                  }}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 12px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 3px 10px rgba(0, 102, 255, 0.28)'
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0052CC 0%, #0A328C 100%)'; 
                    e.currentTarget.style.boxShadow = '0 5px 14px rgba(0, 102, 255, 0.45)';
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)'; 
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 102, 255, 0.28)';
                  }}
                >
                  <MessageSquare size={15} /> Inquire For {c.capacity} Body
                </button>
              </div>
            ))}
          </div>

          {/* =========================================================================
               5. Note Banner matching Catalog Footer Note
               ========================================================================= */}
          <div 
            style={{ 
              marginTop: '32px', 
              background: '#eff6ff', 
              border: '1.5px solid #bfdbfe', 
              borderRadius: '10px', 
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            <div style={{ background: '#0052cc', color: '#fff', borderRadius: '50%', padding: '4px', display: 'flex', flexShrink: 0, marginTop: '2px' }}>
              <Info size={18} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '0.92rem', color: '#0b3e8c', fontWeight: '800' }}>
                Manufacturing &amp; Engineering Notice:
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#1e3a8a', lineHeight: 1.5, fontWeight: '500' }}>
                <strong>Note:</strong> Above capacities can be manufactured on injection moulding machines up to 500 tonnage with suitable tool design. Bespoke color compounding, UV masterbatches, brand logo embossing, and custom tool engineering are available for high-volume OEM air cooler manufacturers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
           6. Shared Modal & Lightbox
           ========================================================================= */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      {lightboxImage && (
        <ImageLightboxModal imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

    </div>
  );
}
