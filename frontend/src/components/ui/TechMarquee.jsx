import React from 'react';
import { motion } from 'framer-motion';
import { getTechIcon } from '../../lib/techIcons';

const techItems = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Express', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Android Studio', category: 'Mobile' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Figma', category: 'UI/UX' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Postman', category: 'API Testing' }
];

const TechMarquee = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gray-50/60 border-y border-gray-200/80">
      {/* Gradient Fade Overlays on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <motion.div
        className="flex items-center gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 28,
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white hover:bg-red-50/40 border border-gray-200/90 hover:border-red-300/80 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group"
          >
            <div className="text-xl transform group-hover:scale-125 transition-transform duration-300">
              {getTechIcon(tech.name)}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
