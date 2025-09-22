<script lang="ts">
import LazyThreeD from "$lib/components/LazyThreeD.svelte";
import Static3DScene from "$lib/components/3d/Static3DScene.svelte";
import Phase1Scene from "$lib/components/3d/Phase1Scene.svelte";
import Phase2Scene from "$lib/components/3d/Phase2Scene.svelte";
import Phase3Scene from "$lib/components/3d/Phase3Scene.svelte";

// Hover state management with Svelte 5 runes
let hoveredPhase = $state<string | null>(null);
let activePhase = $state<string | null>(null);

// Phase data with hover content
const phases = [
  {
    id: 'phase1',
    title: 'Phase 1:',
    subtitle: 'Foundation & Optimization',
    hoverHeadline: 'Building Your Foundation',
    hoverDescription: 'We start with the basics - setting up your digital infrastructure, optimizing your existing assets, and establishing tracking systems that give you clear visibility into what\'s working.',
    hoverBullets: [
      'Website audit and optimization',
      'Analytics setup and dashboard',
      'SEO foundation and technical fixes'
    ],
    component: Phase1Scene
  },
  {
    id: 'phase2',
    title: 'Phase 2:',
    subtitle: 'Content & Growth',
    hoverHeadline: 'Scaling Your Presence',
    hoverDescription: 'With your foundation solid, we focus on creating compelling content and strategic campaigns that attract your ideal clients and showcase your expertise in the market.',
    hoverBullets: [
      'Content strategy and creation',
      'Lead generation campaigns',
      'Brand positioning and messaging'
    ],
    component: Phase2Scene
  },
  {
    id: 'phase3',
    title: 'Phase 3:',
    subtitle: 'Scale & Amplify',
    hoverHeadline: 'Maximum Growth',
    hoverDescription: 'Now we amplify what\'s working. We scale successful campaigns, expand your reach through strategic partnerships, and implement advanced automation to maximize your ROI.',
    hoverBullets: [
      'Campaign scaling and automation',
      'Advanced analytics and reporting',
      'Strategic growth partnerships'
    ],
    component: Phase3Scene
  }
];

function onTouchToggle(phaseId: string) {
  if (activePhase === phaseId) {
    activePhase = null;
    return;
  }
  activePhase = phaseId;
}

function handleKeyPress(event: KeyboardEvent, phaseId: string) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onTouchToggle(phaseId);
  }
}
</script>

<section class="w-full bg-gray-800 p-5 grid grid-rows-[25%_75%] lg:grid-cols-3 lg:grid-rows-none gap-5 min-h-screen box-border">
  <!-- Main title spanning full width -->
  <div class="lg:col-span-3 flex items-start">
    <h2 class="font-syne text-6xl md:text-8xl lg:text-9xl font-normal text-gray-200 m-0 leading-tight">The Process</h2>
  </div>

  <!-- Three phase cards in a row -->
  {#each phases as phase, i}
    <button
      type="button"
      class="border-0 bg-transparent rounded-lg p-2.5 grid grid-rows-[auto_1fr] gap-2.5 overflow-hidden relative cursor-pointer transition-all duration-300 ease-in-out w-full text-left hover:transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:transform focus:-translate-y-1 focus:shadow-2xl {hoveredPhase === phase.id || activePhase === phase.id ? 'transform -translate-y-1 shadow-2xl' : ''}"
      on:mouseenter={() => (hoveredPhase = phase.id)}
      on:mouseleave={() => (hoveredPhase = null)}
      on:click={() => onTouchToggle(phase.id)}
      on:keydown={(e) => handleKeyPress(e, phase.id)}
      aria-expanded={hoveredPhase === phase.id || activePhase === phase.id}
      aria-describedby="phase-content-{phase.id}"
    >
      <div class="p-2.5 bg-transparent relative z-10">
        <h3 class="font-inter text-3xl md:text-4xl lg:text-5xl font-normal text-white m-0 mb-2.5 leading-tight">{phase.title}</h3>
        <h4 class="font-inter text-3xl md:text-4xl lg:text-5xl font-normal text-white m-0 leading-tight">{phase.subtitle}</h4>
      </div>

      <div class="bg-transparent flex items-center justify-center min-h-[200px] relative rounded-lg overflow-hidden">
        <LazyThreeD>
          <Static3DScene>
            <svelte:component this={phase.component} />
          </Static3DScene>
        </LazyThreeD>

        <!-- Hover indicator -->
        {#if hoveredPhase !== phase.id && activePhase !== phase.id}
          <div class="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-black/80 rounded-full text-white text-sm font-inter opacity-80 transition-opacity duration-300 pointer-events-none z-30" aria-hidden="true">
            <span class="font-normal">Hover to explore</span>
            <div class="text-base animate-bounce-x">⬅</div>
          </div>
        {/if}
      </div>

      <!-- Hover/expanded content -->
      <div
        id="phase-content-{phase.id}"
        class="absolute inset-0 bg-gray-800/95 border border-white/15 z-40 flex items-center justify-center p-8 box-border opacity-0 transform translate-y-3 transition-all duration-450 ease-out text-white text-center rounded-lg shadow-lg {hoveredPhase === phase.id || activePhase === phase.id ? 'opacity-100 transform translate-y-0' : ''}"
        aria-live="polite"
      >
        <div class="max-w-md">
          <h3 class="m-0 mb-6 font-syne text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-gray-200">{phase.hoverHeadline}</h3>
          <p class="m-0 mb-6 font-inter text-sm md:text-base leading-relaxed font-normal opacity
-90">{phase.hoverDescription}</p>

          <ul class="text-left m-0 pl-0 list-none font-inter">
            {#each phase.hoverBullets as bullet}
              <li class="my-3 pl-6 relative text-xs md:text-sm leading-snug font-normal before:content-['—'] before:absolute before:left-0 before:text-white/60 before:font-light">{bullet}</li>
            {/each}
          </ul>
        </div>
      </div>
    </button>
  {/each}
</section>

<style>
@keyframes bounce-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-4px); }
}

.animate-bounce-x {
  animation: bounce-x 2s ease-in-out infinite;
}

/* Responsive - stack on mobile */
@media (max-width: 1023px) {
  section {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 15px;
    padding: 15px;
  }

  .min-h-[200px] {
    min-height: 150px;
  }

  .p-8 {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 479px) {
  section {
    padding: 10px;
    gap: 10px;
  }

  .p-2\.5 {
    padding: 8px;
  }

  .min-h-[200px] {
    min-height: 120px;
  }

  .absolute.bottom-4.right-4 {
    bottom: 12px;
    right: 12px;
    padding: 6px 10px;
    font-size: 0.75rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  button { transition: none; }
  .transition-all { transition: none; }
  .animate-bounce-x { animation: none; }
}
</style>