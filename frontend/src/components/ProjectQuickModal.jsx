import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaArrowRight, FaCheckCircle, FaPlay } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { getTechIcon } from '../lib/techIcons';

const ProjectQuickModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Extract key bullet points if available in detailed description
  const bulletPoints = project.detailedDescription
    ? project.detailedDescription
        .split('\n')
        .filter(line => line.trim().startsWith('•') || line.trim().startsWith('-'))
        .slice(0, 5)
        .map(line => line.replace(/^[•\-]\s*/, ''))
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                {project.category?.replace('-', ' ') || 'Project'}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full flex items-center gap-1">
                  ★ Featured
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-grow custom-scrollbar">
            {/* Media Area */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 aspect-video shadow-inner flex items-center justify-center">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={project.image}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Title & Overview */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Key Features Bullet Points */}
            {bulletPoints.length > 0 && (
              <div className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-red-600" /> Key Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {bulletPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-100 hover:bg-gray-200/80 text-gray-800 rounded-xl text-xs font-medium transition-colors"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm shadow-red-700/20"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Preview
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all"
                >
                  <FaGithub className="text-sm" />
                  Source Code
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100 px-4 py-2.5 rounded-xl font-medium text-sm transition-all"
                >
                  <SiFigma className="text-sm" />
                  Figma Design
                </a>
              )}
            </div>

            <Link
              to={`/project/${project.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-gray-800 hover:text-red-700 font-semibold text-sm transition-colors ml-auto group"
            >
              Full Case Study
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectQuickModal;
