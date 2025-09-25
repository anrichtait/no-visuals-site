<script>
import { ExternalLink, Clock, Sparkles } from '$lib/icons';

export let projects = [
  {
    id: 'tait-media-rebrand',
    title: 'No Visuals',
    subtitle: 'Complete Agency Transformation',
    description: 'A comprehensive documentation of rebuilding our own digital presence from the ground up. From an outdated Jekyll stack to cutting-edge Svelte, this case study will show the complete process of modernizing a marketing agency.',
    category: 'Agency Rebrand',
    status: 'in-progress',
    expectedCompletion: 'Q4 2025',
    heroImage: '/images/case-studies/tait-rebrand-hero.jpg',
    heroImageAlt: 'No Visuals rebrand case study',
    link: '/work/tait-media-rebrand',
    previewFeatures: [
      'Complete brand identity overhaul',
      'Svelte 5 + TypeScript architecture',
      'Custom 3D process visualization',
      'Performance optimization (98+ PageSpeed)',
      'Advanced analytics dashboard integration'
    ],
    techStack: ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vercel'],
    isFirst: true
  }
];

let currentIndex = 0;
$: hasMultipleProjects = projects.length > 1;
</script>

<section class="bg-[#F5F3F0] min-h-screen py-20" data-theme="light">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


      <div class="section-header">
        <div class="header-accent">
          <span class="accent-line"></span>
          <span class="accent-text">Case Studies</span>
        </div>
        <h2 class="section-title">Our Work</h2>
        <p class="section-description">We believe in practicing what we preach. Our first case study documents the complete transformation
          of our own agency - from outdated systems to cutting-edge digital architecture.</p>
      </div>

    <div class="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">

      <div class="relative overflow-hidden" style="height: 80vh; min-height: 600px;">

        {#each projects as project, index}
          <div
            class="absolute inset-0 transition-opacity duration-500 ease-in-out {index === currentIndex ? 'opacity-100' : 'opacity-0'}"
            class:pointer-events-none={index !== currentIndex}
          >

            {#if project.heroImage && project.status === 'published'}
              <img
                src={project.heroImage}
                alt={project.heroImageAlt}
                class="w-full h-full object-cover"
                loading="lazy"
              />
            {:else}
              <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div class="absolute inset-0 opacity-10">
                  <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-{index}" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-{index})" />
                  </svg>
                </div>

                <div class="absolute inset-0 overflow-hidden">
                  <div class="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/5 blur-xl animate-pulse-slow"></div>
                  <div class="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-white/5 blur-lg animate-pulse-slow" style="animation-delay: 1s;"></div>
                  <div class="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/5 blur-md animate-pulse-slow" style="animation-delay: 2s;"></div>
                </div>
              </div>
            {/if}

            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div class="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <div class="max-w-3xl">

                <div class="mb-6 flex items-center gap-3">
                  {#if project.status === 'in-progress'}
                    <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200">
                      <Clock class="w-4 h-4" />
                      In Progress
                    </span>
                  {:else if project.status === 'coming-soon'}
                    <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200">
                      <Clock class="w-4 h-4" />
                      Coming Soon
                    </span>
                  {/if}
                  <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                               bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {project.category}
                  </span>
                </div>

                <h3 class="text-[clamp(3rem,6vw,5rem)] magazine-title text-white leading-[0.85] mb-6">
                  {project.title}
                </h3>
                <h4 class="font-inter text-[clamp(1.5rem,3.5vw,2.25rem)] font-light text-white/95 mb-8 leading-tight">
                  {project.subtitle}
                </h4>

                <p class="text-white/85 text-xl leading-relaxed mb-10 max-w-2xl font-light">
                  {project.description}
                </p>

                {#if project.previewFeatures}
                  <div class="mb-10">
                    <h5 class="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
                      <Sparkles class="w-5 h-5" />
                      {project.status === 'published' ? 'Key Results:' : 'What This Case Study Will Cover:'}
                    </h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {#each project.previewFeatures as feature}
                        <div class="flex items-center gap-3 text-white/80">
                          <div class="w-2 h-2 rounded-full bg-white/60"></div>
                          <span class="text-base font-light">{feature}</span>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}

                {#if project.techStack}
                  <div class="flex flex-wrap gap-3 mb-10">
                    {#each project.techStack as tech}
                      <span class="px-4 py-2 rounded-lg text-sm font-medium
                                   bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                        {tech}
                      </span>
                    {/each}
                  </div>
                {/if}

                <div class="flex items-center gap-6">
                  {#if project.status === 'published'}
                    <a
                      href={project.link}
                      class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold
                             bg-white/20 backdrop-blur-md border border-white/30 text-white
                             hover:bg-white/30 hover:border-white/50
                             focus:outline-none focus:ring-4 focus:ring-white/30
                             transition-all duration-200"
                    >
                      Read Case Study
                      <ExternalLink class="w-5 h-5" />
                    </a>
                  {:else}
                    <button
                      disabled
                      class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold
                             bg-white/10 backdrop-blur-md border border-white/20 text-white/60
                             cursor-not-allowed"
                    >
                      Case Study Coming Soon
                      <Clock class="w-5 h-5" />
                    </button>
                  {/if}

                  {#if project.expectedCompletion}
                    <span class="text-white/70 text-base font-light">
                      Expected: {project.expectedCompletion}
                    </span>
                  {/if}
                  {#if project.publishedDate}
                    <span class="text-white/70 text-base font-light">
                      Published: {project.publishedDate}
                    </span>
                  {/if}
                </div>

              </div>
            </div>

            <div class="absolute top-8 right-8">
              <div class="px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                <span class="text-white font-semibold">
                  {project.isFirst ? 'Featured' : `Case Study #${index + 1}`}
                </span>
              </div>
            </div>

          </div>
        {/each}
      </div>



    </div>

    <div class="flex items-center justify-between mt-8">

      <div class="text-gray-600">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
            <Clock class="w-4 h-4 text-amber-900" />
          </div>
          <span class="font-medium text-gray-900">Work in Progress</span>
        </div>
        <p class="text-sm text-gray-600 ml-11">
          Documenting our complete agency transformation process
        </p>
      </div>

      <div class="text-right">
        <p class="text-gray-700 font-medium mb-2">Get notified when it's ready</p>
        <a
          href="/newsletter-signup"
          class="inline-flex items-center gap-2 px-5 py-2 rounded-xl
                 bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900
                 hover:bg-white/70 hover:border-gray-900/30 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 transition-all duration-200 font-medium text-sm"
        >
          Get Updates
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>

    </div>

  </div>
</section>


<style>
.section-header {
  margin-bottom: 4rem;
  position: relative;
}

.header-accent {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.accent-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, #7C9885 0%, transparent 100%);
}

.accent-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #7C9885;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.magazine-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  color: #2C2C2C;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: rgba(44, 44, 44, 0.7);
  line-height: 1.6;
  max-width: 600px;
}

</style>
