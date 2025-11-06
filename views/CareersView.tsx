import React, { FC } from 'react';
import { CAREERS_CONTENT, CAREERS_EMAIL } from '../constants';
import { StaticPageLayout } from '../components/StaticPageLayout';

export const CareersView: FC = () => (
    <StaticPageLayout title={CAREERS_CONTENT.title}>
        <p className="lead">{CAREERS_CONTENT.lead}</p>
        
        <div className="mt-12 p-6 bg-gray-50 border-l-4 border-orange-500 rounded-r-lg">
            <h3 className="text-2xl font-bold text-gray-800">{CAREERS_CONTENT.open_application_section.title}</h3>
            <p className="mt-2">{CAREERS_CONTENT.open_application_section.content}</p>
        </div>

        <div className="mt-12 text-center p-6 bg-gray-100 rounded-lg">
            <p className="font-semibold text-lg">{CAREERS_CONTENT.cta}</p>
            <a href={`mailto:${CAREERS_EMAIL}?subject=Career Application`} className="inline-block mt-4 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors no-underline text-lg">
                Email Your CV
            </a>
        </div>
    </StaticPageLayout>
);