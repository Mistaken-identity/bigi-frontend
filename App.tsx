import React, { useState, useEffect, useCallback, useMemo, FC } from 'react';
import { Product, CartItem, WishlistItem, DeliveryDetails, Order, LiveSale, User, ToastMessage, View, Review } from './types';
import { CATEGORIES, SHIPPING_COST } from './constants';
import { LOCAL_PRODUCTS } from './data';
import { createOrder } from './services/api';
import { useLocalStorage, useToast, useCart } from './hooks';
import { ErrorBoundary } from './components/ErrorBoundary';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ProductModal } from './components/ProductModal';
import { ToastContainer } from './components/Toast';
import { LiveSaleNotification } from './components/LiveSaleNotification';
import { ConfirmationModal } from './components/ConfirmationModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

import { HomeView } from './views/HomeView';
import { ProductListView } from './views/ProductListView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { WishlistView } from './views/WishlistView';
import { AboutUsView } from './views/AboutUsView';
import { SearchView } from './views/SearchView';
import { CustomerFeedbackPage } from './views/CustomerFeedbackPage';
import { CareersView } from './views/CareersView';
import { ContactUsView } from './views/ContactUsView';
import { HelpCenterView } from './views/HelpCenterView';
import { AuthView } from './views/AuthView';
import { MyAccountView } from './views/MyAccountView';
import { LegalView } from './views/LegalView';

import { TERMS_CONTENT, PRIVACY_POLICY_CONTENT } from './constants';

