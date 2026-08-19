import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Sri Lanka Standards Institution (SLSI)',
    department: 'Information Technology Division',
    period: 'Present (2026)',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    current: true,
    description: 'Contributing to enterprise software systems, internal digital platforms, and IT infrastructure operations at the national standards body of Sri Lanka.',
    responsibilities: [
      'Engaging in software engineering and application modernization for enterprise operations.',
      'Developing and maintaining full-stack web modules, backend APIs, and database integrations.',
      'Collaborating with cross-functional IT teams to optimize internal operational workflows and system reliability.',
      'Adhering to quality assurance standards, clean code architecture, and documentation best practices.'
    ],
    techStack: ['Software Engineering', 'Enterprise Systems', 'Full Stack Development', 'Database Management', 'API Integration', 'Git']
  }
];

const WorkExperience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 hover:border-red-400/80 shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          {/* Top Banner with Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-2xl text-emerald-600 shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaBriefcase />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Internship
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                  {exp.role}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-200 text-xs font-bold text-gray-700">
              <FaCalendarAlt className="text-red-600" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Company & Department Details */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
              <div className="flex items-center gap-2 text-gray-900 font-bold">
                <FaBuilding className="text-red-600" />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{exp.location}</span>
              </div>
              <div className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-xl font-bold">
                {exp.department}
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Key Responsibilities & Scope
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {exp.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100">
                  <FaCheckCircle className="text-emerald-500 text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700 leading-relaxed font-medium">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Domains & Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-red-50 text-gray-800 hover:text-red-700 text-xs font-semibold transition-colors border border-gray-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;
