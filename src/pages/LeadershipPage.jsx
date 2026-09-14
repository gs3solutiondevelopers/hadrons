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
  Globe,
  Sparkles,
  Layers,
  HeartHandshake,
  CheckSquare,
  Cpu,
  BatteryCharging,
  Plug,
  Server,
  Cable,
  Smartphone,
  Box
} from 'lucide-react';

export default function LeadershipPage() {
  const leaders = [
    {
      name: 'Dr. Mahinder Gautam',
      title: 'Founder & Chairman',
      badge: 'FOUNDING VISIONARY',
      experience: '40+ Years of Industry & Manufacturing Experience',
      bio: `With 40+ years of industry experience, Dr. Mahinder Gautam is the founder and guiding force behind Hadrons Electricals. His extensive experience in electrical products, manufacturing, engineering, quality, and business development has played a fundamental role in establishing the company's foundation and long-term vision. His philosophy of quality without compromise, ethical business practices, continuous improvement, and long-term customer relationships continues to guide Hadrons Electricals.`,
      focus: [
        'Quality Without Compromise',
        'Ethical Business Practices',
        'Continuous Engineering R&D',
        'Long-Term Customer Relationships'
      ],
      initials: 'MG'
    },
    {
      name: 'Gaurav Gautam',
      title: 'Director',
      badge: 'STRATEGIC GROWTH & OPERATIONS',
      experience: 'Next-Generation Leadership & Market Expansion',
      bio: `Gaurav Gautam is a Director at Hadrons Electricals Private Limited and is actively involved in the company's business development, product expansion, customer relationships, commercial operations, and strategic growth. Working alongside the company's experienced founding leadership, Gaurav is focused on taking Hadrons Electricals into new product categories and emerging markets while strengthening its existing manufacturing capabilities. His focus includes expanding the company's presence across electrical products, wires and cables, data and networking solutions, mobile charging products, EV charging solutions, extension boards, and precision moulded components. With a strong emphasis on understanding customer requirements and developing practical manufacturing solutions, Gaurav is helping drive the company's transition toward a broader, technology-oriented and customer-focused manufacturing platform. His vision is to build Hadrons Electricals into a trusted Indian manufacturing partner for OEMs, brands, distributors, and industrial customers, while creating a company capable of competing in both Indian and international markets.`,
      focus: [
        'OEM & Brand Manufacturing Partnerships',
        'New Product Category Expansion',
        'Technology-Oriented Production Scaling',
        'Indian & International Market Growth'
      ],
      initials: 'GG'
    }
  ];

  const portfolioItems = [
    'Copper Wires & Electrical Cables',
    'House Wires & Multi-Core Cables',
    'Flat Submersible Cables',
    'CAT5, CAT6 & Data Cables',
    'Data Center Cables & Connectivity Products',
    'Mobile Chargers & Charging Cables',
    'Electrical Extension Boards & Spike Guards',
    'EV Chargers, EV Cables & Charging Solutions',
    'AC Plastic Moulded Components',
    'Air Cooler Plastic Components',
    'Precision Injection Moulded Components',
    'OEM & Customized Manufacturing Solutions'
  ];

  const milestones = [
    {
      stage: 'Company Establishment',
      year: '2014',
      title: 'Foundation & Vision',
      desc: 'Established in 2014 under Dr. Mahinder Gautam with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and customer relationships.'
    },
    {
      stage: 'Growth & Diversification',
      year: 'Expanded Portfolio',
      title: 'Product Line Expansion',
      desc: 'The company expanded its capabilities into electrical wires and cables, networking products, chargers, extension boards, and other electrical solutions.'
    },
    {
      stage: 'Engineering Components',
      year: 'Precision Moulding',
      title: 'OEM Component Tooling',
      desc: 'Hadrons developed specialized capabilities in precision injection moulding for AC, air-cooler, appliance, and custom OEM applications.'
    },
    {
      stage: 'EV & New-Age Products',
      year: 'Future Mobility',
      title: 'Electric Vehicle Ecosystem',
      desc: 'The company expanded into EV charging products and heavy-duty battery connection cables, supporting the growing electric mobility ecosystem.'
    },
    {
      stage: 'Today & Beyond',
      year: 'Present Day',
      title: 'Global Manufacturing Platform',
      desc: 'Hadrons Electricals continues to build a diversified product portfolio and manufacturing platform with a focus on quality, innovation, customization, and scalable production.'
    }
  ];

  return (
    <div className="leadership-page">
      
      {/* =========================================================================
           1. Top Hero Section - Company Background Overview
           ========================================================================= */}
      <section className="products-hero-bar" style={{ background: 'linear-gradient(135deg, #051937, #004d7a)', padding: '60px 0' }}>
        <div className="container">
          <div className="category-breadcrumb-bar" style={{ marginBottom: '16px' }}>
            <div className="breadcrumb-trail" style={{ color: '#90CDF4' }}>
              <Link to="/" style={{ color: '#90CDF4', textDecoration: 'none' }}>Home</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <Link to="/about" style={{ color: '#90CDF4', textDecoration: 'none' }}>About Us</Link> <span style={{ color: '#63B3ED' }}>&gt;</span>
              <span className="trail-current" style={{ color: '#FFF', fontWeight: 600 }}>Company Background &amp; Leadership</span>
            </div>
          </div>

          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 255, 0.15)', border: '1px solid #00D2FF', color: '#00D2FF', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
              <Users size={16} /> HADRONS ELECTRICALS PRIVATE LIMITED
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', lineHeight: '1.2', marginBottom: '16px' }}>
              COMPANY BACKGROUND &amp; <span style={{ color: '#00D2FF' }}>LEADERSHIP</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E0', lineHeight: '1.7', margin: 0 }}>
              Established in <strong>2014</strong> with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and long-term customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. Company Background Brief Callout
           ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#F8FAFC', borderBottom: '1px solid #E2ECF8' }}>
        <div className="container">
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '40px', border: '1px solid var(--border-blue)', boxShadow: '0 8px 30px rgba(10,30,74,0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Building2 size={24} style={{ color: 'var(--hadrons-blue-primary)' }} />
              COMPANY BACKGROUND
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '16px' }}>
              Hadrons Electricals Private Limited was established in 2014 with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and long-term customer relationships.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '16px' }}>
              The company was founded under the leadership of <strong>Dr. Mahinder Gautam, Founder &amp; Chairman</strong>, who brings more than 40 years of experience in the electrical, manufacturing, engineering, product development, and business sectors.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: '1.8', margin: 0 }}>
              Over the years, Hadrons Electricals has evolved into a diversified manufacturing company serving multiple industries. Our product portfolio now extends across electrical wires and cables, networking and data cables, chargers, EV charging solutions, extension boards, and precision plastic moulded components for AC and air-cooler applications. The company combines the experience of its leadership with modern manufacturing capabilities and a strong focus on product development, quality, customization, and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. Leadership Profiles Spotlight (Dr. Mahinder Gautam & Gaurav Gautam)
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag"><Award size={16} /> Executive Leadership</div>
            <h2 className="section-heading">MEET OUR <span>LEADERSHIP</span></h2>
            <p className="section-sub">Guided by founding industrial expertise and next-generation engineering vision.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {leaders.map((leader, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', borderRadius: '20px', border: '1px solid var(--border-blue)', overflow: 'hidden', boxShadow: '0 8px 30px rgba(10,30,74,0.06)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '36px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'inline-block', background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px', width: 'fit-content' }}>
                    {leader.badge}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', margin: '0 0 4px 0' }}>{leader.name}</h3>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--hadrons-blue-primary)', margin: '0 0 14px 0' }}>{leader.title}</h4>
                  
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} style={{ color: 'var(--hadrons-blue-primary)' }} />
                    <span>{leader.experience}</span>
                  </div>

                  <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '20px' }}>{leader.bio}</p>
                  
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Pillars &amp; Strategic Focus:</h5>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {leader.focus.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--hadrons-blue-primary)', flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF', borderRadius: '16px', border: '1px solid #E2ECF8', padding: '30px', textAlign: 'center', position: 'relative' }}>
                  <div>
                    <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: 'linear-gradient(135deg, #0A1E4A, #0066FF)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 800, margin: '0 auto 16px auto', boxShadow: '0 10px 25px rgba(0,102,255,0.25)' }}>
                      {leader.initials}
                    </div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)' }}>{leader.name}</h4>
                    <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', fontWeight: 600, color: 'var(--hadrons-blue-primary)' }}>{leader.title}</p>
                    <div style={{ background: '#F1F5F9', color: '#475569', padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600, display: 'inline-block' }}>
                      Hadrons Electricals Pvt. Ltd.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           4. Featured Section: "Two Generations. One Vision."
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #051937, #0A2540)', color: '#FFF' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 255, 0.15)', border: '1px solid #00D2FF', color: '#00D2FF', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
              <Sparkles size={16} /> LEADERSHIP SYNERGY
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFF', marginBottom: '12px' }}>
              TWO GENERATIONS. <span style={{ color: '#00D2FF' }}>ONE VISION.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#63B3ED', fontWeight: 600, marginBottom: '20px' }}>
              Experience that builds trust. Innovation that drives the future.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#CBD5E0', lineHeight: '1.8' }}>
              Hadrons Electricals brings together more than four decades of industry experience through its Founder &amp; Chairman, <strong>Dr. Mahinder Gautam</strong>, with the next generation of leadership represented by Director <strong>Gaurav Gautam</strong>. Together, the leadership team combines deep industry knowledge, manufacturing experience, customer understanding, and a forward-looking approach to technology and new product development. This combination forms the foundation of Hadrons Electricals&rsquo; journey from an established electrical manufacturer to a diversified engineering and manufacturing company.
            </p>
          </div>

          {/* 12 Product Portfolio Grid */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', textAlign: 'center', marginBottom: '24px', letterSpacing: '0.5px' }}>
              TODAY, THE COMPANY OFFERS A WIDE PORTFOLIO OF PRODUCTS INCLUDING:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
              {portfolioItems.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s ease' }}>
                  <div style={{ background: 'rgba(0, 210, 255, 0.15)', color: '#00D2FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckSquare size={18} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#F1F5F9', fontWeight: 600, lineHeight: '1.4' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           5. Growth & Diversification Milestones
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag"><TrendingUp size={16} /> Evolutionary Journey</div>
            <h2 className="section-heading">GROWTH &amp; <span>DIVERSIFICATION</span></h2>
            <p className="section-sub">A progressive journey of capability expansion and technological advancement.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid var(--border-blue)', position: 'relative' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--hadrons-blue-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  {m.stage}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)', marginBottom: '10px' }}>{m.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           6. Our Philosophy Section (Exact Copy Prompt Text)
           ========================================================================= */}
      <section style={{ padding: '70px 0', background: 'var(--bg-blue-soft)', borderTop: '1px solid var(--border-blue)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', background: '#FFFFFF', padding: '48px', borderRadius: '24px', border: '1px solid var(--border-blue)', boxShadow: '0 10px 30px rgba(10,30,74,0.06)' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}><HeartHandshake size={16} /> Our Foundation</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--hadrons-navy-deep)', marginBottom: '20px' }}>
              OUR <span>PHILOSOPHY</span>
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--hadrons-navy-deep)', fontWeight: 600, lineHeight: '1.7', marginBottom: '20px' }}>
              At Hadrons Electricals, we believe that manufacturing is more than producing a product—it is about creating reliability that customers can depend on.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '24px' }}>
              Under the leadership of <strong>Dr. Mahinder Gautam</strong>, the company continues to focus on three fundamental principles:
            </p>

            {/* 3 Principles Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', margin: '30px 0' }}>
              <div style={{ background: 'var(--hadrons-blue-ice)', border: '1px solid #BFDBFE', padding: '16px 28px', borderRadius: '16px', textAlign: 'center', flex: '1', minWidth: '160px' }}>
                <ShieldCheck size={28} style={{ color: 'var(--hadrons-blue-primary)', marginBottom: '6px' }} />
                <h4 style={{ margin: 0, color: 'var(--hadrons-navy-deep)', fontWeight: 800, fontSize: '1.05rem' }}>QUALITY</h4>
              </div>

              <div style={{ background: 'var(--hadrons-blue-ice)', border: '1px solid #BFDBFE', padding: '16px 28px', borderRadius: '16px', textAlign: 'center', flex: '1', minWidth: '160px' }}>
                <Zap size={28} style={{ color: 'var(--hadrons-blue-primary)', marginBottom: '6px' }} />
                <h4 style={{ margin: 0, color: 'var(--hadrons-navy-deep)', fontWeight: 800, fontSize: '1.05rem' }}>INNOVATION</h4>
              </div>

              <div style={{ background: 'var(--hadrons-blue-ice)', border: '1px solid #BFDBFE', padding: '16px 28px', borderRadius: '16px', textAlign: 'center', flex: '1', minWidth: '160px' }}>
                <HeartHandshake size={28} style={{ color: 'var(--hadrons-blue-primary)', marginBottom: '6px' }} />
                <h4 style={{ margin: 0, color: 'var(--hadrons-navy-deep)', fontWeight: 800, fontSize: '1.05rem' }}>LONG-TERM RELATIONSHIPS</h4>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: '1.8', margin: 0, background: '#F8FAFC', padding: '20px 24px', borderRadius: '12px', borderLeft: '4px solid var(--hadrons-blue-primary)' }}>
              Our objective is to build Hadrons Electricals into a trusted Indian manufacturing partner for electrical, electronic, EV, connectivity, and precision moulded products, serving customers in India and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
           7. Connect CTA
           ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0A1E4A, #0040A8)', borderRadius: '24px', padding: '48px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', boxShadow: '0 12px 36px rgba(10,30,74,0.15)' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px 0', color: '#FFF' }}>PARTNER WITH HADRONS LEADERSHIP</h2>
              <p style={{ margin: 0, color: '#B0C4DE', fontSize: '1rem', maxWidth: '600px' }}>
                Looking for strategic OEM alliances, joint venture manufacturing, or enterprise-scale electrical supply contracts? Connect directly with our management team.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: '#00D2FF', color: '#0A1E4A', fontWeight: 700, padding: '14px 28px', border: 'none' }}>
                <span>GET IN TOUCH</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
