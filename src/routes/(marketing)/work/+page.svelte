<script lang="ts">
import { ExternalLink, Clock, Calendar, ArrowRight } from 'lucide-svelte';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  status: 'published' | 'in-progress' | 'coming-soon';
  expectedCompletion?: string;
  publishedDate?: string;
  heroImage: string;
  heroImageAlt: string;
  link: string;
  previewFeatures: string[];
  techStack: string[];
  clientType: string;
  projectDuration: string;
}

// Case studies data - this could be loaded from a CMS or API
const caseStudies: CaseStudy[] = [
  {
    id: 'tait-media-rebrand',
    title: 'Tait Media Solutions',
    subtitle: 'Complete Agency Transformation',
    description: 'A comprehensive documentation of rebuilding our own digital presence from the ground up. From outdated WordPress to cutting-edge Svelte 5, this case study will show the complete process of modernizing a marketing agency.',
    category: 'Agency Rebrand',
    status: 'in-progress',
    expectedCompletion: 'Q1 2025',
    heroImage: '/images/case-studies/tait-rebrand-hero.jpg',
    heroImageAlt: 'Tait Media Solutions rebrand case study',
    link: '/work/tait-media-rebrand',
    previewFeatures: [
      'Complete visual identity overhaul',
      'Svelte 5 + TypeScript architecture',
      'Custom 3D process visualization',
      'Performance optimization (98+ PageSpeed)',
      'Advanced analytics dashboard integration'
    ],
    techStack: ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vercel'],
    clientType: 'Agency',
    projectDuration: '3 months'
  },
  {
    id: 'hartwell-architecture',
    title: 'Hartwell Architecture',
    subtitle: 'From Traditional to Digital Leadership',
    description: 'How a 40-year-old architecture firm transformed their digital presence and increased qualified leads by 340% through strategic website redesign and content marketing.',
    category: 'Architecture Firm',
    status: 'published',
    publishedDate: 'December 2024',
    heroImage: '/images/case-studies/hartwell-hero.jpg',
    heroImageAlt: 'Hartwell Architecture website redesign case study',
    link: '/work/architecture-firm-redesign',
    previewFeatures: [
      '340% increase in qualified leads',
      '95+ PageSpeed scores across all pages',
      'Modern portfolio showcase system',
      'Integrated project management workflows',
      'SEO optimization for local market dominance'
    ],
    techStack: ['Svelte', 'TypeScript', 'Sanity CMS', 'Vercel', 'Google Analytics'],
    clientType: 'Architecture Firm',
    projectDuration: '4 months'
  },
  {
    id: 'meridian-consulting',
    title: 'Meridian Consulting',
    subtitle: 'From Startup to Market Authority',
    description: 'How a new professional services firm built complete digital infrastructure and generated $1.5M in revenue within their first year through strategic marketing automation.',
    category: 'Professional Services',
    status: 'published',
    publishedDate: 'November 2024',
    heroImage: '/images/case-studies/meridian-hero.jpg',
    heroImageAlt: 'Meridian Consulting startup growth case study',
    link: '/work/professional-services-startup',
    previewFeatures: [
      '$1.5M revenue in first year',
      'Complete marketing automation system',
      '98 PageSpeed score',
      'Integrated CRM and project management',
      'Content strategy that drove 80% of leads'
    ],
    techStack: ['Svelte', 'Node.js', 'Stripe', 'HubSpot', 'Vercel'],
    clientType: 'Professional Services',
    projectDuration: '6 months'
  }
];

// Filter and sort functionality
let selectedCategory = $state('all');
let sortBy = $state('newest');

const categories = $derived(['all', ...new Set(caseStudies.map(study => study.category))]);

const filteredAndSortedStudies = $derived(() => {
  let filtered = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return filtered.sort((a, b) => {
    if (sortBy === 'newest') {
      // Put in-progress first, then sort by date
      if (a.status === 'in-progress' && b.status !== 'in-progress') return -1;
      if (b.status === 'in-progress' && a.status !== 'in-progress') return 1;
      
      const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
      const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;
      return dateB - dateA;
    }
    return 0;
  });
});

function getStatusBadge(study: CaseStudy) {
  if (study.status === 'in-progress') {
    return {
      text: 'In Progress',
      class: 'bg-amber-500/20 border-amber-500/30 text-amber-800',
      icon: Clock
    };
  } else if (study.status === 'published') {
    return {
      text: 'Published',
      class: 'bg-green-500/20 border-green-500/30 text-green-800',
      icon: Calendar
    };
  }
  return {
    text: 'Coming Soon',
    class: 'bg-blue-500/20 border-blue-500/30 text-blue-800',
    icon: Clock
  };
}
</script>

