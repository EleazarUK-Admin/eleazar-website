const express = require('express');
const router = express.Router();

// Sample blog posts (you'll replace this with database logic later)
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with GCP Data Engineering',
    slug: 'getting-started-gcp-data-engineering',
    excerpt: 'A beginner\'s guide to setting up your first data pipeline in Google Cloud Platform.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Eleazar Gonzalez',
    date: '2024-02-10',
    tags: ['GCP', 'Data Engineering', 'BigQuery']
  },
  {
    id: 2,
    title: 'Advanced Apache Beam Patterns',
    slug: 'advanced-apache-beam-patterns',
    excerpt: 'Dive into advanced patterns for data processing with Apache Beam.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Eleazar Gonzalez',
    date: '2024-01-25',
    tags: ['Apache Beam', 'Data Engineering', 'Python']
  }
];

// Blog index page
router.get('/', (req, res) => {
  res.render('blog/index', {
    title: 'Blog | Eleazar Gonzalez',
    activeNav: 'blog',
    posts: blogPosts
  });
});

// Single blog post page
router.get('/:slug', (req, res) => {
  const post = blogPosts.find(post => post.slug === req.params.slug);
  
  if (!post) {
    return res.status(404).render('404', { 
      title: 'Post Not Found',
      activeNav: 'blog'
    });
  }
  
  res.render('blog/post', {
    title: `${post.title} | Eleazar Gonzalez`,
    activeNav: 'blog',
    post: post
  });
});

module.exports = router;