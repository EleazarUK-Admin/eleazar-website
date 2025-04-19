<script>
  import Logo from '../components/Logo.svelte';
  
  // Current year for copyright
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <Logo variant="dark" size="small" />
        <p>Arquitectura para el pensamiento algorítmico.</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/design">Design</a></li>
            <li><a href="/services/development">Development</a></li>
            <li><a href="/services/strategy">Strategy</a></li>
            <li><a href="/services/consulting">Consulting</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/documentation">Documentation</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {year} Eleazar. All rights reserved.</p>
      <div class="legal-links">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/cookies">Cookies</a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #f8f8f8;
    padding: 4rem 0 2rem;
    margin-top: 4rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .footer-brand {
    max-width: 300px;
  }
  
  .footer-brand p {
    margin-top: 1rem;
    color: #666;
  }
  
  .footer-links {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  a:hover {
    color: var(--color-primary);
  }
  
  .footer-bottom {
    border-top: 1px solid #eee;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .legal-links {
    display: flex;
    gap: 1.5rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
    }
    
    .footer-links {
      width: 100%;
    }
    
    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>