<svelte:head>
  <title>Our Work - Case Studies | Tait Media Solutions</title>
  <meta name="description" content="See how we've helped architecture and professional service firms transform their digital presence and drive measurable growth through our detailed case studies." />
  <meta property="og:title" content="Our Work - Case Studies | Tait Media Solutions" />
  <meta property="og:description" content="Real results from real projects. See how we've helped firms achieve 340%+ lead increases and $1.5M+ revenue growth." />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="bg-[#F5F3F0] min-h-screen pt-32 pb-20" data-theme="light">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="font-['Syne'] text-[clamp(4rem,10vw,8rem)] font-normal text-gray-900 leading-[1.1] mb-6">
        Our Work
      </h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
        Real results from real projects. See how we've helped architecture and professional service 
        firms transform their digital presence and drive measurable growth.
      </p>
      
      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900">340%+</div>
          <div class="text-sm text-gray-600">Lead Increase</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900">$1.5M+</div>
          <div class="text-sm text-gray-600">Revenue Generated</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900">98+</div>
          <div class="text-sm text-gray-600">PageSpeed Scores</div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
      
      <!-- Category Filter -->
      <div class="flex items-center gap-4">
        <span class="text-gray-700 font-medium">Filter:</span>
        <div class="flex flex-wrap gap-2">
          {#each categories as category}
            <button
              on:click={() => selectedCategory = category}
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                     {selectedCategory === category 
                       ? 'bg-gray-900 text-white' 
                       : 'bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-white/70'
                     }"
            >
              {category === 'all' ? 'All Work' : category}
            </button>
          {/each}
        </div>
      </div>

      <!-- Sort -->
      <div class="flex items-center gap-4">
        <span class="text-gray-700 font-medium">Sort:</span>
        <select
          bind:value={sortBy}
          class="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900 
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="newest">Newest First</option>
          <option value="category">By Category</option>
        </select>
      </div>

    </div>

    <!-- Case Studies Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {#each filteredAndSortedStudies() as study}
        {@const statusBadge = getStatusBadge(study)}
        
        <article class="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden
                       hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
          
          <!-- Image -->
          <div class="relative aspect-[16/10] overflow-hidden">
            <img 
              src={study.heroImage}
              alt={study.heroImageAlt}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <!-- Status badge -->
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                           backdrop-blur-md border {statusBadge.class}">
                <svelte:component this={statusBadge.icon} class="w-3 h-3" />
                {statusBadge.text}
              </span>
            </div>
            
            <!-- Category badge -->
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                           bg-white/20 backdrop-blur-md border border-white/30 text-white">
                {study.category}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 lg:p-8">
            
            <!-- Title & Subtitle -->
            <h2 class="font-['Syne'] text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-3">
              {study.title}
            </h2>
            <h3 class="text-lg text-gray-600 font-light mb-4 leading-relaxed">
              {study.subtitle}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-700 leading-relaxed mb-6 line-clamp-3">
              {study.description}
            </p>
            
            <!-- Key Results/Features -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                {study.status === 'published' ? 'Key Results' : 'What We\'ll Cover'}
              </h4>
              <div class="grid grid-cols-1 gap-2">
                {#each study.previewFeatures.slice(0, 3) as feature}
                  <div class="flex items-center gap-2 text-sm text-gray-600">
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <span>{feature}</span>
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Meta info -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>{study.clientType}</span>
              <span>{study.projectDuration}</span>
              <span>
                {study.status === 'published' ? study.publishedDate : study.expectedCompletion}
              </span>
            </div>
            
            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              {#each study.techStack.slice(0, 4) as tech}
                <span class="px-2 py-1 rounded text-xs font-medium
                             bg-gray-100 text-gray-700">
                  {tech}
                </span>
              {/each}
              {#if study.techStack.length > 4}
                <span class="px-2 py-1 rounded text-xs font-medium text-gray-500">
                  +{study.techStack.length - 4} more
                </span>
              {/if}
            </div>
            
            <!-- CTA -->
            <div class="flex items-center justify-between">
              {#if study.status === 'published'}
                <a 
                  href={study.link}
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                         bg-gray-900 text-white hover:bg-gray-800 hover:scale-105
                         focus:outline-none focus:ring-4 focus:ring-gray-300
                         transition-all duration-200"
                >
                  Read Case Study
                  <ArrowRight class="w-4 h-4" />
                </a>
              {:else}
                <button
                  disabled
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                         bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  Coming Soon
                  <Clock class="w-4 h-4" />
                </button>
              {/if}
              
              <div class="text-right">
                <div class="text-xs text-gray-500">
                  {study.status === 'published' ? 'Published' : 'Expected'}
                </div>
                <div class="text-sm font-medium text-gray-700">
                  {study.status === 'published' ? study.publishedDate : study.expectedCompletion}
                </div>
              </div>
            </div>
            
          </div>
        </article>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div class="text-center bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-12">
      <h2 class="font-['Syne'] text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
        Ready to Transform Your Digital Presence?
      </h2>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        Join the firms that have already transformed their digital presence and achieved measurable growth.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold
                 bg-gray-900 text-white hover:bg-gray-800 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 transition-all duration-200"
        >
          Start Your Transformation
          <ExternalLink class="w-5 h-5" />
        </a>
        
        <a 
          href="/about"
          class="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-lg font-medium
                 bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900
                 hover:bg-white/70 hover:border-gray-900/30 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 transition-all duration-200"
        >
          Learn About Our Process
        </a>
      </div>
    </div>

  </div>
</main>

<style>
  /* Line clamp utility for description text */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>