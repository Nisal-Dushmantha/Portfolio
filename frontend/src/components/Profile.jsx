import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, 
  FaInstagram, FaGlobe, FaDownload, FaArrowLeft, FaBirthdayCake, 
  FaBars, FaTimes, FaGraduationCap, FaLayerGroup, FaRocket, FaCode,
  FaBriefcase
} from 'react-icons/fa';
import ContactFormModal from './ContactFormModal';
import PageTransition from './PageTransition';
import SkillsMatrix from './ui/SkillsMatrix';
import WorkExperience from './ui/WorkExperience';
import EducationQualifications from './ui/EducationQualifications';
import ScrollProgress from './ui/ScrollProgress';

const Profile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Load page at top position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const profile = {
    name: "P. G. Nisal Lawanya Dushmantha",
    title: "Software Engineering Intern & Full-Stack Developer",
    institution: "SLIIT Software Engineering Undergraduate • Intern at SLSI",
    location: "Kaduwela, Sri Lanka",
    email: "lawanyanisal@gmail.com",
    phone: "+94 76 9823 540",
    bio: "Motivated Software Engineering undergraduate at SLIIT Faculty of Computing and incoming Software Engineering Intern at Sri Lanka Standards Institution (SLSI). Passionate about applying technical skills in MERN full-stack development, native Android apps, and scalable web solutions while solving real-world engineering challenges.",
    profileImage: "/assets/images/nisal-profile.jpg"
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white relative selection:bg-red-500 selection:text-white">
        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Logo */}
        <div className="fixed top-8 left-8 z-50">
          <Link to="/" className="block">
            <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border border-gray-200/80 group">
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
          <div className="hidden md:flex items-center space-x-6 bg-white/90 backdrop-blur-xl px-7 py-3 rounded-full border border-gray-200/80 shadow-xl">
            <Link 
              to="/"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/#skills"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Stack
            </Link>
            <Link 
              to="/projects"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/#experience"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Experience
            </Link>
            <Link 
              to="/#education"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Education
            </Link>
            <Link 
              to="/#contact"
              className="text-gray-600 hover:text-gray-950 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Contact
            </Link>
            <span className="text-white bg-red-700 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md shadow-red-700/20">
              About
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 bg-white/95 rounded-2xl shadow-lg border border-gray-200 text-gray-950"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl p-5 min-w-[220px]">
              <div className="space-y-3">
                <Link 
                  to="/"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/#skills"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stack & Skills
                </Link>
                <Link 
                  to="/projects"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Featured Projects
                </Link>
                <Link 
                  to="/#experience"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work Experience
                </Link>
                <Link 
                  to="/#education"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Educational Qualifications
                </Link>
                <Link 
                  to="/#contact"
                  className="block text-gray-700 font-semibold py-2 text-sm hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <span className="block text-white bg-red-700 px-4 py-2.5 rounded-2xl font-semibold text-center text-xs uppercase tracking-wider">
                  About Nisal
                </span>
              </div>
            </div>
          )}
        </nav>

        {/* Header Hero Profile Section */}
        <section className="pt-36 pb-16 px-6 bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Profile Avatar with Glowing Border */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-gray-100">
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 z-20 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-md flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> Active
                </div>
              </div>

              {/* Bio & Details */}
              <div className="text-center md:text-left space-y-4 flex-grow">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  SOFTWARE ENGINEER & UNDERGRADUATE
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-lg font-medium text-gray-600">
                  {profile.title} • <span className="text-red-700 font-semibold">{profile.institution}</span>
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-gray-500">
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-xl">
                    <FaMapMarkerAlt className="text-red-600" /> {profile.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-xl">
                    <FaEnvelope className="text-red-600" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-xl">
                    <FaGraduationCap className="text-red-600" /> SLIIT Undergraduate
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <a 
                    href="/assets/documents/Nisal_Dushmantha_CV.pdf"
                    download="Nisal_Dushmantha_CV.pdf"
                    className="bg-gray-950 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                  <button 
                    onClick={() => setContactModalOpen(true)}
                    className="border-2 border-gray-300 hover:border-gray-900 text-gray-800 px-6 py-3 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 bg-white shadow-sm flex items-center gap-2"
                  >
                    <FaEnvelope className="text-red-600" />
                    Quick Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* About Narrative */}
            <div className="bg-gray-50/70 p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-950 mb-4 flex items-center gap-2">
                <FaCode className="text-red-600" /> Professional Overview
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {profile.bio}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-black text-red-700">10+</div>
                  <div className="text-xs font-semibold text-gray-500">Repositories & Apps</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-red-700">3+</div>
                  <div className="text-xs font-semibold text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-red-700">SLIIT</div>
                  <div className="text-xs font-semibold text-gray-500">BSc (Hons) SE</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-red-700">UTC+5:30</div>
                  <div className="text-xs font-semibold text-gray-500">Timezone (LK)</div>
                </div>
              </div>
            </div>

            {/* Comprehensive Skills Matrix */}
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <FaLayerGroup />
                  TECHNICAL EXPERTISE
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
                  Skills & Technology Stack
                </h2>
              </div>
              <SkillsMatrix />
            </div>

            {/* 1. Work Experience Section */}
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <FaBriefcase className="text-emerald-600" />
                  CAREER MILESTONES
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
                  Work Experience
                </h2>
              </div>
              <WorkExperience />
            </div>

            {/* 2. Educational Qualifications Timeline */}
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <FaGraduationCap className="text-red-600" />
                  ACADEMIC BACKGROUND
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
                  Educational Qualifications
                </h2>
              </div>
              <EducationQualifications />
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/nd-logo.png" 
                  alt="ND Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white">Nisal Dushmantha</span>
            </div>
            <p className="text-gray-400 text-xs mb-6 max-w-md mx-auto">
              Full-stack MERN developer and native Android engineer creating scalable digital experiences.
            </p>
            <div className="border-t border-gray-800 pt-8 text-xs text-gray-500">
              <p>&copy; 2026 Nisal Dushmantha. All rights reserved.</p>
            </div>
          </div>
        </footer>

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
