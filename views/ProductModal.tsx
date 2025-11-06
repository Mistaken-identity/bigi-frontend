import React, { FC, useState, useMemo, useEffect } from 'react';
import { Product, Review } from '../types';
import { XMarkIcon, StarIcon } from '../icons';
import { formatCurrency } from '../utils';

const StarRating: FC<{ rating: number, className?: string }> = ({ rating, className }) => (
    <div className={`flex items-center ${className}`}>
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);

const StarRatingInput: FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);
    return (
        <div className="flex items-center space-x-1 star-rating-input" onMouseLeave={() => setHoverRating(0)}>
            {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                    key={star}
                    className={`star-icon w-8 h-8 ${hoverRating >= star || rating >= star ? 'selected' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                />
            ))}
        </div>
    );
};

export const ProductModal: FC<{ 
    product: Product, 
    onClose: () => void, 
    onAddToCart: (product: Product) => void,
    onAddReview: (productId: string, review: Review) => void,
    userReviews: Review[]
}> = ({ product, onClose, onAddToCart, onAddReview, userReviews }) => {
    const [selectedImageUrl, setSelectedImageUrl] = useState(product.imageUrls[0]);
    
    const combinedReviews = useMemo(() => {
        const all = [...userReviews, ...product.reviews];
        const uniqueIds = new Set<string>();
        return all.filter(review => {
            if (uniqueIds.has(review.id)) {
                return false;
            } else {
                uniqueIds.add(review.id);
                return true;
            }
        });
    }, [userReviews, product.reviews]);

    const [reviews, setReviews] = useState<Review[]>(combinedReviews);
    const [newReview, setNewReview] = useState({ author: '', rating: 0, comment: '' });
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [formError, setFormError] = useState('');

    const averageRating = useMemo(() => {
        if (reviews.length === 0) return 0;
        const total = reviews.reduce((acc, r) => acc + r.rating, 0);
        return total / reviews.length;
    }, [reviews]);

    const ratingDistribution = useMemo(() => {
        const counts: { [key: number]: number } = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(review => {
            counts[review.rating] = (counts[review.rating] || 0) + 1;
        });
        return counts;
    }, [reviews]);

    const handleAddToCart = () => {
        onAddToCart(product);
        onClose();
    };
    
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');
        if (!newReview.author.trim() || newReview.rating === 0 || !newReview.comment.trim()) {
            setFormError('Please fill in all required fields (Name, Rating, Comment).');
            return;
        }
        const submittedReview: Review = {
            id: `review-${Date.now()}`,
            author: newReview.author,
            rating: newReview.rating,
            comment: newReview.comment,
            date: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }),
            imageUrl: photoPreview || undefined
        };
        onAddReview(product.id, submittedReview);
        setReviews(prev => [submittedReview, ...prev]);
        setNewReview({ author: '', rating: 0, comment: '' });
        setPhotoPreview(null);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full h-full max-h-[90vh] relative flex flex-col" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/50 rounded-full p-1">
                    <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="overflow-y-auto p-6 md:p-8 flex-grow">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Image Gallery */}
                        <div>
                            <div className="aspect-square bg-gray-100 rounded-lg mb-4">
                                <img src={selectedImageUrl} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {product.imageUrls.map((url, index) => (
                                    <div key={index} className="aspect-square bg-gray-100 rounded-md cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setSelectedImageUrl(url)}>
                                        <img src={url} alt={`${product.name} thumbnail ${index + 1}`} className={`w-full h-full object-cover rounded-md border-2 ${selectedImageUrl === url ? 'border-orange-500' : 'border-transparent'}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Product Info */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                            <div className="flex items-center mt-2">
                                <StarRating rating={averageRating} />
                                <span className="ml-2 text-sm text-gray-600">({reviews.length} reviews)</span>
                            </div>
                            <div className="flex items-baseline mt-4">
                                <p className="text-3xl font-bold text-orange-600">{formatCurrency(product.price)}</p>
                                {product.originalPrice > product.price && <p className="text-lg text-gray-500 line-through ml-3">{formatCurrency(product.originalPrice)}</p>}
                            </div>
                            <p className="text-gray-600 mt-4 flex-grow">{product.longDescription}</p>
                            <button onClick={handleAddToCart} className="w-full mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Left Col: Summary & Reviews List */}
                            <div>
                                {reviews.length > 0 && (
                                    <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                                        <div className="flex items-center gap-4">
                                            <div className="text-5xl font-bold text-gray-800">{averageRating.toFixed(1)}</div>
                                            <div>
                                                <StarRating rating={averageRating} />
                                                <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2 mt-4">
                                            {[5, 4, 3, 2, 1].map(star => (
                                                <div key={star} className="flex items-center gap-2 text-sm">
                                                    <span className="text-gray-600 font-medium">{star} star</span>
                                                    <div className="rating-progress flex-grow"><div className="rating-progress-bar" style={{ width: `${reviews.length > 0 ? (ratingDistribution[star] / reviews.length) * 100 : 0}%` }}></div></div>
                                                    <span className="text-gray-500 w-8 text-right">{ratingDistribution[star]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-6 max-h-[32rem] overflow-y-auto pr-4">
                                    {reviews.length > 0 ? reviews.map(review => (
                                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                                            <div className="flex items-center mb-2">
                                                {review.imageUrl && !review.imageUrl.startsWith('https://i.pravatar.cc') ? (
                                                    <img src={review.imageUrl} alt={`Review by ${review.author}`} className="w-10 h-10 rounded-full mr-3 object-cover"/>
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-orange-500 mr-3">{review.author.charAt(0)}</div>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-gray-800">{review.author}</p>
                                                    <p className="text-xs text-gray-500">{review.date}</p>
                                                </div>
                                                <StarRating rating={review.rating} className="ml-auto" />
                                            </div>
                                            <p className="text-gray-700 ml-13">{review.comment}</p>
                                            {review.imageUrl && !review.imageUrl.startsWith('https://i.pravatar.cc') && (
                                                <img src={review.imageUrl} alt="Customer review media" className="mt-3 ml-13 rounded-lg max-w-xs"/>
                                            )}
                                        </div>
                                    )) : <p className="text-gray-500 text-center py-10">No reviews yet. Be the first to share your thoughts!</p>}
                                </div>
                            </div>

                            {/* Right Col: Add Review Form */}
                            <div className="bg-gray-50 p-6 rounded-lg border h-fit sticky top-0">
                                <h4 className="text-xl font-semibold mb-4 text-gray-800">Write a Review</h4>
                                <form onSubmit={handleReviewSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="author" className="form-label text-orange-600">Your Name</label>
                                        <input type="text" id="author" value={newReview.author} onChange={e => setNewReview({ ...newReview, author: e.target.value })} className="form-input" required/>
                                    </div>
                                    <div>
                                        <label className="form-label text-orange-600">Your Rating</label>
                                        <StarRatingInput rating={newReview.rating} setRating={(r) => setNewReview({ ...newReview, rating: r })} />
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="form-label text-orange-600">Your Review</label>
                                        <textarea id="comment" rows={4} value={newReview.comment} onChange={e => setNewReview({ ...newReview, comment: e.target.value })} className="form-input" required></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className="form-label text-orange-600">Add a Photo (Optional)</label>
                                        <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"/>
                                        {photoPreview && <img src={photoPreview} alt="Preview" className="mt-4 rounded-lg h-24 w-24 object-cover" />}
                                    </div>
                                    {formError && <p className="text-red-500 text-sm">{formError}</p>}
                                    <button type="submit" className="w-full mt-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg">
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};