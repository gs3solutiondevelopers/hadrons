import React from 'react';
import { ShieldCheck, Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompliancePage() {
  return (
    <div className="compliance-page">
      {/* Header Banner */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, #0A1B3B 0%, #0E2954 100%)',
        padding: '80px 0 60px 0',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ color: '#00A3FF', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
            CERTIFICATIONS &amp; STANDARDS
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
            National &amp; Global Compliance
          </h1>
          <p style={{ color: '#9BBEE6', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Hadrons Electricals products strictly follow Bureau of Indian Standards (BIS IS 694 / IS 1293), ISO 9001:2015 quality frameworks, RoHS eco-grade rules, and CE safety guidelines.
          </p>
        </div>
      </section>

      {/* Compliance Certificates Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ color: 'var(--hadrons-navy-deep)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>BIS / IS 694 Certification</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Official license from the Bureau of Indian Standards covering Single Core &amp; Multicore PVC Insulated Cables up to 1100V.
              </p>
              <div style={{ fontSize: '0.88rem', color: 'var(--hadrons-blue-royal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> Standard: IS 694 : 2010
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Award size={28} />
              </div>
              <h3 style={{ color: 'var(--hadrons-navy-deep)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>ISO 9001:2015 Quality Management</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Certified Quality System covering wire drawing, PVC compounding, injection moulding, and wiring harness assembly processes.
              </p>
              <div style={{ fontSize: '0.88rem', color: 'var(--hadrons-blue-royal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> Certified Quality Auditor Verified
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: 'var(--hadrons-blue-ice)', color: 'var(--hadrons-blue-royal)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileText size={28} />
              </div>
              <h3 style={{ color: 'var(--hadrons-navy-deep)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>RoHS &amp; REACH Eco Safety</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Strict Restriction of Hazardous Substances compliance ensuring non-toxic, lead-free, and phthalate-free insulation materials.
              </p>
              <div style={{ fontSize: '0.88rem', color: 'var(--hadrons-blue-royal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> Eco-Grade Virgin Polycarbonate
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
