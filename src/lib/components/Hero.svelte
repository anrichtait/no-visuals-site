<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";

  let current = $state(0);
  let timer = $state<ReturnType<typeof setInterval>>();

  const slides = [
    {
      webp: 'images/hero1-desktop.webp',
      webpMobile: 'images/hero1-mobile.webp',
      alt: 'Hero Image 1' 
    },
    { 
      webp: 'images/hero2-desktop.webp',
      webpMobile: 'images/hero2-mobile.webp', 
      alt: 'Hero Image 2' 
    },
  ];

  onMount(() => {
    if (slides.length > 1) {
      timer = setInterval(() => {
        current = (current + 1) % slides.length;
      }, 7500);
    }
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<div class="hero">
  {#each slides as slide, i}
    <div
      class="slide-wrapper"
      class:active={i === current}
      in:fade={{ duration: 1000 }}
      out:fade={{ duration: 1000 }}
    >
      <picture>
        <source 
          media="(max-width: 768px)" 
          srcset="{slide.webpMobile}" 
          type="image/webp"
        />
        <source 
          media="(min-width: 769px)" 
          srcset="{slide.webp}" 
          type="image/webp"
        />
        <img 
          src={slide.webp} 
          alt={slide.alt} 
          class="slide"
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={i === 0 ? "high" : "low"}
          width="1920"
          height="1080"
        />
      </picture>
    </div>
  {/each}

  <div class="text-overlay">
    <h1 class="hero-heading">
      <span class="line">NO</span>
      <span class="line">VISUALS</span>
    </h1>
  </div>
</div>

<style>
  .hero {
    position: relative;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
  }

  .slide-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  .slide-wrapper.active {
    opacity: 1;
    visibility: visible;
  }

  .slide {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .text-overlay {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    z-index: 20;
    pointer-events: none;
  }

  .hero-heading {
    font-size: clamp(3rem, 10vw, 12rem);
    line-height: 0.7;
    letter-spacing: -0.05em;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0;
  }

  .line {
    display: block;
  }

  @media (max-width: 768px) {
    .text-overlay {
      bottom: 2rem;
      left: 2rem;
    }
    
    .hero-heading {
        font-size: clamp(2rem, 15vw, 6rem);
        line-height: 0.9;
    }
  }

  @media (max-width: 480px) {
    .text-overlay {
        bottom: clamp(1rem, 12vw, 2rem);
        left: clamp(1rem, 12vw, 2rem);
    }
  }
</style>
