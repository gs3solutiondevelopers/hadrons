import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, #0A1B3B 0%, #0E2954 100%)',
        padding: '80px 0 60px 0',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Privacy Policy</h1>
          <p style={{ color: '#9BBEE6', marginTop: '8px' }}>Hadrons Electricals Pvt. Ltd. Data Privacy &amp; Protection Terms</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '850px', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '24px' }}>
            Hadrons Electricals Pvt. Ltd. collects information provided directly by clients and corporate partners when requesting product datasheets, quotations, OEM technical specifications, or dealership registration.
          </p>

          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>2. Use of Information</h2>
          <p style={{ marginBottom: '24px' }}>
            We utilize contact details strictly to communicate commercial pricing, technical datasheets, order dispatch tracking, and customer service updates. We do not sell or rent user data to third-party marketing networks.
          </p>

          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>3. Data Protection &amp; Security</h2>
          <p style={{ marginBottom: '24px' }}>
            Industry-standard administrative, physical, and technical safeguards are maintained to protect confidential OEM drawings, custom wiring specifications, and corporate contact records against unauthorized access.
          </p>

          <h2 style={{ color: 'var(--hadrons-navy-deep)', marginBottom: '16px' }}>4. Contact Compliance Officer</h2>
          <p>
            For data privacy inquiries, email us at <strong>gaurav.gautam@hadronpower.com</strong> or call <strong>+91 8826722400</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
