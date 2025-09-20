<script>
  import Button from '../components/Button.svelte';
  import Header from '../layout/Header.svelte';
  import Footer from '../layout/Footer.svelte';
  import GlitchImage from '../components/GlitchImage.svelte';
  import FeaturesSection from '../components/FeaturesSection.svelte';
  
  // Hero section data
  let title = 'Arquitectura para el pensamiento algorítmico';
  let subtitle = 'Analítica avanzada para decisiones estratégicas';
  
  // You can customize the features data here or let it use the defaults
  const customFeatures = [
    {
      id: 'design',
      title: 'Strategic Design',
      description: 'Create intuitive and impactful user experiences that achieve business objectives.',
      icon: 'design',
      color: '#FF5200'
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Build robust applications with clean, maintainable code optimized for performance.',
      icon: 'code',
      color: '#001F0B'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Transform data into actionable insights with advanced analytical techniques.',
      icon: 'analytics',
      color: '#333333'
    }
  ];
  
  // Loading states for hero
  let heroScrambledSubtitle = subtitle;
  let isScrambling = false;
  
  // Digital scramble effect for hero subtitle
  function scrambleText() {
    if (isScrambling) return;
    isScrambling = true;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let iteration = 0;
    
    const interval = setInterval(() => {
      heroScrambledSubtitle = subtitle
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return subtitle[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');
      
      if (iteration >= subtitle.length) {
        clearInterval(interval);
        isScrambling = false;
      }
      iteration += 1 / 3;
    }, 30);
  }
  
  // Trigger effects on mount
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Auto-scramble subtitle
    scrambleText();
    const scrambleInterval = setInterval(scrambleText, 8000);
    
    return () => {
      clearInterval(scrambleInterval);
    };
  });
</script>

<svelte:head>
  <title>Eleazar - Arquitectura para el pensamiento algorítmico</title>
  <meta name="description" content="Analítica avanzada para decisiones estratégicas">
</svelte:head>

<!-- Custom Header for transparent effect -->
<Header transparent={true} showCta={true} />

<div class="home-page">
  <!-- Hero Section -->
  <section class="hero" style="background-color: var(--color-secondary);">
    <div class="hero-gradient">
      <div class="container">
        <div class="hero-content">
          <div class="content-wrapper">
            <h1 data-text={title} class="glitch">{title}</h1>
            <p class="subtitle">{heroScrambledSubtitle}</p>
            
            <div class="hero-buttons">
              <Button variant="primary" size="large">Our Services</Button>
              <Button variant="outline" size="large">Learn More</Button>
            </div>
            
            <div class="hero-metadata">
              <span class="timestamp">v2.3.1</span>
              <span class="metadata">// DATA_ANALYTICS_READY</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <GlitchImage 
            src="/backgrounds/background-2.png" 
            alt="Eleazar digital visualization"
            intensity="medium"
            glitchType="scanlines"
          />
          <div class="visual-overlay"></div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Features Section using the modular component -->
  <FeaturesSection 
    features={customFeatures}
    title="What We Offer"
    metadata={{
      timestamp: '// CORE_CAPABILITIES',
      version: 'v1.2.3'
    }}
  />
  
  <!-- About Section with Glitch Background -->
  <section class="about">
    <div class="container">
      <div class="about-content">
        <h2>About Eleazar</h2>
        <p>We are a design and technology studio focused on creating digital products that combine aesthetic excellence with functional precision. Our interdisciplinary team brings together expertise in design, development, and strategy.</p>
        <div class="about-metadata">
          <span class="timestamp">EST. 2021</span>
          <span class="metadata">// BUILDING_THE_FUTURE</span>
        </div>
        <Button variant="primary">Learn About Us</Button>
      </div>
      <div class="about-image">
        <GlitchImage 
          src="/backgrounds/background-3.png" 
          alt="About Eleazar"
          intensity="low"
          glitchType="chromatic"
        />
      </div>
    </div>
  </section>
  
  <!-- Call to Action Section -->
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's collaborate to bring your vision to life.</p>
        <Button variant="primary" size="large">Contact Us</Button>
      </div>
      <div class="cta-visual">
        <div class="cta-grid">
          {#each Array(9) as _, i}
            <div class="grid-cell" style="opacity: {Math.random() * 0.3}"></div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>

<!-- Footer -->
<Footer />

<style>
  /* Rest of the styles remain the same as before, minus the features section styles */
  .home-page {
    width: 100%;
    padding-top: 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Hero Section */
  .hero {
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 31, 11, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(255, 82, 0, 0.1) 100%
    );
  }
  
  .hero .container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 6rem 1rem;
  }
  
  .hero-content {
    flex: 1;
    color: white;
  }
  
  .content-wrapper {
    max-width: 600px;
  }
  
  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    text-transform: uppercase;
    position: relative;
  }
  
  .subtitle {
    font-family: var(--font-mono);
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.5px;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .hero-metadata {
    display: flex;
    gap: 2rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: rgba(255, 82, 0, 0.8);
  }
  
  .hero-visual {
    flex: 1;
    position: relative;
  }
  
  .visual-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 40%,
      rgba(0, 31, 11, 0.8) 100%
    );
    pointer-events: none;
  }
  
  /* Glitch effect for title */
  .glitch {
    position: relative;
    animation: glitch 8s infinite;
  }
  
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .glitch::before {
    clip-path: inset(40% 0 60% 0);
    transform: translateX(-2px);
    opacity: 0.8;
    color: #FF5200;
  }
  
  .glitch::after {
    clip-path: inset(58% 0 42% 0);
    transform: translateX(2px);
    opacity: 0.8;
    color: #001F0B;
  }
  
  @keyframes glitch {
    0% { transform: translate(0); }
    2% { transform: translate(-2px, 0); }
    4% { transform: translate(2px, 0); }
    6% { transform: translate(0); }
    100% { transform: translate(0); }
  }
  
  /* About Section */
  .about {
    padding: 6rem 0;
    background-color: var(--color-gray-light);
    position: relative;
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
    color: var(--color-black);
  }
  
  .about p {
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-gray-dark);
  }
  
  .about-metadata {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-primary);
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
    position: relative;
    overflow: hidden;
  }
  
  .cta-section .container {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  
  .cta-content {
    flex: 1;
    text-align: left;
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
  
  .cta-visual {
    flex: 1;
    height: 300px;
    position: relative;
  }
  
  .cta-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .grid-cell {
    background: var(--color-primary);
    border-radius: 4px;
    animation: pulse 3s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
  
  /* Responsive design */
  @media (max-width: 992px) {
    .hero .container {
      flex-direction: column;
      text-align: center;
      padding: 4rem 1rem;
    }
    
    .content-wrapper {
      margin: 0 auto;
    }
    
    .hero-buttons {
      justify-content: center;
    }
    
    .hero-metadata {
      justify-content: center;
    }
    
    .hero-visual {
      width: 100%;
      max-width: 600px;
    }
    
    .about .container,
    .cta-section .container {
      flex-direction: column;
    }
    
    .cta-content {
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .cta-visual {
      height: 200px;
    }
  }
</style>