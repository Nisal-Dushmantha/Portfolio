import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaGlobe, FaDownload, FaArrowLeft, FaBirthdayCake } from 'react-icons/fa';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/profile');
      setProfile(response.data);
    } catch (err) {
      setError('Failed to load profile information');
      console.error('Error fetching profile:', err);
      // For demo purposes, let's use sample data if API fails
      setProfile({
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
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-900 border-t-transparent"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Profile
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={fetchProfile}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center mx-auto gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Nisal<span className="text-red-700">.</span>
            </Link>
            <Link 
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
        </div>
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
              <a 
                href={`mailto:${profile.email}`}
                className="border-2 border-red-700 text-red-700 px-8 py-4 rounded-full font-medium hover:bg-red-700 hover:text-white transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3"
              >
                <FaEnvelope />
                Get In Touch
              </a>
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
    </div>
  );
};

export default Profile;
