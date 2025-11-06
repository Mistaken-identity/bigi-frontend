import React, { FC, ReactNode } from 'react';
import { ExclamationCircleIcon } from '../icons';

export const ConfirmationModal: FC<{
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    children: ReactNode;
    confirmText?: string;
    cancelText?: string;
}> = ({ isOpen, onClose, onConfirm, title, children, confirmText = "Confirm", cancelText = "Cancel" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <div className="flex items-start space-x-3">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationCircleIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                        </div>
                        <div className="flex-grow">
                             <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                             <div className="mt-2">
                                <p className="text-sm text-gray-600">{children}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-b-lg">
                    <button type="button" onClick={onConfirm} className="inline-flex w-full justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 sm:ml-3 sm:w-auto transition-colors">
                        {confirmText}
                    </button>
                    <button type="button" onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-colors">
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    );
};
