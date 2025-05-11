<script>
  import Router, { link, push } from 'svelte-spa-router';
  import Home from './lib/pages/Home.svelte';
  import Showcase from './lib/pages/Showcase.svelte';
  
  // Define your routes
  const routes = {
    '/': Home,
    '/showcase': Showcase
  };
</script>

<Router {routes} />