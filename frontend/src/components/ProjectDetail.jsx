import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaBars, FaTimes, FaSpinner, FaCheckCircle, FaExclamationCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { useContactForm } from '../hooks/useContactForm';
import { getProjectById } from '../data/projectsData';
import { getTechIcon } from '../lib/techIcons';
import PageTransition from './PageTransition';
import ScrollProgress from './ui/ScrollProgress';
import ThemeToggle from './ui/ThemeToggle';

const ProjectDetail = () => {
  const { id } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = getProjectById(id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-full font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-700/20"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 relative selection:bg-red-500 selection:text-white transition-colors duration-300">
        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Logo */}
        <div className="fixed top-8 left-8 z-50">
          <Link to="/" className="block">
            <div className="w-12 h-12 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border border-gray-200/80 dark:border-gray-800 group">
              <img 
                src="/assets/images/nd-logo.png" 
                alt="ND Logo" 
                className="w-full h-full object-cover group-hover:rotate-6 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="fixed top-8 right-8 z-50">
          <div className="hidden md:flex items-center space-x-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl px-6 py-2.5 rounded-full border border-gray-200/80 dark:border-gray-800 shadow-xl">
            <Link 
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Stack
            </Link>
            <Link 
              to="/projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Experience
            </Link>
            <Link 
              to="/#education"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Education
            </Link>
            <Link 
              to="/#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/profile"
              className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md shadow-red-700/20 transition-all hover:scale-105"
            >
              About
            </Link>

            {/* Theme Toggle Button */}
            <div className="pl-1 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu & Toggle Container */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle className="p-3 bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800" />
            <button 
              className="p-3 bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-5 min-w-[220px]">
              <div className="space-y-3">
                <Link 
                  to="/"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/#skills"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stack & Skills
                </Link>
                <Link 
                  to="/projects"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Featured Projects
                </Link>
                <Link 
                  to="/#experience"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work Experience
                </Link>
                <Link 
                  to="/#education"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Educational Qualifications
                </Link>
                <Link 
                  to="/#contact"
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/profile"
                  className="block text-white bg-red-700 px-4 py-2.5 rounded-2xl font-semibold text-center text-xs uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Nisal
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Header Section */}
        <section className="pt-36 pb-16 px-6 bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#0b0f19] dark:via-gray-900/40 dark:to-[#0b0f19] border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium mb-8 text-sm"
            >
              <FaArrowLeft />
              Back to All Projects
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white tracking-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-xl border border-gray-200/60 dark:border-gray-700/60"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 justify-center shadow-md border border-transparent dark:border-gray-700"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-700 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-red-800 transition-all duration-300 justify-center shadow-md shadow-red-700/20"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a 
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-purple-600 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-purple-600 hover:text-white transition-all duration-300 justify-center"
                    >
                      <SiFigma />
                      View Prototype
                    </a>
                  )}
                </div>
              </div>

              <div className="relative">
                {project.videoUrl ? (
                  <div className="aspect-video bg-gray-950 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={project.image}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {project.figmaUrl && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
                        >
                          <SiFigma className="text-purple-600 text-base" />
                          View Prototype
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-20 bg-gray-50/60 dark:bg-[#070a12] border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-gray-950 dark:text-white tracking-tight mb-8">
              Project Details & Architecture
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                <div key={index} className="bg-white dark:bg-gray-900/80 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2 last:mb-0">
                      {line.trim().startsWith('•') || line.trim().startsWith('-') ? (
                        <span className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400 font-bold mt-1">•</span>
                          <span>{line.replace(/^[•\-]\s*/, '')}</span>
                        </span>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white dark:bg-[#0b0f19]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                LET'S COLLABORATE
              </div>
              <h2 className="text-4xl font-black text-gray-950 dark:text-white mb-4 tracking-tight">
                Interested in This Project?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions or want to discuss similar custom engineering solutions? Get in touch!
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-gray-50/70 dark:bg-gray-900/90 p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-2xl flex items-center gap-3 ${
                    status.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-950/40 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}>
                    {status.type === 'success' ? (
                      <FaCheckCircle className="text-green-600 dark:text-green-400" />
                    ) : (
                      <FaExclamationCircle className="text-red-600 dark:text-red-400" />
                    )}
                    <span className="text-sm font-medium">{status.message}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all resize-none"
                    placeholder={`I'm interested in the ${project.title} project. I'd like to know more about...`}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-700 text-white py-4 rounded-2xl hover:bg-red-800 transition-all font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-red-700/20 hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
                <img 
                  src="/assets/images/nd-logo.png" 
                  alt="ND Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white">Nisal Dushmantha</span>
            </div>
            
            <p className="text-gray-400 text-xs mb-6 max-w-md mx-auto">
              Full-stack developer crafting digital experiences with modern technologies.
            </p>
            
            <div className="border-t border-gray-800 pt-8 text-xs text-gray-500">
              <p>&copy; 2026 Nisal Dushmantha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
