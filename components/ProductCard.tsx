import React, { FC } from 'react';
import { Product } from '../types';
import { HeartIcon, CheckCircleIcon } from '../icons';
import { formatCurrency } from '../utils';

export const ProductCard: FC<{ product: Product, onAddToCart: (product: Product) => void, onToggleWishlist: (product: Product) => void, onProductClick: (product: Product) => void, isWishlisted: boolean, className?: string }> = ({ product, onAddToCart, onToggleWishlist, onProductClick, isWishlisted, className }) => {
    const discount = product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    return (
        <div className={`bg-white rounded-lg overflow-hidden group ${className || 'shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300'}`}>
            <div className="relative cursor-pointer overflow-hidden" onClick={() => onProductClick(product)}>
                <img src={product.imageUrls?.[0] || '/assets/images/placeholder.jpg'} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                {discount > 0 && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">{discount}% OFF</span>}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 h-10 overflow-hidden">{product.description}</p>
                 <div className="flex items-baseline mt-2">
                    <p className="text-xl font-bold text-orange-600">{formatCurrency(product.price)}</p>
                    {product.originalPrice > product.price && <p className="text-sm text-gray-500 line-through ml-2">{formatCurrency(product.originalPrice)}</p>}
                </div>
                {product.timesOrdered && product.timesOrdered > 0 && (
                    <div className="flex items-center text-sm text-green-600 font-medium mt-2">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        <span className="font-bold">{product.timesOrdered.toLocaleString()} sold</span>
                    </div>
                )}
                <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => onAddToCart(product)} className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors">Add to Cart</button>
                    <button onClick={() => onToggleWishlist(product)} className={`ml-2 p-2 rounded-full transition-colors ${isWishlisted ? 'text-red-500 bg-red-100' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}>
                        <HeartIcon isFilled={isWishlisted} className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};
