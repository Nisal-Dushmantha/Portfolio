const mongoose = require('mongoose');
require('dotenv').config();

const Profile = require('./Model/Profile');

const sampleProfile = {
  name: "Nisal Lawanya Dushmantha",
  age: 25,
  title: "Full Stack Developer & Graduate",
  location: "Kaduwela, Sri Lanka",
  email: "lawanyanisal@gmail.com",
  phone: "+94 76 9823 540",
  bio: "Recent graduate and passionate full stack developer with expertise in modern web technologies. Specialized in the MERN stack with a strong foundation in both frontend and backend development. I enjoy creating user-friendly interfaces and robust backend systems that solve real-world problems. Always eager to learn new technologies and take on challenging projects.",
  skills: [
    "JavaScript", "TypeScript", "React", "Node.js", "MongoDB", 
    "Express.js", "Tailwind CSS", "Git", "AWS", "Python", 
    "Java", "REST APIs", "GraphQL", "Docker", "PostgreSQL"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/nisal-lawanya-64b17b382",
    github: "https://github.com/Nisal-Dushmantha",
    twitter: "https://twitter.com/nisal_lawanya",
    instagram: "https://www.instagram.com/lawa.nya_/",
    website: "https://nisal-portfolio.dev"
  },
  profileImage: "/assets/images/nisal-profile.jpg",
  resume: "/assets/documents/P.G.N.L.Dushmantha CV.pdf",
  isActive: true
};

const seedProfile = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    await mongoose.connect(MONGODB_URI);
    
    console.log('Connected to MongoDB');
    
    // Delete existing profiles
    await Profile.deleteMany({});
    
    // Create new profile
    const profile = new Profile(sampleProfile);
    await profile.save();
    
    console.log('Sample profile created successfully!');
    console.log('Profile details:', profile);
    
  } catch (error) {
    console.error('Error seeding profile:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the seeding function
seedProfile();
