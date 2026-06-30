'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/919493945379?text=Hi%20Foxtail%20CCTV%2C%20I%20need%20your%20services.`;
  const phoneLink = 'tel:+919493945379';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-soft-lg hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={phoneLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-soft-lg hover:bg-green-700 transition-colors"
        title="Call us"
      >
        <Phone size={24} />
      </motion.a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-soft-lg hover:bg-blue-700 transition-colors"
          title="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingButtons;
