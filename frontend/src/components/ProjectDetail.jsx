import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaBars, FaTimes, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useContactForm } from '../hooks/useContactForm';

const ProjectDetail = () => {
  const { id } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();

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
      image: "/assets/images/nisal-profile.jpg",
      videoUrl: "", // Will be added later
      github: "https://github.com/Nisal-Dushmantha/Rathnasiri_Motors.git",
      category: "fullstack",
      featured: true
    }
  };

  const project = projects[id];

  if (!project) {
    return (
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
    );
  }

  return (
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
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>

            <div className="relative">
              {project.videoUrl ? (
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Video will be added here later */}
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={project.image}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
  );
};

export default ProjectDetail;
