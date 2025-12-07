import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaJs, FaPython, FaHtml5, FaCss3, FaMobile, FaLaptop, FaBars, FaTimes, FaPaintBrush, FaAndroid, FaGoogle } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiVite, SiPython, SiJavascript, SiTypescript, SiFigma, SiKotlin, SiAndroid, SiMaterialdesign } from 'react-icons/si';
import PageTransition from './PageTransition';

const AllProjects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Expanded projects data
  const allProjects = [

    {
      id: 1,
      title: "Motor Bikes and Spare parts Management System",
      description: "Full-stack Motor Bikes and Spare parts Management System with user authentication, product, inventory, services and repairs and finance management features.",
      tech: ["MERN", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/assets/images/rathnasiri-motors-dashboard.png",
      github: "https://github.com/Nisal-Dushmantha/Rathnasiri_Motors.git",
      category: "web-development",
      featured: true
    },
    {
      id: 2,
      title: "BrewMe - UI/UX Design Project",
      description: "A mobile application designed to streamline the coffee ordering process for customers and baristas.",
      tech: ["Figma", "UI/UX Design"],
      image: "/assets/images/brewme-screenshot.png",
      github: "https://github.com/Nisal-Dushmantha/BrewMeFigma.git",
      category: "ui-ux",
      featured: true
    },
    {
      id: 3,
      title: "Brew Now - Android UI/UX Design",
      description: "Android mobile application UI/UX design prototype created with Android Studio and Kotlin, focusing on coffee ordering user experience.",
      tech: ["Android Studio", "Kotlin", "Material Design", "XML Layouts", "UI/UX Design"],
      image: "/assets/images/brew-now-android-studio.png",
      github: "https://github.com/Nisal-Dushmantha/BrewNow-AS.git",
      category: "android",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-development', label: 'Web Development' },
    { key: 'ui-ux', label: 'UI/UX' },
    { key: 'android', label: 'Android' }
  ];

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react': return <FaReact className="text-blue-500" />;
      case 'node.js': return <FaNodeJs className="text-green-500" />;
      case 'mongodb': return <SiMongodb className="text-green-600" />;
      case 'express': return <SiExpress className="text-gray-600" />;
      case 'tailwind css': return <SiTailwindcss className="text-cyan-500" />;
      case 'firebase': return <SiFirebase className="text-orange-500" />;
      case 'vite': return <SiVite className="text-purple-500" />;
      case 'python': return <SiPython className="text-blue-600" />;
      case 'javascript': return <SiJavascript className="text-yellow-500" />;
      case 'typescript': return <SiTypescript className="text-blue-600" />;
      case 'html5': return <FaHtml5 className="text-orange-600" />;
      case 'css3': return <FaCss3 className="text-blue-600" />;
      case 'figma': return <SiFigma className="text-purple-600" />;
      case 'ui/ux design': return <FaPaintBrush className="text-pink-500" />;
      case 'ui/ux': return <FaPaintBrush className="text-pink-500" />;
      case 'android': return <SiAndroid className="text-green-500" />;
      case 'android studio': return <SiAndroid className="text-green-600" />;
      case 'kotlin': return <SiKotlin className="text-purple-700" />;
      case 'google maps api': return <FaGoogle className="text-blue-600" />;
      case 'material design': return <SiMaterialdesign className="text-blue-500" />;
      case 'xml layouts': return <FaAndroid className="text-green-700" />;
      default: return <FaJs className="text-yellow-500" />;
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
      {/* Floating Logo */}
      <div className="fixed top-8 left-8 z-50">
        <Link to="/" className="block">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border border-gray-100">
            <img 
              src="/assets/images/nd-logo.png" 
              alt="ND Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 right-8 z-50">
        <div className="hidden md:flex items-center space-x-8 bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full border border-gray-200 shadow-lg">
          <Link 
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            Home
          </Link>
          <button 
            className="text-red-700 transition-colors font-medium text-sm"
          >
            Projects
          </button>
          <Link 
            to="/#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            Contact
          </Link>
          <Link 
            to="/profile"
            className="text-white bg-red-700 px-4 py-2 rounded-full font-medium text-sm"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3 bg-white rounded-full shadow-lg border border-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 py-4 md:hidden">
            <Link 
              to="/"
              className="block px-6 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button 
              className="block w-full text-left px-6 py-2 text-red-700 hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              Projects
            </button>
            <Link 
              to="/#contact"
              className="block px-6 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/profile"
              className="block px-6 py-2 text-white bg-red-700 mx-4 mt-2 rounded-full text-center font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my complete collection of projects, from frontend applications to full-stack solutions. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link 
                      to={`/project/${project.id}`}
                      className="flex-1 bg-gray-900 text-white text-center py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                    >
                      Read More
                    </Link>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-medium text-sm"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              Get In Touch
            </Link>
            <Link 
              to="/profile"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/assets/images/nd-logo.png" 
                    alt="ND Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold">Nisal Dushmantha</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack developer crafting digital experiences with modern technologies and creative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/profile" className="hover:text-white transition-colors">About</Link></li>
                <li><button className="hover:text-white transition-colors">Projects</button></li>
                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors">Web Development</li>
                <li className="hover:text-white transition-colors">Mobile Apps</li>
                <li className="hover:text-white transition-colors">UI/UX Design</li>
                <li className="hover:text-white transition-colors">Consulting</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>lawanyanisal@gmail.com</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/Nisal-Dushmantha" className="hover:text-white transition-colors">
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Nisal Dushmantha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default AllProjects;
