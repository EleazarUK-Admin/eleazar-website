// 4. ADMIN DASHBOARD FOR CONTENT MANAGEMENT
// controllers/adminController.js
const Blog = require('../models/Blog');
const Project = require('../models/Project');

exports.getDashboard = async (req, res) => {
  try {
    const blogCount = await Blog.countDocuments();
    const projectCount = await Project.countDocuments();
    const recentPosts = await Blog.find().sort({ publishDate: -1 }).limit(5);
    
    res.render('admin/dashboard', {
      title: 'Admin Dashboard',
      blogCount,
      projectCount,
      recentPosts,
      activeNav: 'dashboard'
    });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', {
      title: 'Error',
      error: process.env.NODE_ENV === 'development' ? err : {}
    });
  }
};