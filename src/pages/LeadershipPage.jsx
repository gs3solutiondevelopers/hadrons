import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Users, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Zap, 
  Compass, 
  Globe 
} from 'lucide-react';

export default function LeadershipPage() {
  const leaders = [
    {
      name: 'Dr. Mahinder Gautam',
      title: 'Chairman & Founder',
      badge: 'FOUNDING VISIONARY',
      experience: '35+ Years Industrial & Technical Excellence',
      bio: 'Dr. Mahinder Gautam established Hadrons Electricals Private Limited in 2014 with a commitment to build a world-class Indian manufacturing enterprise. Under his stewardship, Hadrons evolved from high-purity copper conductor drawing into a multi-vertical electrical, EV charging, power connectivity, and precision plastic moulding ecosystem.',
      focus: ['Strategic Corporate Governance', 'Core Metallurgy & R&D Excellence', 'Zero-Compromise Safety Standards', 'Sustainable Indian Industry Growth'],
      img: '/assets/images/about/philosophy_hands.webp'
    },
    {
      name: 'Gaurav Gautam',
      title: 'Managing Director & Operations Head',
      badge: 'OPERATIONS & EXPANSION',
      experience: '15+ Years OEM & Global Market Strategy',
      bio: 'Gaurav Gautam leads business operations, OEM contract manufacturing, and market expansion at Hadrons Electricals. He has been instrumental in integrating high-speed automated extrusion lines, CNC plastic injection tooling, and expanding the company supply network across pan-India and international clients.',
      focus: ['Automated Production Scaling', 'OEM & Custom Contract Engineering', 'Global Supply Chain Architecture', 'Client Relationship & Support'],
      img: '/assets/images/about/hadrons_factory_building.webp'
    }
  ];

  const executivePillars = [
    {
      icon: <Target size={28} />,
      title: 'Visionary Strategy',
      desc: 'Anticipating market demand by expanding into high-growth sectors like EV chargers, data center power cords, and solar battery enclosures.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Quality First Leadership',
      desc: 'Enforcing 100% spark testing, ETP 99.99% pure copper standards, and IS/IEC certification across every production line.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Operational Excellence',
      desc: 'Combining automated high-speed machinery with lean manufacturing protocols to ensure zero-defect output and on-time delivery.'
    },
    {
      icon: <Compass size={28} />,
      title: 'Customer-Centric Focus',
      desc: 'Building long-term transparent relationships with OEM partners, distributors, contractors, and retail consumers.'
    }
  ];

  return (
    <div className="leadership-page">
      
      {/* =========================================================================
           1. Top Hero Section
           ========================================================================= */}
      <section className="products-hero-bar" style={{ background: 'linear-gradient(135deg, #051937, #004d7a)', padding: '60px 0' }}>
        <div className="container">
          <div className="category-breadcrumb-bar" style={{ marginBottom: '16px' }}>
            <div className="breadcrumb-trail" style={{ color: '#90CDF4' }}>
              <Link to="/" style={{ color: '#90CDF4', textDecoration: 'none' }}>Home</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <Link to="/about" style={{ color: '#90CDF4', textDecoration: 'none' }}>About Us</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <span className="trail-current" style={{ color: '#FFF', fontWeight: 600 }}>Leadership &amp; Vision</span>
            </div>
          </div>

          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 255, 0.15)', border: '1px solid #00D2FF', color: '#00D2FF', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
              <Users size={16} /> EXECUTIVE BOARD &amp; GOVERNANCE
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', lineHeight: '1.2', marginBottom: '16px' }}>
              LEADERSHIP DRIVEN BY <span style={{ color: '#00D2FF' }}>EXPERIENCE &amp; INTEGRITY</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E0', lineHeight: '1.7', margin: 0 }}>
              Meet the executive leadership guiding Hadrons Electricals towards engineering innovation, quality excellence, and sustainable manufacturing growth across India and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. Executive Directors Spotlight Section
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag"><Award size={16} /> Executive Board</div>
            <h2 className="section-heading">BOARD OF <span>DIRECTORS</span></h2>
            <p className="section-sub">Guided by seasoned industrial visionaries and dynamic operational leaders.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {leaders.map((leader, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', borderRadius: '20px', border: '1px solid var(--border-blue)', overflow: 'hidden', boxShadow: '0 8px 30px rgba(10,30,74,0.06)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '36px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'inline-block', background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px', width: 'fit-content' }}>
                    {leader.badge}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', margin: '0 0 4px 0' }}>{leader.name}</h3>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--hadrons-blue-primary)', margin: '0 0 16px 0' }}>{leader.title}</h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} style={{ color: 'var(--hadrons-blue-primary)' }} />
                    <span>{leader.experience}</span>
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '20px' }}>{leader.bio}</p>
                  
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Strategic Focus Areas:</h5>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {leader.focus.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--hadrons-blue-primary)', flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF', borderRadius: '16px', border: '1px solid #E2ECF8', padding: '24px', position: 'relative', minHeight: '260px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0A1E4A, #0066FF)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 800, margin: '0 auto 16px auto', boxShadow: '0 10px 25px rgba(0,102,255,0.25)' }}>
                      {leader.name.split(' ').map(n => n[0]).slice(-2).join('')}
                    </div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)' }}>{leader.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{leader.title}</p>
                    <span style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.8rem', background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>Hadrons Electricals Pvt. Ltd.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. Leadership Pillars Grid
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: 'var(--bg-blue-soft)' }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag"><Zap size={16} /> Governance Principles</div>
            <h2 className="section-heading">CORE <span>LEADERSHIP PILLARS</span></h2>
            <p className="section-sub">Principles that steer our everyday manufacturing and customer commitments.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {executivePillars.map((pillar, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-blue)', boxShadow: '0 4px 20px rgba(10,30,74,0.05)' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)', marginBottom: '10px' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           4. Connect with Executive Team CTA
           ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0A1E4A, #0040A8)', borderRadius: '24px', padding: '48px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', boxShadow: '0 12px 36px rgba(10,30,74,0.15)' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px 0', color: '#FFF' }}>PARTNER WITH HADRONS LEADERSHIP</h2>
              <p style={{ margin: 0, color: '#B0C4DE', fontSize: '1rem', maxWidth: '600px' }}>
                Looking for strategic OEM alliances, joint venture manufacturing, or enterprise-scale electrical supply contracts? Connect directly with our executive management team.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: '#00D2FF', color: '#0A1E4A', fontWeight: 700, padding: '14px 28px', border: 'none' }}>
                <span>SCHEDULE LEADERSHIP MEETING</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
