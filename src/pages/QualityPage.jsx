import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="quality-page">
      
      {/* =========================================================================
           2. Blue Full-Width Breadcrumb Bar
           ========================================================================= */}
      <div className="quality-breadcrumb-strip">
        <div className="container">
          <div className="quality-breadcrumb-trail">
            <Link to="/">Home</Link> <span>&gt;</span>
            <span className="trail-current">Quality</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
           3. Hero Section (Split Layout: Title Copy Left + Testing Lab Right)
           ========================================================================= */}
      <section className="quality-hero-master">
        <div className="container">
          <div className="quality-hero-grid">
            
            {/* Left Text Copy */}
            <div className="quality-hero-content">
              <h1 className="quality-hero-main-title">QUALITY.</h1>
              <h2 className="quality-hero-sub-title">BUILT INTO EVERY CONNECTION.</h2>
              <p className="quality-hero-desc">
                At Hadrons Electricals, quality is not just a process, it is a culture. We are committed to delivering products that meet global standards and exceed customer expectations.
              </p>
            </div>

            {/* Right Testing Lab Image */}
            <div className="quality-hero-lab-wrap">
              <img 
                src="/assets/images/quality/quality_lab_testing.webp" 
                alt="Hadrons In-House Testing Lab" 
                className="quality-hero-lab-img"
                onError={(e) => { e.target.src = '/assets/images/quality/quality_lab_testing.webp'; }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
           4. OUR CERTIFICATIONS (5 Rounded Cards)
           ========================================================================= */}
      <section className="quality-cert-section">
        <div className="container">
          
          <div className="quality-section-divider-header">
            <span className="divider-line"></span>
            <h3 className="divider-title">OUR CERTIFICATIONS</h3>
            <span className="divider-line"></span>
          </div>

          <div className="quality-cert-cards-grid">
            
            {/* Card 1: ISO 9001:2015 */}
            <div className="quality-cert-card">
              <div className="cert-logo-wrap">
                <img src="/assets/images/quality/cert_iso_9001.webp" alt="ISO 9001:2015 Logo" className="cert-img" />
              </div>
              <h4 className="cert-code">9001:2015</h4>
              <strong className="cert-name">ISO 9001:2015</strong>
              <p className="cert-desc">Quality Management<br />System</p>
            </div>

            {/* Card 2: ISO 14001:2015 */}
            <div className="quality-cert-card">
              <div className="cert-logo-wrap">
                <img src="/assets/images/quality/cert_iso_14001.webp" alt="ISO 14001:2015 Logo" className="cert-img" />
              </div>
              <h4 className="cert-code green">14001:2015</h4>
              <strong className="cert-name">ISO 14001:2015</strong>
              <p className="cert-desc">Environmental<br />Management System</p>
            </div>

            {/* Card 3: ISO 45001:2018 */}
            <div className="quality-cert-card">
              <div className="cert-logo-wrap">
                <img src="/assets/images/quality/cert_iso_45001.webp" alt="ISO 45001:2018 Logo" className="cert-img" />
              </div>
              <h4 className="cert-code red">45001:2018</h4>
              <strong className="cert-name">ISO 45001:2018</strong>
              <p className="cert-desc">Occupational Health &amp;<br />Safety Management<br />System</p>
            </div>

            {/* Card 4: BIS Certified */}
            <div className="quality-cert-card">
              <div className="cert-logo-wrap">
                <img src="/assets/images/quality/cert_bis_isi.webp" alt="BIS Hallmark Logo" className="cert-img bis-logo" />
              </div>
              <strong className="cert-name bis-title">BIS CERTIFIED</strong>
              <div className="cert-standards-list">
                <div className="bis-standard-item">
                  <strong>IS 694:2010</strong>
                  <span>(For Electrical Accessories)</span>
                </div>
                <div className="bis-standard-item">
                  <strong>IS 1293:2005</strong>
                  <span>(For Plugs, Socket-outlets and Adaptors)</span>
                </div>
              </div>
            </div>

            {/* Card 5: In-House Lab */}
            <div className="quality-cert-card">
              <div className="cert-logo-wrap">
                <img src="/assets/images/quality/cert_lab_flask.webp" alt="In-House Lab Icon" className="cert-img flask-logo" />
              </div>
              <strong className="cert-name">IN-HOUSE LAB</strong>
              <p className="cert-desc">Advanced testing<br />facility ensuring product<br />reliability &amp; safety</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
           5. OUR QUALITY PROCESS (4-Step Connected Linear Flow)
           ========================================================================= */}
      <section className="quality-process-section">
        <div className="container">
          
          <div className="quality-section-divider-header">
            <span className="divider-line"></span>
            <h3 className="divider-title">OUR QUALITY PROCESS</h3>
            <span className="divider-line"></span>
          </div>

          <div className="quality-workflow-grid">
            
            {/* Step 1: IQC */}
            <div className="process-step-card">
              <div className="step-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                  <path d="m8.5 15.5 2.5 2.5 4.5-4.5"/>
                </svg>
              </div>
              <div className="step-body">
                <h4 className="step-code">IQC</h4>
                <span className="step-title">Incoming Quality Control</span>
                <p className="step-desc">Raw materials and components are inspected and tested as per strict quality standards.</p>
              </div>
            </div>

            <div className="process-arrow">
              <ArrowRight size={22} />
            </div>

            {/* Step 2: PQCS */}
            <div className="process-step-card">
              <div className="step-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="step-body">
                <h4 className="step-code">PQCS</h4>
                <span className="step-title">Process Quality Control</span>
                <p className="step-desc">In-process checks at every critical stage to ensure consistency and zero defects.</p>
              </div>
            </div>

            <div className="process-arrow">
              <ArrowRight size={22} />
            </div>

            {/* Step 3: FQCS */}
            <div className="process-step-card">
              <div className="step-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="step-body">
                <h4 className="step-code">FQCS</h4>
                <span className="step-title">Final Quality Control</span>
                <p className="step-desc">100% inspection and testing before packing to ensure only the best products reach you.</p>
              </div>
            </div>

            <div className="process-arrow">
              <ArrowRight size={22} />
            </div>

            {/* Step 4: DISPATCH */}
            <div className="process-step-card">
              <div className="step-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="1"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div className="step-body">
                <h4 className="step-code">DISPATCH</h4>
                <p className="step-desc" style={{ marginTop: '18px' }}>Products released only after successful quality clearance.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
