import React, { useState, useEffect, FC } from 'react';
import { BrandedCartIcon } from '../icons';

export const AnimatedWelcome: FC = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div key={key} className="flex items-center text-2xl font-bold text-orange-500 overflow-hidden">
            <div className="welcome-cart mr-2">
                <BrandedCartIcon className="w-8 h-8"/>
            </div>
            <span>Welcome to Bigi</span>
        </div>
    );
};
