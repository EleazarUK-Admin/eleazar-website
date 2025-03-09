const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide an excerpt'],
    maxlength: [200, 'Excerpt cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please provide content for the post']
  },
  featuredImage: {
    type: String,
    default: 'default-post.jpg'
  },
  author: {
    type: String,
    default: 'Eleazar Gonzalez'
  },
  tags: [{
    type: String,
    trim: true
  }],
  published: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to update the updatedAt field
PostSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Method to create slug from title
PostSchema.methods.createSlug = function() {
  return this.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

module.exports = mongoose.model('Post', PostSchema);