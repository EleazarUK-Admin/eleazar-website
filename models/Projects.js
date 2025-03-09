const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a project description']
  },
  technologies: [{
    type: String,
    trim: true
  }],
  image: {
    type: String,
    default: 'default-project.jpg'
  },
  featured: {
    type: Boolean,
    default: false
  },
  liveUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to generate slug from title
ProjectSchema.pre('save', function(next) {
    if (!this.isModified('title')) return next();
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    next();
  });
  
  module.exports = mongoose.model('Project', ProjectSchema);