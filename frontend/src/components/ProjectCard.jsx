import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaArrowRight, FaPlay } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { getTechIcon } from '../lib/techIcons';

const ProjectCard = ({ project, onQuickView, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'web-development':
        return { label: 'Web Dev', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'ui-ux':
        return { label: 'UI/UX Design', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'android':
        return { label: 'Android App', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      default:
        return { label: 'Project', bg: 'bg-gray-100 text-gray-700 border-gray-200' };
    }
  };

  const categoryBadge = getCategoryBadge(project.category);

  // List View Layout
  if (viewMode === 'list') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-white rounded-2xl border border-gray-200/90 hover:border-red-400/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center p-4 md:p-6 gap-6"
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.08), transparent 80%)`,
          }}
        />

        {/* Thumbnail Preview */}
        <div className="relative w-full md:w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-gray-900 border border-gray-100 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          )}
          {project.featured && (
            <span className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
              FEATURED
            </span>
          )}
          {project.videoUrl && (
            <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
              <FaPlay className="text-[8px]" /> Video Demo
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-grow flex flex-col justify-between w-full">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${categoryBadge.bg}`}>
                {categoryBadge.label}
              </span>
            </div>
            <Link to={`/project/${project.id}`} className="block group/title">
              <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-red-700 transition-colors">
                {project.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
            {/* Tech chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-lg font-medium"
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs text-gray-400 font-medium pl-1">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuickView(project)}
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Quick View"
              >
                <FaEye className="text-sm" />
                <span className="hidden sm:inline">Preview</span>
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-200 hover:border-gray-900 text-gray-700 hover:text-gray-900 transition-colors"
                  title="Source Code"
                >
                  <FaGithub className="text-sm" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-700 hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              <Link
                to={`/project/${project.id}`}
                className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                Case Study <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View Layout (Bento Style with Spotlight)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-3xl border border-gray-200/90 hover:border-red-400/70 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.07), transparent 75%)`,
        }}
      />

      {/* Media Header Container */}
      <div className="relative w-full h-52 bg-gray-950 overflow-hidden z-10">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className={`text-[11px] px-3 py-1 rounded-full border font-semibold shadow-sm backdrop-blur-md ${categoryBadge.bg}`}>
            {categoryBadge.label}
          </span>
          {project.featured && (
            <span className="bg-red-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 tracking-wide">
              ★ Featured
            </span>
          )}
        </div>

        {/* Quick Action Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <button
            onClick={() => onQuickView(project)}
            className="px-3.5 py-2 bg-white/95 hover:bg-white text-gray-900 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <FaEye className="text-red-600" />
            Quick Preview
          </button>

          <div className="flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs shadow-md transition-colors"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs shadow-md transition-colors"
                title="Figma Prototype"
              >
                <SiFigma />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-black text-white rounded-xl text-xs shadow-md transition-colors"
                title="GitHub Repo"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Video indicator badge if has video */}
        {project.videoUrl && !isHovered && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 pointer-events-none">
            <FaPlay className="text-[7px]" /> Video Demo
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow z-10 bg-white">
        <Link to={`/project/${project.id}`} className="block group/title">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover/title:text-red-700 transition-colors line-clamp-1">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 4).map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 bg-gray-50 border border-gray-200/70 text-gray-700 text-[11px] font-medium rounded-lg px-2.5 py-1"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] text-gray-400 font-medium self-center px-1">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
          <Link
            to={`/project/${project.id}`}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2.5 rounded-xl transition-all font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm group/btn"
          >
            <span>Case Study</span>
            <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-gray-200 hover:border-gray-900 text-gray-700 hover:text-gray-900 rounded-xl transition-colors"
              title="GitHub Code"
            >
              <FaGithub className="text-sm" />
            </a>
          )}
          
          <button
            onClick={() => onQuickView(project)}
            className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
            title="Quick View"
          >
            <FaEye className="text-sm" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
