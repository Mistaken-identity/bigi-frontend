import React, { FC, useState, useMemo, ReactNode } from 'react';
import { User, Order, WishlistItem, View } from '../types';
import { formatCurrency } from '../utils';
import { Squares2X2Icon, ClipboardDocumentListIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, TagIcon, HeartIcon, BanknotesIcon, ArrowUturnLeftIcon } from '../icons';
import { useAnimateOnScroll } from '../hooks';

export const MyAccountView: FC<{ user: User | null; orders: Order[]; wishlist: WishlistItem[]; onNavigate: (view: View) => void; onLogout: () => void; }> = ({ user, orders, wishlist, onNavigate, onLogout }) => {
    type AccountSection = 'dashboard' | 'orders' | 'profile' | 'settings' | 'orderDetails';
    const [activeSection, setActiveSection] = useState<AccountSection>('dashboard');
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    if (!user) {
        onNavigate('auth');
        return null;
    }
    
    const handleViewOrder = (order: Order) => {
        setSelectedOrder(order);
        setActiveSection('orderDetails');
    };

    const menuItems: { id: 'dashboard' | 'orders' | 'profile' | 'settings'; label: string; icon: FC<{className?: string}> }[] = [
        { id: 'dashboard', label: 'Dashboard', icon: Squares2X2Icon },
        { id: 'orders', label: 'My Orders', icon: ClipboardDocumentListIcon },
        { id: 'profile', label: 'My Profile', icon: UserCircleIcon },
        { id: 'settings', label: 'Settings', icon: Cog6ToothIcon },
    ];

    const MyAccountDashboard: FC = () => {
        const totalSpent = useMemo(() => orders.reduce((acc, order) => acc + order.total, 0), [orders]);
        const recentOrder = orders.length > 0 ? [...orders].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] : null;
        const statsRef = useAnimateOnScroll<HTMLDivElement>();
        const recentOrderRef = useAnimateOnScroll<HTMLDivElement>();

        const StatCard: FC<{ icon: ReactNode, label: string, value: string | number }> = ({ icon, label, value }) => (
            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3 mr-4">
                    {icon}
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                </div>
            </div>
        );

        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.firstName}!</h1>
                    <p className="text-gray-500 mt-1">Here's a snapshot of your account activity.</p>
                </div>

                <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 animated-section stagger-container">
                    <div className="stagger-item"><StatCard icon={<TagIcon className="w-6 h-6"/>} label="Lifetime Orders" value={orders.length} /></div>
                    <div className="stagger-item"><StatCard icon={<HeartIcon className="w-6 h-6"/>} label="Items in Wishlist" value={wishlist.length} /></div>
                    <div className="stagger-item"><StatCard icon={<BanknotesIcon className="w-6 h-6"/>} label="Total Spent" value={formatCurrency(totalSpent)} /></div>
                </div>
                
                <div ref={recentOrderRef} className="bg-white p-6 rounded-lg shadow-sm border animated-section">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Order</h2>
                    {recentOrder ? (
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Order ID</p>
                                    <p className="font-medium text-gray-800">#{recentOrder.id}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Date</p>
                                    <p className="font-medium text-gray-800">{recentOrder.date}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Total</p>
                                    <p className="font-medium text-gray-800">{formatCurrency(recentOrder.total)}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Status</p>
                                    <p className="font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">Delivered</p>
                                </div>
                            </div>
                            <button onClick={() => handleViewOrder(recentOrder)} className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-500">View Details &rarr;</button>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">You haven't placed any orders yet.</p>
                            <button onClick={() => onNavigate('home')} className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm">Start Shopping</button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const OrderHistoryView: FC = () => {
        const ordersRef = useAnimateOnScroll<HTMLDivElement>();
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>
                {orders.length > 0 ? (
                    <div ref={ordersRef} className="space-y-4 animated-section stagger-container">
                        {orders.map(order => (
                            <div key={order.id} className="stagger-item border p-4 rounded-md hover:bg-gray-50 transition-colors">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="font-bold text-gray-800">Order #{order.id}</p>
                                        <p className="text-sm text-gray-500">Date: {order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-lg">{formatCurrency(order.total)}</p>
                                        <p className="text-sm text-green-600">Delivered</p>
                                    </div>
                                    <button onClick={() => handleViewOrder(order)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center py-8">You have no past orders.</p>
                )}
            </div>
        )
    };
    
    const OrderDetailsView: FC<{ order: Order, onBack: () => void }> = ({ order, onBack }) => (
        <div>
            <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4">
                <ArrowUturnLeftIcon className="w-5 h-5 mr-2"/>
                Back to Order History
            </button>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start pb-4 border-b">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
                        <p className="text-gray-500">Order #{order.id} &bull; Placed on {order.date}</p>
                    </div>
                    <span className="font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Delivered</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h2 className="font-bold text-lg text-gray-800 mb-4">Items Ordered</h2>
                        <div className="space-y-4">
                            {order.items.map(item => (
                                <div key={item.id} className="flex items-start">
                                    <img src={item.imageUrls[0]} alt={item.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="font-medium text-gray-700">{formatCurrency(item.price * item.quantity)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                             <h2 className="font-bold text-lg text-gray-800 mb-2">Delivery Address</h2>
                             <div className="text-gray-600">
                                <p>{order.deliveryDetails.firstName} {order.deliveryDetails.lastName}</p>
                                <p>{order.deliveryDetails.location}</p>
                                {order.deliveryDetails.locationDetails && <p>{order.deliveryDetails.locationDetails}</p>}
                                <p>{order.deliveryDetails.phone}</p>
                             </div>
                        </div>
                         <div>
                            <h2 className="font-bold text-lg text-gray-800 mb-2">Cost Summary</h2>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(order.subtotal)}</span></div>
                                <div className="flex justify-between"><span>Shipping</span><span>{formatCurrency(order.shipping)}</span></div>
                                <div className="flex justify-between font-bold text-lg text-gray-800 pt-2 border-t mt-2"><span>Total</span><span>{formatCurrency(order.total)}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const ProfileView: FC = () => (
         <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-lg text-gray-800">{user?.firstName} {user?.lastName}</p>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-lg text-gray-800">{user?.email}</p>
                </div>
                <div className="pt-4">
                     <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 disabled:opacity-50" disabled>Edit Profile</button>
                </div>
            </div>
        </div>
    );

    const SettingsView: FC = () => (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
            <div className="space-y-4">
                 <button onClick={onLogout} className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-200">Log Out</button>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'orders': return <OrderHistoryView />;
            case 'orderDetails': return selectedOrder ? <OrderDetailsView order={selectedOrder} onBack={() => setActiveSection('orders')} /> : null;
            case 'profile': return <ProfileView />;
            case 'settings': return <SettingsView />;
            case 'dashboard':
            default: return <MyAccountDashboard />;
        }
    };
    
    return (
        <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <aside className="lg:col-span-3 xl:col-span-2 mb-8 lg:mb-0">
                    <nav className="space-y-1 sticky top-24">
                        {menuItems.map(item => {
                            const Icon = item.icon;
                            return (
                                <a key={item.id} href="#" onClick={(e) => { e.preventDefault(); setActiveSection(item.id); }}
                                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === item.id ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                                    <Icon className={`mr-3 h-6 w-6 shrink-0 ${activeSection === item.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                                    <span className="truncate">{item.label}</span>
                                </a>
                            );
                        })}
                         <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }}
                            className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                            <ArrowRightOnRectangleIcon className="mr-3 h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                            <span className="truncate">Logout</span>
                        </a>
                    </nav>
                </aside>

                <main className="lg:col-span-9 xl:col-span-10">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};