const App: FC = () => {
    const [view, setView] = useState<View>('home');
    const [viewData, setViewData] = useState<any>(null);
    const { toasts, addToast, removeToast } = useToast();

    // Centralized cart logic is now in the useCart hook
    const { cart, loading: isCartLoading, error: cartError, reload: reloadCart, addToCart, updateCartQuantity, clearCart } = useCart();
    
    const [wishlist, setWishlist] = useLocalStorage<WishlistItem[]>('wishlist', []);
    const [orders, setOrders] = useLocalStorage<Order[]>('orders', []);
    const [allReviews, setAllReviews] = useLocalStorage<Record<string, Review[]>>('allReviews', {});
    const [users, setUsers] = useLocalStorage<User[]>('users', []);
    const [currentUser, setCurrentUser] = useLocalStorage<User | null>('currentUser', null);
    
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [liveSales, setLiveSales] = useState<LiveSale[]>([]);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    
    const [liveSearchResults, setLiveSearchResults] = useState<Product[]>([]);
    const [isLiveSearchLoading, setIsLiveSearchLoading] = useState(false);
    const [itemToRemoveFromCart, setItemToRemoveFromCart] = useState<string | null>(null);

    const handleNavigate = useCallback((newView: View, data: any = null) => {
        setView(newView);
        setViewData(data);
        window.scrollTo(0, 0);
    }, []);
    
   
    
    const clearLiveSearch = useCallback(() => {
        setLiveSearchResults([]);
    }, []);

    const requestRemoveFromCart = useCallback((productId: string) => {
        setItemToRemoveFromCart(productId);
    }, []);

    const performRemoveFromCart = useCallback(() => {
        if (itemToRemoveFromCart) {
            updateCartQuantity(itemToRemoveFromCart, 0);
        }
        setItemToRemoveFromCart(null);
    }, [itemToRemoveFromCart, updateCartQuantity]);

    const toggleWishlist = useCallback((product: Product) => {
        setWishlist(prevWishlist => {
            const isWishlisted = prevWishlist.some(item => item.id === product.id);
            if (isWishlisted) {
                addToast(`${product.name} removed from wishlist.`, 'success');
                return prevWishlist.filter(item => item.id !== product.id);
            } else {
                addToast(`${product.name} added to wishlist!`, 'success');
                return [...prevWishlist, product];
            }
        });
    }, [setWishlist, addToast]);
    
    const removeFromWishlist = useCallback((productId: string) => {
        const product = wishlist.find(p => p.id === productId);
        setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
        if (product) {
            addToast(`${product.name} removed from wishlist.`, 'success');
        }
    }, [wishlist, setWishlist, addToast]);

    const addReview = useCallback((productId: string, review: Review) => {
        setAllReviews(prev => ({
            ...prev,
            [productId]: [review, ...(prev[productId] || [])]
        }));
        addToast('Thank you for your review!', 'success');
    }, [setAllReviews, addToast]);

    const handlePlaceOrder = useCallback(async (deliveryDetails: DeliveryDetails) => {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const paymentStatus = deliveryDetails.paymentMethod === 'payOnDelivery' ? 'Pending - Pay on Delivery' : 'Paid';
        const newOrder: Order = {
            id: Date.now().toString(),
            items: cart,
            deliveryDetails,
            subtotal,
            shipping: SHIPPING_COST,
            total: subtotal + SHIPPING_COST,
            date: new Date().toLocaleDateString('en-GB'),
            paymentStatus,
        };

        // Build order data for API
        const orderData = {
            items: cart.map(item => ({
                productId: item.id,
                name: item.name,
                price: item.price,
                qty: item.quantity
            })),
            customer: {
                name: `${deliveryDetails.firstName} ${deliveryDetails.lastName}`,
                phone: deliveryDetails.phone,
                email: deliveryDetails.email,
                address: `${deliveryDetails.location}, ${deliveryDetails.locationDetails}`
            },
            payment: {
                method: deliveryDetails.paymentMethod === 'payOnDelivery' ? 'payOnDelivery' : 'payAtSite',
                status: paymentStatus === 'Paid' ? 'paid' : 'pending'
            },
            total: subtotal + SHIPPING_COST,
            createdAt: new Date().toISOString()
        };

        // Submit to backend
        try { 
            const res = await createOrder(orderData); 
            
            setOrders(prev => [...prev, newOrder]); 
            clearCart(); 
            addToast('Order placed successfully!', 'success'); 
            handleNavigate('orderConfirmation', newOrder); 
        
        } catch (error: any) { 
            console.error("Order API error:", error.response?.data || error.message); 
            addToast('Failed to place order', 'error'); 
        }
        
    }, [cart, setOrders, clearCart, handleNavigate, addToast]);
    const handleLogin = useCallback((user: User) => {
        setCurrentUser(user);
        handleNavigate('home');
        addToast(`Welcome back, ${user.firstName}!`, 'success');
    }, [setCurrentUser, handleNavigate, addToast]);

    const handleSignup = useCallback((user: User) => {
        setUsers(prev => [...prev, user]);
        setCurrentUser(user);
        handleNavigate('home');
        addToast(`Welcome, ${user.firstName}! Your account has been created.`, 'success');
    }, [setUsers, setCurrentUser, handleNavigate, addToast]);

    const performLogout = useCallback(() => {
        setCurrentUser(null);
        setShowLogoutConfirm(false);
        handleNavigate('home');
        addToast('You have been logged out.', 'success');
    }, [setCurrentUser, handleNavigate, addToast]);

    const requestLogout = () => {
        setShowLogoutConfirm(true);
    };

    const handleProductClick = useCallback((product: Product) => {
        setSelectedProduct(product);
        clearLiveSearch();
    }, [clearLiveSearch]);

    useEffect(() => {
        const createSale = () => {
            const allProducts: Product[] = Object.values(LOCAL_PRODUCTS).flat();
            if(allProducts.length === 0) return;
            const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
            const allLocations = Object.values(CATEGORIES).flat();
            const randomLocation = allLocations[Math.floor(Math.random() * allLocations.length)];

            const newSale: LiveSale = {
                productName: randomProduct.name,
                location: randomLocation,
                imageUrl: randomProduct.imageUrls[0],
            };
            
            setLiveSales(prev => [newSale, ...prev.slice(0, 2)]);
        };

        const intervalId = setInterval(createSale, Math.random() * 8000 + 7000);
        return () => clearInterval(intervalId);
    }, []);

    const closeLiveSale = (index: number) => {
        setLiveSales(prev => prev.filter((_, i) => i !== index));
    };

    const renderView = () => {
        switch (view) {
            case 'products': return <ProductListView category={viewData.category} onProductClick={handleProductClick} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlistedItems={wishlist} onBack={() => handleNavigate('home')} />;
            case 'cart': return <ErrorBoundary><CartView cart={cart} onUpdateQuantity={updateCartQuantity} onRequestRemoveFromCart={requestRemoveFromCart} onNavigate={handleNavigate} isLoading={isCartLoading} error={cartError} onRetry={reloadCart} /></ErrorBoundary>;
            case 'checkout': return <ErrorBoundary><CheckoutView onPlaceOrder={handlePlaceOrder} onBack={() => handleNavigate('cart')} /></ErrorBoundary>;
            case 'wishlist': return <WishlistView wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} onAddToCart={addToCart} onNavigate={handleNavigate} />;
            case 'aboutUs': return <AboutUsView />;
            case 'search': return <SearchView query={searchQuery} results={searchResults} onProductClick={handleProductClick} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlistedItems={wishlist} onBack={() => handleNavigate('home')} />;
            case 'customerFeedbackPage': return <CustomerFeedbackPage />;
            case 'careers': return <CareersView />;
            case 'contactUs': return <ContactUsView />;
            case 'helpCenter': return <HelpCenterView />;
            case 'auth': return <AuthView users={users} onLogin={handleLogin} onSignup={handleSignup} onNavigate={handleNavigate} />;
            case 'myAccount': return <MyAccountView user={currentUser} orders={orders} wishlist={wishlist} onNavigate={handleNavigate} onLogout={requestLogout} />;
            case 'terms': return <LegalView title="Terms & Conditions" content={TERMS_CONTENT} onNavigate={handleNavigate} />;
            case 'privacy': return <LegalView title="Privacy Policy" content={PRIVACY_POLICY_CONTENT} onNavigate={handleNavigate} />;
            case 'orderConfirmation': return <OrderConfirmationView order={viewData as Order} onNavigate={handleNavigate} />;
            case 'home':
            default: return <HomeView onNavigate={handleNavigate} onProductClick={handleProductClick} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlistedItems={wishlist} />;
        }
    };

    const cartCount = useMemo(() => cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0, [cart]);

    const mainLayout = (
      <>
        <Sidebar onNavigate={handleNavigate} isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} currentUser={currentUser} onLogout={requestLogout} />
        <div className="transition-all duration-300 lg:ml-64 flex flex-col min-h-screen">
            <Header
                cartCount={cartCount}
                wishlistCount={wishlist.length}
                onNavigate={handleNavigate}
                onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                onProductClick={handleProductClick}
                onClearLiveSearch={clearLiveSearch}
                currentUser={currentUser}
            />
            <main className="p-4 sm:p-6 lg:p-8 flex-grow">
                {renderView()}
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} onAddReview={addReview} userReviews={allReviews[selectedProduct.id] || []} />}
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        {liveSales.length > 0 && <LiveSaleNotification sale={liveSales[0]} onClose={() => closeLiveSale(0)} />}
        <ConfirmationModal
            isOpen={showLogoutConfirm}
            onClose={() => setShowLogoutConfirm(false)}
            onConfirm={performLogout}
            title="Confirm Logout"
            confirmText="Logout"
        >
            Are you sure you want to log out of your account?
        </ConfirmationModal>
        <ConfirmationModal
            isOpen={!!itemToRemoveFromCart}
            onClose={() => setItemToRemoveFromCart(null)}
            onConfirm={performRemoveFromCart}
            title="Remove Item"
            confirmText="Remove"
        >
            Are you sure you want to remove this item from your cart?
        </ConfirmationModal>
        <FloatingWhatsAppButton />
      </>
    );
    
    if (view === 'auth' || view === 'orderConfirmation') {
        return renderView();
    }
    
    return mainLayout;
};

export default App;
