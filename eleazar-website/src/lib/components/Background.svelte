<!-- src/lib/components/Background.svelte -->
<script>
    export let image = 'background-4.png';
    export let height = '400px';
    
    // Create the path based on the image name
    $: bgPath = `/backgrounds/${image}`;
  </script>
  
  <div class="background" style="background-image: url({bgPath}); min-height: {height};">
    <slot></slot>
  </div>
  
  <style>
    .background {
      background-size: cover;
      background-position: center;
      width: 100%;
    }
  </style>