<script lang="ts">

  type Service = {
    id: string;
    title: string;
    subtitle?: string;
    headline?: string;
    description?: string;
    bullets?: string[];
    ctaText?: string;
    ctaHref?: string;
    bgImage?: string;
    bgImageAlt?: string;
  };



  export let services: Service[] = [
    {
      id: 'left',
      title: 'Web Design',
      subtitle: 'The High-Performance Foundation',
      headline: 'The Foundation',
      description:
        'A custom-designed, high-performance website engineered for speed and conversion. Built with Svelte 5 to turn visitors into leads.',
      bullets: [
        'Engineered with Svelte 5 for superior speed',
        'Built-in SEO & conversion optimization',
        'Integrated analytics dashboard from day one'
      ],
      ctaText: 'Explore The Foundation →',
          ctaHref: '/services',
      bgImage: '/images/services.jpg',
      bgImageAlt: 'screen',
    },
    {
      id: 'right',
      title: 'Marketing',
      subtitle: 'The Data-Driven Growth Engine',
      headline: 'The Growth Engine',
      description:
        'A full-service retainer using real-time dashboard data to fuel targeted strategy. We manage your brand and content to consistently generate qualified opportunities.',
      bullets: [
        'Full-service management (content, social)',
        'Strategy informed by dashboard data',
        'Transparent monthly reporting'
      ],
      ctaText: 'Power Your Growth →',
          ctaHref: '/services',
      bgImage: '/images/services1.jpg',
      bgImageAlt: 'A dashboard with analytics graphs and charts',
    }
  ];

  let hoveredIndex: number | null = null;
  let activeIndex: number | null = null;

  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      hoveredIndex = 0;
      activeIndex = null;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      hoveredIndex = services.length > 1 ? 1 : 0;
      activeIndex = null;
    }
    if (e.key === 'Escape') {
      hoveredIndex = null;
      activeIndex = null;
    }
    if (e.key === 'Enter' && hoveredIndex !== null) {
      // emulate CTA activation
      const svc = services[hoveredIndex];
      if (svc?.ctaHref) window.location.href = svc.ctaHref;
    }
  }

  function onTouchToggle(index: number) {
    // FIX: If clicking the same card that's already active, close it
    if (activeIndex === index) {
      activeIndex = null;
      hoveredIndex = null; // Also clear hover state
      return;
    }

    // If it's a different card, activate it
    activeIndex = index;
    hoveredIndex = null; // Clear hover state when clicking
  }

  // FIX: Add click outside handler to close active cards
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Element;
    if (!target.closest('.service-half')) {
      activeIndex = null;
      hoveredIndex = null;
    }
  }

  // FIX: Add escape key handler specifically for mobile
  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      activeIndex = null;
      hoveredIndex = null;
    }
  }

  function preloadImages() {
    for (const s of services) {
      if (s.bgImage) {
        const img = new Image();
        img.src = s.bgImage;
      }
    }
  }

  if (typeof window !== 'undefined') {
    setTimeout(preloadImages, 100);
  }
</script>

<svelte:window on:click={handleClickOutside} on:keydown={handleEscape} />

<section
  class="services-hero"
  role="region"
  aria-label="Core services split screen"
  tabindex="0"
  on:keydown={onKeydown}
