import React, { FC, useMemo } from 'react';
import { Product, WishlistItem } from '../types';
import { LOCAL_PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeftIcon } from '../icons';
import CountdownTimer from '../components/CountdownTimer';

interface ValentineCollectionViewProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistedItems: WishlistItem[];
  onBack: () => void;
}

export const ValentineCollectionView: FC<ValentineCollectionViewProps> = ({
  onProductClick,
  onAddToCart,
  onToggleWishlist,
  wishlistedItems,
  onBack,
}) => {
  // Get Valentine's Gift Packs (5 products) from local data
  const valentineGiftPacks = useMemo(() => {
    const giftPackProducts = LOCAL_PRODUCTS['Gift Packs'] || [];
    const kidsProducts = LOCAL_PRODUCTS['For Kids'] || [];
    
    // Get the 5 Valentine's gift packs
    const giftPacks = giftPackProducts.filter(p =>
      p.id === 'giftpack-001' || p.id === 'giftpack-002' || p.id === 'giftpack-003' || p.id === 'giftpack-004' || p.id === 'giftpack-005'
    );
    
    // Get all Valentine's teddy bears (giant and small)
    const teddyBears = kidsProducts.filter(p => 
      p.id === 'kids-011' || p.id === 'kids-012' || p.id === 'kids-013'
    );
    
    return [...giftPacks, ...teddyBears];
  }, []);

  // Get Valentine's themed products from local data
  const valentineProducts = useMemo(() => {
    // Select specific Valentine-appropriate products from multiple categories
    const jewelryProducts = LOCAL_PRODUCTS['Jewelry'] || [];
    const applianceProducts = LOCAL_PRODUCTS['Home Appliances'] || [];
    const fashionProducts = LOCAL_PRODUCTS['Apparel & Fashion'] || [];
    const beautyProducts = LOCAL_PRODUCTS['Health & Beauty'] || [];
    const homeDecorProducts = LOCAL_PRODUCTS['Home & Decor'] || [];
    
    // Combine products for Valentine's gifts (expanded to include new appliances)
    const selectedJewelry = jewelryProducts.slice(0, 3); // 3 jewelry items
    const selectedAppliances = applianceProducts.slice(0, 5); // All 5 appliances (2 washing machines, blender, gas stove, cookware set)
    const selectedFashion = fashionProducts.slice(0, 2); // 2 fashion items
    const selectedBeauty = beautyProducts.slice(0, 2); // 2 beauty items
    const selectedHomeDecor = homeDecorProducts.slice(0, 1); // 1 home decor item
    
    return [
      ...selectedJewelry,
      ...selectedAppliances,
      ...selectedFashion,
      ...selectedBeauty,
      ...selectedHomeDecor
    ];
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Countdown Timer Section */}
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b-4 border-pink-200">
        <div className="max-w-7xl mx-auto">
          <CountdownTimer targetDate="2026-02-15T23:59:59" />
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-pink-100 transition-colors mb-4 group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-pulse">
              💝 Valentine's Special Collection 💝
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-light">
              Celebrate Love with Perfect Gifts
            </p>
            <p className="text-lg opacity-90">
              Up to <span className="text-3xl font-bold">30% OFF</span> on Selected Items
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Description */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-100 rounded-full px-6 py-2 mb-4">
            <span className="text-pink-600 font-semibold">
              ❤️ Limited Time Offer - Valentine's Day Special ❤️
            </span>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Show your love with our carefully curated Valentine's collection. From elegant jewelry 
            to premium home appliances, find the perfect gift that speaks from the heart.
          </p>
        </div>

        {/* Valentine's Gift Packs Section */}
        {valentineGiftPacks.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                🎁 Valentine's Gift Packs 🎁
              </h2>
              <p className="text-gray-600 text-lg">
                Curated collections perfect for expressing your love
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {valentineGiftPacks.map((product) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    {/* Gift Pack Badge */}
                    <div className="absolute top-2 left-2 z-10 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg" style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)'
                    }}>
                      💝 Gift Pack
                    </div>
                    
                    {/* Discount Badge */}
                    {product.originalPrice > product.price && (
                      <div className="absolute top-2 right-2 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                    
                    <ProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                      onToggleWishlist={onToggleWishlist}
                      onProductClick={onProductClick}
                      isWishlisted={wishlistedItems.some((item) => item.id === product.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Valentine's Products Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            💕 More Valentine's Specials 💕
          </h2>
          <p className="text-gray-600">
            Discover more perfect gifts for your loved ones
          </p>
        </div>

        {/* Products Grid */}
        {valentineProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {valentineProducts.map((product) => (
              <div
                key={product.id}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  {/* Valentine's Badge */}
                  <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    💕 Valentine's
                  </div>
                  
                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 right-2 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    onProductClick={onProductClick}
                    isWishlisted={wishlistedItems.some((item) => item.id === product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No Valentine's Offers Available
            </h3>
            <p className="text-gray-500">Check back soon for amazing deals!</p>
          </div>
        )}

        {/* Valentine's Message Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💖 Make This Valentine's Day Unforgettable 💖
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Whether it's a sparkling piece of jewelry or a thoughtful home appliance, 
            every gift tells a story of love and care. Shop now and enjoy free delivery 
            on all Valentine's special items!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🚚</span>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💳</span>
              <span>Pay on Delivery</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🎁</span>
              <span>Gift Wrapping Available</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
