import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes, FaDownload, FaExternalLinkAlt, FaSpinner, FaCheckCircle, FaExclamationCircle, FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPaintBrush, FaAndroid, FaGoogle } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiVite, SiPython, SiJavascript, SiTypescript, SiFigma, SiKotlin, SiAndroid, SiMaterialdesign } from 'react-icons/si';
import { useContactForm } from '../hooks/useContactForm';
import { useActiveSection } from '../hooks/useActiveSection';
import PageTransition from './PageTransition';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();
  const activeSection = useActiveSection();

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

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
      case 'mern': return <FaReact className="text-blue-500" />;
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

  const projects = [
    {
      id: 1,
      title: "Motor Bikes and Spare parts Management System",
      description: "Full-stack Motor Bikes and Spare parts Management System with user authentication, product, inventory, services and repairs and finance management features.",
      tech: ["MERN", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/assets/images/rathnasiri-motors-dashboard.png",
      github: "https://github.com/Nisal-Dushmantha/Rathnasiri_Motors.git"
    },
    {
      id: 2,
      title: "BrewMe - UI/UX Design Project",
      description: "A mobile application designed to streamline the coffee ordering process for customers and baristas.",
      tech: ["Figma", "UI/UX Design"],
      image: "/assets/images/brewme-screenshot.png",
      github: "https://github.com/Nisal-Dushmantha/BrewMeFigma.git",
    },
    {
      id: 3,
      title: "Brew Now - Android UI/UX Design",
      description: "Android mobile application UI/UX design prototype created with Android Studio and Kotlin, focusing on coffee ordering user experience.",
      tech: ["Android Studio", "Kotlin", "Material Design", "XML Layouts", "UI/UX Design"],
      image: "/assets/images/brew-now-android-studio.png",
      github: "https://github.com/Nisal-Dushmantha/BrewNow-AS.git"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
      {/* Floating Logo */}
      <div className="fixed top-8 left-8 z-50">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border border-gray-100">
          <img 
            src="/assets/images/nd-logo.png" 
            alt="ND Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 right-8 z-50">
        <div className="hidden md:flex items-center space-x-8 bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full border border-gray-200 shadow-lg">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`transition-colors font-medium text-sm ${
              activeSection === 'hero' 
                ? 'text-red-700' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`transition-colors font-medium text-sm ${
              activeSection === 'projects' 
                ? 'text-red-700' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition-colors font-medium text-sm ${
              activeSection === 'contact' 
                ? 'text-red-700' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contact
          </button>
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white/95 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg p-4 min-w-[200px]">
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  activeSection === 'hero' 
                    ? 'text-red-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  activeSection === 'projects' 
                    ? 'text-red-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  activeSection === 'contact' 
                    ? 'text-red-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </button>
              <Link 
                to="/profile" 
                className="block text-white bg-red-700 px-4 py-2 rounded-full font-medium text-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-red-700 leading-tight">
                  Nisal Dushmantha
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
                  SLIIT Undergraduate
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                MERN Stack Frontend Developer, UI/UX Designer, and Tech Enthusiast. I create 
                immersive digital experiences that blend creativity with cutting-edge technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:transform hover:scale-105"
                >
                  View Projects
                </button>
                <a 
                  href="/assets/documents/P.G.N.L.Dushmantha CV.pdf"
                  download="Nisal_Dushmantha_CV.pdf"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  <FaDownload className="text-sm" />
                  Download Resume
                </a>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium text-sm">Available for new projects</span>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/assets/images/nisal-profile.jpg"
                  alt="Nisal Dushmantha"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-xl border-4 border-white"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-transparent to-gray-100 rounded-3xl transform rotate-3"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">48h</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-gray-600 text-sm">Passion Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/assets/images/nisal-profile.jpg"
                alt="About Nisal"
                className="w-full max-w-md rounded-3xl shadow-xl border-4 border-white"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate undergraduate student at SLIIT University, specializing in
                creating user-centered digital experiences. My journey combines the analytical
                mindset of a developer with the creative vision of a designer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding or designing, you'll find me exploring new technologies,
                learning about emerging frameworks, or working on personal projects that challenge
                my skills and creativity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-2xl flex items-center justify-center">
                    <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 font-medium">3+ years of development experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-2xl flex items-center justify-center">
                    <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 font-medium">Specialized in React, Node.js, and MongoDB</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-2xl flex items-center justify-center">
                    <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 font-medium">Passionate about clean code and best practices</span>
                </div>
              </div>
              <Link 
                to="/profile"
                className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-full font-medium hover:bg-red-800 transition-all duration-300 hover:transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my latest work in web development, UI/UX design, and android applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center gap-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1"
                      >
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
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's collaborate and bring your digital vision to life with cutting-edge technology and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
            <Link 
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                      <FaEnvelope className="text-red-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:lawanyanisal@gmail.com" className="text-gray-600 hover:text-red-700">
                        lawanyanisal@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                      <span className="text-red-700">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Kaduwela, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Nisal-Dushmantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/lawa.nya_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-2xl flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.type === 'success' ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaExclamationCircle className="text-red-600" />
                  )}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-700 text-white py-4 rounded-2xl hover:bg-red-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="text-xs text-gray-500 text-center">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img 
                  src="/assets/images/nd-logo.png" 
                  alt="ND Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Nisal Dushmantha</h3>
              <p className="text-gray-400 text-sm">
                MERN Stack Frontend Developer, UI/UX Designer, and Tech Enthusiast. Creating
                immersive digital experiences with cutting-edge technology.
              </p>
              <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
                <Link 
                  to="/profile"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Skills
                </Link>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Frontend Development</p>
                <p className="text-gray-400">UI/UX Design</p>
                <p className="text-gray-400">MERN Stack Development</p>
                <p className="text-gray-400">Web Application Development</p>
                <p className="text-gray-400">Responsive Design</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-sm">
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
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/lawa.nya_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nisal Dushmantha. Made with ❤️ and ☕ + 🚀
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed & Developed by Nisal Dushmantha
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default Home;
