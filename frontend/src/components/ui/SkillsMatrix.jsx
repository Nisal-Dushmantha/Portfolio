import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTechIcon } from '../../lib/techIcons';
import { FaLaptopCode, FaServer, FaMobileAlt, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend & UI',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'React.js', desc: 'Custom Hooks, Context API, SPA Routing, Component Lifecycle' },
      { name: 'Tailwind CSS', desc: 'Responsive Design, Animations, Glassmorphism, Micro-Interactions' },
      { name: 'JavaScript (ES6+)', desc: 'Async/Await, DOM Manipulation, Closures, Modular Code' },
      { name: 'TypeScript', desc: 'Type Safety, Generics, Component Prop Interfaces' },
      { name: 'HTML5 & CSS3', desc: 'Semantic Structure, Flexbox, Grid Systems, Modern Web Standards' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: <FaServer />,
    skills: [
      { name: 'Node.js', desc: 'Event-driven Server Runtime, NPM Ecosystem, Core Modules' },
      { name: 'Express.js', desc: 'RESTful API Architecture, Middleware, Error Handling, Routing' },
      { name: 'MongoDB', desc: 'Mongoose ODM, Schema Validation, Aggregation Pipelines, Atlas' },
      { name: 'Firebase', desc: 'Firestore Cloud Database, User Auth, Asset Storage' },
      { name: 'Python', desc: 'Algorithmic Problem Solving, Scripting, Automation' }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: <FaMobileAlt />,
    skills: [
      { name: 'Android Studio', desc: 'Activity & Fragment Lifecycles, Gradle Build System, Emulators' },
      { name: 'Kotlin', desc: 'Native Android Architecture, Coroutines, Null-Safe Code' },
      { name: 'Material Design', desc: 'Google Material Guidelines, Motion, Bottom Navigation, Drawers' },
      { name: 'Google Maps API', desc: 'Location Tracking, Custom Map Markers, Geolocation' }
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: <FaTools />,
    skills: [
      { name: 'Figma', desc: 'UI Wireframing, High-Fidelity Interactive Prototypes, Design Systems' },
      { name: 'Git & GitHub', desc: 'Version Control, Branching Workflows, Open Source Collaboration' },
      { name: 'Postman', desc: 'API Endpoint Testing, Mock Servers, Automated Collection Testing' },
      { name: 'Vite', desc: 'Modern Build Pipeline, Fast HMR, Production Bundle Optimization' }
    ]
  }
];

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const selectedCategoryData = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
        {skillCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gray-950 text-white shadow-lg shadow-gray-950/20 scale-105'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Clean Skill Cards Grid without Proficiency Bars */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {selectedCategoryData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-3xl bg-white border border-gray-200/90 hover:border-red-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="p-2.5 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-red-50 text-2xl transform group-hover:scale-110 transition-all flex-shrink-0">
                  {getTechIcon(skill.name)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-base">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillsMatrix;
