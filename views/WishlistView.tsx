import React, { FC, useRef } from 'react';
import { Product, WishlistItem, View } from '../types';
import { formatCurrency } from '../utils';
import { HeartIcon, TrashIcon } from '../icons';
import { useAnimateOnScroll } from '../hooks';

export const WishlistView: FC<{ wishlist: WishlistItem[]; onRemoveFromWishlist: (productId: string) => void; onAddToCart: (product: Product) => void; onNavigate: (view: View) => void; }> = ({ wishlist, onRemoveFromWishlist, onAddToCart, onNavigate }) => {
    const gridRef = useAnimateOnScroll<HTMLDivElement>();
    
    if (wishlist.length === 0) {
        return (
            <div className="text-center py-20">
                <HeartIcon className="w-24 h-24 mx-auto text-gray-300" />
                <h1 className="mt-4 text-3xl font-bold text-gray-800">Your wishlist is empty</h1>
                <p className="mt-2 text-gray-500">Save your favorite items here to shop them later.</p>
                <button onClick={() => onNavigate('home')} className="mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">Find Favorites</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black sm:text-5xl mb-8">My Wishlist</h1>
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animated-section stagger-container">
                {wishlist.map(item => (
                    <div key={item.id} className="stagger-item bg-white rounded-lg shadow-md overflow-hidden relative">
                        <img src={item.imageUrls?.[0] || '/assets/images/placeholder.jpg'} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                            <p className="text-xl font-bold text-orange-600 mt-2">{formatCurrency(item.price)}</p>
                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => onAddToCart(item)} className="flex-grow bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors">Add to Cart</button>
                                <button onClick={() => onRemoveFromWishlist(item.id)} className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-colors">
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};