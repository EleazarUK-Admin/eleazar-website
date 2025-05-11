<script>
  // Props
  export let variant = 'primary'; // primary, secondary, outline
  export let size = 'medium'; // small, medium, large
  export let fullWidth = false;
  export let type = 'button';
  export let disabled = false;
</script>

<button 
  {type}
  {disabled}
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
    font-family: var(--font-display);
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
  }
  
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .button:disabled:hover {
    transform: none;
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
  
  /* Hover states with subtle transform */
  .button:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .primary:not(:disabled):hover {
    background-color: #d94400;
  }
  
  .secondary:not(:disabled):hover {
    background-color: #003a1a;
  }
  
  .outline:not(:disabled):hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
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
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }
  
  /* Full width option */
  .full-width {
    width: 100%;
  }
  
  /* Subtle active state */
  .button:not(:disabled):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>