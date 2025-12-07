import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaBars, FaTimes, FaSpinner, FaCheckCircle, FaExclamationCircle, FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPaintBrush, FaAndroid, FaGoogle } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiVite, SiPython, SiJavascript, SiTypescript, SiFigma, SiKotlin, SiAndroid, SiMaterialdesign } from 'react-icons/si';
import { useContactForm } from '../hooks/useContactForm';
import PageTransition from './PageTransition';

const ProjectDetail = () => {
  const { id } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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

  // Project data - this would normally come from a database or API
  const projects = {
    1: {
      id: 1,
      title: "Motor Bikes and Spare parts Management System",
      description: "Full-stack Motor Bikes and Spare parts Management System with user authentication, product, inventory, services and repairs and finance management features.",
      detailedDescription: `This comprehensive Motor Bikes and Spare Parts Management System is a full-stack web application designed to streamline operations for motorcycle dealerships and repair shops. The system provides a complete solution for managing inventory, tracking services and repairs, handling customer relationships, and managing finances.

Key Features:
• User Authentication & Authorization with role-based access control
• Product & Inventory Management with real-time stock tracking
• Service & Repair Management with job tracking and scheduling
• Customer Management with detailed service history
• Financial Management including invoicing and payment tracking
• Responsive design optimized for desktop and mobile devices
• Secure data handling and backup systems

The application follows modern development practices with a clean, intuitive interface that makes it easy for staff to manage daily operations efficiently. Built with scalability in mind, it can handle growing business needs while maintaining optimal performance.`,
      tech: ["MERN", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/assets/images/rathnasiri-motors-dashboard.png",
      videoUrl: "/assets/videos/rathnasiri-motors-demo.mp4", // Video added
      github: "https://github.com/Nisal-Dushmantha/Rathnasiri_Motors.git",
      category: "fullstack",
      featured: true
    },
    2: {
      id: 2,
      title: "BrewMe - UI/UX Design Project",
      description: "A mobile application designed to streamline the coffee ordering process for customers and baristas.",
      detailedDescription: `BrewMe is a comprehensive mobile application design project focused on revolutionizing the coffee ordering experience. This UI/UX design project addresses the pain points of traditional coffee ordering systems by creating an intuitive, efficient, and delightful user experience for both customers and baristas.

Design Objectives:
• Create an intuitive and user-friendly ordering interface
• Streamline the coffee ordering and pickup process
• Enhance customer engagement through personalized experiences
• Optimize workflow efficiency for baristas and cafe staff
• Implement modern design principles and accessibility standards

Key Features Designed:
• Personalized user profiles with order history and preferences
• Real-time menu browsing with detailed coffee descriptions
• Customizable order options (size, milk type, sweetness, etc.)
• Location-based cafe finder with real-time availability
• Order tracking with estimated preparation times
• Integrated payment systems for seamless transactions
• Loyalty program with rewards and special offers

Design Process:
The project followed a comprehensive design thinking approach, starting with user research and persona development, followed by wireframing, prototyping, and user testing. The design incorporates modern UI trends while maintaining usability and accessibility at its core.

Tools & Methodologies:
• User research and persona development
• Wireframing and information architecture
• High-fidelity prototyping and interaction design
• Usability testing and iterative design improvements
• Design system creation for consistency
• Responsive design principles for various device sizes`,
      tech: ["Figma", "UI/UX Design"],
      image: "/assets/images/brewme-screenshot.png",
      videoUrl: "/assets/videos/brewme-demo.mp4", // BrewMe demo video
      github: "https://github.com/Nisal-Dushmantha/BrewMeFigma.git",
      figmaUrl: "https://www.figma.com/design/9emv7UHBV2lgsTID4k7aAQ/Untitled?node-id=0-1&t=jr3mvaLoJ5ihslPz-1", // Figma prototype link
      category: "ui-ux",
      featured: true
    },
    3: {
      id: 3,
      title: "Brew Now - Android UI/UX Design",
      description: "Android mobile application UI/UX design prototype created with Android Studio and Kotlin, focusing on coffee ordering user experience.",
      detailedDescription: `Brew Now is an Android mobile application UI/UX design project that showcases modern mobile interface design for a coffee ordering platform. Created using Android Studio and Kotlin, this project demonstrates front-end mobile development skills and user interface design principles without backend implementation.

Design Objectives:
• Create an intuitive and modern Android coffee ordering interface
• Implement Material Design principles for consistent user experience
• Develop responsive layouts for various Android screen sizes
• Showcase advanced Android UI components and navigation patterns
• Demonstrate proficiency in Android Studio and Kotlin development

UI Features Designed:
• Welcome and Onboarding screens with smooth transitions
• User registration and login interface mockups
• Coffee menu browsing with grid and list view options
• Product detail screens with customization options
• Shopping cart and checkout interface designs
• User profile and settings screens
• Order history and favorites interface
• Modern navigation drawer and bottom navigation
• Search functionality with filter options
• Responsive design for tablets and phones

Technical Implementation:
• Kotlin programming language for Android development
• Android Studio IDE for project development and layout design
• XML layouts for responsive UI design
• Material Design components and theming
• RecyclerView for efficient list implementations
• Fragment-based navigation architecture
• Custom drawable resources and vector graphics
• ViewBinding for type-safe view references
• ConstraintLayout for flexible responsive designs

Development Approach:
This project focuses on the front-end user experience and interface design aspects of Android development. The emphasis was on creating visually appealing, user-friendly interfaces while learning Android development fundamentals, UI/UX design principles, and modern mobile design patterns. The project serves as a demonstration of mobile UI design capabilities and Android development skills.`,
      tech: ["Android Studio", "Kotlin", "Material Design", "XML Layouts", "UI/UX Design"],
      image: "/assets/images/brew-now-android-studio.png",
      videoUrl: "/assets/videos/brew-now-demo.mp4",
      github: "https://github.com/Nisal-Dushmantha/BrewNow-AS.git",
      category: "android",
      featured: false
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-full font-medium hover:bg-red-800 transition-all duration-300"
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
          <Link 
            to="/projects"
            className="text-red-700 transition-colors font-medium text-sm"
          >
            Projects
          </Link>
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
            <Link 
              to="/projects"
              className="block px-6 py-2 text-red-700 hover:bg-gray-50 transition-colors font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
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
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium mb-8"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 justify-center"
                >
                  <FaGithub />
                  View on GitHub
                </a>
                {project.figmaUrl && (
                  <a 
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 justify-center"
                  >
                    <SiFigma />
                    View Prototype
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              {project.videoUrl ? (
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
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
                  <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* For design projects, add prototype link overlay */}
                  {project.figmaUrl && (
                    <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.044 1.354-3.044 3.019s1.379 3.019 3.044 3.019c1.665 0 3.044-1.355 3.044-3.02s-1.379-3.018-3.044-3.018zM15.851 15.019c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49s-2.026 4.49-4.515 4.49zm0-7.509c-1.665 0-3.044 1.354-3.044 3.019s1.379 3.019 3.044 3.019c1.665 0 3.044-1.354 3.044-3.019s-1.379-3.019-3.044-3.019z"/>
                        </svg>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Details</h2>
          <div className="prose prose-lg max-w-none">
            {project.detailedDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interested in This Project?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or want to discuss similar solutions for your business? Get in touch!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
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

              <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder={`I'm interested in the ${project.title} project. I'd like to know more about...`}
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
                  'Send Inquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/images/nd-logo.png" 
                alt="ND Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold">Nisal Dushmantha</span>
          </div>
          
          <p className="text-gray-400 mb-8">
            Full-stack developer crafting digital experiences with modern technologies.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Nisal Dushmantha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default ProjectDetail;
