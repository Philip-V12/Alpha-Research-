import { motion } from 'motion/react';
import whatsappLogo from '../../imports/whatsapp-logo-png_seeklogo-430728-1.png';

const WHATSAPP_URL =
  'https://wa.me/917306541212?text=' + encodeURIComponent("Hi, I'd like help with my work");

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full shadow-xl hover:shadow-2xl overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <img
        src={whatsappLogo}
        alt="Chat with us on WhatsApp"
        className="relative w-full h-full object-cover rounded-full"
      />
    </motion.a>
  );
}
