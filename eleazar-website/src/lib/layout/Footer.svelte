<script>
  import Logo from '../components/Logo.svelte';
  import Icon from '../components/Icon.svelte';
  import Button from '../components/Button.svelte';
  
  // Remove these variables and functionality that controls the component showcase
  // let showComponentShowcase = false;
  
  const logoVariants = [
    { variant: 'primary', label: 'Primary' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'dark', label: 'Dark' },
    { variant: 'light', label: 'Light', darkBg: true }
  ];
  
  const logoSizes = [
    { size: 'small', label: 'Small' },
    { size: 'medium', label: 'Medium' },
    { size: 'large', label: 'Large' }
  ];
  
  const buttonVariants = [
    { variant: 'primary', label: 'Primary' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'outline', label: 'Outline' }
  ];
  
  const buttonSizes = [
    { size: 'small', label: 'Small' },
    { size: 'medium', label: 'Medium' },
    { size: 'large', label: 'Large' }
  ];
</script>

<!-- Remove the conditional rendering and toggle buttons -->
<!-- {#if showComponentShowcase} -->
<!--  <div class="view-toggle">
    <Button variant="outline" size="small" on:click={() => showComponentShowcase = false}>
      View Website
    </Button>
  </div>-->

<!-- Rest of your footer content would go here -->
<!-- You can add a basic footer with copyright info, links, etc. -->
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <Logo variant="light" size="small" />
        <p class="tagline">Arquitectura para el pensamiento algorítmico</p>
      </div>
      
      <div class="footer-nav">
        <div class="footer-nav-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/showcase">Showcase</a></li>
          </ul>
        </div>
        
        <div class="footer-nav-column">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-nav-column">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://twitter.com/eleazar">Twitter</a></li>
            <li><a href="https://linkedin.com/company/eleazar">LinkedIn</a></li>
            <li><a href="https://github.com/eleazar">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="copyright">
        <p>&copy; 2025 Eleazar. All rights reserved.</p>
        <span class="metadata">// END_TRANSMISSION</span>
      </div>
      <div class="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<!-- Remove the else branch that had the toggle button -->
<!-- {:else}
  <div class="view-toggle">
    <Button variant="outline" size="small" on:click={() => showComponentShowcase = true}>
      View Component Showcase
    </Button>
  </div>
{/if} -->

<style>
  .footer {
    background-color: var(--color-secondary);
    color: var(--color-white);
    padding: 4rem 0 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-top {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    margin-bottom: 3rem;
  }
  
  .footer-brand {
    flex: 1;
    min-width: 280px;
  }
  
  .tagline {
    margin-top: 1rem;
    font-weight: var(--font-weight-light);
    max-width: 240px;
    opacity: 0.8;
  }
  
  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
  
  .footer-nav-column h4 {
    font-family: var(--font-display);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: var(--color-primary);
  }
  
  .footer-nav-column ul {
    list-style: none;
  }
  
  .footer-nav-column li {
    margin-bottom: 0.75rem;
  }
  
  .footer-nav-column a {
    color: var(--color-gray-light);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .footer-nav-column a:hover {
    color: var(--color-primary);
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .copyright {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    opacity: 0.7;
  }
  
  .metadata {
    font-family: var(--font-mono);
    color: var(--color-primary);
  }
  
  .footer-legal {
    display: flex;
    gap: 1.5rem;
    font-size: 0.875rem;
  }
  
  .footer-legal a {
    color: var(--color-gray-light);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .footer-legal a:hover {
    color: var(--color-primary);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .footer-top, 
    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .footer-top {
      gap: 2rem;
    }
    
    .footer-nav {
      width: 100%;
      gap: 2rem;
    }
    
    .footer-legal {
      margin-top: 1rem;
    }
  }
</style>