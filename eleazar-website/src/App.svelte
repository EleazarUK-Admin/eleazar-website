<script>
  import Logo from './lib/components/Logo.svelte';
  import Button from './lib/components/Button.svelte';
  import { theme } from './styles/theme.js';
  import Home from './lib/pages/Home.svelte';
  
  // State to toggle between component showcase and homepage
  let showComponentShowcase = false;
</script>

{#if showComponentShowcase}
  <div class="view-toggle">
    <Button variant="outline" size="small" on:click={() => showComponentShowcase = false}>
      View Website
    </Button>
  </div>

  <main>
    <section class="hero">
      <h1>Eleazar Brand System</h1>
      <p>This is a simple demonstration of the components created from the Figma design.</p>
    </section>

    <section>
      <h2>Logo Variations</h2>
      <div class="component-grid">
        <div class="component-card">
          <Logo variant="primary" />
          <span class="label">Primary</span>
        </div>
        <div class="component-card">
          <Logo variant="secondary" />
          <span class="label">Secondary</span>
        </div>
        <div class="component-card">
          <Logo variant="dark" />
          <span class="label">Dark</span>
        </div>
        <div class="component-card dark-bg">
          <Logo variant="light" />
          <span class="label">Light</span>
        </div>
      </div>
    </section>

    <section>
      <h2>Logo Sizes</h2>
      <div class="component-grid">
        <div class="component-card">
          <Logo size="small" />
          <span class="label">Small</span>
        </div>
        <div class="component-card">
          <Logo size="medium" />
          <span class="label">Medium</span>
        </div>
        <div class="component-card">
          <Logo size="large" />
          <span class="label">Large</span>
        </div>
      </div>
    </section>

    <section>
      <h2>Button Variants</h2>
      <div class="component-grid">
        <div class="component-card">
          <Button variant="primary">Primary Button</Button>
          <span class="label">Primary</span>
        </div>
        <div class="component-card">
          <Button variant="secondary">Secondary Button</Button>
          <span class="label">Secondary</span>
        </div>
        <div class="component-card">
          <Button variant="outline">Outline Button</Button>
          <span class="label">Outline</span>
        </div>
      </div>
    </section>

    <section>
      <h2>Button Sizes</h2>
      <div class="component-grid">
        <div class="component-card">
          <Button size="small">Small Button</Button>
          <span class="label">Small</span>
        </div>
        <div class="component-card">
          <Button size="medium">Medium Button</Button>
          <span class="label">Medium</span>
        </div>
        <div class="component-card">
          <Button size="large">Large Button</Button>
          <span class="label">Large</span>
        </div>
      </div>
    </section>
  </main>
{:else}
  <div class="view-toggle">
    <Button variant="outline" size="small" on:click={() => showComponentShowcase = true}>
      View Component Showcase
    </Button>
  </div>
  
  <Home />
{/if}

<style>
  .view-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  section {
    margin-bottom: 3rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  .component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .component-card {
    padding: 1.5rem;
    border: 1px solid #eee;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    gap: 1rem;
  }
  
  .dark-bg {
    background-color: #000;
    color: #fff;
  }
  
  .label {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #666;
  }
  
  .dark-bg .label {
    color: #ccc;
  }
</style>