<script>
  // Props
  export let size = 'medium'; // small, medium, large
  export let variant = 'primary'; // primary, secondary, dark, light
  
  // Computed properties
  $: scale = size === 'small' ? 0.15 : size === 'medium' ? 0.25 : 0.35;
  $: width = 557 * scale;
  $: height = 118 * scale;
  
  // Color mapping based on variant
  $: mainColor = 
    variant === 'primary' ? '#F7532E' : 
    variant === 'secondary' ? '#1F3D2B' : 
    variant === 'dark' ? '#000000' : 
    '#FFFFFF'; // light variant
    
  $: accentColor = variant === 'primary' ? '#FF5200' : mainColor;
</script>

<svg width="296" height="318" viewBox="0 0 296 318" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_156)">
  <path d="M99.4004 0V82.6646L71.3668 111.571L0 111.633V318H196.6V235.335L224.633 206.429L296 206.367V0H99.4004ZM214.372 30.9295V31.5109L137.548 111.121V30.9295H214.372ZM257.852 35.6348V113.013H183.734V112.431L257.852 35.627V35.6348ZM38.148 204.987H112.266V205.569L38.148 282.373V204.995V204.987ZM81.6284 287.07V286.489L158.452 206.879V287.063H81.6284V287.07ZM216.828 174.058L193.709 198.049V174.058H38.148V143.942H79.1715L102.291 119.951V143.942H257.852V174.058H216.828Z" fill="#FF5200"/>
  </g>
  <defs>
  <clipPath id="clip0_1_156">
  <rect width="296" height="318" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  