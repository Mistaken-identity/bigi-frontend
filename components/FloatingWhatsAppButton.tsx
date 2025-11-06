import React, { FC } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { WhatsAppIcon } from '../icons';

export const FloatingWhatsAppButton: FC = () => {
    const defaultMessage = encodeURIComponent("Hello Bigi! I have a question.");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-btn"
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8 text-white" />
        </a>
    );
};
