import React, { useState, useEffect, useRef, FC } from 'react';
import { View, User, Product } from '../types';
import { Bars3Icon, MagnifyingGlassIcon, HeartIcon, CartIcon, UserIcon } from '../icons';
import { AnimatedWelcome } from './AnimatedWelcome';
import { formatCurrency } from '../utils';

export const Header: FC<{ 
    cartCount: number, 
    wishlistCount: number, 
    onNavigate: (view: View) => void, 
    onToggleSidebar: () => void, 
    onSearch: (query:string) => void, 
    onLiveSearch: (query:string) => void,
    liveSearchResults: Product[],
    isLiveSearchLoading: boolean,
    onProductClick: (product: Product) => void,
    onClearLiveSearch: () => void,
    currentUser: User | null 
}> = ({ 
    cartCount, 
    wishlistCount, 
    onNavigate, 
    onToggleSidebar, 
    onSearch,
    onLiveSearch,
    liveSearchResults,
    isLiveSearchLoading,
    onProductClick,
    onClearLiveSearch,
    currentUser 
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
            setIsFocused(false);
            onClearLiveSearch();
        }
    };
    
    useEffect(() => {
        const handler = setTimeout(() => {
          if (searchQuery.trim().length > 1) {
            onLiveSearch(searchQuery);
          } else {
            onClearLiveSearch();
          }
        }, 300);
    
        return () => {
          clearTimeout(handler);
        };
    }, [searchQuery, onLiveSearch, onClearLiveSearch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const showDropdown = isFocused && (liveSearchResults.length > 0 || isLiveSearchLoading || searchQuery.length > 1);
  
    return (
        <header className="sticky top-0 bg-white shadow-md z-30">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <button className="text-gray-600 lg:hidden" onClick={onToggleSidebar}>
                    <Bars3Icon className="w-6 h-6" />
                </button>
                <div className="hidden lg:block">
                    <AnimatedWelcome />
                </div>
                <div ref={searchContainerRef} className="flex-1 mx-4 max-w-md relative">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            placeholder="Search for products..."
                            className={`w-full pl-4 pr-10 py-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${showDropdown ? 'rounded-b-none' : ''}`}
                        />
                        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-orange-500">
                            <MagnifyingGlassIcon className="w-5 h-5" />
                        </button>
                    </form>
                    {showDropdown && (
                        <div className="search-dropdown">
                            {isLiveSearchLoading && <div className="p-3 text-sm text-gray-400">Searching...</div>}
                            {!isLiveSearchLoading && liveSearchResults.length === 0 && searchQuery.length > 1 && (
                                <div className="p-3 text-sm text-gray-400">No results for "{searchQuery}"</div>
                            )}
                            {liveSearchResults.map(product => (
                                <div key={product.id} onClick={() => onProductClick(product)} className="flex items-center p-2 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0">
                                    <img src={product.imageUrls?.[0] || '/assets/images/placeholder.jpg'} alt={product.name} className="w-12 h-12 object-cover rounded-md mr-3"/>
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-gray-100 truncate">{product.name}</p>
                                        <p className="text-sm text-orange-600 font-semibold">{formatCurrency(product.price)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center space-x-4">
                     <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('wishlist'); }} className="relative text-gray-600 hover:text-orange-500">
                        <HeartIcon className="w-7 h-7" />
                        {wishlistCount > 0 && <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlistCount}</span>}
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }} className="relative text-gray-600 hover:text-orange-500">
                        <CartIcon className="w-7 h-7" />
                        {cartCount > 0 && <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
                    </a>
                    <button onClick={() => onNavigate(currentUser ? 'myAccount' : 'auth')} className="hidden lg:block text-gray-600 hover:text-orange-500">
                        <UserIcon className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </header>
    );
};