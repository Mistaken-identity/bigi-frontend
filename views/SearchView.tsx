import React, { FC, useRef } from 'react';
import { Product, WishlistItem } from '../types';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '../icons';
import { ProductCard } from '../components/ProductCard';
import { useAnimateOnScroll } from '../hooks';

export const SearchView: FC<{ query: string; results: Product[]; onProductClick: (product: Product) => void; onAddToCart: (product: Product) => void; onToggleWishlist: (product: Product) => void; wishlistedItems: WishlistItem[]; onBack: () => void; }> = ({ query, results, onProductClick, onAddToCart, onToggleWishlist, wishlistedItems, onBack }) => {
    const gridRef = useAnimateOnScroll<HTMLDivElement>();
    
    return (
        <div>
            <div className="flex items-center mb-6">
                <button onClick={onBack} className="text-gray-600 hover:text-orange-500 mr-4">
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Search Results for: <span className="text-orange-500">"{query}"</span>
                </h1>
            </div>

            {results.length > 0 ? (
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animated-section stagger-container">
                    {results.map(product => (
                        <div key={product.id} className="stagger-item">
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                                onToggleWishlist={onToggleWishlist}
                                onProductClick={onProductClick}
                                isWishlisted={wishlistedItems.some(item => item.id === product.id)}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <MagnifyingGlassIcon className="w-24 h-24 mx-auto text-gray-300" />
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">No results found</h2>
                    <p className="mt-2 text-gray-500">We couldn't find any products matching your search. Try a different keyword.</p>
                </div>
            )}
        </div>
    );
};
