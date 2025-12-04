import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Nisal<span className="text-blue-600">.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Contact
              </button>
              <Link 
                to="/profile" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Profile
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Contact
              </button>
              <Link 
                to="/profile" 
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                View Profile
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="text-blue-600">Nisal</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-md">
                  Full Stack Developer passionate about creating amazing web experiences with modern technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium"
                >
                  Let's Connect
                </button>
                <a
                  href="/assets/documents/P.G.N.L.Dushmantha CV.pdf"
                  download
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  Download CV
                </a>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/Nisal-Dushmantha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  <FaGithub className="text-xl text-gray-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/lawa.nya_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  <FaInstagram className="text-xl text-pink-600" />
                </a>
                <a
                  href="mailto:lawanyanisal@gmail.com"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  <FaEnvelope className="text-xl text-gray-600" />
                </a>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src="/assets/images/nisal-profile.jpg"
                  alt="Nisal Dushmantha"
                  className="w-96 h-96 rounded-3xl object-cover shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <span className="font-semibold">Available for work!</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-3 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/assets/images/nisal-profile.jpg"
              alt="About Nisal"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in the MERN stack. I love creating 
                beautiful, functional web applications that provide exceptional user experiences. 
                With a strong background in both frontend and backend development, I bring ideas to life 
                through clean code and innovative solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">3+ years of development experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Specialized in React, Node.js, and MongoDB</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Passionate about clean code and best practices</span>
                </div>
              </div>
              <Link 
                to="/profile"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of web development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building robust APIs and server-side applications with Node.js, Express, and various databases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Responsive Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring your website looks and works perfectly on all devices and screen sizes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Stack Applications</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete web application development from concept to deployment using the MERN stack.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">API Development</h3>
              <p className="text-gray-600 leading-relaxed">
                RESTful API design and development with proper authentication and documentation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing web applications for speed, SEO, and better user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-400" />
                    <span>lawanyanisal@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaLinkedin className="text-blue-400" />
                    <a 
                      href="https://www.linkedin.com/in/nisal-lawanya-64b17b382" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaGithub className="text-blue-400" />
                    <a 
                      href="https://github.com/Nisal-Dushmantha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaInstagram className="text-blue-400" />
                    <a 
                      href="https://www.instagram.com/lawa.nya_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Instagram Profile
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Nisal-Dushmantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaLinkedin className="text-xl text-blue-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/lawa.nya_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaInstagram className="text-xl text-pink-400" />
                  </a>
                  <a
                    href="mailto:lawanyanisal@gmail.com"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaEnvelope className="text-xl text-green-400" />
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Nisal<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-400">
                Full Stack Developer passionate about creating amazing web experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nisal-Dushmantha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nisal-lawanya-64b17b382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/lawa.nya_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="mailto:lawanyanisal@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Nisal Dushmantha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
