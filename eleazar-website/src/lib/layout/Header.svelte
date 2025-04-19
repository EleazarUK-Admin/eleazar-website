<script>
    import logoSvg from '@assets/logos/eleazar-logo-black.svg';
    import Logo from '../components/Logo.svelte';
    import Button from '../components/Button.svelte';
    
    // Props
    export let showCta = true;
  </script>
  
  <header>
    <div class="container">
      <Logo size="small" />
      
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      
      {#if showCta}
        <div class="cta">
          <Button size="small">Contact Us</Button>
        </div>
      {/if}
    </div>
  </header>
  
  <style>
    header {
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    nav {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    a {
      text-decoration: none;
      color: var(--color-black);
      font-weight: 500;
      transition: color 0.2s;
    }
    
    a:hover {
      color: var(--color-primary);
    }
    
    .cta {
      margin-left: 1rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 1rem;
      }
      
      nav {
        margin-top: 1rem;
      }
      
      .cta {
        margin-top: 1rem;
        margin-left: 0;
      }
    }
  </style>