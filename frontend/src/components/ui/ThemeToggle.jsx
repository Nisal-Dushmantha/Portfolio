import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '', showLabel = false }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
        isDark
          ? 'bg-gray-800/90 text-amber-300 border border-gray-700 hover:bg-gray-700 hover:border-amber-400/50 shadow-md shadow-amber-500/10'
          : 'bg-gray-100/90 text-gray-700 border border-gray-200 hover:bg-gray-200/80 hover:text-gray-950 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: -16, opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: 16, opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FaMoon className="text-sm text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]" />
          ) : (
            <FaSun className="text-sm text-amber-500 hover:rotate-45 transition-transform" />
          )}
        </motion.div>
      </AnimatePresence>

      {showLabel && (
        <span className="ml-2 text-xs font-semibold uppercase tracking-wider">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
