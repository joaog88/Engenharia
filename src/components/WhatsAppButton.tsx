import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5535997658926"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gold text-matte p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;