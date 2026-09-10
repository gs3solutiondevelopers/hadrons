import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Cpu, 
  BarChart2, 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  Settings, 
  Factory, 
  Zap, 
  Smile, 
  Globe 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="about-page">
      
      {/* =========================================================================
           2. About Us Hero Section (Split Layout with Factory Building)
           ========================================================================= */}
      <section className="about-hero-section">
        <div className="about-hero-grid">
          
          {/* Left Blue Content Box */}
          <div className="about-hero-content">
            <div className="about-hero-inner">
              <h1 className="about-hero-title">ABOUT US</h1>
              <h2 className="about-hero-subtitle">
                Powering Connections.<br />
                Building a Better Tomorrow.
              </h2>
              <p className="about-hero-text">
                Hadrons Electricals Private Limited was established in <strong>2014</strong> with a vision to create a professionally managed Indian manufacturing company focused on quality, innovation, engineering excellence, and long-term customer relationships.
              </p>
            </div>
          </div>

          {/* Right Plant Photo */}
          <div className="about-hero-image-wrap">
            <img 
              src="/assets/images/about/hadrons_factory_building.webp" 
              alt="Hadrons Electricals Corporate Headquarters and Plant" 
              className="about-hero-plant-img"
              onError={(e) => { e.target.src = '/assets/images/about/hadrons_factory_building.webp'; }}
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
           3. Company Evolution Points & A DIVERSIFIED PRODUCT PORTFOLIO Grid
           ========================================================================= */}
      <section className="about-portfolio-section">
        <div className="container">
          <div className="about-portfolio-grid">
            
            {/* Left Side: 3 Key Overview Points */}
            <div className="about-overview-points">
              
              {/* Point 1 */}
              <div className="overview-point-item">
                <div className="overview-icon-wrap">
                  <Building2 size={24} />
                </div>
                <div className="overview-text">
                  <p>
                    Over the years, Hadrons Electricals has evolved into a diversified manufacturing company serving multiple industries. Our product portfolio now extends across electrical wires and cables, networking and data cables, chargers, EV charging solutions, extension boards, and precision plastic moulded components for AC and air-cooler applications.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="overview-point-item">
                <div className="overview-icon-wrap">
                  <Cpu size={24} />
                </div>
                <div className="overview-text">
                  <p>
                    The company combines the experience of its leadership with modern manufacturing capabilities and a strong focus on product development, quality, customization, and customer service.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="overview-point-item">
                <div className="overview-icon-wrap">
                  <BarChart2 size={24} />
                </div>
                <div className="overview-text">
                  <h4 className="overview-today-title">TODAY</h4>
                  <p>
                    Hadrons Electricals continues to build a diversified product portfolio and manufacturing platform with a focus on quality, innovation, customization, and scalable production.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: A DIVERSIFIED PRODUCT PORTFOLIO Card */}
            <div className="about-portfolio-card">
              <h3 className="portfolio-card-title">A DIVERSIFIED PRODUCT PORTFOLIO</h3>
              
              <div className="portfolio-items-grid">
                
                {/* Card 1 */}
                <Link to="/products?filter=wires-cables" className="portfolio-mini-card">
                  <h5 className="mini-card-title">ELECTRICAL<br />WIRES &amp; CABLES</h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_wires.webp" alt="Electrical Wires and Cables" onError={(e) => { e.target.src = '/assets/images/products/prod_wires.webp'; }} />
                  </div>
                </Link>

                {/* Card 2 */}
                <Link to="/products?filter=power-cords" className="portfolio-mini-card">
                  <h5 className="mini-card-title">NETWORKING &amp;<br />DATA CABLES</h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_networking.webp" alt="Networking and Data Cables" onError={(e) => { e.target.src = '/assets/images/products/prod_usb.webp'; }} />
                  </div>
                </Link>

                {/* Card 3 */}
                <Link to="/products?filter=power-cords" className="portfolio-mini-card">
                  <h5 className="mini-card-title">CHARGERS</h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_chargers.webp" alt="Chargers and Power Adapters" onError={(e) => { e.target.src = '/assets/images/products/prod_laptop.webp'; }} />
                  </div>
                </Link>

                {/* Card 4 */}
                <Link to="/products?filter=ev-chargers" className="portfolio-mini-card">
                  <h5 className="mini-card-title">EV CHARGING<br />SOLUTIONS</h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_ev.webp" alt="EV Charging Solutions" onError={(e) => { e.target.src = '/assets/images/products/prod_ev_2w.webp'; }} />
                  </div>
                </Link>

                {/* Card 5 */}
                <Link to="/products?filter=extension-boards" className="portfolio-mini-card">
                  <h5 className="mini-card-title">EXTENSION<br />BOARDS</h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_extension.webp" alt="Extension Boards" onError={(e) => { e.target.src = '/assets/images/products/prod_extension.webp'; }} />
                  </div>
                </Link>

                {/* Card 6 */}
                <Link to="/products?filter=ac-components" className="portfolio-mini-card">
                  <h5 className="mini-card-title">PRECISION PLASTIC<br />MOULDED COMPONENTS<br /><span>(AC &amp; AIR-COOLER)</span></h5>
                  <div className="mini-card-img-wrap">
                    <img src="/assets/images/about/portfolio_moulding.webp" alt="Precision Plastic Moulded Components" onError={(e) => { e.target.src = '/assets/images/products/prod_ac_grill.webp'; }} />
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           5. OUR PHILOSOPHY Section
           ========================================================================= */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="philosophy-card-wrap">
            
            {/* Left Image with Hologram Hands */}
            <div className="philosophy-image-wrap">
              <img 
                src="/assets/images/about/philosophy_hands.webp" 
                alt="Hadrons Electricals Philosophy and Engineering Values" 
                className="philosophy-hands-img"
                onError={(e) => { e.target.src = '/assets/images/about/philosophy_hands.webp'; }}
              />
            </div>

            {/* Right Philosophy Content */}
            <div className="philosophy-content">
              <h3 className="philosophy-title">OUR PHILOSOPHY</h3>
              
              <p className="philosophy-lead">
                At Hadrons Electricals, we believe that manufacturing is more than producing a product—it is about creating reliability that customers can depend on.
              </p>
              
              <p className="philosophy-sub">
                Under the leadership of <strong>Dr. Mahinder Gautam</strong>, the company continues to focus on three fundamental principles:
              </p>

              {/* 3 Principles Badges */}
              <div className="philosophy-badges-row">
                <div className="phil-badge">
                  <div className="phil-icon-circle"><ShieldCheck size={24} /></div>
                  <span>QUALITY</span>
                </div>

                <div className="phil-badge">
                  <div className="phil-icon-circle"><Lightbulb size={24} /></div>
                  <span>INNOVATION</span>
                </div>

                <div className="phil-badge">
                  <div className="phil-icon-circle"><Handshake size={24} /></div>
                  <span>LONG-TERM<br />RELATIONSHIPS</span>
                </div>
              </div>

              <p className="philosophy-footer-text">
                Our objective is to build Hadrons Electricals into a trusted Indian manufacturing partner for electrical, electronic, EV, connectivity, and precision moulded products, serving customers in India and international markets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           6. Bottom Trust / Quality Ribbon (6 Badges)
           ========================================================================= */}
      <section className="about-ribbon-section">
        <div className="container">
          <div className="ribbon-badges-grid">
            
            <div className="ribbon-item">
              <ShieldCheck className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>QUALITY</strong>
                <span>YOU CAN TRUST</span>
              </div>
            </div>

            <div className="ribbon-item">
              <Settings className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>ENGINEERING</strong>
                <span>EXCELLENCE</span>
              </div>
            </div>

            <div className="ribbon-item">
              <Factory className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>ADVANCED</strong>
                <span>MANUFACTURING</span>
              </div>
            </div>

            <div className="ribbon-item">
              <Zap className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>INNOVATION</strong>
                <span>DRIVEN</span>
              </div>
            </div>

            <div className="ribbon-item">
              <Smile className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>CUSTOMER</strong>
                <span>FOCUSED</span>
              </div>
            </div>

            <div className="ribbon-item">
              <Globe className="ribbon-icon" size={28} />
              <div className="ribbon-text">
                <strong>GLOBAL</strong>
                <span>STANDARDS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
