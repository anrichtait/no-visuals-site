<script lang="ts">
import LazyThreeD from "$lib/components/LazyThreeD.svelte";
import Static3DScene from "$lib/components/3d/Static3DScene.svelte";
import Phase1Scene from "$lib/components/3d/Phase1Scene.svelte";
import Phase2Scene from "$lib/components/3d/Phase2Scene.svelte";
import Phase3Scene from "$lib/components/3d/Phase3Scene.svelte";

// Enhanced state management with Svelte 5 runes
let selectedPhase = $state<number>(0);
let isTransitioning = $state<boolean>(false);

// Enhanced phase data
const phases = [
  {
    id: 'phase1',
    number: '01',
    title: 'Foundation & Optimization',
    subtitle: 'Building Your Digital Foundation',
    description: 'We start with the basics - setting up your digital infrastructure, optimizing your existing assets, and establishing tracking systems that give you clear visibility into what\'s working.',
    features: [
      'Complete website audit and technical optimization',
      'Analytics setup with custom dashboard integration',
      'SEO foundation with keyword strategy',
      'Performance optimization for speed and conversion'
    ],
    component: Phase1Scene,
    color: '#7C9885'
  },
  {
    id: 'phase2',
    number: '02',
    title: 'Content & Growth',
    subtitle: 'Scaling Your Digital Presence',
    description: 'With your foundation solid, we focus on creating compelling content and strategic campaigns that attract your ideal clients and showcase your expertise in the market.',
    features: [
      'Content strategy aligned with buyer journey',
      'Lead generation campaigns with A/B testing',
      'Brand positioning and messaging refinement',
      'Social media integration and automation'
    ],
    component: Phase2Scene,
    color: '#D4A574'
  },
  {
    id: 'phase3',
    number: '03',
    title: 'Scale & Amplify',
    subtitle: 'Maximum Growth & Optimization',
    description: 'Now we amplify what\'s working. We scale successful campaigns, expand your reach through strategic partnerships, and implement advanced automation to maximize your ROI.',
    features: [
      'Campaign scaling with advanced automation',
      'Comprehensive analytics and reporting suite',
      'Strategic partnerships and referral programs',
      'Continuous optimization and growth hacking'
    ],
    component: Phase3Scene,
    color: '#8B9A9A'
  }
];

function selectPhase(index: number) {
  if (isTransitioning || index === selectedPhase) return;
  
  isTransitioning = true;
  selectedPhase = index;
  
  setTimeout(() => {
    isTransitioning = false;
  }, 600);
}

function handleKeyPress(event: KeyboardEvent, index: number) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    selectPhase(index);
  }
}
</script>

