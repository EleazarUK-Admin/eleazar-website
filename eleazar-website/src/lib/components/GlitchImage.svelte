<script>
    export let src = '';
    export let alt = '';
    export let intensity = 'medium'; // low, medium, high
    export let glitchType = 'scanlines'; // scanlines, split, chromatic
    
    let imageElement;
    
    // Randomly trigger glitch effects
    function triggerGlitch() {
      if (imageElement) {
        imageElement.classList.add('active-glitch');
        setTimeout(() => {
          imageElement.classList.remove('active-glitch');
        }, Math.random() * 300 + 100);
      }
    }
    
    // Set random glitch intervals
    setInterval(triggerGlitch, Math.random() * 5000 + 2000);
  </script>
  
  <div class="image-container {intensity} {glitchType}">
    <img bind:this={imageElement} {src} {alt} />
    <div class="glitch-overlay"></div>
  </div>
  
  <style>
    .image-container {
      position: relative;
      overflow: hidden;
      display: inline-block;
    }
    
    img {
      display: block;
      width: 100%;
      height: auto;
      transition: transform 0.3s ease;
    }
    
    .glitch-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.1s ease;
    }
    
    /* Scanlines glitch effect */
    .scanlines .active-glitch .glitch-overlay {
      opacity: 1;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255, 82, 0, 0.1) 2px,
        rgba(255, 82, 0, 0.1) 4px
      );
      mix-blend-mode: screen;
    }
    
    /* Split glitch effect */
    .split .active-glitch img {
      transform: translate(2px, 0);
      filter: drop-shadow(-4px 0 0 #FF5200) drop-shadow(4px 0 0 #001F0B);
    }
    
    /* Chromatic aberration effect */
    .chromatic .active-glitch img {
      filter: 
        drop-shadow(2px 0 0 #FF5200) 
        drop-shadow(-2px 0 0 #001F0B)
        drop-shadow(0 2px 0 rgba(255, 255, 255, 0.1));
    }
    
    /* Intensity variations */
    .low .active-glitch img {
      transform: translate(1px, 0);
    }
    
    .medium .active-glitch img {
      transform: translate(2px, 0);
    }
    
    .high .active-glitch img {
      transform: translate(3px, 0);
    }
    
    /* Random shake animation */
    @keyframes shake {
      0% { transform: translate(0); }
      25% { transform: translate(-2px, 2px); }
      50% { transform: translate(2px, -2px); }
      75% { transform: translate(-2px, -2px); }
      100% { transform: translate(2px, 2px); }
    }
    
    .high .active-glitch img {
      animation: shake 0.1s infinite;
    }
  </style>