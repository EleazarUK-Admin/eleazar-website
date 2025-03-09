const express = require('express');
const router = express.Router();

// Sample skills data
const skills = {
  languages: ['Python', 'JavaScript', 'SQL', 'R', 'C++', 'Terraform'],
  cloud: ['Google Cloud Platform', 'BigQuery', 'Cloud Functions', 'Dataflow', 'Pub/Sub'],
  dataEngineering: ['Apache Beam', 'Apache Airflow', 'Tableau Prep Builder', 'dbt', 'ETL/ELT Pipelines'],
  visualization: ['Tableau', 'Google Looker Studio', 'Matplotlib'],
  deepLearning: ['TensorFlow', 'Keras', 'NumPy', 'Scikit Learn', 'Pandas'],
  media: ['Google Analytics', 'Google Tag Manager', 'Facebook', 'Google Marketing Platform', 'TikTok']
};

// GET /api/skills - Return all skills
router.get('/skills', (req, res) => {
  res.json(skills);
});

// GET /api/skills/:category - Return skills by category
router.get('/skills/:category', (req, res) => {
  const category = req.params.category;
  
  if (!skills[category]) {
    return res.status(404).json({ error: 'Category not found' });
  }
  
  res.json({ category, skills: skills[category] });
});

// POST /api/contact - Handle contact form submission via API
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill all required fields' 
    });
  }
  
  // Here you would send an email or store in database
  // For now, just log to console
  console.log('API Contact form submission:', { name, email, subject, message });
  
  // Return success response
  res.json({ 
    success: true, 
    message: 'Thank you for your message. I will get back to you soon!' 
  });
});

// GET /api/projects - Return all projects
router.get('/projects', (req, res) => {
  // Sample projects data
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
  
  res.json(projects);
});

module.exports = router;