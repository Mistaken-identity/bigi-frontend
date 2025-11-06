import React, { FC, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from '../icons';
import { StaticPageLayout } from '../components/StaticPageLayout';
import { useAnimateOnScroll } from '../hooks';

export const CustomerFeedbackPage: FC = () => {
    const gridRef = useAnimateOnScroll<HTMLDivElement>();
    return (
        <StaticPageLayout title="What Our Customers Say">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose animated-section stagger-container">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="stagger-item bg-gray-50 p-6 rounded-lg border">
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
        </StaticPageLayout>
    );
};