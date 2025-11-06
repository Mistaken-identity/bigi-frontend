import React, { FC, CSSProperties } from 'react';
import { Order, View } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { formatCurrency } from '../utils';
import { ExclamationCircleIcon, CheckCircleIcon, WhatsAppIcon } from '../icons';

export const OrderConfirmationView: FC<{ order: Order | null, onNavigate: (view: View) => void }> = ({ order, onNavigate }) => {
    if (!order) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                 <div className="text-center">
                    <ExclamationCircleIcon className="w-16 h-16 text-red-400 mx-auto" />
                    <h1 className="text-2xl font-bold mt-4">Order details not found.</h1>
                    <p className="text-gray-600">Something went wrong. Please check your account for order history.</p>
                    <button onClick={() => onNavigate('home')} className="mt-8 w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">Go to Homepage</button>
                 </div>
            </div>
        )
    };

    const whatsappFollowUpMessage = encodeURIComponent(`Hello Bigi, I'd like to follow up on my order #${order.id}.`);
    
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 opacity-50"></div>
            <div className="bubbles absolute inset-0">
                {[...Array(15)].map((_, i) => <div key={i} className="bubble" style={{'--size': `${2+Math.random()*4}rem`, '--distance': `${6+Math.random()*4}rem`, '--position': `${-5+Math.random()*110}%`, '--time': `${2+Math.random()*2}s`, '--delay': `${-1*(2+Math.random()*2)}s`} as CSSProperties}></div>)}
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl w-full z-10 text-center">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                <h1 className="text-4xl font-extrabold text-gray-900 mt-4">Thank you, {order?.deliveryDetails?.firstName}!</h1>
                <p className="text-gray-600 mt-2">Your order <span className="font-bold text-green-600">#{order?.id}</span> has been placed successfully.</p>
                 {order.paymentStatus === 'Paid' ? (
                     <p className="text-gray-600 mt-1">Your payment has been received. We will call you shortly to confirm delivery to <span className="font-semibold">{order?.deliveryDetails?.location}</span>.</p>
                ) : (
                    <p className="text-gray-600 mt-1">Please have <span className="font-bold">{formatCurrency(order.total)}</span> ready for payment on delivery. We will call you shortly to confirm delivery to <span className="font-semibold">{order?.deliveryDetails?.location}</span>.</p>
                )}
                
                <div className="text-left bg-gray-50 p-6 rounded-lg mt-8 border">
                     <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
                            <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                                {order.items.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <p className="text-gray-700">{item.name} (x{item.quantity})</p>
                                        <p className="font-medium text-gray-800">{formatCurrency(item.price * item.quantity)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t my-4"></div>
                            <div className="flex justify-between font-bold text-lg">
                                <p className="text-black">{order.paymentStatus === 'Paid' ? 'Total Paid' : 'Total Due'}</p>
                                <p className={order.paymentStatus === 'Paid' ? 'text-green-600' : 'text-orange-600'}>{formatCurrency(order.total)}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-black mb-4">Delivery Details</h2>
                            <div className="text-sm text-gray-700 space-y-2">
                                <p><span className="font-semibold text-gray-600">Name:</span> {order?.deliveryDetails?.firstName} {order?.deliveryDetails?.lastName}</p>
                                <p><span className="font-semibold text-gray-600">Phone:</span> {order?.deliveryDetails?.phone}</p>
                                {order?.deliveryDetails?.email && <p><span className="font-semibold text-gray-600">Email:</span> {order.deliveryDetails.email}</p>}
                                <p><span className="font-semibold text-gray-600">Location:</span> {order?.deliveryDetails?.location}</p>
                                {order?.deliveryDetails?.locationDetails && <p><span className="font-semibold text-gray-600">Details:</span> {order.deliveryDetails.locationDetails}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button onClick={() => onNavigate('home')} className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">Continue Shopping</button>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappFollowUpMessage}`} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                         <WhatsAppIcon className="w-5 h-5 fill-current mr-2" />
                        Follow Up
                    </a>
                </div>

            </div>
        </div>
    );
};