<!-- Full-Screen Process Experience -->
<section class="min-h-screen bg-[#2C2C2C] relative overflow-hidden">
  
  <!-- Background Elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-20 left-10 w-64 h-64 bg-[#7C9885]/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B9A9A]/3 rounded-full blur-3xl"></div>
  </div>

  <div class="relative z-10 h-full">
    
    <!-- Section Header -->
    <div class="pt-20 pb-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-center gap-4 mb-8">
          <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
          <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Our Process</span>
          <span class="h-px w-16 bg-gradient-to-l from-[#7C9885] to-transparent"></span>
        </div>
        
        <h2 class="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          How We Build
          <span class="block text-[#7C9885]">Your Success</span>
        </h2>
        
        <p class="text-xl text-white/80 font-inter leading-relaxed max-w-3xl mx-auto">
          Our proven three-phase methodology transforms your digital presence from foundation to scale, 
          with full transparency every step of the way.
        </p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="px-6 pb-20">
      <div class="max-w-7xl mx-auto">
        
        <!-- Phase Navigation -->
        <div class="flex justify-center mb-12">
          <div class="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            {#each phases as phase, i}
              <button
                class="px-6 py-3 rounded-xl font-inter font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 {
                  selectedPhase === i 
                    ? 'bg-white text-[#2C2C2C] shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }"
                on:click={() => selectPhase(i)}
                on:keydown={(e) => handleKeyPress(e, i)}
                disabled={isTransitioning}
              >
                {phase.number} — {phase.title}
              </button>
            {/each}
          </div>
        </div>

        <!-- Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <!-- 3D Visualization - Full Size -->
          <div class="order-2 lg:order-1">
            <div class="relative aspect-square w-full max-w-2xl mx-auto">
              
              <!-- 3D Scene Container -->
              <div class="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <LazyThreeD>
                  <Static3DScene width="100%" height="100%">
                    <svelte:component this={phases[selectedPhase].component} />
                  </Static3DScene>
                </LazyThreeD>
                
                <!-- Phase Indicator -->
                <div class="absolute top-6 left-6 z-20">
                  <div class="flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                    <div class="w-2 h-2 rounded-full animate-pulse" style="background-color: {phases[selectedPhase].color}"></div>
                    <span class="text-white text-sm font-medium">Phase {phases[selectedPhase].number}</span>
                  </div>
                </div>
                
                <!-- Loading Indicator -->
                {#if isTransitioning}
                  <div class="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-30">
                    <div class="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                {/if}
              </div>

              <!-- Floating Enhancement Elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl animate-pulse opacity-30"
                   style="background: radial-gradient(circle, {phases[selectedPhase].color} 0%, transparent 70%);"></div>
              <div class="absolute -bottom-4 -left-4 w-24 h-24 rounded-full blur-xl animate-pulse opacity-20"
                   style="background: radial-gradient(circle, {phases[selectedPhase].color} 0%, transparent 70%); animation-delay: 1s;"></div>
            </div>
          </div>

          <!-- Content Panel -->
          <div class="order-1 lg:order-2 space-y-8">
            
            <!-- Phase Header -->
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white border-2"
                     style="background-color: {phases[selectedPhase].color}20; border-color: {phases[selectedPhase].color}">
                  {phases[selectedPhase].number}
                </div>
                <div>
                  <h3 class="font-syne text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {phases[selectedPhase].title}
                  </h3>
                  <p class="text-lg font-inter font-medium opacity-80" style="color: {phases[selectedPhase].color}">
                    {phases[selectedPhase].subtitle}
                  </p>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-6">
              <p class="text-lg lg:text-xl font-inter leading-relaxed text-white/90">
                {phases[selectedPhase].description}
              </p>
            </div>

            <!-- Features List -->
            <div class="space-y-6">
              <h4 class="font-syne text-xl font-semibold text-white flex items-center gap-3">
                <span class="w-1 h-6 rounded-full" style="background-color: {phases[selectedPhase].color}"></span>
                Key Deliverables
              </h4>
              
              <div class="grid gap-4">
                {#each phases[selectedPhase].features as feature, i}
                  <div class="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                       style="animation: slideInUp 0.4s ease-out {i * 0.1}s both;">
                    <div class="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white mt-0.5"
                         style="background-color: {phases[selectedPhase].color}">
                      ✓
                    </div>
                    <p class="text-white/80 font-inter leading-relaxed">{feature}</p>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Navigation Hint -->
            <div class="pt-6">
              <p class="text-sm text-white/60 font-inter flex items-center gap-2">
                <span>Use the tabs above to explore each phase</span>
                <span class="animate-pulse">👆</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Smooth transitions */
  button {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Custom scrollbar for better UX */
  section {
    scrollbar-width: thin;
    scrollbar-color: rgba(124, 152, 133, 0.3) transparent;
  }

  section::-webkit-scrollbar {
    width: 6px;
  }

  section::-webkit-scrollbar-track {
    background: transparent;
  }

  section::-webkit-scrollbar-thumb {
    background: rgba(124, 152, 133, 0.3);
    border-radius: 3px;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
</style>

