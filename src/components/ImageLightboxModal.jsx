import React, { useEffect } from 'react';
import { X, ZoomIn, MessageSquare, ArrowRight } from 'lucide-react';

export default function ImageLightboxModal({ imageSrc, imageUrl, title, onClose }) {
  const activeSrc = typeof imageSrc === 'string' ? imageSrc : (imageSrc?.src || imageUrl?.src || imageUrl);
  const activeTitle = title || imageSrc?.title || imageUrl?.title || 'Product Image';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeSrc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSrc, onClose]);

  if (!activeSrc) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hello Hadrons Electricals, I am interested in viewing more details and requesting a quote for: ${activeTitle}.`);
    window.open(`https://wa.me/918826722400?text=${message}`, '_blank');
  };

  return (
    <div 
      className="image-lightbox-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(5, 15, 38, 0.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeInModal 0.25s ease'
      }}
    >
      {/* Lightbox Container Box */}
      <div 
        className="lightbox-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '92vw',
          maxHeight: '85vh',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          overflow: 'hidden'
        }}
      >
        {/* Top Header Bar */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2ECF8', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--hadrons-navy-deep)' }}>
            <ZoomIn size={20} style={{ color: 'var(--hadrons-blue-primary)' }} />
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: 'var(--hadrons-navy-deep)' }}>
              {activeTitle}
            </h3>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            aria-label="Close image preview"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* High Res Zoomed Image */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '12px 0' }}>
          <img 
            src={activeSrc} 
            alt={activeTitle} 
            style={{
              maxWidth: '100%',
              maxHeight: '60vh',
              objectFit: 'contain',
              borderRadius: '12px',
              transition: 'transform 0.3s ease',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
            }}
          />
        </div>

        {/* Bottom CTA Bar */}
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid #E2ECF8' }}>
          <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 500 }}>
            Tap outside or click X to close preview
          </span>
          <button 
            type="button" 
            onClick={handleWhatsAppInquiry}
            className="btn btn-primary"
            style={{
              padding: '10px 22px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
              color: '#FFFFFF',
              border: 'none',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
            }}
          >
            <MessageSquare size={16} />
            <span>INQUIRE ON WHATSAPP</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
