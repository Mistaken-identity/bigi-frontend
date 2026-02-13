import React from 'react';
import './ValentineBanner.css';

interface ValentineBannerProps {
    onNavigate?: (view: string, data?: any) => void;
}

const ValentineBanner: React.FC<ValentineBannerProps> = ({ onNavigate }) => {
  const handleShopNow = () => {
    if (onNavigate) {
      onNavigate('valentineCollection');
    } else {
      // Fallback - navigate via window location
      window.location.hash = 'valentineCollection';
    }
  };

  return (
    <section className="valentine-banner">
      <div className="hearts-background">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="floating-heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 30}px`
          }}>
            ❤️
          </span>
        ))}
      </div>
      
      <div className="banner-content">
        <h1 className="valentine-title">
          💝 Gift Big with Bigi 💝
        </h1>
        <p className="valentine-subtitle">
          Celebrate Valentine's Day with Special Offers
        </p>
        <p className="valentine-discount">
          Up to <span className="discount-number">30%</span> OFF
        </p>
        <button onClick={handleShopNow} className="shop-now-btn">
          Shop Valentine's Collection
        </button>
      </div>
    </section>
  );
};

export default ValentineBanner;
