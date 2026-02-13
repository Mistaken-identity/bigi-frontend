import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { LOCAL_PRODUCTS } from '../data';
import { ProductCard } from './ProductCard';
import './ValentineOffers.css';

interface ValentineOffersProps {
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  wishlistedItems?: Product[];
}

const ValentineOffers: React.FC<ValentineOffersProps> = ({ 
    onAddToCart = () => {},
    onToggleWishlist = () => {},
    onProductClick = () => {},
    wishlistedItems = []
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Get Valentine's Gift Packs (5 products) from local data
  const valentineGiftPacks = useMemo(() => {
    const giftPackProducts = LOCAL_PRODUCTS['Gift Packs'] || [];
    const kidsProducts = LOCAL_PRODUCTS['For Kids'] || [];
    
    // Get the 5 Valentine's gift packs (including the new giftpack-006)
    const giftPacks = giftPackProducts.filter(p =>
      p.id === 'giftpack-001' || p.id === 'giftpack-002' || p.id === 'giftpack-003' || p.id === 'giftpack-004' || p.id === 'giftpack-006'
    );
    
    // Get the 2 giant teddy bears
    const teddyBears = kidsProducts.filter(p => 
      p.id === 'kids-011' || p.id === 'kids-012'
    );
    
    return [...giftPacks, ...teddyBears];
  }, []);

  // Get other Valentine's themed products
  const valentineProducts = useMemo(() => {
    const jewelryProducts = LOCAL_PRODUCTS['Jewelry'] || [];
    const applianceProducts = LOCAL_PRODUCTS['Home Appliances'] || [];
    
    // Combine jewelry (first 2) and home appliances (both washing machines) for Valentine's gifts
    const selectedJewelry = jewelryProducts.slice(0, 2);
    const selectedAppliances = applianceProducts.slice(0, 2);
    
    return [...selectedJewelry, ...selectedAppliances];
  }, []);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
  };

  const handleToggleWishlist = (product: Product) => {
    onToggleWishlist(product);
  };

  const handleProductClick = (product: Product) => {
    onProductClick(product);
  };

  if (loading) {
    return (
      <section className="valentine-offers">
        <div className="loading-spinner">
          <div className="heart-spinner">❤️</div>
          <p>Loading Valentine's Offers...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="valentine-offers">
      <div className="section-header">
        <h2 className="section-title">💖 Valentine's Special Collection 💖</h2>
        <p className="section-subtitle">Perfect gifts for your loved ones</p>
      </div>

      {/* Valentine's Gift Packs Section */}
      {valentineGiftPacks.length > 0 && (
        <div className="gift-packs-section" style={{ marginBottom: '3rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.75rem', background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🎁 Valentine's Gift Packs 🎁
            </h3>
            <p className="section-subtitle" style={{ fontSize: '1rem' }}>
              Curated collections for the ones you love
            </p>
          </div>
          <div className="products-grid">
            {valentineGiftPacks.map((product) => (
              <div key={product.id} className="valentine-product-card">
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 10,
                    background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    💝 Gift Pack
                  </div>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    onProductClick={handleProductClick}
                    isWishlisted={wishlistedItems.some(item => item.id === product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Valentine's Products Section */}
      {valentineProducts.length > 0 && (
        <div className="other-products-section">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.5rem' }}>
              💕 More Valentine's Specials 💕
            </h3>
          </div>
          <div className="products-grid">
            {valentineProducts.map((product) => (
              <div key={product.id} className="valentine-product-card">
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  onProductClick={handleProductClick}
                  isWishlisted={wishlistedItems.some(item => item.id === product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {valentineGiftPacks.length === 0 && valentineProducts.length === 0 && (
        <div className="no-products">
          <p>No Valentine's offers available at the moment.</p>
          <p>Check back soon! 💝</p>
        </div>
      )}
    </section>
  );
};

export default ValentineOffers;
