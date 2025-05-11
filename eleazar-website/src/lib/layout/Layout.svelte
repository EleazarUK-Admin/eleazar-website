<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';
  
  // Props
  export let showHeader = true;
  export let showFooter = true;
  export let loading = false;
  
  // Digital loading overlay
  let isLoading = loading;
  let progress = 0;
  
  // Simulate loading progress
  function simulateLoading() {
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          isLoading = false;
        }, 500);
      }
    }, 100);
  }
  
  onMount(() => {
    if (loading) {
      simulateLoading();
    }
  });
  
  // Page transition effect
  let pageTransition = false;
  function triggerPageTransition() {
    pageTransition = true;
    setTimeout(() => {
      pageTransition = false;
    }, 1000);
  }
</script>

{#if isLoading}
  <div class="loading-overlay">
    <div class="loading-content">
      <div class="loading-logo">
        <svg viewBox="0 0 296 318" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M99.4004 0V82.6646L71.3668 111.571L0 111.633V318H196.6V235.335L224.633 206.429L296 206.367V0H99.4004Z" fill="#FF5200" opacity="0.3"/>
        </svg>
      </div>
      <div class="loading-text">
        <div class="loading-bar">
          <div class="loading-progress" style="width: {progress}%"></div>
        </div>
        <div class="loading-status">
          <span class="loading-label">LOADING</span>
          <span class="loading-percent">{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  </div>
{/if}

<div class="layout" class:loading={isLoading}>
  {#if showHeader}
    <Header />
  {/if}
  
  <main class="content" class:page-transition={pageTransition}>
    <slot></slot>
  </main>
  
  {#if showFooter}
    <Footer />
  {/if}
  
  <!-- Digital noise overlay -->
  <div class="noise-overlay"></div>
</div>

<style>
  .layout {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
  }
  
  .loading-content {
    text-align: center;
  }
  
  .loading-logo {
    width: 100px;
    height: auto;
    margin: 0 auto 2rem;
    animation: pulse 2s infinite;
  }
  
  .loading-logo svg {
    width: 100%;
    height: auto;
  }
  
  .loading-text {
    font-family: var(--font-mono);
    color: var(--color-primary);
  }
  
  .loading-bar {
    width: 200px;
    height: 2px;
    background: #333;
    margin: 0 auto 1rem;
    overflow: hidden;
  }
  
  .loading-progress {
    height: 100%;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }
  
  .loading-status {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
  
  .content {
    min-height: calc(100vh - 250px);
    position: relative;
  }
  
  .page-transition {
    animation: pageTransition 1s ease;
  }
  
  @keyframes pageTransition {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Digital noise overlay */
  .noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.03;
    z-index: 1000;
    background-image: 
      radial-gradient(circle at 100% 50%, transparent 20%, rgba(0,0,0,0.3) 21%, rgba(0,0,0,0.3) 34%, transparent 35%, transparent),
      linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent),
      linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent);
    background-size: 75px 50px, 25px 25px, 25px 25px;
  }
  
  .layout.loading .noise-overlay {
    opacity: 0;
  }
</style>