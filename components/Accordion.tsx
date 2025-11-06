import React, { useState, FC, ReactNode } from 'react';
import { ChevronDownIcon } from '../icons';

export const Accordion: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-5 text-left text-lg font-semibold text-gray-800 hover:text-orange-600">
                <span>{title}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform text-orange-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pt-0 pb-5' : 'max-h-0'}`}>
                <div className="text-gray-600 pr-6">{children}</div>
            </div>
        </div>
    );
};
