import React from 'react';
import { ShieldCheck, X, MessageSquare } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const phone = "918826722400";
    const rawTitle = product.title || "Hadrons Electrical Products";
    const message = `Hello Hadrons Electricals, I am interested in placing an inquiry for: ${rawTitle}.\n\nCategory: ${product.categoryLabel || 'Electrical Components'}\nSpecifications: ${product.specs ? product.specs.join(', ') : 'Standard Specs'}\n\nPlease share technical datasheets, MOQ, and commercial pricing.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            background: 'var(--hadrons-blue-ice)',
            color: 'var(--hadrons-blue-royal)',
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '1.45rem', color: 'var(--hadrons-navy-deep)', fontWeight: 700 }}>
            {product.title}
          </h3>
        </div>

        <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
          {product.description}
        </p>

        {product.specs && product.specs.length > 0 && (
          <div style={{
            background: 'var(--hadrons-bg-light)',
            padding: '16px',
            borderRadius: '10px',
            marginBottom: '24px',
            border: '1px solid var(--border-blue)'
          }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--hadrons-navy-deep)', marginBottom: '10px', fontWeight: 700 }}>
              Technical Specifications:
            </h4>
            <ul style={{ fontSize: '0.88rem', color: 'var(--text-muted)', listStyle: 'disc', paddingLeft: '20px', lineHeight: 1.7 }}>
              {product.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="btn btn-primary" 
            onClick={handleWhatsAppInquiry} 
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <MessageSquare size={18} />
            <span>INQUIRE ON WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
