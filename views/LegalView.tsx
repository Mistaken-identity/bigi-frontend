import React, { FC } from 'react';
import { View } from '../types';
import { StaticPageLayout } from '../components/StaticPageLayout';

export const LegalView: FC<{ title: string, content: { title: string, content: string }[], onNavigate?: (view: View, data?: any) => void }> = ({ title, content, onNavigate }) => (
    <StaticPageLayout title={title} titleClassName={title === 'Privacy Policy' ? 'text-orange-600' : ''}>
        <div className="space-y-6">
            {content.map(section => (
                <div key={section.title}>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                    <p>{section.content}</p>
                </div>
            ))}
            {content.length > 5 && onNavigate && (
                <div className="text-center p-4 bg-gray-100 rounded-md">
                    <p>This is a summary of our terms. For the full document, please contact our support team.</p>
                    <button onClick={() => onNavigate('contactUs')} className="font-semibold text-orange-600 hover:underline mt-2">Contact Support</button>
                </div>
            )}
        </div>
    </StaticPageLayout>
);
