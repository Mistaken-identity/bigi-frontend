import React, { FC } from 'react';
import { HELP_CENTER_QAS } from '../constants';
import { StaticPageLayout } from '../components/StaticPageLayout';
import { Accordion } from '../components/Accordion';

export const HelpCenterView: FC = () => (
    <StaticPageLayout title="Help Center" titleClassName="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black">
         <p>Have questions? We've got answers. Check out our frequently asked questions below. If you can't find what you're looking for, feel free to contact us.</p>
         <div className="mt-8 space-y-2">
            {HELP_CENTER_QAS.map(qa => <Accordion key={qa.q} title={qa.q}>{qa.a}</Accordion>)}
         </div>
    </StaticPageLayout>
);
