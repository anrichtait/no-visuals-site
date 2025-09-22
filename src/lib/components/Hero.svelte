<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";

  let current: number = 0;
  let timer: ReturnType<typeof setInterval>;

  const slides = [
    { src: 'images/hero1.jpg', alt: 'Hero Image 1' },
    { src: 'images/hero2.jpg', alt: 'Hero Image 2' },
  ];

  onMount(() => {
    if (slides.length > 1) {
      timer = setInterval(() => {
        current = (current + 1) % slides.length;
      }, 7500);
    }
  });

  onDestroy(() => {
    clearInterval(timer);
  });

  const videoFormats = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);
</script>

<div class="hero">
  {#each slides as slide, i}
    <div
      class="slide-wrapper"
      class:active={i === current}
      in:fade={{ duration: 1000 }}
      out:fade={{ duration: 1000 }}
    >
      {#if videoFormats(slide.src)}
        <video
          src={slide.src}
          autoplay
          muted
          loop
          playsinline
          class="slide"
        ></video>
      {:else}
        <img src={slide.src} alt={slide.alt} class="slide" />
      {/if}
    </div>
  {/each}

  <div class="text-overlay">
    <h1 class="hero-heading">
      <span class="line">TAIT</span>
      <span class="line">MEDIA</span>
      <span class="line">SOLUTIONS</span>
    </h1>
  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap');

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
    font-family: 'Syne', sans-serif;
    font-weight: 400;
    font-style: bold;
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
      left: 1.5rem;
    }
  }
</style>
