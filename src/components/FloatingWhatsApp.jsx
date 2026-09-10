import React from 'react';

export default function FloatingWhatsApp() {
  const phone = "918826722400";
  const defaultMsg = encodeURIComponent("Hello Hadrons Electricals, I am visiting your official website and would like to make an inquiry.");
  const url = `https://wa.me/${phone}?text=${defaultMsg}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-floating-btn" 
      aria-label="Chat with Hadrons Electricals on WhatsApp" 
      title="Chat with us on WhatsApp (+91 8826722400)"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0, 0, 0, 0.25)',
        zIndex: 99999999,
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        width="34" 
        height="34" 
        fill="#FFFFFF"
        style={{ display: 'block', margin: 'auto', pointerEvents: 'none' }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461C6.73 21.843 2.157 17.27 2.157 11.956c0-5.313 4.573-9.886 9.894-9.886 5.32 0 9.893 4.573 9.893 9.886 0 5.314-4.573 9.887-9.893 9.887m0-21.304C5.405.539 0 5.944 0 12.445c0 2.296.657 4.437 1.79 6.257L.341 23.355l4.823-1.401c1.748 1.03 3.784 1.621 5.95 1.621 6.501 0 11.906-5.405 11.906-11.906 0-6.501-5.405-11.906-11.906-11.906"/>
      </svg>
    </a>
  );
}
