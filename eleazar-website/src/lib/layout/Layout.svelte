<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    
    // Props
    export let showHeader = true;
    export let showFooter = true;
  </script>
  
  {#if showHeader}
    <Header />
  {/if}
  
  <div class="content">
    <slot></slot>
  </div>
  
  {#if showFooter}
    <Footer />
  {/if}
  
  <style>
    .content {
      min-height: calc(100vh - 250px); /* Adjust based on header/footer heights */
    }
  </style>