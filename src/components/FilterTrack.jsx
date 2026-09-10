import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FilterTrack({ categories, activeCategory, onCategoryChange }) {
  const trackRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (distance) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="products-filter-wrapper">
      <button 
        type="button"
        className="filter-scroll-arrow left" 
        onClick={() => handleScroll(-240)}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <div 
        className="products-filter" 
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <button 
        type="button"
        className="filter-scroll-arrow right" 
        onClick={() => handleScroll(240)}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
