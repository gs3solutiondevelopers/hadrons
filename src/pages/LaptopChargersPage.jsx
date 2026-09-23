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
  Laptop,
  Zap,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import ProductModal from '../components/ProductModal';
import ImageLightboxModal from '../components/ImageLightboxModal';
import LaptopChargerSpecsSection from '../components/LaptopChargerSpecsSection';

export default function LaptopChargersPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const chargerRange = [
    {
      badge: '01',
      modelId: '45w',
      title: 'STANDARD CHARGER (45W)',
      wattage: '45W',
      img: '/assets/images/laptop/charger_series_45w.webp?v=3',
      specs: {
        'Power Output': '45W',
        'Output Voltage': '19V DC',
        'Output Current': '2.37A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'Multiple Tips',
        'Efficiency': '≥ 85%',
        'Protection': 'OVP, OCP, SCP'
      },
      features: ['Compact Design', 'Over Voltage Protection', 'Over Current Protection', 'Short Circuit Protection'],
      desc: 'Lightweight and compact 45W universal laptop power adapter engineered for netbooks and everyday ultrabooks.'
    },
    {
      badge: '02',
      modelId: '65w_std',
      title: 'STANDARD CHARGER (65W)',
      wattage: '65W',
      img: '/assets/images/laptop/charger_series_65w_std.webp?v=3',
      specs: {
        'Power Output': '65W',
        'Output Voltage': '19V DC',
        'Output Current': '3.42A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'Multiple Tips',
        'Efficiency': '≥ 87%',
        'Protection': 'OVP, OCP, SCP'
      },
      features: ['Energy Efficient', 'Over Voltage Protection', 'Over Current Protection', 'Short Circuit Protection'],
      desc: 'High-efficiency 65W standard replacement laptop adapter delivering consistent voltage and multi-protection.'
    },
    {
      badge: '03',
      modelId: '65w_slim',
      title: 'SLIM CHARGER (65W)',
      wattage: '65W',
      img: '/assets/images/laptop/charger_series_65w_slim.webp?v=3',
      specs: {
        'Power Output': '65W',
        'Output Voltage': '19V DC',
        'Output Current': '3.42A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'USB-C / Multiple Tips',
        'Efficiency': '≥ 88%',
        'Protection': 'OVP, OCP, SCP'
      },
      features: ['Slim & Lightweight', 'Over Voltage Protection', 'Over Current Protection', 'Short Circuit Protection'],
      desc: 'Ultra-slim travel-ready 65W charger supporting modern Type-C and interchangeable tips with high energy conversion.'
    },
    {
      badge: '04',
      modelId: '90w',
      title: 'PREMIUM CHARGER (90W)',
      wattage: '90W',
      img: '/assets/images/laptop/charger_series_90w.webp?v=3',
      specs: {
        'Power Output': '90W',
        'Output Voltage': '19.5V / 20V DC',
        'Output Current': '4.62A / 4.74A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'USB-C / Multiple Tips',
        'Efficiency': '≥ 88%',
        'Protection': 'OVP, OCP, OTP'
      },
      features: ['Smart IC Technology', 'Over Voltage Protection', 'Over Current Protection', 'Thermal Protection'],
      desc: 'High-power 90W premium charger featuring intelligent Smart IC power management for high-load workstation laptops.'
    },
    {
      badge: '05',
      modelId: '120w',
      title: 'SLIM CHARGER (120W)',
      wattage: '120W',
      img: '/assets/images/laptop/charger_series_120w.webp?v=3',
      specs: {
        'Power Output': '120W',
        'Output Voltage': '20V DC',
        'Output Current': '6A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'USB-C',
        'Efficiency': '≥ 89%',
        'Protection': 'OVP, OCP, OTP'
      },
      features: ['PD Fast Charging', 'Over Voltage Protection', 'Over Current Protection', 'Over Temperature Protection'],
      desc: 'High-wattage 120W slim fast charger with USB-C Power Delivery (PD) and over-temperature safety safeguards.'
    },
    {
      badge: '06',
      modelId: '180w',
      title: 'GAMING CHARGER (180W)',
      wattage: '180W',
      img: '/assets/images/laptop/charger_series_180w.webp?v=3',
      specs: {
        'Power Output': '180W',
        'Output Voltage': '20V DC',
        'Output Current': '9A',
        'Input': '100-240V~ 50/60Hz',
        'Connector Type': 'USB-C / Multiple Tips',
        'Efficiency': '≥ 90%',
        'Protection': 'Multi-Protection, OTP'
      },
      features: ['High Power Output', 'Multi-Protection', 'Stable Performance', 'Thermal Protection'],
      desc: 'Extreme power 180W gaming & high-performance workstation adapter delivering stable 9A current under peak rendering loads.'
    }
  ];

  const filteredChargers = selectedFilter === 'all' 
    ? chargerRange 
    : chargerRange.filter(c => c.wattage === selectedFilter);

  const handleWhatsAppInquiry = (productTitle) => {
    const phone = "918826722400";
    const msg = `Hello Hadrons Electricals,\n\nI am interested in placing an inquiry for:\n📦 *Product:* ${productTitle}\n🏷️ *Category:* Laptop Chargers (Range Series)\n\nPlease share wholesale pricing, minimum order quantity (MOQ), and tip compatibility datasheets.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const compatibleBrands = [
    'HP', 'Dell', 'Lenovo', 'acer', 'ASUS', 'TOSHIBA', 'SAMSUNG', 'Microsoft', 'Xiaomi', 'Apple MacBook', 'and more...'
  ];

  return (
    <div className="laptop-chargers-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      
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
              <Link to="/products?cat=chargers" style={{ color: '#0052cc', textDecoration: 'none', fontWeight: '500' }}>Laptop Chargers</Link>
              <span>/</span>
              <span style={{ color: '#0f172a', fontWeight: '700' }}>Charger Models</span>
            </div>

            <button 
              onClick={() => navigate('/products?cat=chargers')}
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
              <ArrowLeft size={16} /> Back to Laptop Chargers
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
              <Zap size={14} /> POWERING PERFORMANCE. ENSURING SAFETY.
            </div>

            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: '900', letterSpacing: '-0.5px', margin: '0 0 8px 0', lineHeight: 1.25, textTransform: 'uppercase' }}>
              OUR LAPTOP CHARGER RANGE
            </h1>
            
            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: '#bfdbfe', margin: '0 0 20px 0', fontStyle: 'italic', fontWeight: '500' }}>
              (Engineered for Every Need – 45W, 65W, 90W, 120W &amp; 180W Gaming Workstations)
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Wide Compatibility (HP, Dell, Lenovo, Apple, ASUS &amp; More)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> Multi-Protection Circuit (OVP, OCP, SCP, OTP)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> USB-C PD 3.0 &amp; Interchangeable Tips
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="#4ade80" /> 100% Burn-in &amp; High Voltage Tested
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
           3. Wattage Filter Tabs Bar
           ========================================================================= */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginRight: '4px' }}>Filter Wattage:</span>
            {[
              { id: 'all', label: 'All Models (6)' },
              { id: '45W', label: '45W' },
              { id: '65W', label: '65W' },
              { id: '90W', label: '90W' },
              { id: '120W', label: '120W' },
              { id: '180W', label: '180W' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                style={{
                  background: selectedFilter === tab.id ? '#0052cc' : '#f8fafc',
                  color: selectedFilter === tab.id ? '#ffffff' : '#334155',
                  border: selectedFilter === tab.id ? '1px solid #0052cc' : '1px solid #cbd5e1',
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
            href="/catalogs/Laptop Chargers.pdf" 
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
            <FileDown size={16} /> Download Laptop Charger Catalog (PDF)
          </a>
        </div>
      </section>

      {/* =========================================================================
           4. 6 Laptop Charger Product Cards (Exact Mockup Layout & Specs)
           ========================================================================= */}
      <section style={{ padding: '36px 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', 
              gap: '18px',
              alignItems: 'stretch'
            }}
          >
            {filteredChargers.map((c) => (
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
                  features: Object.entries(c.specs).map(([k, v]) => `${k}: ${v}`).concat(c.features)
                })}
              >
                {/* Card Header */}
                <div className="card-top-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="card-num-badge" style={{ background: '#0b3e8c', color: '#fff', fontSize: '0.7rem', fontWeight: '900', padding: '2px 8px', borderRadius: '4px' }}>
                    {c.badge}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '0.82rem', fontWeight: '900', color: '#0a1e4a', textTransform: 'uppercase', letterSpacing: '0.2px', lineHeight: 1.2 }}>
                    {c.title}
                  </h3>
                </div>

                {/* Product Image Container */}
                <div 
                  className="card-product-img-wrap"
                  style={{
                    height: '180px',
                    width: '100%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    margin: '0 0 10px 0',
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

                {/* Specs Table - Properly Aligned Key-Value Rows */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.74rem', marginBottom: '10px' }}>
                  {Object.entries(c.specs).map(([key, val], idx) => (
                    <div 
                      key={key} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '5px 8px',
                        background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                        border: '1px solid #edf2f7',
                        borderRadius: '5px',
                        minHeight: '27px',
                        gap: '8px'
                      }}
                    >
                      <span style={{ color: '#475569', fontWeight: '600', fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
                        {key}
                      </span>
                      <span style={{ 
                        color: '#0a1e4a', 
                        fontWeight: '700', 
                        fontSize: '0.73rem', 
                        textAlign: 'right',
                        whiteSpace: 'nowrap'
                      }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Features Bullets */}
                <div style={{ background: '#f1f5f9', padding: '6px 8px', borderRadius: '6px', marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#0b3e8c', textTransform: 'uppercase', marginBottom: '3px' }}>Key Protections:</div>
                  <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '0.68rem', color: '#475569', lineHeight: 1.35 }}>
                    {c.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
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
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '0.76rem',
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
                  <MessageSquare size={14} /> Inquire For {c.wattage}
                </button>
              </div>
            ))}
          </div>

          {/* =========================================================================
               5. Compatible Brands Strip
               ========================================================================= */}
          <div 
            style={{ 
              marginTop: '28px', 
              background: '#ffffff', 
              border: '1.5px solid #d5e4f7', 
              borderRadius: '12px', 
              padding: '16px 24px',
              boxShadow: '0 2px 10px rgba(10, 30, 74, 0.04)'
            }}
          >
            <div style={{ marginBottom: '14px' }}>
              <span style={{ 
                fontSize: '0.78rem', 
                fontWeight: '900', 
                color: '#0b3e8c', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px' 
              }}>
                COMPATIBLE BRANDS
              </span>
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                flexWrap: 'wrap', 
                gap: '16px 24px',
                padding: '4px 0'
              }}
            >
              {/* HP */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="HP">
                <img src="/assets/images/brands/hp.svg?v=2" alt="HP" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* DELL */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Dell">
                <img src="/assets/images/brands/dell.svg?v=2" alt="Dell" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Lenovo */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Lenovo">
                <img src="/assets/images/brands/lenovo.svg?v=2" alt="Lenovo" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Acer */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Acer">
                <img src="/assets/images/brands/acer.svg?v=2" alt="Acer" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* ASUS */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="ASUS">
                <img src="/assets/images/brands/asus.svg?v=2" alt="ASUS" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Toshiba */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Toshiba">
                <img src="/assets/images/brands/toshiba.svg?v=2" alt="Toshiba" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Samsung */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Samsung">
                <img src="/assets/images/brands/samsung.svg?v=2" alt="Samsung" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Microsoft */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Microsoft">
                <img src="/assets/images/brands/microsoft.svg?v=2" alt="Microsoft" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Xiaomi */}
              <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Xiaomi">
                <img src="/assets/images/brands/xiaomi.svg?v=2" alt="Xiaomi" style={{ height: '26px', width: '26px', objectFit: 'contain' }} />
              </div>

              {/* and more... */}
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                color: '#64748b', 
                fontStyle: 'italic',
                whiteSpace: 'nowrap'
              }}>
                and more...
              </span>
            </div>
          </div>

          {/* =========================================================================
               6. Construction Details, Quality Gates, Safety & Packaging
               ========================================================================= */}
          <LaptopChargerSpecsSection onOpenLightbox={(data) => setLightboxImage(data)} />

        </div>
      </section>

      {/* =========================================================================
           7. Shared Modal & Lightbox
           ========================================================================= */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      {lightboxImage && (
        <ImageLightboxModal imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

    </div>
  );
}
