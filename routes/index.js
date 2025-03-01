const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Eleazar Gonzalez | Cloud Engineer',
    activeNav: 'home'
  });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me | Eleazar Gonzalez',
    activeNav: 'about'
  });
});

// Projects page route
router.get('/projects', (req, res) => {
  // You can later fetch projects from a database
  const projects = [
    {
      id: 1,
      title: 'GCP Data Pipeline',
      description: 'Developed dynamic data pipeline using Apache Beam and Google Cloud Dataflow',
      technologies: ['Google Cloud', 'Python', 'Apache Beam', 'BigQuery'],
      image: '/images/project1.jpg',
      github: 'https://github.com/Eleazarrr1979/gcp-pipeline'
    },
    // Add more projects here
  ];
  
  res.render('projects', { 
    title: 'Projects | Eleazar Gonzalez',
    activeNav: 'projects',
    projects: projects
  });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me | Eleazar Gonzalez',
    activeNav: 'contact',
    messageSent: false
  });
});

// Handle contact form submission
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would typically send an email
  // For now, we'll just console.log the data
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Redirect with success message
  res.render('contact', { 
    title: 'Contact Me | Eleazar Gonzalez',
    activeNav: 'contact',
    messageSent: true
  });
});

module.exports = router;