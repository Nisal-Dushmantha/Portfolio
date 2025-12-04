const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  githubLink: {
    type: String,
    required: true
  },
  liveLink: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'other'],
    default: 'web'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
