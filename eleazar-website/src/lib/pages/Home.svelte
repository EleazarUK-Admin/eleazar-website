<script>
    import Button from '../components/Button.svelte';
    import Layout from '../layout/Layout.svelte';
    import Background from '../components/Background.svelte';
  </script>
  
  <Layout>
    <div class="home-page">
      <!-- Hero Section -->
      <Background image="background-1.png" height="600px">
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h1>Arquitectura para el pensamiento algorítmico</h1>
              <p>Analítica avanzada para decisiones estratégicas</p>
              <div class="hero-buttons">
                <Button variant="primary" size="large">Our Services</Button>
                <Button variant="outline" size="large">Learn More</Button>
              </div>
            </div>
            <div class="hero-image">
              <!-- You would replace this with your actual image -->
              <div class="placeholder-image"></div>
            </div>
          </div>
        </section>
      </Background>
      
      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <h2>What We Offer</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--color-primary);"></div>
              <h3>Strategic Design</h3>
              <p>Create intuitive and impactful user experiences that achieve business objectives.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--color-secondary);"></div>
              <h3>Development</h3>
              <p>Build robust applications with clean, maintainable code optimized for performance.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon" style="background-color: #333;"></div>
              <h3>Analytics</h3>
              <p>Transform data into actionable insights with advanced analytical techniques.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- About Section -->
      <section class="about">
        <div class="container">
          <div class="about-content">
            <h2>About Eleazar</h2>
            <p>We are a design and technology studio focused on creating digital products that combine aesthetic excellence with functional precision. Our interdisciplinary team brings together expertise in design, development, and strategy.</p>
            <Button variant="primary">Learn About Us</Button>
          </div>
          <div class="about-image">
            <!-- You would replace this with your actual image -->
            <div class="placeholder-image"></div>
          </div>
        </div>
      </section>
      
      <!-- Call to Action Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's collaborate to bring your vision to life.</p>
          <Button variant="primary" size="large">Contact Us</Button>
        </div>
      </section>
    </div>
  </Layout>
  
  <style>
    .home-page {
      width: 100%;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    /* Hero Section */
    .hero {
      padding: 6rem 0;
      background-color: #f8f8f8;
    }
    
    .hero .container {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
    
    .hero-content {
      flex: 1;
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #666;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
    }
    
    .hero-image {
      flex: 1;
    }
    
    /* Features Section */
    .features {
      padding: 6rem 0;
    }
    
    .features h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
    }
    
    .feature-icon {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      margin-bottom: 1.5rem;
    }
    
    .feature-card h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    /* About Section */
    .about {
      padding: 6rem 0;
      background-color: #f8f8f8;
    }
    
    .about .container {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
    
    .about-content {
      flex: 1;
    }
    
    .about h2 {
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
    }
    
    .about p {
      margin-bottom: 2rem;
      font-size: 1.125rem;
      line-height: 1.6;
    }
    
    .about-image {
      flex: 1;
    }
    
    /* CTA Section */
    .cta-section {
      padding: 6rem 0;
      text-align: center;
      background-color: var(--color-secondary);
      color: white;
    }
    
    .cta-section h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .cta-section p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    /* Placeholder for images */
    .placeholder-image {
    background-image: url('../../assets/backgrounds/background-1.png');
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 8px;
  }
    
    /* Responsive adjustments */
    @media (max-width: 992px) {
      .hero .container,
      .about .container {
        flex-direction: column;
      }
      
      .hero-content,
      .hero-image,
      .about-content,
      .about-image {
        width: 100%;
      }
      
      .hero {
        padding: 4rem 0;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
    }
  </style>