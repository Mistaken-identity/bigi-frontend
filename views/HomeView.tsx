

import React, { FC, useMemo, ReactNode, useState, useRef, useEffect } from 'react';
import { Product, WishlistItem, View } from '../types';
import { CATEGORIES, TESTIMONIALS } from '../constants';
import { LOCAL_PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { StarIcon, QuestionMarkCircleIcon, BoltIcon, BookOpenIcon, HeartIcon, BuildingStorefrontIcon, UserIcon, ShoppingBagIcon, SparklesIcon, ComputerDesktopIcon } from '../icons';

export const HomeView: FC<{ onNavigate: (view: View, data?: any) => void; onProductClick: (product: Product) => void; onAddToCart: (product: Product) => void; onToggleWishlist: (product: Product) => void; wishlistedItems: WishlistItem[]; }> = ({ onNavigate, onProductClick, onAddToCart, onToggleWishlist, wishlistedItems }) => {
    const featuredProducts = useMemo(() => Object.values(LOCAL_PRODUCTS).flat().sort((a, b) => (b.timesOrdered || 0) - (a.timesOrdered || 0)).slice(0, 8), []);
    
    const CATEGORY_ICONS: Record<string, FC<{ className?: string }>> = {
        "Apparel & Fashion": ShoppingBagIcon,
        "Home & Decor": BuildingStorefrontIcon,
        "Jewelry": SparklesIcon,
        "Art & Crafts": BoltIcon,
        "Health & Beauty": HeartIcon,
        "Bags & Accessories": ComputerDesktopIcon,
        "Footwear": ShoppingBagIcon,
        "For Kids": UserIcon,
        "Gourmet & Kitchen": BuildingStorefrontIcon,
        "Books & Stationery": BookOpenIcon,
    };

    const CategoryCard: FC<{ name: string; icon: FC<{ className?: string }>; onClick: () => void }> = ({ name, icon: Icon, onClick }) => (
        <div onClick={onClick} className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="bg-orange-100 rounded-full p-4 mb-4 transition-colors group-hover:bg-orange-500">
                <Icon className="w-8 h-8 text-orange-500 transition-colors group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
        </div>
    );

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-cover bg-center rounded-b-2xl flex items-center justify-center text-center text-white p-4" style={{ backgroundImage: "url('/src/assets/images/053c2e3e-d8e4-4ee6-8070-aca0ebbc64bd.jpeg')" }}>
                <div className="absolute inset-0 bg-black/60 rounded-b-2xl"></div>
                <div className="relative z-10 animate-slide-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Artistry in Every Thread</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Experience the heart of Africa delivered to your doorstep for free—pay only when it arrives.</p>
                    <button onClick={() => onNavigate('products', {category: 'Apparel & Fashion'})} className="mt-8 bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">Shop Now</button>
                </div>
            </div>
            
            {/* Categories Section */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                   {CATEGORIES.map(category => (
                        <CategoryCard 
                            key={category} 
                            name={category} 
                            icon={CATEGORY_ICONS[category] || QuestionMarkCircleIcon} 
                            onClick={() => onNavigate('products', { category })}
                        />
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Trending Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {featuredProducts.map(product => (
                        <div key={product.id}>
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
            </div>

            {/* Testimonials */}
            <div>
                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Testimonials</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {TESTIMONIALS.slice(0,4).map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                {Array(testimonial.stars).fill(0).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                                {Array(5 - testimonial.stars).fill(0).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-gray-300" />)}
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                        </div>
                     ))}
                 </div>
            </div>
        </div>
    );
};
