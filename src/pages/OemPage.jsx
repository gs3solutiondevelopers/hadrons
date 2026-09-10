import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Sliders, 
  Box, 
  Cable, 
  Zap, 
  Cpu, 
  Check, 
  GitBranch, 
  ArrowRight 
} from 'lucide-react';

export default function OemPage() {
  return (
    <div className="oem-page">
      
      {/* =========================================================================
           2. OEM Hero Banner
           ========================================================================= */}
      <section className="page-hero-section">
        <div className="container">
          <div className="category-breadcrumb-bar">
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link> <span>&gt;</span>
              <span className="trail-current">OEM &amp; Custom Engineering</span>
            </div>
          </div>

          <div className="page-hero-grid" style={{ alignItems: 'center' }}>
            <div className="page-hero-content">
              <div className="section-tag"><Layers size={16} /> Contract &amp; OEM Manufacturing</div>
              <h1 className="page-hero-title">CUSTOM ENGINEERING &amp; <span>MOULDING SOLUTIONS</span></h1>
              <p className="page-hero-lead">
                End-to-end contract design, tool fabrication, high-tonnage polymer injection moulding, and electrical harness assemblies built to strict client blueprints.
              </p>
              <p className="page-hero-desc">
                Trusted by India’s leading air conditioning, appliance, automotive, EV, and electrical appliance OEMs for reliable volume delivery, strict NDAs, and exceptional dimensional accuracy.
              </p>
            </div>

            <div className="page-hero-img-wrap">
              <img 
                src="/assets/images/about/hadrons_factory_building.webp" 
                alt="Hadrons OEM Manufacturing Facility" 
                className="page-hero-img"
                onError={(e) => { e.target.src = '/assets/images/about/hadrons_factory_building.webp'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. OEM Core Capabilities
           ========================================================================= */}
      <section className="quality-section" style={{ padding: '70px 0 50px 0' }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag"><Sliders size={16} /> Engineering Matrix</div>
            <h2 className="section-heading">OUR OEM <span>CAPABILITIES</span></h2>
            <p className="section-sub">Comprehensive manufacturing infrastructure designed to handle custom development from rapid prototyping to million-unit mass production.</p>
          </div>

          <div className="oem-capability-grid">
            
            {/* Card 1 */}
            <div className="oem-card">
              <div className="oem-icon-circle"><Box size={24} /></div>
              <h4 className="oem-card-title">Injection Moulding</h4>
              <p className="oem-card-desc">State-of-the-art automatic injection moulding machines with capacity for high-tonnage cooler bodies, AC outdoor grills, chassis, and base pans.</p>
              <div className="pillar-badge-list">
                <div className="pillar-badge-item"><Check size={14} /> 50T to 1200T Clamp Force</div>
                <div className="pillar-badge-item"><Check size={14} /> ABS, PC, Nylon &amp; PP Polymers</div>
                <div className="pillar-badge-item"><Check size={14} /> ±0.02mm Dimensional Accuracy</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="oem-card">
              <div className="oem-icon-circle"><Cable size={24} /></div>
              <h4 className="oem-card-title">Custom Wiring Harnesses</h4>
              <p className="oem-card-desc">Fully automated cut-strip-crimp lines for HVAC, appliance, automotive, and earth-mover wiring looms with 100% circuit continuity testing.</p>
              <div className="pillar-badge-list">
                <div className="pillar-badge-item"><Check size={14} /> Automated Crimp Pull Testing</div>
                <div className="pillar-badge-item"><Check size={14} /> Heat-Shrink &amp; Braided Sleeving</div>
                <div className="pillar-badge-item"><Check size={14} /> Multi-Connector Pin Mappings</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="oem-card">
              <div className="oem-icon-circle"><Zap size={24} /></div>
              <h4 className="oem-card-title">Moulded Cords &amp; Plugs</h4>
              <p className="oem-card-desc">Solid-molded 6A, 16A, IEC C13/C14/C19 power cords and custom male-female connectors with heavy-duty integrated strain reliefs.</p>
              <div className="pillar-badge-list">
                <div className="pillar-badge-item"><Check size={14} /> Solid Brass Terminals</div>
                <div className="pillar-badge-item"><Check size={14} /> IS: 1293 &amp; BIS Certified</div>
                <div className="pillar-badge-item"><Check size={14} /> 10kV Spark Flash Tested</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="oem-card">
              <div className="oem-icon-circle"><Cpu size={24} /></div>
              <h4 className="oem-card-title">Tool Design &amp; CNC Milling</h4>
              <p className="oem-card-desc">In-house CAD/CAM tooling facility delivering rapid prototyping, custom die fabrication, and multi-cavity hardened steel production moulds.</p>
              <div className="pillar-badge-list">
                <div className="pillar-badge-item"><Check size={14} /> 3D CAD/CAM Rapid Prototyping</div>
                <div className="pillar-badge-item"><Check size={14} /> Multi-Cavity Steel Tooling</div>
                <div className="pillar-badge-item"><Check size={14} /> Strict Confidentiality &amp; NDAs</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           4. OEM 5-Step Production Workflow
           ========================================================================= */}
      <section className="oem-workflow-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag light"><GitBranch size={16} /> Streamlined Execution</div>
            <h2 className="section-heading" style={{ color: '#FFFFFF' }}>5-STEP <span>OEM WORKFLOW</span></h2>
            <p className="section-sub" style={{ color: '#CBDDF5' }}>A predictable, transparent engineering process from initial CAD blueprint to mass-volume factory dispatch.</p>
          </div>

          <div className="oem-workflow-grid">
            <div className="oem-step-card">
              <div className="oem-step-num">01</div>
              <h4 className="oem-step-title">Blueprint &amp; CAD</h4>
              <p className="oem-step-desc">Receiving 2D/3D specifications, electrical loads, pinouts, and polymer grade requirements.</p>
            </div>

            <div className="oem-step-card">
              <div className="oem-step-num">02</div>
              <h4 className="oem-step-title">Tooling &amp; Samples</h4>
              <p className="oem-step-desc">Precision CNC die fabrication, rapid sample prototyping, and client engineering approval.</p>
            </div>

            <div className="oem-step-card">
              <div className="oem-step-num">03</div>
              <h4 className="oem-step-title">Mass Production</h4>
              <p className="oem-step-desc">High-tonnage automatic injection moulding, wire extrusion, and automated crimping lines.</p>
            </div>

            <div className="oem-step-card">
              <div className="oem-step-num">04</div>
              <h4 className="oem-step-title">100% Validation</h4>
              <p className="oem-step-desc">Spark testing, optical inspection, continuity checks, and batch compliance documentation.</p>
            </div>

            <div className="oem-step-card">
              <div className="oem-step-num">05</div>
              <h4 className="oem-step-title">Pan-India Dispatch</h4>
              <p className="oem-step-desc">Custom private-label packaging and scheduled just-in-time logistics to your assembly plants.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link to="/contact" className="btn btn-secondary">
              <span>START AN OEM PROJECT</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
