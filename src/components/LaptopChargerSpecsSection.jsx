import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Maximize2, 
  PackageCheck, 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  Thermometer, 
  Gauge, 
  FileCheck2 
} from 'lucide-react';

export default function LaptopChargerSpecsSection({ onOpenLightbox }) {
  // 8 Quality Gates
  const qualityGates = [
    {
      step: '1',
      title: 'RAW MATERIAL INSPECTION',
      desc: 'All incoming materials are verified for grade, authenticity & safety.'
    },
    {
      step: '2',
      title: 'IN-PROCESS QUALITY CHECK',
      desc: 'Soldering, component placement, polarity & torque verification.'
    },
    {
      step: '3',
      title: 'ELECTRICAL SAFETY TEST',
      desc: 'Hi-Pot Test, Insulation Resistance & Ground Continuity Test.'
    },
    {
      step: '4',
      title: 'FUNCTIONAL TESTING',
      desc: '100% functional testing under full load at different voltages.'
    },
    {
      step: '5',
      title: 'PROTECTION FEATURE TESTING',
      desc: 'OVP, OCP, SCP, OTP, OLP verification under fault conditions.'
    },
    {
      step: '6',
      title: 'BURN-IN TEST',
      desc: '100% burn-in test for minimum 2 hours at elevated temperature.'
    },
    {
      step: '7',
      title: 'FINAL VISUAL & DIMENSION CHECK',
      desc: 'Visual appearance, labeling, dimensions & connector check.'
    },
    {
      step: '8',
      title: 'PACKAGING & DISPATCH CHECK',
      desc: 'Secure packaging, accessories verification & barcode scan.'
    }
  ];

  // 5 Multi-Protection Features
  const protections = [
    {
      code: 'OVP',
      title: 'Over Voltage Protection',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0b3e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v5"/>
          <path d="M12 16h.01"/>
        </svg>
      )
    },
    {
      code: 'OCP',
      title: 'Over Current Protection',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0b3e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M13 2 L8 13 L12 13 L10 22 L17 11 L13 11 Z"/>
        </svg>
      )
    },
    {
      code: 'SCP',
      title: 'Short Circuit Protection',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0b3e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
          <path d="M12 8l4 4-4 4"/>
          <path d="M4 4l16 16" strokeDasharray="2 2"/>
        </svg>
      )
    },
    {
      code: 'OTP',
      title: 'Over Temperature Protection',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0b3e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
          <circle cx="11.5" cy="17.5" r="2" fill="#0b3e8c"/>
        </svg>
      )
    },
    {
      code: 'OLP',
      title: 'Over Load Protection',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0b3e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M16 16l3 3"/>
        </svg>
      )
    }
  ];

  // Certifications
  const certs = [
    { name: 'BIS Certified', subtitle: 'IS 13252 Standard', img: '/assets/images/certifications/bis.svg' },
    { name: 'RoHS Compliant', subtitle: 'Lead & Toxin Free', img: '/assets/images/certifications/rohs.svg' },
    { name: 'CE Certified', subtitle: 'European Safety Conformity', img: '/assets/images/certifications/ce.svg' },
    { name: 'FCC Compliant', subtitle: 'EMI / EMC Verified', img: '/assets/images/certifications/fcc.svg' }
  ];

  const handleOpenFullCatalog = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: '/assets/images/products/charger_construction_details_hires.png?v=2',
        title: 'Hadrons Laptop Charger Construction Details'
      });
    }
  };

  return (
    <section 
      className="charger-specs-section"
      style={{
        marginTop: '24px',
        background: '#ffffff',
        border: '1.5px solid #d5e4f7',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(10, 30, 74, 0.05)',
        position: 'relative'
      }}
    >
      {/* =========================================================================
           TOP ROW: Construction Details & Quality Gates
           ========================================================================= */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '28px',
          paddingBottom: '24px',
          borderBottom: '1.5px dashed #cbd5e1'
        }}
      >
        {/* Left Column: Construction Details */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span 
                style={{ 
                  background: '#071e4a', 
                  color: '#ffffff', 
                  fontWeight: '900', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.6px', 
                  padding: '3px 8px', 
                  borderRadius: '4px' 
                }}
              >
                HADRONS
              </span>
              <h3 
                style={{ 
                  margin: 0, 
                  fontSize: '1.05rem', 
                  fontWeight: '900', 
                  color: '#071e4a', 
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase'
                }}
              >
                CONSTRUCTION DETAILS
              </h3>
            </div>

            <button
              onClick={handleOpenFullCatalog}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#0052cc',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Click to view full schematic"
            >
              <Maximize2 size={13} /> Zoom
            </button>
          </div>

          {/* Exploded Diagram Card */}
          <div 
            onClick={handleOpenFullCatalog}
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              padding: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'zoom-in',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '260px',
              transition: 'box-shadow 0.2s, transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 82, 204, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img 
              src="/assets/images/products/charger_construction_details_2x.png?v=2" 
              alt="Hadrons Laptop Charger Construction Details Exploded View" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '320px', 
                objectFit: 'contain' 
              }} 
            />
            <div 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                background: 'rgba(7, 30, 74, 0.85)', 
                color: '#ffffff', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '0.7rem', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backdropFilter: 'blur(4px)'
              }}
            >
              <Maximize2 size={12} /> Click to View Full Resolution
            </div>
          </div>

          {/* Component Breakdown Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '6px', 
              marginTop: '12px' 
            }}
          >
            {[
              'Top Cover (Flame Retardant PC)',
              'ABS / PC High Impact Case',
              'Internal EMI Shield',
              'High Efficiency Power PCB',
              'Strain-Relief Output Cable',
              'Precision AC Input Socket',
              'Flame Retardant Bottom Cover'
            ].map((tag, idx) => (
              <span 
                key={idx}
                style={{
                  background: '#f1f5f9',
                  color: '#1e293b',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  padding: '4px 9px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0052cc' }}></span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Quality Gates - Assured Performance */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '14px' }}>
            <h3 
              style={{ 
                margin: 0, 
                fontSize: '1.05rem', 
                fontWeight: '900', 
                color: '#071e4a', 
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}
            >
              QUALITY GATES – ASSURED PERFORMANCE
            </h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b', fontWeight: '500' }}>
              Stringent 8-stage zero-defect manufacturing and endurance validation protocol
            </p>
          </div>

          {/* 8 Quality Gates List */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '10px 14px',
              height: '100%'
            }}
          >
            {qualityGates.map((gate) => (
              <div 
                key={gate.step}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f0f7ff';
                  e.currentTarget.style.borderColor = '#bfdbfe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Blue numbered badge */}
                <div 
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#071e4a',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    boxShadow: '0 2px 4px rgba(7, 30, 74, 0.2)'
                  }}
                >
                  {gate.step}
                </div>

                <div>
                  <h4 
                    style={{ 
                      margin: '0 0 2px 0', 
                      fontSize: '0.78rem', 
                      fontWeight: '800', 
                      color: '#071e4a', 
                      letterSpacing: '0.2px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {gate.title}
                  </h4>
                  <p 
                    style={{ 
                      margin: 0, 
                      fontSize: '0.72rem', 
                      color: '#475569', 
                      lineHeight: 1.35, 
                      fontWeight: '500' 
                    }}
                  >
                    {gate.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
           BOTTOM ROW: Safety & Certifications, Compliance Standards, Packaging
           ========================================================================= */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '20px', 
          marginTop: '24px',
          alignItems: 'stretch'
        }}
      >
        {/* Card 1: Safety & Certifications (OVP, OCP, SCP, OTP, OLP) */}
        <div 
          style={{ 
            background: '#f8fafc', 
            border: '1.5px solid #e2e8f0', 
            borderRadius: '12px', 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: '900', 
                color: '#071e4a', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px' 
              }}
            >
              SAFETY &amp; CERTIFICATIONS
            </span>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.72rem', color: '#64748b' }}>
              Multi-Layer Active Device Protection Circuit
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, 1fr)', 
              gap: '8px', 
              alignItems: 'center', 
              textAlign: 'center',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          >
            {protections.map((p) => (
              <div 
                key={p.code}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  padding: '6px 2px'
                }}
                title={p.title}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid #0052cc',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px',
                    boxShadow: '0 2px 6px rgba(0, 82, 204, 0.08)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {p.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '900', color: '#071e4a', lineHeight: 1.1 }}>
                  {p.code}
                </span>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: '600', marginTop: '2px', lineHeight: 1.2 }}>
                  {p.title.replace(' Protection', '')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Standards & Compliance Badges */}
        <div 
          style={{ 
            background: '#f8fafc', 
            border: '1.5px solid #e2e8f0', 
            borderRadius: '12px', 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: '900', 
                color: '#071e4a', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px' 
              }}
            >
              STANDARDS &amp; COMPLIANCE
            </span>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.72rem', color: '#64748b' }}>
              Tested &amp; certified to national &amp; global standards
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '10px', 
              alignItems: 'center', 
              textAlign: 'center',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          >
            {certs.map((c) => (
              <div 
                key={c.name}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  padding: '6px 2px'
                }}
                title={`${c.name} - ${c.subtitle}`}
              >
                <div 
                  style={{
                    height: '46px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}
                >
                  <img 
                    src={c.img} 
                    alt={c.name} 
                    style={{ maxHeight: '42px', maxWidth: '100%', objectFit: 'contain' }} 
                  />
                </div>
                <span style={{ fontSize: '0.73rem', fontWeight: '800', color: '#071e4a', lineHeight: 1.15 }}>
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Packaging & Make in India */}
        <div 
          style={{ 
            background: '#f8fafc', 
            border: '1.5px solid #e2e8f0', 
            borderRadius: '12px', 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span 
                style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '900', 
                  color: '#071e4a', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                PACKAGING
              </span>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.72rem', color: '#64748b' }}>
                Secure, shock-proof transit packaging
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Packaging Retail Box Image */}
              <div 
                onClick={handleOpenFullCatalog}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                }}
                title="Click to view packaging details"
              >
                <img 
                  src="/assets/images/products/charger_retail_box_2x.png" 
                  alt="Hadrons Laptop Charger Retail Packaging Box" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>

              {/* Packaging Bullet Points */}
              <ul 
                style={{ 
                  margin: 0, 
                  paddingLeft: '0', 
                  listStyle: 'none', 
                  fontSize: '0.74rem', 
                  color: '#1e293b', 
                  fontWeight: '600',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                {[
                  'Strong & Durable Box',
                  'Shock Proof Packaging',
                  'Safe for Transit',
                  'Eco Friendly Materials'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} color="#16a34a" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Make in India Badge */}
          <div 
            style={{ 
              marginTop: '12px', 
              paddingTop: '10px', 
              borderTop: '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}
          >
            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PROUDLY MANUFACTURED IN INDIA
            </span>
            <img 
              src="/assets/images/products/make_in_india_badge_2x.png" 
              alt="Make In India" 
              style={{ height: '26px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
