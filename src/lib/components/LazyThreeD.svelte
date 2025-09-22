<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let isVisible = false;
  let observer: IntersectionObserver;
  let container: HTMLElement;

  onMount(() => {
    if (browser && container) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              isVisible = true;
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '100px' }
      );

      observer.observe(container);

      return () => {
        if (observer) observer.disconnect();
      };
    }
  });
</script>

<div bind:this={container} class="lazy-3d-container">
  {#if isVisible}
    <slot />
  {:else}
    <div class="loading-placeholder">
      <div class="placeholder-content"></div>
    </div>
  {/if}
</div>

<style>
  .lazy-3d-container {
    min-height: 200px;
    border-radius: 8px;
    overflow: hidden;
  }

  .loading-placeholder {
    width: 100%;
    height: 200px;
    background: linear-gradient(45deg, #333, #444);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .placeholder-content {
    width: 60px;
    height: 60px;
    border: 3px solid #555;
    border-top: 3px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
