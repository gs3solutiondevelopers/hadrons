import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowLeft, 
  MessageSquare, 
  FileDown, 
  CheckCircle2, 
  Info, 
  Maximize2,
  Wind,
  Layers,
  Sparkles
} from 'lucide-react';
import ProductModal from '../components/ProductModal';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function CoolerFansPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedSweep, setSelectedSweep] = useState('all');

  const coolerFans = [
    {
      badge: '01',
      sweepSize: '300mm',
      title: '300 mm FAN (12")',
      img: '/assets/images/coolers/cooler_fan_300mm.webp?v=3',
      specs: {
        'Material': 'PP + 20% GF',
        'Process': 'Injection Moulding',
        'Sweep (Diameter)': 'Ø 300 mm',
        'No. of Blades': '4',
        'Bore Diameter': 'Ø 12 / 16 mm',
        'Blade Angle': '28°',
        'Weight (Approx.)': '180 ± 10 g',
        'Color': 'Black',
        'Features': 'High Air Delivery, Low Noise, Balanced'
      },
      desc: 'Precision balanced 300 mm (12 inch) 4-blade aerodynamic plastic axial fan impeller engineered for personal and compact room air coolers.'
    },
    {
      badge: '02',
      sweepSize: '350mm',
      title: '350 mm FAN (14")',
      img: '/assets/images/coolers/cooler_fan_350mm.webp?v=3',
      specs: {
        'Material': 'PP + 20% GF',
        'Process': 'Injection Moulding',
        'Sweep (Diameter)': 'Ø 350 mm',
        'No. of Blades': '4',
        'Bore Diameter': 'Ø 12 / 16 mm',
        'Blade Angle': '28°',
        'Weight (Approx.)': '220 ± 10 g',
        'Color': 'Black',
        'Features': 'High Air Delivery, Low Noise, Balanced'
      },
      desc: 'High-thrust 350 mm (14 inch) 4-blade glass-filled polypropylene fan blade providing maximum airflow efficiency and minimal operational noise.'
    },
    {
      badge: '03',
      sweepSize: '400mm',
      title: '400 mm FAN (16")',
      img: '/assets/images/coolers/cooler_fan_400mm.webp?v=3',
      specs: {
        'Material': 'PP + 20% GF',
        'Process': 'Injection Moulding',
        'Sweep (Diameter)': 'Ø 400 mm',
        'No. of Blades': '5',
        'Bore Diameter': 'Ø 12 / 16 mm',
        'Blade Angle': '26°',
        'Weight (Approx.)': '260 ± 10 g',
        'Color': 'Black',
        'Features': 'High Air Delivery, Low Noise, Balanced'
      },
      desc: 'Popular 400 mm (16 inch) 5-blade aerodynamic impeller with 26° blade angle for medium to large residential and desert coolers.'
    },
    {
      badge: '04',
      sweepSize: '450mm',
      title: '450 mm FAN (18")',
      img: '/assets/images/coolers/cooler_fan_450mm.webp?v=3',
      specs: {
        'Material': 'PP + 20% GF',
        'Process': 'Injection Moulding',
        'Sweep (Diameter)': 'Ø 450 mm',
        'No. of Blades': '5',
        'Bore Diameter': 'Ø 12 / 16 mm',
        'Blade Angle': '28°',
        'Weight (Approx.)': '360 ± 10 g',
        'Color': 'Black',
        'Features': 'High Air Delivery, Low Noise, Balanced'
      },
      desc: 'Heavy-duty 450 mm (18 inch) 5-blade reinforced fan impeller delivering powerful air throw for desert and large industrial coolers.'
    },
    {
      badge: '05',
      sweepSize: '500mm',
      title: '500 mm FAN (20")',
      img: '/assets/images/coolers/cooler_fan_500mm.webp?v=3',
      specs: {
        'Material': 'PP + 20% GF',
        'Process': 'Injection Moulding',
        'Sweep (Diameter)': 'Ø 500 mm',
        'No. of Blades': '5',
        'Bore Diameter': 'Ø 12 / 16 mm',
        'Blade Angle': '28°',
        'Weight (Approx.)': '360 ± 15 g',
        'Color': 'Black',
        'Features': 'High Air Delivery, Low Noise, Balanced'
      },
      desc: 'Maximum sweep 500 mm (20 inch) 5-blade commercial fan blade built with PP + 20% Glass Fiber for high structural rigidity and supreme volumetric air output.'
    }
  ];

  const filteredFans = selectedSweep === 'all' 
    ? coolerFans 
    : coolerFans.filter(f => f.sweepSize === selectedSweep);

  const handleWhatsAppInquiry = (productTitle) => {
    const phone = "918826722400";
    const msg = `Hello Hadrons Electricals,\n\nI am interested in placing an inquiry for:\n📦 *Product:* ${productTitle}\n🏷️ *Category:* Cooler Fans (Sweep Sizes Series)\n\nPlease share wholesale pricing, minimum order quantity (MOQ), and technical motor compatibility datasheets.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="cooler-fans-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      
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
              <span style={{ color: '#0f172a', fontWeight: '700' }}>Cooler Fans</span>
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
           2. Hero Banner matching PDF Catalog Header (White Title)
           ========================================================================= */}
      <section style={{ background: 'linear-gradient(135deg, #071e4a 0%, #0b3e8c 60%, #0052cc 100%)', color: '#ffffff', padding: '36px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ maxWidth: '980px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#ffffff' }}>
              <Wind size={14} /> HIGH PERFORMANCE AXIAL IMPELLERS
            </div>

            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: '900', letterSpacing: '-0.5px', margin: '0 0 8px 0', lineHeight: 1.25, textTransform: 'uppercase' }}>
              2. COOLER FANS – DIFFERENT SWEEP SIZES
            </h1>
            
            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: '#bfdbfe', margin: '0 0 20px 0', fontStyle: 'italic', fontWeight: '500' }}>
              (High Air Delivery, Aerodynamically Balanced &amp; Low Noise Operation)
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Glass-Filled Polypropylene (PP + 20% GF)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Dynamically Balanced &amp; Low Vibration
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Dual Bore Compatibility (Ø 12 / 16 mm)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> 100% High Air Thrust Design
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
           3. Sweep Size Filter Tabs Bar
           ========================================================================= */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginRight: '4px' }}>Filter Sweep Size:</span>
            {[
              { id: 'all', label: 'All Sizes (5)' },
              { id: '300mm', label: '300 mm (12")' },
              { id: '350mm', label: '350 mm (14")' },
              { id: '400mm', label: '400 mm (16")' },
              { id: '450mm', label: '450 mm (18")' },
              { id: '500mm', label: '500 mm (20")' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedSweep(tab.id)}
                style={{
                  background: selectedSweep === tab.id ? '#0052cc' : '#f8fafc',
                  color: selectedSweep === tab.id ? '#ffffff' : '#334155',
                  border: selectedSweep === tab.id ? '1px solid #0052cc' : '1px solid #cbd5e1',
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
           4. 5 Cooler Fan Product Cards (Exact Mockup Layout & Specs)
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
            {filteredFans.map((f) => (
              <div 
                key={f.badge} 
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
                  title: f.title,
                  desc: f.desc,
                  img: f.img,
                  features: Object.entries(f.specs).map(([k, v]) => `${k}: ${v}`)
                })}
              >
                {/* Card Header */}
                <div className="card-top-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="card-num-badge" style={{ background: '#0b3e8c', color: '#fff', fontSize: '0.7rem', fontWeight: '900', padding: '2px 8px', borderRadius: '4px' }}>
                    {f.badge}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '0.88rem', fontWeight: '900', color: '#0a1e4a', textTransform: 'uppercase', letterSpacing: '0.2px' }}>
                    {f.title}
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
                  title={`Click to view ${f.title}`}
                >
                  <img 
                    src={f.img} 
                    alt={f.title} 
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
                      setLightboxImage(f.img);
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
                  {Object.entries(f.specs).map(([key, val], idx) => (
                    <div 
                      key={key} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '44% 56%', 
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
                    handleWhatsAppInquiry(f.title);
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
                  <MessageSquare size={15} /> Inquire For {f.sweepSize} Fan
                </button>
              </div>
            ))}
          </div>

          {/* =========================================================================
               5. Note Banner matching Engineering Standards
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
                Engineering &amp; Motor Compatibility Notice:
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#1e3a8a', lineHeight: 1.5, fontWeight: '500' }}>
                <strong>Note:</strong> All fan blades are injection moulded with 20% Glass-Filled Polypropylene (PP + 20% GF) for zero pitch deformation at high RPMs. Available in dual bore collar bushings (12 mm &amp; 16 mm) suitable for standard cooler motors, multi-speed motors, and heavy-duty desert cooler blower units.
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
