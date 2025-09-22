<script lang="ts">
import Static3DScene from "$lib/components/3d/Static3DScene.svelte";
import Phase1Scene from "$lib/components/3d/Phase1Scene.svelte";
import Phase2Scene from "$lib/components/3d/Phase2Scene.svelte";
import Phase3Scene from "$lib/components/3d/Phase3Scene.svelte";

// Hover state management
let hoveredPhase: string | null = null;
let activePhase: string | null = null;

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
</script>

<section class="process-section">
  <!-- Main title spanning full width -->
  <div class="section-title-container">
    <h2 class="section-title">The Process</h2>
  </div>

  <!-- Three phase cards in a row -->
  {#each phases as phase, i}
    <div
      class="phase-card {hoveredPhase === phase.id || activePhase === phase.id ? 'is-hovered' : ''}"
      on:mouseenter={() => (hoveredPhase = phase.id)}
      on:mouseleave={() => (hoveredPhase = null)}
      on:click={() => onTouchToggle(phase.id)}
      role="button"
      tabindex="0"
    >
      <div class="phase-header">
        <h3 class="phase-title">{phase.title}</h3>
        <h4 class="phase-subtitle">{phase.subtitle}</h4>
      </div>

      <div class="component-placeholder">
        <Static3DScene>
          <svelte:component this={phase.component} />
        </Static3DScene>

        <!-- Hover indicator -->
        {#if hoveredPhase !== phase.id && activePhase !== phase.id}
          <div class="hover-indicator">
            <span class="hover-text">Hover to explore</span>
            <div class="hover-cursor">⬅</div>
          </div>
        {/if}
      </div>

      <!-- Hover/expanded content -->
      <div
        class="phase-hover-content"
        class:is-visible={hoveredPhase === phase.id || activePhase === phase.id}
      >
        <div class="hover-inner">
          <h3 class="hover-headline">{phase.hoverHeadline}</h3>
          <p class="hover-desc">{phase.hoverDescription}</p>

          <ul class="hover-bullets">
            {#each phase.hoverBullets as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/each}
</section>

<style>
.process-section {
  width: 100%;
  background: #2c2c2c;
  padding: 20px;
  display: grid;
  grid-template-rows: 25% 75%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

.section-title-container {
  grid-column: 1 / 4;
  grid-row: 1;
  display: flex;
  align-items: flex-start;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 400;
  color: #ebebf4;
  margin: 0;
  line-height: 1.2;
}

.phase-card {
  grid-row: 2;
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
  background: transparent;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 300ms ease, box-shadow 300ms ease;
}

.phase-card:nth-child(2) {
  grid-column: 1;
}

.phase-card:nth-child(3) {
  grid-column: 2;
}

.phase-card:nth-child(4) {
  grid-column: 3;
}

.phase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Phase headers */
.phase-header {
  padding: 10px;
  background: transparent;
  position: relative;
  z-index: 2;
}

.phase-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 3.125rem);
  font-weight: 400;
  color: white;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.phase-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 3.125rem);
  font-weight: 400;
  color: white;
  margin: 0;
  line-height: 1.2;
}

/* 3D component area */
.component-placeholder {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

/* Hover indicator */
.hover-indicator {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  color: white;
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
  opacity: 0.8;
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 3;
}

.hover-text {
  font-weight: 400;
}

.hover-cursor {
  font-size: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-4px); }
}

/* Hover/expanded content */
.phase-hover-content {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(16px) saturate(1.8);
  background: rgba(44, 44, 44, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 450ms cubic-bezier(.2,.9,.2,1), transform 450ms cubic-bezier(.2,.9,.2,1);
  color: #fff;
  text-align: center;
  border-radius: 8px;
}

.phase-hover-content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hover-inner {
  max-width: 36ch;
}

.hover-headline {
  margin: 0 0 1.5rem 0;
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #ebebf4;
}

.hover-desc {
  margin: 0 0 1.5rem 0;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.5;
  font-weight: 400;
  opacity: 0.9;
}

.hover-bullets {
  text-align: left;
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-family: 'Inter', sans-serif;
}

.hover-bullets li {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: clamp(0.75rem, 1.4vw, 0.875rem);
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

/* Responsive - stack on mobile */
@media (max-width: 768px) {
  .process-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 15px;
    padding: 15px;
  }

  .section-title-container {
    grid-column: 1;
    grid-row: 1;
  }

  .phase-card:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }

  .phase-card:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }

  .phase-card:nth-child(4) {
    grid-column: 1;
    grid-row: 4;
  }

  .component-placeholder {
    min-height: 150px;
  }

  .phase-hover-content {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .process-section {
    padding: 10px;
    gap: 10px;
  }

  .phase-header {
    padding: 8px;
  }

  .component-placeholder {
    min-height: 120px;
  }

  .hover-indicator {
    bottom: 12px;
    right: 12px;
    padding: 6px 10px;
    font-size: 0.75rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .phase-card { transition: none; }
  .phase-hover-content { transition: none; }
  .hover-cursor { animation: none; }
}
</style>
