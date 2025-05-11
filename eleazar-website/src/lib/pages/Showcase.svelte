<script>
    import { link } from 'svelte-spa-router';
    import Logo from '../components/Logo.svelte';
    import Icon from '../components/Icon.svelte';
    import Button from '../components/Button.svelte';
    
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
  
  <main class="showcase">
    <section class="hero">
      <h1>Eleazar Brand System</h1>
      <p>This is a demonstration of the components created from the brand guidelines, featuring the retrofuturistic digital aesthetic.</p>
      <div class="version-info">
        <span class="timestamp">v2.0.0</span>
        <span class="metadata">// COMPONENT_LIBRARY</span>
      </div>
      <a href="/" use:link>
        <Button variant="outline">Back to Home</Button>
      </a>
    </section>
  
    <section class="component-section">
      <h2>Logo Variations</h2>
      <div class="component-grid">
        {#each logoVariants as item}
          <div class="component-card" class:dark-bg={item.darkBg}>
            <Logo variant={item.variant} />
            <span class="label">{item.label}</span>
          </div>
        {/each}
      </div>
    </section>
  
    <section class="component-section">
      <h2>Logo Sizes</h2>
      <div class="component-grid">
        {#each logoSizes as item}
          <div class="component-card">
            <Logo size={item.size} />
            <span class="label">{item.label}</span>
          </div>
        {/each}
      </div>
    </section>
  
    <section class="component-section">
      <h2>Icon Variations</h2>
      <div class="component-grid">
        {#each logoVariants as item}
          <div class="component-card" class:dark-bg={item.darkBg}>
            <Icon variant={item.variant} />
            <span class="label">{item.label}</span>
          </div>
        {/each}
      </div>
    </section>
  
    <section class="component-section">
      <h2>Button Variants</h2>
      <div class="component-grid">
        {#each buttonVariants as item}
          <div class="component-card">
            <Button variant={item.variant}>{item.label} Button</Button>
            <span class="label">{item.label}</span>
          </div>
        {/each}
      </div>
    </section>
  
    <section class="component-section">
      <h2>Button Sizes</h2>
      <div class="component-grid">
        {#each buttonSizes as item}
          <div class="component-card">
            <Button size={item.size}>{item.label} Button</Button>
            <span class="label">{item.label}</span>
          </div>
        {/each}
      </div>
    </section>
  
    <section class="component-section">
      <h2>Color Palette</h2>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-sample" style="background-color: #FF5200;"></div>
          <div class="color-info">
            <span class="color-name">Primary</span>
            <span class="color-value">#FF5200</span>
          </div>
        </div>
        <div class="color-card">
          <div class="color-sample" style="background-color: #001F0B;"></div>
          <div class="color-info">
            <span class="color-name">Secondary</span>
            <span class="color-value">#001F0B</span>
          </div>
        </div>
        <div class="color-card">
          <div class="color-sample" style="background-color: #000000;"></div>
          <div class="color-info">
            <span class="color-name">Black</span>
            <span class="color-value">#000000</span>
          </div>
        </div>
        <div class="color-card">
          <div class="color-sample" style="background-color: #FFFFFF; border: 1px solid #eee;"></div>
          <div class="color-info">
            <span class="color-name">White</span>
            <span class="color-value">#FFFFFF</span>
          </div>
        </div>
        <div class="color-card">
          <div class="color-sample" style="background-color: #DDDDDF;"></div>
          <div class="color-info">
            <span class="color-name">Background</span>
            <span class="color-value">#DDDDDF</span>
          </div>
        </div>
      </div>
    </section>
  
    <section class="component-section">
      <h2>Typography</h2>
      <div class="typography-showcase">
        <div class="type-sample">
          <h1 style="font-family: var(--font-display); margin-bottom: 0.5rem;">Chakra Petch Bold</h1>
          <p style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--color-gray-dark);">// DISPLAY_FONT</p>
        </div>
        <div class="type-sample">
          <h2 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">Exo Bold</h2>
          <p style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--color-gray-dark);">// HEADING_FONT</p>
        </div>
        <div class="type-sample">
          <p style="font-family: var(--font-body); font-weight: 200; margin-bottom: 0.5rem;">Exo Light</p>
          <p style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--color-gray-dark);">// BODY_FONT</p>
        </div>
        <div class="type-sample">
          <p style="font-family: var(--font-mono); margin-bottom: 0.5rem;">PT Mono Regular</p>
          <p style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--color-gray-dark);">// MONO_FONT</p>
        </div>
      </div>
    </section>
  </main>
  
  <style>
    .showcase {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .hero {
      padding: 4rem 0;
      text-align: center;
    }
    
    .hero h1 {
      font-family: var(--font-display);
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    
    .hero p {
      font-size: 1.125rem;
      color: var(--color-gray-dark);
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    
    .version-info {
      display: flex;
      justify-content: center;
      gap: 2rem;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--color-primary);
      margin-bottom: 2rem;
    }
    
    .component-section {
      margin-bottom: 4rem;
    }
    
    h2 {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    
    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .component-card {
      padding: 1.5rem;
      border: 1px solid var(--color-gray-lighter);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 150px;
      gap: 1rem;
      background: white;
      transition: all 0.2s ease;
    }
    
    .component-card:hover {
      border-color: var(--color-primary);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .dark-bg {
      background-color: #000;
      color: #fff;
    }
    
    .label {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: var(--color-gray-dark);
      font-family: var(--font-mono);
    }
    
    .dark-bg .label {
      color: var(--color-gray-lighter);
    }
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    
    .color-card {
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid var(--color-gray-lighter);
    }
    
    .color-sample {
      height: 100px;
      width: 100%;
    }
    
    .color-info {
      padding: 1rem;
      background: white;
    }
    
    .color-name {
      display: block;
      font-weight: 500;
      font-family: var(--font-heading);
    }
    
    .color-value {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--color-gray-dark);
    }
    
    .typography-showcase {
      display: grid;
      gap: 2rem;
    }
    
    .type-sample {
      padding: 1.5rem;
      border: 1px solid var(--color-gray-lighter);
      border-radius: 4px;
      background: white;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .showcase {
        padding: 1rem;
      }
      
      .hero h1 {
        font-size: 2rem;
      }
      
      .component-grid,
      .color-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>