import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaMobileAlt, FaAward } from 'react-icons/fa';

const timelineEvents = [
  {
    year: '2022 - Present',
    title: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    badge: 'Undergraduate',
    desc: 'Specializing in Information Technology, Software Engineering, Object-Oriented Programming, Database Management, and Web & Mobile Applications.',
    icon: <FaGraduationCap className="text-red-600" />,
    tags: ['OOP', 'Data Structures', 'DBMS', 'Web Tech', 'Mobile Development']
  },
  {
    year: '2024 - 2025',
    title: 'Full-Stack Energy & Enterprise Platform Lead',
    institution: 'PowerSense & Rathnasiri Motors Systems',
    badge: 'MERN Engineering',
    desc: 'Architected and built full-stack production platforms with JWT authentication, role-based access control, billing analytics, carbon calculators, and cloud deployment on Vercel & Render.',
    icon: <FaRocket className="text-amber-500" />,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs', 'Vercel']
  },
  {
    year: '2024',
    title: 'Native Android Mobile Engineering',
    institution: 'Brew Now Coffee Ordering System',
    badge: 'Mobile App',
    desc: 'Engineered native Android UI/UX application in Android Studio with Kotlin, Material Design navigation patterns, cart workflows, and interactive animations.',
    icon: <FaMobileAlt className="text-emerald-500" />,
    tags: ['Android Studio', 'Kotlin', 'Material Design', 'XML Layouts']
  },
  {
    year: '2023 - 2024',
    title: 'UI/UX Design Systems & Human-Centered Design',
    institution: 'BrewMe & Design Innovations',
    badge: 'UI/UX Design',
    desc: 'Executed end-to-end user research, persona creation, interactive wireframing, and design system creation in Figma for mobile and web interfaces.',
    icon: <FaAward className="text-purple-500" />,
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Wireframing']
  }
];

const EngineeringTimeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Central Glowing Line */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-600 via-rose-500 to-amber-500 rounded-full opacity-30" />

      <div className="space-y-12">
        {timelineEvents.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Pulse Node */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-2xl bg-white border-2 border-red-600 shadow-lg flex items-center justify-center text-sm z-10">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                <div className="p-6 rounded-3xl bg-white border border-gray-200/90 hover:border-red-400/80 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-gray-50 text-gray-700 border border-gray-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringTimeline;
