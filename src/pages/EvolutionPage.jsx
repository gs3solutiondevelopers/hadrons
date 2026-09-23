import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cable, 
  Cpu, 
  Smartphone, 
  Power, 
  ShieldCheck, 
  Gem, 
  Users 
} from 'lucide-react';

export default function EvolutionPage() {
  return (
    <div className="evolution-page">
      
      {/* =========================================================================
           2. Our Evolution Header & Roadmap Section
           ========================================================================= */}
      <section className="evolution-page-section">
        <div className="container">
          
          {/* Breadcrumb Bar */}
          <div className="category-breadcrumb-bar">
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link> <span>&gt;</span>
              <span className="trail-current">Our Evolution</span>
            </div>
          </div>

          {/* Top Header Block */}
          <div className="evolution-header-block">
            <h1 className="evolution-main-title">OUR EVOLUTION</h1>
            <div className="evolution-sub-slogan">A JOURNEY OF GROWTH. A VISION FOR THE FUTURE.</div>
            <p className="evolution-lead-text">
              From a small beginning to a diversified manufacturing partner, our journey is driven by innovation, quality and commitment to excellence.
            </p>
          </div>

          {/* Roadmap Container with 3D Highway SVG */}
          <div className="evolution-roadmap-wrap">

            {/* 3D Winding Highway Roadmap SVG */}
            <svg className="evolution-highway-svg" viewBox="0 0 1000 1620" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="highwayShadow" x="-20%" y="-10%" width="140%" height="120%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0066FF" floodOpacity="0.22" />
                </filter>
                
                <linearGradient id="highwayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4B95FF" />
                  <stop offset="25%" stopColor="#0066FF" />
                  <stop offset="50%" stopColor="#0052CC" />
                  <stop offset="75%" stopColor="#0B3E8C" />
                  <stop offset="100%" stopColor="#062252" />
                </linearGradient>

                <linearGradient id="curbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2D7FF9" />
                  <stop offset="50%" stopColor="#0046B3" />
                  <stop offset="100%" stopColor="#051C44" />
                </linearGradient>
              </defs>

              {/* 1. Road 3D Outer Curb & Drop Shadow */}
              <path d="M 500 20 C 500 75 500 85 500 130 C 500 210 440 210 440 260 C 440 310 500 310 500 390 C 500 470 560 470 560 520 C 560 570 500 570 500 650 C 500 730 440 730 440 780 C 440 830 500 830 500 910 C 500 990 560 990 560 1040 C 560 1090 500 1090 500 1170 C 500 1250 440 1250 440 1300 C 440 1350 500 1350 500 1430 C 500 1510 500 1540 500 1600" 
                stroke="url(#curbGrad)" strokeWidth="56" strokeLinecap="round" fill="none" filter="url(#highwayShadow)"/>

              {/* 2. Road 3D Highway Surface */}
              <path d="M 500 20 C 500 75 500 85 500 130 C 500 210 440 210 440 260 C 440 310 500 310 500 390 C 500 470 560 470 560 520 C 560 570 500 570 500 650 C 500 730 440 730 440 780 C 440 830 500 830 500 910 C 500 990 560 990 560 1040 C 560 1090 500 1090 500 1170 C 500 1250 440 1250 440 1300 C 440 1350 500 1350 500 1430 C 500 1510 500 1540 500 1600" 
                stroke="url(#highwayGrad)" strokeWidth="46" strokeLinecap="round" fill="none"/>

              {/* 3. Road Inner Ambient Light Highlight */}
              <path d="M 500 20 C 500 75 500 85 500 130 C 500 210 440 210 440 260 C 440 310 500 310 500 390 C 500 470 560 470 560 520 C 560 570 500 570 500 650 C 500 730 440 730 440 780 C 440 830 500 830 500 910 C 500 990 560 990 560 1040 C 560 1090 500 1090 500 1170 C 500 1250 440 1250 440 1300 C 440 1350 500 1350 500 1430 C 500 1510 500 1540 500 1600" 
                stroke="#FFFFFF" strokeWidth="42" strokeOpacity="0.12" strokeLinecap="round" fill="none"/>

              {/* 4. Crisp White Dashed Center Lane Divider */}
              <path d="M 500 20 C 500 75 500 85 500 130 C 500 210 440 210 440 260 C 440 310 500 310 500 390 C 500 470 560 470 560 520 C 560 570 500 570 500 650 C 500 730 440 730 440 780 C 440 830 500 830 500 910 C 500 990 560 990 560 1040 C 560 1090 500 1090 500 1170 C 500 1250 440 1250 440 1300 C 440 1350 500 1350 500 1430 C 500 1510 500 1540 500 1600" 
                stroke="#FFFFFF" strokeWidth="3" strokeDasharray="14 12" strokeLinecap="round" fill="none"/>

              {/* 5. Decorative Milestone Roadside Rocks & Green Foliage */}
              {/* Curve 1 (Left 440, 260) */}
              <g transform="translate(405, 245)">
                <ellipse cx="14" cy="18" rx="14" ry="9" fill="#94A3B8" />
                <ellipse cx="26" cy="14" rx="10" ry="7" fill="#64748B" />
                <path d="M 12 12 Q 4 2 2 0 Q 8 6 16 10 Z" fill="#22C55E" />
                <path d="M 18 10 Q 22 -2 24 -4 Q 22 4 18 10 Z" fill="#16A34A" />
              </g>

              {/* Curve 2 (Right 560, 520) */}
              <g transform="translate(565, 505)">
                <ellipse cx="18" cy="18" rx="14" ry="9" fill="#94A3B8" />
                <ellipse cx="8" cy="14" rx="10" ry="7" fill="#64748B" />
                <path d="M 14 12 Q 22 2 24 0 Q 18 6 10 10 Z" fill="#22C55E" />
                <path d="M 8 10 Q 4 -2 2 -4 Q 4 4 8 10 Z" fill="#16A34A" />
              </g>

              {/* Curve 3 (Left 440, 780) */}
              <g transform="translate(405, 765)">
                <ellipse cx="14" cy="18" rx="14" ry="9" fill="#94A3B8" />
                <ellipse cx="26" cy="14" rx="10" ry="7" fill="#64748B" />
                <path d="M 12 12 Q 4 2 2 0 Q 8 6 16 10 Z" fill="#22C55E" />
                <path d="M 18 10 Q 22 -2 24 -4 Q 22 4 18 10 Z" fill="#16A34A" />
              </g>

              {/* Curve 4 (Right 560, 1040) */}
              <g transform="translate(565, 1025)">
                <ellipse cx="18" cy="18" rx="14" ry="9" fill="#94A3B8" />
                <ellipse cx="8" cy="14" rx="10" ry="7" fill="#64748B" />
                <path d="M 14 12 Q 22 2 24 0 Q 18 6 10 10 Z" fill="#22C55E" />
                <path d="M 8 10 Q 4 -2 2 -4 Q 4 4 8 10 Z" fill="#16A34A" />
              </g>

              {/* Curve 5 (Left 440, 1300) */}
              <g transform="translate(405, 1285)">
                <ellipse cx="14" cy="18" rx="14" ry="9" fill="#94A3B8" />
                <ellipse cx="26" cy="14" rx="10" ry="7" fill="#64748B" />
                <path d="M 12 12 Q 4 2 2 0 Q 8 6 16 10 Z" fill="#22C55E" />
                <path d="M 18 10 Q 22 -2 24 -4 Q 22 4 18 10 Z" fill="#16A34A" />
              </g>
            </svg>

            {/* 2014 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-content-box">
                <div className="roadmap-tag">STARTED</div>
                <h3 className="roadmap-title">Copper Wire &amp; Cable</h3>
                <p className="roadmap-desc">Laid the foundation in electrical solutions with high quality copper wire &amp; cable.</p>
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2014</span>
                  <div className="pin-icon"><Zap size={20} /></div>
                </div>
              </div>

              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/cable-Photoroom.png" alt="Copper Wire & Cables 2014" className="roadmap-prod-img" />
              </div>
            </div>

            {/* 2016 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/evo_2016_harness.webp" alt="Wiring Harness & Battery Cable 2016" className="roadmap-prod-img" />
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2016</span>
                  <div className="pin-icon"><Cable size={20} /></div>
                </div>
              </div>

              <div className="roadmap-content-box">
                <div className="roadmap-tag">ENTERED</div>
                <h3 className="roadmap-title">Wiring Harness &amp; Battery Cable for Automotive &amp; Earth Movers Industry</h3>
                <p className="roadmap-desc">Expanded our capabilities by providing reliable wiring harness &amp; battery cables for automotive and earth movers industry.</p>
              </div>
            </div>

            {/* 2018 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-content-box">
                <div className="roadmap-tag">ENTERED</div>
                <h3 className="roadmap-title">Data Cable &amp; Power Cord</h3>
                <p className="roadmap-desc">Moved into the era of connectivity by manufacturing high performance data cables and power cords.</p>
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2018</span>
                  <div className="pin-icon"><Cpu size={20} /></div>
                </div>
              </div>

              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/power_c.png" alt="Data Cable & Power Cord 2018" className="roadmap-prod-img" />
              </div>
            </div>

            {/* 2020 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/4-Photoroom.png" alt="Mobile Charger 2020" className="roadmap-prod-img" />
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2020</span>
                  <div className="pin-icon"><Smartphone size={20} /></div>
                </div>
              </div>

              <div className="roadmap-content-box">
                <div className="roadmap-tag">STARTED</div>
                <h3 className="roadmap-title">Mobile Charger</h3>
                <p className="roadmap-desc">Ventured into consumer electronics with reliable and efficient mobile chargers.</p>
              </div>
            </div>

            {/* 2025 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-content-box">
                <div className="roadmap-tag">ENTERED</div>
                <h3 className="roadmap-title">Electrical Extension Boards</h3>
                <p className="roadmap-desc">Strengthened our presence in everyday electrical solutions with durable and safe extension boards.</p>
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2025</span>
                  <div className="pin-icon"><Power size={20} /></div>
                </div>
              </div>

              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/evo_2025_extension.webp" alt="Electrical Extension Boards 2025" className="roadmap-prod-img" />
              </div>
            </div>

            {/* 2026 Milestone */}
            <div className="roadmap-row">
              <div className="roadmap-image-card">
                <img src="/assets/images/evolution/evo_2026_ev_moulding.webp" alt="EV Charging & Large Injection Moulding Parts 2026" className="roadmap-prod-img" />
              </div>

              <div className="roadmap-node-center">
                <div className="roadmap-circle-pin">
                  <span className="pin-year">2026</span>
                  <div className="pin-icon"><Zap size={20} /></div>
                </div>
              </div>

              <div className="roadmap-content-box">
                <div className="roadmap-tag">ENTERED</div>
                <h3 className="roadmap-title">EV Charging &amp; Large Injection Moulding Parts</h3>
                <p className="roadmap-desc">Stepping into the future with EV charging solutions and large scale injection moulded components for AC, cooler &amp; other industry applications.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
           3. 4-Item Values Strip
           ========================================================================= */}
      <section className="evolution-values-strip">
        <div className="container">
          <div className="values-strip-grid">
            
            <div className="value-strip-item">
              <div className="value-strip-icon"><ShieldCheck size={28} /></div>
              <div className="value-strip-text">
                <h4>BUILT ON TRUST</h4>
                <p>Strong values. Lasting relationships.</p>
              </div>
            </div>

            <div className="value-strip-item">
              <div className="value-strip-icon"><Gem size={28} /></div>
              <div className="value-strip-text">
                <h4>DRIVEN BY QUALITY</h4>
                <p>Consistent quality in everything we do.</p>
              </div>
            </div>

            <div className="value-strip-item">
              <div className="value-strip-icon"><Zap size={28} /></div>
              <div className="value-strip-text">
                <h4>FOCUSED ON INNOVATION</h4>
                <p>Advanced solutions for a better tomorrow.</p>
              </div>
            </div>

            <div className="value-strip-item">
              <div className="value-strip-icon"><Users size={28} /></div>
              <div className="value-strip-text">
                <h4>GROWING TOGETHER</h4>
                <p>With our partners. For a better future.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
