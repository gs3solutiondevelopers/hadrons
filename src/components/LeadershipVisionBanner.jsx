import React from 'react';
import { Building2, Home, Factory, Server, Users } from 'lucide-react';

const ECOSYSTEM_SECTORS = [
  {
    id: 'offices',
    title: 'OFFICES',
    desc: 'Powering modern workspaces with smart and dependable electrical connections.',
    icon: Building2,
    align: 'left',
    pos: { x: 30, y: 18 },
    linePath: 'M 54,50 C 46,36 38,24 30,18'
  },
  {
    id: 'homes',
    title: 'HOMES',
    desc: 'Delivering safe, reliable and efficient electrical solutions for everyday living.',
    icon: Home,
    align: 'right',
    pos: { x: 70, y: 18 },
    linePath: 'M 54,50 C 60,34 65,24 70,18'
  },
  {
    id: 'industries',
    title: 'INDUSTRIES',
    desc: 'Empowering industries with robust solutions that drive performance and productivity.',
    icon: Factory,
    align: 'left',
    pos: { x: 26, y: 50 },
    linePath: 'M 54,50 L 26,50'
  },
  {
    id: 'datacenters',
    title: 'DATA CENTERS',
    desc: 'Enabling uninterrupted connectivity for critical data and digital infrastructure.',
    icon: Server,
    align: 'left',
    pos: { x: 30, y: 80 },
    linePath: 'M 54,50 C 46,64 38,74 30,80'
  },
  {
    id: 'communities',
    title: 'COMMUNITIES',
    desc: 'Building stronger communities through reliable electrical connections and support.',
    icon: Users,
    align: 'right',
    pos: { x: 70, y: 78 },
    linePath: 'M 54,50 C 60,64 65,74 70,78'
  }
];

export default function LeadershipVisionBanner() {
  return (
    <section className="leadership-vision-banner-section" aria-label="Leadership Vision & Ecosystem">
      <div className="container">
        <div className="leadership-vision-card">
          
          {/* =========================================================================
               Left Column: Leadership Typography & Narrative
               ========================================================================= */}
          <div className="vision-narrative-col">
            <h2 className="vision-headline">LEADERSHIP</h2>
            <div className="vision-accent-bar" aria-hidden="true" />
            
            <div className="vision-tagline-wrap">
              <span className="vision-tagline-line">Experience. Vision. Commitment.</span>
              <span className="vision-tagline-line">Building a better tomorrow.</span>
            </div>

            <p className="vision-description">
              At Hadrons Electricals, our leadership drives our purpose, shapes our journey and inspires our team to build a better tomorrow.
            </p>
          </div>

          {/* =========================================================================
               Right Column: Connected Ecosystem Map (Unified 100% Synchronized Grid)
               ========================================================================= */}
          <div className="vision-network-col">
            
            {/* SVG Connecting Lines & Ambient Particle Waves */}
            <svg 
              className="vision-network-svg" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#1D68D8" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="centerGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Ambient Digital Mesh Waves in Background */}
              <g className="network-bg-mesh" opacity="0.45">
                <path d="M 0,45 Q 30,25 60,45 T 100,45" fill="none" stroke="#7DD3FC" strokeWidth="0.9" vectorEffect="non-scaling-stroke" strokeDasharray="3,6" />
                <path d="M 0,60 Q 35,80 65,58 T 100,68" fill="none" stroke="#93C5FD" strokeWidth="0.9" vectorEffect="non-scaling-stroke" strokeDasharray="4,8" />
                <path d="M 0,28 Q 28,12 58,28 T 100,25" fill="none" stroke="#BAE6FD" strokeWidth="0.9" vectorEffect="non-scaling-stroke" strokeDasharray="2,6" />
                <path d="M 0,78 Q 38,92 68,72 T 100,80" fill="none" stroke="#7DD3FC" strokeWidth="0.9" vectorEffect="non-scaling-stroke" strokeDasharray="3,7" />
              </g>

              {/* Connecting Energy Splines to each of the 5 nodes */}
              {ECOSYSTEM_SECTORS.map((s) => (
                <g key={s.id} className="network-connection-group">
                  {/* Outer soft luminous cyan glow */}
                  <path 
                    d={s.linePath} 
                    fill="none" 
                    stroke="#38BDF8" 
                    strokeWidth="6" 
                    vectorEffect="non-scaling-stroke"
                    strokeOpacity="0.45" 
                    strokeLinecap="round"
                  />
                  {/* Core electric cyan signal line */}
                  <path 
                    d={s.linePath} 
                    fill="none" 
                    stroke="url(#cyanLineGrad)" 
                    strokeWidth="2.5" 
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                  />
                </g>
              ))}
            </svg>

            {/* ===================================================================
                 Central Hadrons Core Hub (True circular CSS geometry)
                 =================================================================== */}
            <div className="ecosystem-center-hub" title="Hadrons Electricals Central Ecosystem">
              <div className="center-hub-outer-halo" />
              <div className="center-hub-pulse-ring" />
              <div className="center-hub-glow-ring" />
              <div className="center-hub-badge">
                <img 
                  src="/assets/images/hadrons_official_logo.webp" 
                  alt="Hadrons Electricals" 
                  className="center-hub-logo" 
                />
              </div>
            </div>

            {/* ===================================================================
                 5 Satellite Sector Nodes (Anchored directly to line endpoints)
                 =================================================================== */}
            <div className="ecosystem-nodes-layer">
              {ECOSYSTEM_SECTORS.map((sector) => {
                const IconComponent = sector.icon;
                return (
                  <div 
                    key={sector.id} 
                    className={`ecosystem-node-item node-${sector.id} node-align-${sector.align}`}
                    style={{ left: `${sector.pos.x}%`, top: `${sector.pos.y}%` }}
                  >
                    <div className="node-icon-badge" aria-hidden="true">
                      <IconComponent size={20} className="node-lucide-icon" />
                    </div>
                    <div className={`node-text-wrap text-${sector.align}`}>
                      <h4 className="node-title">{sector.title}</h4>
                      <p className="node-desc">{sector.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===================================================================
                 Mobile & Tablet Fallback List (Clean Card Grid for screens < 992px)
                 =================================================================== */}
            <div className="ecosystem-mobile-grid">
              <div className="mobile-center-hero">
                <div className="mobile-hub-badge">
                  <img 
                    src="/assets/images/hadrons_official_logo.webp" 
                    alt="Hadrons Electricals" 
                    className="mobile-hub-logo" 
                  />
                </div>
                <span className="mobile-hub-caption">POWERING KEY SECTORS</span>
              </div>

              <div className="mobile-sectors-list">
                {ECOSYSTEM_SECTORS.map((sector) => {
                  const IconComponent = sector.icon;
                  return (
                    <div key={sector.id} className="mobile-sector-card">
                      <div className="mobile-sector-icon-wrap">
                        <IconComponent size={20} />
                      </div>
                      <div className="mobile-sector-info">
                        <h4 className="mobile-sector-title">{sector.title}</h4>
                        <p className="mobile-sector-desc">{sector.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
