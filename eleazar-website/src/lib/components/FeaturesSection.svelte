<script>
    import { onMount } from 'svelte';
    
    // Features data as props so they can be customized
    export let features = [
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
    
    export let title = 'What We Offer';
    export let metadata = {
      timestamp: '// CORE_CAPABILITIES',
      version: 'v1.2.3'
    };
    
    // Digital countdown effect for each feature
    let loadingStates = new Array(features.length).fill(false);
    
    function animateFeature(index) {
      loadingStates[index] = true;
      setTimeout(() => {
        loadingStates[index] = false;
      }, 2000);
    }
    
    // Trigger loading animation on scroll
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            animateFeature(index);
          }
        });
      }, { threshold: 0.5 });
      
      document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.dataset.index = index;
        observer.observe(card);
      });
      
      return () => observer.disconnect();
    });
  </script>
  
  <section class="features">
    <div class="container">
      <div class="section-header">
        <h2>{title}</h2>
        <div class="section-metadata">
          <span class="timestamp">{metadata.timestamp}</span>
          <span class="version">{metadata.version}</span>
        </div>
      </div>
      
      <div class="features-grid">
        {#each features as feature, index}
          <div class="feature-card" data-index={index}>
            <div class="card-header">
              <div class="feature-icon" style="background-color: {feature.color}">
                {#if loadingStates[index]}
                  <div class="loading-animation">
                    {#each Array(3) as _, i}
                      <div class="loading-dot" style="animation-delay: {i * 0.1}s"></div>
                    {/each}
                  </div>
                {:else}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    {#if feature.icon === 'design'}
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    {:else if feature.icon === 'code'}
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    {:else if feature.icon === 'analytics'}
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    {:else}
                      <!-- Custom icon fallback -->
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2L12 22M2 12L22 12"/>
                    {/if}
                  </svg>
                {/if}
              </div>
              <span class="feature-id">{feature.id.toUpperCase()}</span>
            </div>
            
            <div class="card-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div class="card-metadata">
                <span>STATUS: ACTIVE</span>
                <span>PRIORITY: HIGH</span>
              </div>
            </div>
            
            <div class="card-glitch"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .features {
      padding: 6rem 0;
      background-color: var(--color-black);
      color: var(--color-white);
      position: relative;
      overflow: hidden;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .section-header {
      margin-bottom: 4rem;
      text-align: center;
    }
    
    h2 {
      font-family: var(--font-display);
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    
    .section-metadata {
      display: flex;
      justify-content: center;
      gap: 2rem;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--color-primary);
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      position: relative;
      background: linear-gradient(135deg, var(--color-secondary) 0%, #000 100%);
      border: 1px solid var(--color-primary);
      padding: 2rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      overflow: hidden;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(255, 82, 0, 0.2);
      border-color: var(--color-primary);
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .feature-icon {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .feature-icon svg {
      width: 24px;
      height: 24px;
    }
    
    .feature-id {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--color-gray-lighter);
    }
    
    .card-content h3 {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .card-content p {
      font-family: var(--font-body);
      font-weight: var(--font-weight-light);
      line-height: 1.6;
      color: var(--color-gray-lighter);
      margin-bottom: 1.5rem;
    }
    
    .card-metadata {
      display: flex;
      gap: 1rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--color-primary);
    }
    
    .loading-animation {
      display: flex;
      gap: 4px;
    }
    
    .loading-dot {
      width: 4px;
      height: 4px;
      background: white;
      border-radius: 50%;
      animation: loadingPulse 1s infinite;
    }
    
    @keyframes loadingPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    .card-glitch {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 82, 0, 0.1) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }
    
    .feature-card:hover .card-glitch {
      transform: translateX(100%);
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .features {
        padding: 4rem 0;
      }
      
      h2 {
        font-size: 2rem;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>