import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaBars, FaTimes, FaSearch, FaThLarge, FaList, 
  FaFilter, FaTimesCircle, FaArrowRight, FaCode, FaLaptopCode
} from 'react-icons/fa';
import PageTransition from './PageTransition';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectQuickModal from './ProjectQuickModal';
import ScrollProgress from './ui/ScrollProgress';
import ThemeToggle from './ui/ThemeToggle';

const AllProjects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [quickModalProject, setQuickModalProject] = useState(null);
  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-development', label: 'Web Development' },
    { key: 'ui-ux', label: 'UI/UX Design' },
    { key: 'android', label: 'Android Apps' }
  ];

  const handleOpenQuickModal = (project) => {
    setQuickModalProject(project);
    setIsQuickModalOpen(true);
  };

  const handleCloseQuickModal = () => {
    setIsQuickModalOpen(false);
  };

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      
      if (!searchQuery.trim()) return matchesCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesDesc = project.description.toLowerCase().includes(query);
      const matchesTech = project.tech.some(t => t.toLowerCase().includes(query));
      const matchesCategoryName = project.category?.toLowerCase().includes(query);

      return matchesCategory && (matchesTitle || matchesDesc || matchesTech || matchesCategoryName);
    });
  }, [activeFilter, searchQuery]);

  const clearFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
  };

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
            <span className="text-white bg-red-700 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md shadow-red-700/20">
              Projects
            </span>
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
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              About
            </Link>

            {/* Theme Toggle Button */}
            <div className="pl-1 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button Container */}
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
                <span className="block text-white bg-red-700 px-4 py-2.5 rounded-2xl font-semibold text-center text-xs uppercase tracking-wider">
                  Featured Projects
                </span>
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
                  className="block text-gray-700 dark:text-gray-300 font-semibold py-2 text-sm hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Nisal
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Header Section */}
        <section className="pt-36 pb-12 px-6 bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#0b0f19] dark:via-gray-900/40 dark:to-[#0b0f19]">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-transparent dark:border-red-900/50 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              PORTFOLIO ARCHIVE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-950 dark:text-white tracking-tight mb-4">
              Explore All Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive showcase of full-stack web platforms, interactive UI/UX prototypes, and Android applications.
            </p>
          </div>
        </section>

        {/* Filter, Search & View Controls Bar */}
        <section className="px-6 pb-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search and View Mode Switcher */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-gray-50/80 dark:bg-gray-900/80 p-3 md:p-4 rounded-3xl border border-gray-200 dark:border-gray-800">
              {/* Search Box */}
              <div className="relative flex-grow max-w-lg">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, technology (e.g. React, Kotlin, MongoDB)..."
                  className="w-full pl-11 pr-10 py-3 bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <FaTimesCircle className="text-base" />
                  </button>
                )}
              </div>

              {/* View Switcher & Result Count */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
                </span>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-white dark:bg-gray-800 p-1 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewMode === 'grid'
                        ? 'bg-gray-900 dark:bg-red-700 text-white shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    title="Grid View"
                  >
                    <FaThLarge className="text-sm" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewMode === 'list'
                        ? 'bg-gray-900 dark:bg-red-700 text-white shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    title="List View"
                  >
                    <FaList className="text-sm" />
                    <span className="hidden sm:inline">List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {categories.map((category) => {
                const count = category.key === 'all'
                  ? projectsData.length
                  : projectsData.filter(p => p.category === category.key).length;

                return (
                  <button
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                      activeFilter === category.key
                        ? 'bg-gray-950 dark:bg-red-700 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-transparent dark:border-gray-700/60'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeFilter === category.key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Display Section */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Grid or List Layout */}
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'flex flex-col gap-6'
                }
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onQuickView={handleOpenQuickModal}
                      viewMode={viewMode}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/80 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-8">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FaFilter />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Matching Projects</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6 text-sm">
                  We couldn't find any projects matching "{searchQuery}". Try searching with different keywords or reset your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-gray-900 dark:bg-red-700 text-white text-xs font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-red-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick View Modal */}
        <ProjectQuickModal
          project={quickModalProject}
          isOpen={isQuickModalOpen}
          onClose={handleCloseQuickModal}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 dark:bg-[#070a12] text-white relative overflow-hidden border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Have a Custom Project in Mind?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm open for freelance opportunities, full-stack collaborations, and software engineering roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className="bg-red-700 text-white px-8 py-3.5 rounded-full hover:bg-red-800 transition-all font-medium text-sm shadow-lg shadow-red-700/30"
              >
                Let's Build Something
              </Link>
              <Link 
                to="/profile"
                className="border border-gray-600 text-white hover:bg-white/10 px-8 py-3.5 rounded-full transition-all font-medium text-sm"
              >
                View Full Background
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
                    <img 
                      src="/assets/images/nd-logo.png" 
                      alt="ND Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-lg font-bold text-white">Nisal Dushmantha</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Full-stack developer crafting digital experiences with modern technologies and creative solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4 text-white text-sm">Quick Links</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/profile" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/#projects" className="hover:text-white transition-colors">Featured Projects</Link></li>
                  <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4 text-white text-sm">Expertise</h4>
                <ul className="space-y-2 text-xs">
                  <li>Web Development (MERN)</li>
                  <li>UI/UX Prototyping (Figma)</li>
                  <li>Android Studio & Kotlin</li>
                  <li>REST APIs & Database Design</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4 text-white text-sm">Get In Touch</h4>
                <div className="space-y-2 text-xs">
                  <p>lawanyanisal@gmail.com</p>
                  <p>Kaduwela, Sri Lanka</p>
                  <div className="flex gap-3 mt-4">
                    <a 
                      href="https://github.com/Nisal-Dushmantha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
              <p>&copy; 2026 Nisal Dushmantha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default AllProjects;