>
  {#each services as service, i}
    <div
      class="service-half {i === 0 ? 'left' : 'right'} {hoveredIndex === i || activeIndex === i ? 'is-active' : ''}"
      on:mouseenter={() => (hoveredIndex = i)}
      on:mouseleave={() => (hoveredIndex = null)}
      on:focusin={() => (hoveredIndex = i)}
      on:focusout={() => (hoveredIndex = null)}
      on:click|stopPropagation={() => onTouchToggle(i)}
      role="button"
      aria-pressed={activeIndex === i}
      tabindex="0"
    >

      <img
        class="service-bg-image"
        src={service.bgImage}
        alt={service.bgImageAlt ?? ''}
        loading="lazy"
        aria-hidden="true"
      />

      <div class="service-base-content">
        <h2 class="title">{service.title}</h2>
        {#if service.subtitle}
          <p class="subtitle">{service.subtitle}</p>
        {/if}
      </div>

      <div class="service-hover-content" aria-hidden={!(hoveredIndex === i || activeIndex === i)}>
        <div class="hover-inner">
          <h3 class="hover-headline">{service.headline ?? service.title}</h3>
          {#if service.description}
            <p class="hover-desc">{service.description}</p>
          {/if}

          {#if service.bullets}
            <ul class="hover-bullets">
              {#each service.bullets as b}
                <li>{b}</li>
              {/each}
            </ul>
          {/if}

          {#if service.ctaText}
            <a class="cta-button" href={service.ctaHref ?? '#'}>{service.ctaText}</a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</section>

<style>
  :global(:root) {
    --transition: 450ms cubic-bezier(.2,.9,.2,1);
  }

  .services-hero {
    display: flex;
    height: 100vh;
    width: 100%;
    outline: none;
    position:relative;
  }

  .service-half {
    flex: 1 1 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 600ms , cubic-bezier(0.16, 1, 0.3, 1);
    border-right: 1px solid rgba(255, 255, 255, 0.15);
  }

  .service-half.right {
    border-right: none;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* Allow the hovered side to gently grow */
  .service-half.is-active {
    flex: 1.08 1 54%;
  }

  .service-bg-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: center;
    transition: filter var(--transition), transform var(--transition);
    will-change: transform, filter;
  }

  /* blur + scale on hover */
  .service-half.is-active .service-bg-image {
    filter: blur(8px) saturate(1.05);
    transform: scale(1.04);
  }

  .service-base-content {
    position: relative;
    z-index: 3;
    text-align: center;
    color: white;
    padding: 2rem;
    pointer-events: none;
  }

  .title {
    font-family: 'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 0.9;
    text-transform: uppercase;
  }

  .subtitle {
    margin-top: 1rem;
    opacity: 0.85;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system;
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5;
  }

  .service-hover-content {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(16px) saturate(1.8);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2.5rem;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity var(--transition), transform var(--transition);
    color: #fff;
    text-align: center;
  }

  .service-half.is-active .service-hover-content {
    opacity: 1;
    transform: translateY(0);
  }

  .hover-inner {
    max-width: 42ch;
  }

  .hover-headline {
    margin: 0 0 1.5rem 0;
    font-family: 'Syne', ui-sans-serif, system-ui, -apple-system;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 0.95;
    text-transform: uppercase;
  }

  .hover-desc {
    margin: 0 0 2rem 0;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system;
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.5;
    font-weight: 400;
    opacity: 0.9;
  }

  .hover-bullets {
    text-align: left;
    margin: 0 0 2.5rem 0;
    padding-left: 0;
    list-style: none;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system;
  }

  .hover-bullets li {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    line-height: 1.4;
    font-weight: 400;
  }

  .hover-bullets li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 2px;
    background: transparent;
    color: #fff;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    transition: all 300ms cubic-bezier(.2,.9,.2,1);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .cta-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }

  .cta-button:active {
    transform: translateY(0);
  }

  /* accessibility: focus visible outlines */
  .service-half:focus {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: -4px;
  }

  /* Mobile: stack vertically */
  @media (max-width: 900px) {
    .services-hero {
      flex-direction: column;
      height: auto;
    }
    .service-half {
      width: 100%;
      min-height: 60vh;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }
    .service-half.right {
      border-left: none;
      border-bottom: none;
    }
    .service-half.is-active {
      min-height: 75vh;
    }

    .title {
      font-size: clamp(2rem, 8vw, 3rem);
    }

    .hover-headline {
      font-size: clamp(1.5rem, 6vw, 2.25rem);
    }

    .service-hover-content {
      padding: 2rem 1.5rem;
    }
  }

  /* Reduced motion: simplify transitions */
  @media (prefers-reduced-motion: reduce) {
    .service-bg-image { transition: none; }
    .service-hover-content { transition: none; }
    .service-half { transition: none; }
    .cta-button { transition: none; }
  }
</style>
