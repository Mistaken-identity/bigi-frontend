import React, { useRef, useEffect, FC } from 'react';
import { View, User } from '../types';
import { CATEGORIES, SLOGAN } from '../constants';

export const Sidebar: FC<{ onNavigate: (view: View, data?: any) => void, isOpen: boolean, onClose: () => void, currentUser: User | null, onLogout: () => void }> = ({ onNavigate, isOpen, onClose, currentUser, onLogout }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleNavigate = (view: View, data?:any) => {
        onNavigate(view, data);
        onClose();
    };

    const handleLogout = () => {
        onLogout();
        onClose();
    }

    return (
    <>
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
        <aside ref={sidebarRef} className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="p-4 border-b border-gray-700 flex flex-col items-center">
            <img 
                src="/src/assets/images/logo/medium_128x128.png" 
                alt="Bigi Logo" 
                className="w-24 h-auto cursor-pointer" 
                onClick={() => handleNavigate('home')} 
            />
            <p className="text-xs text-gray-400 mt-1">{SLOGAN}</p>
          </div>
          <nav className="p-2 space-y-1">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="block px-3 py-2 rounded-md hover:bg-gray-700 font-bold">Home</a>
            <h2 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Categories</h2>
            {CATEGORIES.map(category => (
              <a key={category} href="#" onClick={(e) => { e.preventDefault(); handleNavigate('products', { category }); }} className="block px-3 py-2 rounded-md hover:bg-gray-700">{category}</a>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-4 space-y-1">
                <h2 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Account</h2>
                {currentUser ? (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('myAccount'); }} className="block px-3 py-2 rounded-md hover:bg-gray-700">My Account</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }} className="block px-3 py-2 rounded-md hover:bg-gray-700">Logout</a>
                    </>
                ) : (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('auth'); }} className="block px-3 py-2 rounded-md hover:bg-gray-700">Login / Sign Up</a>
                    </>
                )}
            </div>
          </nav>
        </aside>
    </>
    );
};