import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes, 
  FaDownload, FaExternalLinkAlt, FaSpinner, FaCheckCircle, FaExclamationCircle, 
  FaArrowRight, FaCode, FaLaptopCode, FaClock, FaTerminal, FaLayerGroup, FaRocket,
  FaGraduationCap, FaBriefcase
} from 'react-icons/fa';
import { useContactForm } from '../hooks/useContactForm';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../context/ThemeContext';
import PageTransition from './PageTransition';
import Particles from './ui/Particles';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectQuickModal from './ProjectQuickModal';
import DevTerminal from './ui/DevTerminal';
import TechMarquee from './ui/TechMarquee';
import SkillsMatrix from './ui/SkillsMatrix';
import WorkExperience from './ui/WorkExperience';
import EducationQualifications from './ui/EducationQualifications';
import TypewriterText from './ui/TypewriterText';
import ScrollProgress from './ui/ScrollProgress';
import ThemeToggle from './ui/ThemeToggle';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [quickModalProject, setQuickModalProject] = useState(null);
  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();
  const activeSection = useActiveSection();
  const { isDark } = useTheme();

  // Load page at top position and run live local clock for Sri Lanka (UTC+5:30)
  useEffect(() => {
    window.scrollTo(0, 0);

    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleOpenQuickModal = (project) => {
    setQuickModalProject(project);
    setIsQuickModalOpen(true);
  };

  const handleCloseQuickModal = () => {
    setIsQuickModalOpen(false);
  };

  const featuredProjects = projectsData.filter(project => project.featured);
  
  const displayedProjects = activeFilter === 'all'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeFilter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 relative selection:bg-red-500 selection:text-white transition-colors duration-300">
        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Page-wide Particle Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles 
            particleCount={50} 
            color={isDark ? '248,113,113' : '239,68,68'} 
            maxSize={3} 
            maxVelocity={0.5} 
            linkDistance={110} 
          />
        </div>

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
            <button 
              onClick={() => scrollToSection('hero')}
              className={`transition-colors font-semibold text-xs uppercase tracking-wider ${
                activeSection === 'hero' 
                  ? 'text-red-600 dark:text-red-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors font-semibold text-xs uppercase tracking-wider"
            >
              Stack
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors font-semibold text-xs uppercase tracking-wider ${
                activeSection === 'projects' 
                  ? 'text-red-600 dark:text-red-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`transition-colors font-semibold text-xs uppercase tracking-wider ${
                activeSection === 'experience' 
                  ? 'text-red-600 dark:text-red-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`transition-colors font-semibold text-xs uppercase tracking-wider ${
                activeSection === 'education' 
                  ? 'text-red-600 dark:text-red-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-semibold text-xs uppercase tracking-wider ${
                activeSection === 'contact' 
                  ? 'text-red-600 dark:text-red-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              Contact
            </button>
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

          {/* Mobile Menu & Toggle Button Container */}
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

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-5 min-w-[220px]">
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Stack & Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Featured Projects
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Work Experience
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Educational Qualifications
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left font-semibold py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                >
                  Contact
                </button>
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

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-white via-red-50/20 to-white dark:from-[#0b0f19] dark:via-red-950/10 dark:to-[#0b0f19] pt-28 pb-16 relative">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Hero Text & Interactive Info */}
              <div className="lg:col-span-6 space-y-7">
                {/* Live Status HUD Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 px-3.5 py-1.5 rounded-full shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      Available for hire & projects
                    </span>
                  </div>

                  {currentTime && (
                    <div className="inline-flex items-center gap-2 bg-gray-100/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-600 dark:text-gray-300 font-mono">
                      <FaClock className="text-red-600 dark:text-red-400" />
                      <span>{currentTime} (Sri Lanka)</span>
                    </div>
                  )}
                </div>

                {/* Main Heading with Typewriter */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Hello, I'm
                  </p>
                  <h1 className="text-4xl sm:text-6xl font-black text-gray-950 dark:text-white tracking-tight leading-none">
                    Nisal <span className="text-red-700 dark:text-red-500">Dushmantha</span>
                  </h1>
                  <div className="text-xl sm:text-2xl font-bold min-h-[36px] flex items-center">
                    <TypewriterText />
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Undergraduate at <span className="font-semibold text-gray-900 dark:text-white">SLIIT</span> passionate about engineering resilient full-stack platforms, native Android applications, and human-centered design systems.
                </p>

                {/* Action Hub */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="bg-gray-950 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-950/15 flex items-center gap-2 group"
                  >
                    <span>Explore Featured Work</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a 
                    href="/assets/documents/Nisal_Dushmantha_CV.pdf"
                    download="Nisal_Dushmantha_CV.pdf"
                    className="border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-800 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 bg-white dark:bg-gray-900 shadow-sm"
                  >
                    <FaDownload className="text-xs text-red-600 dark:text-red-400" />
                    Download Resume
                  </a>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800">
                  <div className="bg-gray-50/80 dark:bg-gray-900/80 p-3.5 rounded-2xl border border-gray-200/80 dark:border-gray-800">
                    <div className="text-2xl font-black text-red-700 dark:text-red-500">10+</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Projects Built</div>
                  </div>
                  <div className="bg-gray-50/80 dark:bg-gray-900/80 p-3.5 rounded-2xl border border-gray-200/80 dark:border-gray-800">
                    <div className="text-2xl font-black text-red-700 dark:text-red-500">3+</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Years Coding</div>
                  </div>
                  <div className="bg-gray-50/80 dark:bg-gray-900/80 p-3.5 rounded-2xl border border-gray-200/80 dark:border-gray-800">
                    <div className="text-2xl font-black text-red-700 dark:text-red-500">&lt;24h</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Response Time</div>
                  </div>
                  <div className="bg-gray-50/80 dark:bg-gray-900/80 p-3.5 rounded-2xl border border-gray-200/80 dark:border-gray-800">
                    <div className="text-2xl font-black text-red-700 dark:text-red-500">100%</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Dedication</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Nisal's Profile Photo with Floating Glassmorphic Badges */}
              <div className="lg:col-span-6 flex justify-center items-center relative">
                <div className="relative w-full max-w-md">
                  {/* Glowing Ambient Backdrop */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-25 dark:opacity-35 animate-pulse" />
                  
                  {/* Photo Container */}
                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-white dark:bg-gray-900 p-2 shadow-2xl border border-gray-100 dark:border-gray-800 group">
                    <div className="relative rounded-[2.2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square">
                      <img
                        src="/assets/images/nisal-profile.jpg"
                        alt="Nisal Dushmantha"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Floating Tech Badge 1: Top Right */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -top-4 -right-4 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-xl flex items-center gap-2.5"
                  >
                    <span className="text-xl">⚛️</span>
                    <div>
                      <div className="text-[11px] font-bold text-gray-900 dark:text-white">MERN Full-Stack</div>
                      <div className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">Production Ready</div>
                    </div>
                  </motion.div>

                  {/* Floating Tech Badge 2: Bottom Left */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-4 -left-4 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-xl flex items-center gap-2.5"
                  >
                    <span className="text-xl">📱</span>
                    <div>
                      <div className="text-[11px] font-bold text-gray-900 dark:text-white">Android & Kotlin</div>
                      <div className="text-[9px] font-semibold text-purple-600 dark:text-purple-400">Native UI/UX</div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 3: Bottom Right Status */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-6 -right-5 z-20 bg-gray-950/90 dark:bg-gray-900/95 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl border border-gray-800 shadow-xl flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-bold tracking-wide">SLIIT Undergraduate</span>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Infinite Tech Stack Marquee */}
        <TechMarquee />

        {/* Skills & Tech Radar Section */}
        <section id="skills" className="py-24 bg-white dark:bg-[#0b0f19] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <FaLayerGroup className="text-xs" />
                TECHNICAL EXPERTISE
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
                Core Engineering Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base">
                Tools, frameworks, and architecture patterns I leverage to build scalable, high-performance digital products.
              </p>
            </div>

            <SkillsMatrix />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-50/60 to-white dark:from-[#0b0f19] dark:via-gray-900/40 dark:to-[#0b0f19] relative">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  Selected Works
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl text-base">
                  A showcase of my recent full-stack applications, interactive UI/UX designs, and mobile prototypes.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 bg-gray-100/80 dark:bg-gray-800/80 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700 self-start md:self-auto">
                {[
                  { key: 'all', label: 'All Featured' },
                  { key: 'web-development', label: 'Web Apps' },
                  { key: 'ui-ux', label: 'UI/UX' },
                  { key: 'android', label: 'Android' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative ${
                      activeFilter === tab.key
                        ? 'text-white bg-gray-950 dark:bg-red-700 shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-gray-700/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bento Spotlight Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onQuickView={handleOpenQuickModal}
                    viewMode="grid"
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Bar / Explore More */}
            <div className="mt-14 pt-8 border-t border-gray-200/80 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Showing {displayedProjects.length} of {projectsData.length} projects
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-3 bg-gray-950 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 text-white px-8 py-3.5 rounded-2xl font-medium text-sm transition-all duration-300 hover:scale-105 shadow-md shadow-gray-900/10 group"
              >
                <span>Explore All {projectsData.length} Projects</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 1. Work Experience Section */}
        <section id="experience" className="py-24 bg-white dark:bg-[#0b0f19] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-transparent dark:border-emerald-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <FaBriefcase className="text-xs text-emerald-600 dark:text-emerald-400" />
                CAREER MILESTONES
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
                Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base">
                Industry software engineering experience, enterprise system development, and technical roles.
              </p>
            </div>

            <WorkExperience />
          </div>
        </section>

        {/* 2. Educational Qualifications Section */}
        <section id="education" className="py-24 bg-gray-50/60 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800/80 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <FaGraduationCap className="text-xs text-red-600 dark:text-red-400" />
                ACADEMIC BACKGROUND
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
                Educational Qualifications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base">
                Degree studies at SLIIT, professional English diploma, and secondary schooling credentials.
              </p>
            </div>

            <EducationQualifications />
          </div>
        </section>

        {/* Quick View Modal */}
        <ProjectQuickModal
          project={quickModalProject}
          isOpen={isQuickModalOpen}
          onClose={handleCloseQuickModal}
        />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0b0f19] dark:via-gray-900/70 dark:to-gray-950 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                LET'S TALK
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-950 dark:text-white mb-4 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have an engineering opportunity, contract role, or project idea? Let's connect!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 bg-white dark:bg-gray-900/90 p-8 rounded-3xl border border-gray-200/90 dark:border-gray-800 shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Channels</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 dark:bg-red-950/60 rounded-2xl flex items-center justify-center">
                        <FaEnvelope className="text-red-700 dark:text-red-400 text-lg" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">Direct Email</p>
                        <a href="mailto:lawanyanisal@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-colors text-sm">
                          lawanyanisal@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 dark:bg-red-950/60 rounded-2xl flex items-center justify-center">
                        <span className="text-red-700 dark:text-red-400 text-lg">📍</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">Location</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Kaduwela, Sri Lanka (Remote-ready)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Developer Profiles & Socials
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Nisal-Dushmantha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-900 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-md border border-transparent dark:border-gray-700"
                      title="GitHub Profile"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-md"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/lawa.nya_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white hover:bg-pink-700 transition-all hover:scale-110 shadow-md"
                      title="Instagram Profile"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white dark:bg-gray-900/90 p-8 rounded-3xl border border-gray-200/90 dark:border-gray-800 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-red-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all"
                      placeholder="e.g. Alex Morgan"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-red-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all"
                      placeholder="e.g. alex@company.com"
                      required
                    />
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
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-red-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all resize-none"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-2xl transition-all font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-red-700/20 hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-16 relative z-10 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 overflow-hidden border border-gray-200">
                  <img 
                    src="/assets/images/nd-logo.png" 
                    alt="ND Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Nisal Dushmantha</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Full-Stack MERN Developer, Android & Kotlin Engineer, and UI/UX Designer.
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
                <div className="space-y-2 text-xs">
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Skills & Stack
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Featured Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('education')}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Education
                  </button>
                  <Link 
                    to="/profile"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    About Nisal
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Specializations</h4>
                <div className="space-y-2 text-xs text-gray-400">
                  <p>MERN Stack Engineering</p>
                  <p>Native Android & Kotlin</p>
                  <p>UI/UX Design Systems</p>
                  <p>RESTful API & Database Architecture</p>
                  <p>Performance & SEO Tuning</p>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Direct Contact</h4>
                <div className="space-y-2 text-xs">
                  <a 
                    href="mailto:lawanyanisal@gmail.com"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    lawanyanisal@gmail.com
                  </a>
                  <p className="text-gray-400">Kaduwela, Sri Lanka</p>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="https://github.com/Nisal-Dushmantha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-500 text-xs">
                © 2026 Nisal Dushmantha. Built with React 19, Tailwind CSS & Framer Motion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Home;
