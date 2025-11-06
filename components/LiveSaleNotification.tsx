import React, { FC, useEffect } from 'react';
import { LiveSale } from '../types';
import { XMarkIcon } from '../icons';

export const LiveSaleNotification: FC<{ sale: LiveSale, onClose: () => void }> = ({ sale, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-5 bg-white p-4 rounded-lg shadow-xl z-40 flex items-center max-w-sm animate-fade-in-up">
      <img src={sale.imageUrl} alt={sale.productName} className="w-16 h-16 rounded-md object-cover mr-4"/>
      <div>
        <p className="font-bold text-sm text-gray-800">Recent Order!</p>
        <p className="text-gray-600 text-xs">{sale.productName} just shipped to {sale.location}.</p>
        <p className="text-gray-500 text-xs mt-1">1 minute ago</p>
      </div>
      <button onClick={onClose} className="absolute top-1 right-1 text-gray-400 hover:text-gray-600">
          <XMarkIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
