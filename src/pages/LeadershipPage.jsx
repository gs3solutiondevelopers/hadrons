import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Zap, 
  HeartHandshake, 
  CheckSquare, 
  Sparkles, 
  Compass, 
  Globe, 
  Calendar, 
  Layers,
  ChevronRight
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
      badge: '01',
      stage: 'Company Establishment',
      title: 'Foundation & Vision',
      desc: 'Established in 2014 under Dr. Mahinder Gautam with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and customer relationships.'
    },
    {
      badge: '02',
      stage: 'Growth & Diversification',
      title: 'Product Line Expansion',
      desc: 'The company expanded its capabilities into electrical wires and cables, networking products, chargers, extension boards, and other electrical solutions.'
    },
    {
      badge: '03',
      stage: 'Engineering Components',
      title: 'OEM Component Tooling',
      desc: 'Hadrons developed specialized capabilities in precision injection moulding for AC, air-cooler, appliance, and custom OEM applications.'
    },
    {
      badge: '04',
      stage: 'EV & New-Age Products',
      title: 'Electric Vehicle Ecosystem',
      desc: 'The company expanded into EV charging products and heavy-duty battery connection cables, supporting the growing electric mobility ecosystem.'
    },
    {
      badge: '05',
      stage: 'Today & Beyond',
      title: 'Global Manufacturing Platform',
      desc: 'Hadrons Electricals continues to build a diversified product portfolio and manufacturing platform with a focus on quality, innovation, customization, and scalable production.'
    }
  ];

  return (
    <div className="leadership-page">
      
      {/* =========================================================================
           1. Top Hero Section
           ========================================================================= */}
      <section className="leadership-hero">
        <div className="container">
          <div className="category-breadcrumb-bar">
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link> <span>&gt;</span>
              <Link to="/about">About Us</Link> <span>&gt;</span>
              <span className="trail-current">Company Background &amp; Leadership</span>
            </div>
          </div>

          <div className="leadership-hero-content">
            <div className="leadership-hero-tag">
              <Users size={16} /> HADRONS ELECTRICALS PRIVATE LIMITED
            </div>
            <h1 className="leadership-hero-title">
              COMPANY BACKGROUND &amp; <span>LEADERSHIP</span>
            </h1>
            <p className="leadership-hero-sub">
              Established in <strong>2014</strong> with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and long-term customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. Company Background Section (Split Grid with Metrics Cards)
           ========================================================================= */}
      <section className="leadership-section background-section">
        <div className="container">
          <div className="background-grid">
            
            {/* Left Content Column */}
            <div className="background-text-col">
              <div className="section-tag-pill">
                <Building2 size={16} /> Company Overview
              </div>
              <h2 className="leadership-heading">
                ENGINEERING EXCELLENCE <span>SINCE 2014</span>
              </h2>
              <p className="lead-paragraph">
                Hadrons Electricals Private Limited was established in 2014 with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and long-term customer relationships.
              </p>
              <p className="body-paragraph">
                The company was founded under the leadership of <strong>Dr. Mahinder Gautam, Founder &amp; Chairman</strong>, who brings more than 40 years of experience in the electrical, manufacturing, engineering, product development, and business sectors.
              </p>
              <p className="body-paragraph">
                Over the years, Hadrons Electricals has evolved into a diversified manufacturing company serving multiple industries. Our product portfolio now extends across electrical wires and cables, networking and data cables, chargers, EV charging solutions, extension boards, and precision plastic moulded components for AC and air-cooler applications. The company combines the experience of its leadership with modern manufacturing capabilities and a strong focus on product development, quality, customization, and customer service.
              </p>
            </div>

            {/* Right Metrics & Fast Facts Column */}
            <div className="background-metrics-col">
              <div className="metric-fact-card">
                <div className="fact-icon-wrap"><Calendar size={24} /></div>
                <div className="fact-info">
                  <span className="fact-number">2014</span>
                  <span className="fact-label">Year Established</span>
                </div>
              </div>

              <div className="metric-fact-card">
                <div className="fact-icon-wrap"><Award size={24} /></div>
                <div className="fact-info">
                  <span className="fact-number">40+ Yrs</span>
                  <span className="fact-label">Founding Experience</span>
                </div>
              </div>

              <div className="metric-fact-card">
                <div className="fact-icon-wrap"><Globe size={24} /></div>
                <div className="fact-info">
                  <span className="fact-number">Pan-India</span>
                  <span className="fact-label">&amp; International Supply</span>
                </div>
              </div>

              <div className="metric-fact-card">
                <div className="fact-icon-wrap"><Layers size={24} /></div>
                <div className="fact-info">
                  <span className="fact-number">12+</span>
                  <span className="fact-label">Product Categories</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           3. Executive Leadership Profiles (Dr. Mahinder Gautam & Gaurav Gautam)
           ========================================================================= */}
      <section className="leadership-section profiles-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag-pill"><Users size={16} /> Board of Directors</div>
            <h2 className="section-heading">EXECUTIVE <span>LEADERSHIP</span></h2>
            <p className="section-sub">Guided by founding industrial expertise and next-generation engineering vision.</p>
          </div>

          <div className="leader-cards-list">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card">
                
                {/* Avatar Column */}
                <div className="leader-avatar-col">
                  <div className="avatar-ring">
                    <span className="avatar-initials">{leader.initials}</span>
                  </div>
                  <h4 className="avatar-name">{leader.name}</h4>
                  <p className="avatar-title">{leader.title}</p>
                  <span className="avatar-company">Hadrons Electricals Pvt. Ltd.</span>
                </div>

                {/* Details Column */}
                <div className="leader-details-col">
                  <span className="leader-badge-pill">{leader.badge}</span>
                  <h3 className="leader-name">{leader.name}</h3>
                  <h4 className="leader-role">{leader.title}</h4>
                  
                  <div className="leader-exp-row">
                    <Briefcase size={16} />
                    <span>{leader.experience}</span>
                  </div>

                  <p className="leader-bio-text">{leader.bio}</p>
                  
                  <h5 className="leader-focus-heading">Strategic Focus &amp; Core Principles:</h5>
                  <div className="leader-focus-grid">
                    {leader.focus.map((f, i) => (
                      <div key={i} className="focus-item">
                        <CheckCircle2 size={16} />
                        <span>{f}</span>
                      </div>
                    ))}
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
      <section className="leadership-section synergy-section">
        <div className="container">
          
          <div className="synergy-header">
            <div className="synergy-tag">
              <Sparkles size={16} /> LEADERSHIP SYNERGY
            </div>
            <h2 className="synergy-title">
              TWO GENERATIONS. <span>ONE VISION.</span>
            </h2>
            <p className="synergy-lead">
              Experience that builds trust. Innovation that drives the future.
            </p>
            <p className="synergy-desc">
              Hadrons Electricals brings together more than four decades of industry experience through its Founder &amp; Chairman, <strong>Dr. Mahinder Gautam</strong>, with the next generation of leadership represented by Director <strong>Gaurav Gautam</strong>. Together, the leadership team combines deep industry knowledge, manufacturing experience, customer understanding, and a forward-looking approach to technology and new product development. This combination forms the foundation of Hadrons Electricals&rsquo; journey from an established electrical manufacturer to a diversified engineering and manufacturing company.
            </p>
          </div>

          {/* 12 Product Portfolio Grid */}
          <div className="synergy-portfolio-wrap">
            <h3 className="portfolio-heading">
              TODAY, THE COMPANY OFFERS A WIDE PORTFOLIO OF PRODUCTS INCLUDING:
            </h3>
            <div className="portfolio-grid-12">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="portfolio-grid-card">
                  <div className="portfolio-check-icon">
                    <CheckSquare size={16} />
                  </div>
                  <span className="portfolio-card-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
           5. Evolutionary Milestones (Growth & Diversification Timeline)
           ========================================================================= */}
      <section className="leadership-section milestones-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag-pill"><TrendingUp size={16} /> Evolutionary Journey</div>
            <h2 className="section-heading">GROWTH &amp; <span>DIVERSIFICATION</span></h2>
            <p className="section-sub">A progressive journey of capability expansion and technological advancement.</p>
          </div>

          <div className="milestones-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="milestone-card">
                <span className="milestone-badge-num">{m.badge}</span>
                <div className="milestone-stage">{m.stage}</div>
                <h3 className="milestone-title">{m.title}</h3>
                <p className="milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           6. Our Philosophy Section
           ========================================================================= */}
      <section className="leadership-section philosophy-section">
        <div className="container">
          <div className="philosophy-box-card">
            <div className="section-tag-pill"><HeartHandshake size={16} /> Our Foundation</div>
            <h2 className="philosophy-box-title">
              OUR <span>PHILOSOPHY</span>
            </h2>
            
            <blockquote className="philosophy-quote">
              &ldquo;At Hadrons Electricals, we believe that manufacturing is more than producing a product—it is about creating reliability that customers can depend on.&rdquo;
            </blockquote>

            <p className="philosophy-subtext">
              Under the leadership of <strong>Dr. Mahinder Gautam</strong>, the company continues to focus on three fundamental principles:
            </p>

            {/* 3 Principles Badges */}
            <div className="philosophy-principles-row">
              <div className="principle-card">
                <div className="principle-icon-circle"><ShieldCheck size={26} /></div>
                <h4>QUALITY</h4>
              </div>

              <div className="principle-card">
                <div className="principle-icon-circle"><Zap size={26} /></div>
                <h4>INNOVATION</h4>
              </div>

              <div className="principle-card">
                <div className="principle-icon-circle"><HeartHandshake size={26} /></div>
                <h4>LONG-TERM RELATIONSHIPS</h4>
              </div>
            </div>

            <div className="philosophy-objective-box">
              <p>
                Our objective is to build Hadrons Electricals into a trusted Indian manufacturing partner for electrical, electronic, EV, connectivity, and precision moulded products, serving customers in India and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           7. Connect with Executive Team CTA
           ========================================================================= */}
      <section className="leadership-section cta-section">
        <div className="container">
          <div className="leadership-cta-box">
            <div className="cta-content">
              <h2>PARTNER WITH HADRONS LEADERSHIP</h2>
              <p>
                Looking for strategic OEM alliances, joint venture manufacturing, or enterprise-scale electrical supply contracts? Connect directly with our management team.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-leadership-cta">
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
