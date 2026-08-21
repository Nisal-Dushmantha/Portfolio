import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBookReader, FaSchool, FaCertificate } from 'react-icons/fa';

const educationList = [
  {
    period: 'Present',
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    faculty: 'Faculty of Computing',
    description: 'Currently pursuing a BSc (Hons) in Software Engineering, focusing on full-stack architecture, object-oriented programming, data structures, and enterprise application development.',
    icon: <FaGraduationCap className="text-red-600 dark:text-red-400" />,
    badge: 'Undergraduate Degree',
    highlight: 'Software Engineering Specialization'
  },
  {
    period: '2023',
    degree: 'Diploma in English',
    institution: 'British Way English Academy, Kiribathgoda',
    faculty: 'Professional English Certification',
    description: 'Successfully completed Diploma in English focusing on professional communication, technical writing, and business presentations.',
    icon: <FaAward className="text-amber-500 dark:text-amber-400" />,
    badge: 'Diploma',
    highlight: 'Advanced English Proficiency'
  },
  {
    period: '2022',
    degree: 'G.C.E. Advanced Level Examination',
    institution: 'D.S. Senanayake College, Colombo 07',
    faculty: 'Engineering Technology Stream',
    description: 'Completed G.C.E. Advanced Level Examination in the Engineering Technology stream with 3Cs.',
    icon: <FaSchool className="text-purple-600 dark:text-purple-400" />,
    badge: 'Secondary Education',
    highlight: 'Engineering Technology Stream (3Cs)'
  },
  {
    period: '2019',
    degree: 'Cambridge English Diploma (KET)',
    institution: 'Cambridge Assessment English',
    faculty: 'International Qualification',
    description: 'Awarded Cambridge English Diploma (Key English Test) with an outstanding score of 149 out of 150.',
    icon: <FaCertificate className="text-emerald-500 dark:text-emerald-400" />,
    badge: 'International Certification',
    highlight: 'Score: 149 / 150'
  },
  {
    period: '2019',
    degree: 'G.C.E. Ordinary Level Examination',
    institution: 'Asoka College, Colombo 10',
    faculty: 'Secondary Education',
    description: 'Completed G.C.E. Ordinary Level Examination with excellent results comprising 4As and 5Bs.',
    icon: <FaBookReader className="text-blue-500 dark:text-blue-400" />,
    badge: 'Ordinary Level',
    highlight: '4As & 5Bs'
  }
];

const EducationQualifications = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Central Glowing Line */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-600 via-rose-500 to-amber-500 rounded-full opacity-30 dark:opacity-40" />

      <div className="space-y-10">
        {educationList.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Central Pulse Node */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-2xl bg-white dark:bg-gray-900 border-2 border-red-600 dark:border-red-500 shadow-xl flex items-center justify-center text-base z-10">
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8 w-full">
                <div className="p-6 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/90 dark:border-gray-800 hover:border-red-400/80 dark:hover:border-red-500/60 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-bold rounded-full border border-transparent dark:border-red-900/50">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-transparent dark:border-gray-700/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-3">
                    {item.faculty}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-xl bg-red-50/70 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-900/50">
                      ✨ {item.highlight}
                    </span>
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

export default EducationQualifications;
