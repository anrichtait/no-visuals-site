<script lang="ts">
let selectedPhase = $state<number>(0);
let isTransitioning = $state<boolean>(false);

const phases = [
  {
    id: 'phase1',
    number: '01',
    title: 'Foundation & Optimization',
    subtitle: 'Building Your Digital Foundation',
    description: 'We start with the basics by setting up your digital infrastructure, optimizing your existing assets, and establishing tracking systems that give you clear visibility into what\'s working.',
    features: [
      'Complete website audit and technical optimization',
      'Analytics setup with custom dashboard integration',
      'SEO foundation with keyword strategy',
      'Performance optimization for speed and conversion'
    ],
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
      'Continuous optimization and growth funneling'
    ],
    color: '#8B9A9A'
  }
];

function selectPhase(index: number) {
  if (isTransitioning || index === selectedPhase) return;
  
  isTransitioning = true;
  selectedPhase = index;
  
  setTimeout(() => {
    isTransitioning = false;
  }, 300);
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
      <div class="max-w-5xl mx-auto">
        
        <!-- Phase Navigation -->
        <div class="flex justify-center mb-16">
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

        <!-- Content Panel - Centered -->
        <div class="max-w-4xl mx-auto">
          
          <!-- Phase Header -->
          <div class="text-center mb-12">
            <div class="flex items-center justify-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white border-2"
                   style="background-color: {phases[selectedPhase].color}20; border-color: {phases[selectedPhase].color}">
                {phases[selectedPhase].number}
              </div>
            </div>
            
            <h3 class="font-syne text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {phases[selectedPhase].title}
            </h3>
            
            <p class="text-xl font-inter font-medium opacity-80 mb-8" style="color: {phases[selectedPhase].color}">
              {phases[selectedPhase].subtitle}
            </p>
          </div>

          <!-- Description -->
          <div class="text-center mb-12">
            <p class="text-xl lg:text-2xl font-inter leading-relaxed text-white/90 max-w-3xl mx-auto">
              {phases[selectedPhase].description}
            </p>
          </div>

          <!-- Features Grid -->
          <div class="space-y-8">
            <h4 class="font-syne text-2xl font-semibold text-white text-center flex items-center justify-center gap-3">
              <span class="w-1 h-8 rounded-full" style="background-color: {phases[selectedPhase].color}"></span>
              Key Deliverables
              <span class="w-1 h-8 rounded-full" style="background-color: {phases[selectedPhase].color}"></span>
            </h4>
            
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {#each phases[selectedPhase].features as feature, i}
                <div class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                     style="animation: slideInUp 0.4s ease-out {i * 0.1}s both;">
                  <div class="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white mt-1 group-hover:scale-110 transition-transform duration-300"
                       style="background-color: {phases[selectedPhase].color}">
                    ✓
                  </div>
                  <p class="text-white/80 font-inter leading-relaxed text-lg">{feature}</p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Phase Progress Indicator -->
          <div class="mt-16 flex justify-center">
            <div class="flex items-center gap-3">
              {#each phases as _, i}
                <div class="w-3 h-3 rounded-full transition-all duration-300 {
                  i === selectedPhase 
                    ? 'scale-125' 
                    : 'opacity-40 hover:opacity-70'
                }"
                style="background-color: {i === selectedPhase ? phases[selectedPhase].color : '#ffffff'}">
                </div>
              {/each}
            </div>
          </div>

          <!-- Navigation Hint -->
          <div class="mt-8 text-center">
            <p class="text-sm text-white/60 font-inter flex items-center justify-center gap-2">
              <span>Use the tabs above to explore each phase</span>
            </p>
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
