import { createOrder } from "../services/api";
import React, { FC, useMemo, useRef } from 'react';
import { CartItem, View } from '../types';
import { SHIPPING_COST, WHATSAPP_NUMBER } from '../constants';
import { formatCurrency } from '../utils';
import { CartIcon, TrashIcon, WhatsAppIcon, ExclamationCircleIcon } from '../icons';
import { useAnimateOnScroll } from '../hooks';

export const CartView: FC<{ 
   

    cart: CartItem[]; 
    onUpdateQuantity: (productId: string, quantity: number) => void; 
    onRequestRemoveFromCart: (productId: string) => void; 
    onNavigate: (view: View) => void; 
    isLoading: boolean;
    error: string | null;
    onRetry: () => void;
}> = ({ cart, onUpdateQuantity, onRequestRemoveFromCart, onNavigate, isLoading, error, onRetry }) => {
    const itemsRef = useAnimateOnScroll<HTMLDivElement>();
    const summaryRef = useAnimateOnScroll<HTMLDivElement>();
    
    const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const total = subtotal + SHIPPING_COST;
    
    const whatsAppMessage = useMemo(() => {
        let message = "Hello Bigi! I'd like to place an order for the following items:\n\n";
        cart.forEach(item => {
            message += `${item.name} (x${item.quantity}) - ${formatCurrency(item.price * item.quantity)}\n`;
        });
        message += `\nSubtotal: ${formatCurrency(subtotal)}`;
        message += `\nTotal: ${formatCurrency(total)}`;
        message += "\n\nPlease let me know the next steps. Thank you!";
       
        const handlePlaceOrder = async () => { 
            try { 
                const orderPayload = { 
                    items: cart.map((item: any) => ({ 
                        productId: item.id, 
                        name: item.name, 
                        price: item.price, 
                        quantity: item.quantity, 
                    })), 
                    totalAmount: total, 
                    customer: { 
                        name: "Guest User", 
                        phone: "0700000000", 
                    }, 
                }; 
                await createOrder(orderPayload); 
                alert("Order placed successfully!"); 
            } catch (error) { 
                console.error(error);
                 alert("Failed to place order"); 
                } 
            };
       
        return encodeURIComponent(message);
    }, [cart, subtotal, total]);

    if (isLoading) {
        return (
            <div className="text-center py-20">
                <CartIcon className="w-24 h-24 mx-auto text-gray-300 animate-pulse" />
                <h1 className="mt-4 text-2xl font-bold text-gray-800">Loading Your Cart...</h1>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="text-center py-20 bg-red-50 p-8 rounded-lg">
                <ExclamationCircleIcon className="w-16 h-16 mx-auto text-red-400" />
                <h1 className="mt-4 text-2xl font-bold text-red-800">Failed to Load Cart</h1>
                <p className="mt-2 text-red-600">{error}</p>
                <button onClick={onRetry} className="mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                    Try Again
                </button>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="text-center py-20">
                <CartIcon className="w-24 h-24 mx-auto text-gray-300" />
                <h1 className="mt-4 text-3xl font-bold text-gray-800">Your cart is empty</h1>
                <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                <button onClick={() => onNavigate('home')} className="mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">Start Shopping</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
             <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-black mb-4">Your Order</h2>
                    <div ref={itemsRef} className="space-y-4 animated-section stagger-container">
                        {cart.map(item => (
                            <div key={item.id} className="stagger-item flex items-center justify-between border-b pb-4">
                                <div className="flex items-center">
                                    <img src={item.imageUrls?.[0] || '/assets/images/placeholder.jpg'} alt={item.name} className="w-20 h-20 rounded-md object-cover mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-500">{formatCurrency(item.price)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center border rounded">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                        <span className="px-3 py-1 bg-white text-black">{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                    </div>
                                    <p className="font-bold w-24 text-right">{formatCurrency(item.price * item.quantity)}</p>
                                    <button onClick={() => onRequestRemoveFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={summaryRef} className="bg-white p-6 rounded-lg shadow-md h-fit animated-section">
                    <h2 className="text-2xl font-bold text-black mb-4">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>{formatCurrency(SHIPPING_COST)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                            <span>Total</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                    </div>
                    <button onClick={(handlePlaceOrder) => onNavigate('checkout')} className="mt-6 w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">Proceed to Checkout</button>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppMessage}`} target="_blank" rel="noopener noreferrer" className="mt-3 w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                         <WhatsAppIcon className="w-6 h-6 mr-2" />
                        Order via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

