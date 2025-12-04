const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 1
  },
  bio: {
    type: String,
    required: true,
    maxlength: 1000
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    default: ''
  },
  profileImage: {
    type: String,
    default: ''
  },
  skills: [{
    type: String,
    trim: true
  }],
  socialLinks: {
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    twitter: { type: String, default: '' },
    website: { type: String, default: '' }
  },
  resume: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);
