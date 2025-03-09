const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Admin dashboard route - protected by authentication
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('admin/dashboard', {
    title: 'Admin Dashboard | Eleazar Gonzalez',
    user: req.user
  });
});

// Blog post management
router.get('/posts', ensureAuthenticated, async (req, res) => {
  try {
    // In a real app, you would fetch posts from the database
    // For now, using sample data
    const posts = [
      {
        id: 1,
        title: 'Getting Started with GCP Data Engineering',
        slug: 'getting-started-gcp-data-engineering',
        published: true,
        createdAt: new Date('2024-02-10')
      },
      {
        id: 2,
        title: 'Advanced Apache Beam Patterns',
        slug: 'advanced-apache-beam-patterns',
        published: true,
        createdAt: new Date('2024-01-25')
      }
    ];
    
    res.render('admin/posts', {
      title: 'Manage Blog Posts | Admin',
      posts,
      user: req.user
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).render('error', { 
      title: 'Error',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
});

// New blog post form
router.get('/posts/new', ensureAuthenticated, (req, res) => {
  res.render('admin/post-form', {
    title: 'New Blog Post | Admin',
    post: {},
    isNew: true,
    user: req.user
  });
});

// Edit blog post form
router.get('/posts/edit/:id', ensureAuthenticated, async (req, res) => {
  try {
    // In a real app, you would fetch the post from the database
    // For now, using sample data
    const post = {
      id: req.params.id,
      title: 'Sample Post',
      slug: 'sample-post',
      excerpt: 'This is a sample post excerpt.',
      content: 'This is the full content of the sample post.',
      tags: ['GCP', 'Cloud'],
      published: true
    };
    
    if (!post) {
      return res.status(404).render('404', { title: 'Post Not Found' });
    }
    
    res.render('admin/post-form', {
      title: 'Edit Blog Post | Admin',
      post,
      isNew: false,
      user: req.user
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).render('error', { 
      title: 'Error',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
});

// Project management
router.get('/projects', ensureAuthenticated, async (req, res) => {
  try {
    // In a real app, you would fetch projects from the database
    // For now, using sample data
    const projects = [
      {
        id: 1,
        title: 'GCP Data Pipeline',
        featured: true,
        order: 1
      },
      {
        id: 2,
        title: 'Personal Website',
        featured: true,
        order: 2
      }
    ];
    
    res.render('admin/projects', {
      title: 'Manage Projects | Admin',
      projects,
      user: req.user
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).render('error', { 
      title: 'Error',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
});

module.exports = router;