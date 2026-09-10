import React from 'react';

export default function TermsPage() {
  return (
    <div className="terms-page">
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, #0A1B3B 0%, #0E2954 100%)',
        padding: '80px 0 60px 0',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Terms of Service</h1>
          <p style={{ color: '#9BBEE6', marginTop: '8px' }}>Hadrons Electricals Corporate Terms &amp; Product Conditions</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '850px', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '24px' }}>
            By accessing this website, placing wholesale purchase orders, or requesting OEM product manufacturing from Hadrons Electricals Pvt. Ltd., you agree to comply with these terms of service and relevant Indian laws.
          </p>

          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>2. Technical Specifications &amp; Tolerances</h2>
          <p style={{ marginBottom: '24px' }}>
            All electrical wire gauges, conductor resistances, and insulation thicknesses adhere to Bureau of Indian Standards IS 694 and IS 1293 tolerances. Detailed technical datasheets are available upon request.
          </p>

          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>3. Intellectual Property</h2>
          <p style={{ marginBottom: '24px' }}>
            Trademarks, brand logos, product photography, and technical literature on this website are the exclusive intellectual property of Hadrons Electricals Pvt. Ltd.
          </p>
        </div>
      </section>
    </div>
  );
}
