<script>
  import { link } from 'svelte-spa-router';
  import Logo from '../components/Logo.svelte';
  import Button from '../components/Button.svelte';
  import { onMount } from 'svelte';
  
  // Props
  export let showCta = true;
  export let transparent = false;
  
  // State
  let isScrolled = false;
  let isMobileMenuOpen = false;
  
  // Navigation items - added showcase
  const navItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Showcase', href: '/showcase' }
  ];
  
  // Handle scroll effect
  onMount(() => {
    function handleScroll() {
      isScrolled = window.scrollY > 20;
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class:transparent class:scrolled={isScrolled} class:mobile-open={isMobileMenuOpen}>
  <div class="container">
    <div class="header-brand">
      <Logo size="small" variant={transparent && !isScrolled ? 'light' : 'dark'} />
      <span class="version">v1.0</span>
    </div>
    
    <nav class="desktop-nav">
      <ul>
        {#each navItems as item}
          <li>
            <a href={item.href} use:link class:active={item.active}>
              {item.label}
              {#if item.active}
                <span class="active-indicator"></span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    
    <div class="header-actions">
      {#if showCta}
        <Button size="small" variant="primary">Contact Us</Button>
      {/if}
      
      <button class="mobile-menu-toggle" on:click={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Navigation -->
  <nav class="mobile-nav" class:open={isMobileMenuOpen}>
    <ul>
      {#each navItems as item}
        <li>
          <a href={item.href} use:link class:active={item.active} on:click={toggleMobileMenu}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    {#if showCta}
      <div class="mobile-cta">
        <Button size="medium" variant="primary" fullWidth>Contact Us</Button>
      </div>
    {/if}
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease;
    background: var(--color-gray-light);
    border-bottom: 1px solid #eee;
  }
  
  header.transparent {
    background: transparent;
    border-bottom: none;
  }
  
  header.scrolled {
    background: var(--color-gray-light);
    border-bottom: 1px solid var(--color-primary);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .header-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .version {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-primary);
  }
  
  .desktop-nav {
    flex: 1;
    margin: 0 2rem;
  }
  
  .desktop-nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    justify-content: center;
  }
  
  .desktop-nav a {
    position: relative;
    text-decoration: none;
    color: var(--color-black);
    font-weight: 500;
    transition: color 0.2s;
    display: inline-block;
    padding: 0.5rem 0;
  }
  
  header.transparent:not(.scrolled) .desktop-nav a {
    color: var(--color-white);
  }
  
  .desktop-nav a:hover {
    color: var(--color-primary);
  }
  
  .desktop-nav a.active {
    color: var(--color-primary);
  }
  
  .active-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-primary);
    animation: activeSlide 0.3s ease;
  }
  
  @keyframes activeSlide {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  
  .mobile-menu-toggle span {
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--color-black);
    transition: all 0.3s ease;
    left: 2px;
  }
  
  header.transparent:not(.scrolled) .mobile-menu-toggle span {
    background: var(--color-white);
  }
  
  .mobile-menu-toggle span:nth-child(1) { top: 6px; }
  .mobile-menu-toggle span:nth-child(2) { top: 11px; }
  .mobile-menu-toggle span:nth-child(3) { top: 16px; }
  
  header.mobile-open .mobile-menu-toggle span:nth-child(1) {
    transform: rotate(45deg);
    top: 11px;
  }
  
  header.mobile-open .mobile-menu-toggle span:nth-child(2) {
    opacity: 0;
  }
  
  header.mobile-open .mobile-menu-toggle span:nth-child(3) {
    transform: rotate(-45deg);
    top: 11px;
  }
  
  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-gray-light);
    border-bottom: 1px solid var(--color-primary);
    padding: 2rem 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  .mobile-nav.open {
    transform: translateY(0);
  }
  
  .mobile-nav ul {
    list-style: none;
  }
  
  .mobile-nav li {
    margin-bottom: 1rem;
  }
  
  .mobile-nav a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: 500;
    font-size: 1.125rem;
    display: block;
    transition: color 0.2s;
  }
  
  .mobile-nav a:hover,
  .mobile-nav a.active {
    color: var(--color-primary);
  }
  
  .mobile-cta {
    margin-top: 2rem;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-toggle {
      display: block;
    }
    
    .mobile-nav {
      display: block;
    }
  }
</style>