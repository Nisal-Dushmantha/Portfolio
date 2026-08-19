import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (totalHeight > 0) {
        setScrollPercentage(Math.min(100, Math.max(0, (scrollPos / totalHeight) * 100)));
      }
      setShowBackToTop(scrollPos > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Gradient Scroll Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 z-50 transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3.5 bg-gray-950/90 hover:bg-red-700 text-white rounded-2xl shadow-2xl backdrop-blur-md border border-gray-800 transition-colors flex items-center justify-center group"
            title="Back to top"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
