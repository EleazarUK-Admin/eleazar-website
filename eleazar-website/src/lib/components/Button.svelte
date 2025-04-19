<script>
    // Props
    export let variant = 'primary'; // primary, secondary, outline
    export let size = 'medium'; // small, medium, large
    export let fullWidth = false;
    export let type = 'button';
  </script>
  
  <button 
    {type}
    class="button {variant} {size} {fullWidth ? 'full-width' : ''}"
    on:click
  >
    <slot></slot>
  </button>
  
  <style>
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      font-family: var(--font-display);
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    /* Variant styles */
    .primary {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
    
    .secondary {
      background-color: var(--color-secondary);
      color: var(--color-white);
    }
    
    .outline {
      background-color: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }
    
    /* Hover states */
    .primary:hover {
      background-color: #FF5200; /* Darker orange */
    }
    
    .secondary:hover {
      background-color: #DDDDDF; /* Darker green */
    }
    
    .outline:hover {
      background-color: rgba(247, 83, 46, 0.1); /* Light orange background */
    }
    
    /* Size variations */
    .small {
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    }
    
    .medium {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    }
    
    .large {
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }
    
    /* Full width option */
    .full-width {
      width: 100%;
    }
  </style>