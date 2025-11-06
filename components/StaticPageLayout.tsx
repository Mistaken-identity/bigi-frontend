import React, { FC, ReactNode } from 'react';
import { useAnimateOnScroll } from '../hooks';

export const StaticPageLayout: FC<{ title: string; children: ReactNode; titleClassName?: string; }> = ({ title, children, titleClassName }) => {
    const ref = useAnimateOnScroll<HTMLDivElement>();
    return (
        <div ref={ref} className="bg-white p-8 md:p-12 rounded-lg shadow-xl animated-section">
            <h1 className={`text-4xl font-extrabold text-gray-900 mb-8 ${titleClassName}`}>{title}</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
                {children}
            </div>
        </div>
    );
}