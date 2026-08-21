import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const FloatingThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-8 left-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border transition-all duration-300 group cursor-pointer ${
        isDark
          ? 'bg-gray-900/95 text-amber-300 border-gray-700/80 shadow-amber-500/10 hover:border-amber-400/50'
          : 'bg-white/95 text-gray-800 border-gray-200/90 shadow-gray-900/10 hover:border-gray-300'
      }`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
        isDark ? 'bg-gray-800 text-amber-300' : 'bg-amber-50 text-amber-500'
      }`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ y: -10, opacity: 0, rotate: -60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 60 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <FaMoon className="text-sm drop-shadow-[0_0_6px_rgba(252,211,77,0.6)]" />
            ) : (
              <FaSun className="text-base animate-[spin_12s_linear_infinite]" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col text-left pr-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none">
          Mode
        </span>
        <span className="text-xs font-black tracking-wide text-gray-900 dark:text-white leading-tight">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </div>
    </motion.button>
  );
};

export default FloatingThemeSwitcher;
