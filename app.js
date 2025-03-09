const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev')); // Logging
app.use(helmet({ contentSecurityPolicy: false })); // Security headers
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: false })); // Parse form data
app.use(bodyParser.json()); // Parse JSON

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');
const apiRoutes = require('./routes/api');

// Use routes
app.use('/', indexRoutes);
app.use('/blog', blogRoutes);
app.use('/api', apiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Something went wrong',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;

