import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Gem, Leaf, MapPin, ArrowRight } from 'lucide-react';
import ProductModal from '../components/ProductModal';

export default function WiresCablesPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const wireProducts = [
    {
      title: 'House Wiring Cables',
      badge: '01',
      img: '/assets/images/wires/wire_01_house_wiring.webp',
      features: ['PVC insulated', 'Single & multi-core', '0.5 Sq.mm to 6 Sq.mm', 'IS: 694 Compliant'],
      description: 'Flame Retardant (FR/FRLS) 100% pure electrolytic copper single core and multi core cables engineered for residential, commercial and architectural wiring.'
    },
    {
      title: 'Flexible Cables',
      badge: '02',
      img: '/assets/images/wires/wire_02_flexible.webp',
      features: ['High flexibility', 'Tinned / Annealed copper', '0.5 Sq.mm to 50 Sq.mm', 'IS: 694 Compliant'],
      description: 'Multi-strand annealed and tinned electrolytic copper flexible conductors with high thermal insulation for switchgear panels, appliances, and industrial conduit wiring.'
    },
    {
      title: 'Multi Core Cables',
      badge: '03',
      img: '/assets/images/wires/wire_03_multicore.webp',
      features: ['2 Core to 61 Core', 'Control & power applications', 'PVC / FR / FRLS options', 'IS: 1554 (Part 1)'],
      description: 'Heavy-duty industrial round PVC sheathed multi-core power and control cables engineered with color-coded cores and high current endurance.'
    },
    {
      title: 'Armoured Cables',
      badge: '04',
      img: '/assets/images/wires/wire_04_armoured.webp',
      features: ['Robust & mechanical protection', 'Power & control applications', 'PVC / XLPE insulation', 'IS: 7098 (Part 1)'],
      description: 'Galvanized steel wire and strip armoured cables providing extreme mechanical protection against crushing and underground harsh environment for power utilities.'
    },
    {
      title: 'Signal & Control Cables',
      badge: '05',
      img: '/assets/images/wires/wire_05_signal_control.webp',
      features: ['Shielded / Unshielded', 'Excellent signal transmission', 'Industrial & automation use', 'IS: 1554 (Part 1)'],
      description: 'Aluminium mylar tape and tinned copper braid shielded multi-pair instrumentation cables preventing electromagnetic interference (EMI) in industrial automation.'
    },
    {
      title: 'Flat Cables',
      badge: '06',
      img: '/assets/images/wires/wire_06_flat.webp',
      features: ['Space saving design', 'Easy installation', '2 Core to 24 Core', 'IS: 694 Compliant'],
      description: 'Parallel flat flexible multicore cables engineered for space-constrained industrial cable drag chains, elevators, and automated machinery routing.'
    },
    {
      title: 'Submersible Cables',
      badge: '07',
      img: '/assets/images/wires/wire_07_submersible.webp',
      features: ['Suitable for submersible pumps', 'Water & moisture resistant', 'PVC / FR options', 'IS: 694 Compliant'],
      description: '3-Core flat waterproof PVC jacketed cables engineered specifically for deep-well submersible pumps with high hydrostatic pressure resistance.'
    },
    {
      title: 'Solar Cables',
      badge: '08',
      img: '/assets/images/wires/wire_08_solar.webp',
      features: ['UV & Ozone resistant', 'Halogen free & flame retardant', 'Operating temp: -40°C to +120°C', 'EN 50618 Approved'],
      description: 'Cross-linked polyolefin (XLPO) insulated tinned copper cables designed for outdoor photovoltaic solar panels with 25+ years weather endurance.'
    },
    {
      title: 'Battery & Welding Cables',
      badge: '09',
      img: '/assets/images/wires/wire_09_battery_welding.webp',
      features: ['High current carrying capacity', 'Flexible & abrasion resistant', 'NBR / HOFR sheath options', 'IS: 9857 Compliant'],
      description: 'High-flex fine-strand copper battery connection and heavy-duty arc welding cables resisting oil, chemical splatter, and thermal stress.'
    },
    {
      title: 'Special / Custom Cables',
      badge: '10',
      img: '/assets/images/wires/wire_10_special.webp',
      features: ['Tailored to customer specs', 'Various insulation materials', 'Custom conductor configurations', 'RoHS / REACH Compliant'],
      description: 'Bespoke cable engineering with custom wire gauges, specialized sheathing compounds, and custom color striping for OEM appliance manufacturers.'
    }
  ];

  return (
    <div className="wires-cables-page">
      
      {/* =========================================================================
           2. Wires & Cables Category Hero Header Bar (Exact Mockup Layout)
           ========================================================================= */}
      <section className="wires-hero-banner-section">
        <div className="container">
          
          {/* Breadcrumb Bar */}
          <div className="category-breadcrumb-bar">
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link> <span>&gt;</span>
              <Link to="/products">Products</Link> <span>&gt;</span>
              <span className="trail-current">Wires &amp; Cables Range</span>
            </div>
          </div>

          <div className="wires-hero-grid">
            
            {/* Left Title & Narrative */}
            <div className="wires-hero-content">
              <h1 className="wires-hero-title">WIRES &amp; CABLES</h1>
              <h2 className="wires-hero-subtitle">PREMIUM QUALITY. MAXIMUM SAFETY. SUPERIOR PERFORMANCE.</h2>
              <p className="wires-hero-desc">
                Our wires and cables are manufactured using high-grade raw materials and advanced technology to ensure durability, reliability and consistent performance for every connection.
              </p>
            </div>

            {/* Center 3D Wire Spool Drum Visual */}
            <div className="wires-hero-visual">
              <img 
                src="/assets/images/wires/wire_hero_banner.webp" 
                alt="Hadrons Wires and Cables Spool Drum" 
                className="wires-drum-img"
                onError={(e) => { e.target.src = '/assets/images/wires_cables_mockup.webp'; }}
              />
            </div>

            {/* Right 4 Trust Badges */}
            <div className="wires-hero-badges-col">
              <div className="p-badge-item">
                <ShieldCheck className="p-badge-icon" size={20} />
                <div className="p-badge-text">SAFE &amp; RELIABLE</div>
              </div>
              <div className="p-badge-item">
                <Gem className="p-badge-icon" size={20} />
                <div className="p-badge-text">PREMIUM QUALITY</div>
              </div>
              <div className="p-badge-item">
                <Leaf className="p-badge-icon" size={20} />
                <div className="p-badge-text">FUTURE READY</div>
              </div>
              <div className="p-badge-item">
                <MapPin className="p-badge-icon" size={20} />
                <div className="p-badge-text">MADE IN INDIA</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
           3. 10 Dedicated Wires & Cables Product Cards (Full Width 5x2 Grid)
           ========================================================================= */}
      <section className="wires-catalog-section">
        <div className="container">

          <div className="wires-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {wireProducts.map((p) => (
              <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/product-details?id=wires')}>
                <div className="card-top-header">
                  <span className="card-num-badge">{p.badge}</span>
                  <h4 className="card-header-title">{p.title}</h4>
                </div>
                <div className="card-product-img-wrap">
                  <img src={p.img} alt={p.title} onError={(e) => { e.target.src = '/assets/images/wires_cables.webp'; }} />
                </div>
                <ul className="card-features-list">
                  {p.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button className="card-details-btn" onClick={(e) => { e.stopPropagation(); navigate('/product-details?id=wires'); }}>
                  <span>VIEW DETAILS</span> <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Shared Modal Popup */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
