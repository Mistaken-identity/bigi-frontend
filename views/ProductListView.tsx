import React, { FC, useState, useEffect, useMemo, useCallback } from 'react';
import { Product, WishlistItem } from '../types';
import { generateProductsForCategory } from '../services/geminiService';
import { ArrowLeftIcon, ChevronDownIcon, ExclamationCircleIcon } from '../icons';
import { ProductCard } from '../components/ProductCard';
import { useAnimateOnScroll } from '../hooks';
import { CATEGORY_DESCRIPTIONS } from '../constants';

type SortOption = 'popular' | 'rating-desc' | 'price-asc' | 'price-desc';

export const ProductListView: FC<{ category: string; onProductClick: (product: Product) => void; onAddToCart: (product: Product) => void; onToggleWishlist: (product: Product) => void; wishlistedItems: WishlistItem[]; onBack: () => void; }> = ({ category, onProductClick, onAddToCart, onToggleWishlist, wishlistedItems, onBack }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [bannerImage, setBannerImage] = useState('https://images.unsplash.com/photo-1590820088924-2c70094054a8?w=800');
    const gridRef = useAnimateOnScroll<HTMLDivElement>();
    const [sortOption, setSortOption] = useState<SortOption>('popular');

    const categoryDescription = CATEGORY_DESCRIPTIONS[category] || "Browse our unique collection.";

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError('');
        const response = await generateProductsForCategory(category);
        if (response.ok && response.data) {
            setProducts(response.data);
            if (response.data.length > 0) {
                setBannerImage(response.data[0].imageUrls[0]);
            }
        } else {
            console.error("Error fetching products:", response.error);
            setError(response.error || 'Failed to load products. Please try again.');
        }
        setLoading(false);
    }, [category]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    const sortedProducts = useMemo(() => {
        if (!products) return [];
        const sorted = [...products];
        switch (sortOption) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating-desc':
                sorted.sort((a, b) => {
                    const ratingA = a.reviews.length > 0 ? a.reviews.reduce((acc, r) => acc + r.rating, 0) / a.reviews.length : 0;
                    const ratingB = b.reviews.length > 0 ? b.reviews.reduce((acc, r) => acc + r.rating, 0) / b.reviews.length : 0;
                    return ratingB - ratingA;
                });
                break;
            case 'popular':
            default:
                sorted.sort((a, b) => (b.timesOrdered || 0) - (a.timesOrdered || 0));
                break;
        }
        return sorted;
    }, [products, sortOption]);

    return (
        <div className="fashion-bg -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-6 lg:p-8 min-h-screen">
            <div 
                className="category-banner mb-8 animate-slide-in-up"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <h1 className="text-5xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.6)'}}>{category}</h1>
                <p className="mt-2 text-lg max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>{categoryDescription}</p>
            </div>
             <div className="flex flex-col sm:flex-row items-center justify-between mb-6 px-1">
                 <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4 sm:mb-0">
                    <ArrowLeftIcon className="w-5 h-5 mr-2"/>
                    Back to Home
                </button>
                <div className="flex items-center space-x-4">
                    {!loading && !error && <p className="font-medium text-gray-700">{products.length} Products</p>}
                    <div className="relative">
                         <select
                            id="sort-select"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 font-semibold text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        >
                            <option value="popular">Popularity</option>
                            <option value="rating-desc">Highest Rated</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                         <ChevronDownIcon className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animated-section stagger-container">
                {loading && <div className="col-span-full text-center py-20 font-semibold text-gray-600">Loading products...</div>}
                {error && (
                    <div className="col-span-full text-center py-20 bg-red-50 p-8 rounded-lg">
                        <ExclamationCircleIcon className="w-16 h-16 mx-auto text-red-400" />
                        <h2 className="mt-4 text-2xl font-bold text-red-800">Could Not Load Products</h2>
                        <p className="mt-2 text-red-600">{error}</p>
                        <button onClick={fetchProducts} className="mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                            Try Again
                        </button>
                    </div>
                )}
                {!loading && !error && (
                    sortedProducts.length > 0 ? (
                        sortedProducts.map(product => (
                            <div key={product.id} className="stagger-item">
                                <ProductCard
                                    product={product}
                                    onAddToCart={onAddToCart}
                                    onToggleWishlist={onToggleWishlist}
                                    onProductClick={onProductClick}
                                    isWishlisted={wishlistedItems.some(item => item.id === product.id)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">No products found in this category.</div>
                    )
                )}
            </div>
        </div>
    );
};