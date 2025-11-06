import React, { FC } from 'react';
import { ToastMessage } from '../types';
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from '../icons';

export const Toast: FC<{ message: string, type: 'success' | 'error', onDismiss: () => void }> = ({ message, type, onDismiss }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const Icon = type === 'success' ? CheckCircleIcon : ExclamationCircleIcon;

  return (
    <div className={`${bgColor} text-white p-4 rounded-md shadow-lg flex items-center space-x-2`}>
      <Icon className="w-6 h-6" />
      <span>{message}</span>
      <button onClick={onDismiss} className="ml-auto_pl-2">
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export const ToastContainer: FC<{ toasts: ToastMessage[], removeToast: (id: number) => void }> = ({ toasts, removeToast }) => (
  <div className="fixed top-5 right-5 z-50 space-y-2">
    {toasts.map(toast => (
      <Toast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />
    ))}
  </div>
);
