import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaGlobe, FaDownload, FaArrowLeft, FaBirthdayCake, FaBars, FaTimes } from 'react-icons/fa';
import ContactFormModal from './ContactFormModal';
import PageTransition from './PageTransition';

const Profile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [profile] = useState({
    name: "Nisal Lawanya Dushmantha",
    age: 22,
    title: "Full Stack Developer & Graduate",
    location: "Kaduwela, Sri Lanka",
    email: "lawanyanisal@gmail.com",
    phone: "+94 76 9823 540",
    bio: "Recent graduate and passionate full stack developer with expertise in modern web technologies. Specialized in the MERN stack with a strong foundation in both frontend and backend development. I enjoy creating user-friendly interfaces and robust backend systems that solve real-world problems. Always eager to learn new technologies and take on challenging projects.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Git", "AWS", "Python", "Java"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nisal-lawanya-64b17b382",
      github: "https://github.com/Nisal-Dushmantha",
      twitter: "https://twitter.com/nisal_lawanya",
      instagram: "https://www.instagram.com/lawa.nya_/",
      website: "https://nisal-portfolio.dev"
    },
    profileImage: "/assets/images/nisal-profile.jpg"
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Nisal<span className="text-red-700">.</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Home
              </Link>
              <Link 
                to="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#projects';
                }}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Projects
              </Link>
              <Link 
                to="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#contact';
                }}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Contact
              </Link>
              <span className="text-white bg-red-700 px-4 py-2 rounded-full font-medium text-sm">About</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 bg-white rounded-full shadow-lg border border-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/"
                className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#projects';
                  setMobileMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-gray-900 font-medium py-2"
              >
                Projects
              </Link>
              <Link 
                to="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#contact';
                  setMobileMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-gray-900 font-medium py-2"
              >
                Contact
              </Link>
              <span className="block text-white bg-red-700 px-4 py-2 rounded-full font-medium text-center text-sm">About</span>
            </div>
          </div>
        )}
      </nav>

      {/* Profile Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full rounded-3xl object-cover border-4 border-gray-100 shadow-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center border-4 border-gray-100 shadow-xl">
                    <span className="text-5xl font-bold text-white">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center border-4 border-white">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              {profile.name}
            </h1>
            
            <p className="text-2xl text-gray-600 mb-2 font-light">
              {profile.title}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <FaBirthdayCake />
                <span>{profile.age} years old</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{profile.location}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/assets/documents/P.G.N.L.Dushmantha CV.pdf"
                download="P.G.N.L.Dushmantha CV.pdf"
                className="bg-red-700 text-white px-8 py-4 rounded-full font-medium hover:bg-red-800 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3"
              >
                <FaDownload />
                Download Resume
              </a>
              <button 
                onClick={() => setContactModalOpen(true)}
                className="border-2 border-red-700 text-red-700 px-8 py-4 rounded-full font-medium hover:bg-red-700 hover:text-white transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3"
              >
                <FaEnvelope />
                Get In Touch
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {profile.bio}
                </p>
              </div>
              
              {/* Skills Section */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {profile.skills && profile.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-xl text-center font-medium hover:border-red-700 hover:text-red-700 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-gray-900 font-semibold">{profile.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-gray-900 font-semibold">{profile.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-gray-900 font-semibold">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <div className="space-y-3">
                  {profile.socialLinks?.linkedin && (
                    <a 
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <FaLinkedin className="text-red-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">LinkedIn</p>
                        <p className="text-sm text-gray-500">Professional network</p>
                      </div>
                    </a>
                  )}
                  
                  {profile.socialLinks?.github && (
                    <a 
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <FaGithub className="text-gray-700 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">GitHub</p>
                        <p className="text-sm text-gray-500">Code repositories</p>
                      </div>
                    </a>
                  )}
                  
                  {profile.socialLinks?.twitter && (
                    <a 
                      href={profile.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <FaTwitter className="text-red-400 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Twitter</p>
                        <p className="text-sm text-gray-500">Latest updates</p>
                      </div>
                    </a>
                  )}
                  
                  {profile.socialLinks?.instagram && (
                    <a 
                      href={profile.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <FaInstagram className="text-orange-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Instagram</p>
                        <p className="text-sm text-gray-500">Photos & updates</p>
                      </div>
                    </a>
                  )}
                  
                  {profile.socialLinks?.website && (
                    <a 
                      href={profile.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <FaGlobe className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Website</p>
                        <p className="text-sm text-gray-500">Personal portfolio</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
    </PageTransition>
  );
};

export default Profile;
