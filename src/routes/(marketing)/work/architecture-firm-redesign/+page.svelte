<script lang="ts">
import { Calendar, Sparkles, ArrowRight, ExternalLink, TrendingUp } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Hartwell Architecture Redesign - Case Study | Tait Media Solutions</title>
  <meta name="description" content="How a 40-year-old architecture firm transformed their digital presence and increased qualified leads by 340% through strategic website redesign and content marketing." />
  <meta property="og:title" content="Hartwell Architecture Redesign - Case Study" />
  <meta property="og:description" content="340% increase in qualified leads and $2.8M in new contracts through digital transformation." />
  <meta property="og:image" content="/images/case-studies/hartwell-hero.jpg" />
  <meta property="og:type" content="article" />
</svelte:head>

<main class="bg-[#F5F3F0] min-h-screen">
  
  <!-- Hero Section -->
  <section class="pt-32 pb-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-8">
        <a 
          href="/work"
          class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Work
        </a>
      </div>

      <!-- Header -->
      <div class="text-center mb-12">
        <div class="mb-6 flex items-center justify-center gap-4">
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                       bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900">
            Architecture Firm
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-800">
            <Calendar class="w-4 h-4" />
            Published
          </span>
        </div>
        
        <h1 class="font-['Syne'] text-[clamp(3rem,8vw,6rem)] font-bold text-gray-900 leading-[0.9] mb-6">
          Hartwell Architecture
        </h1>
        <p class="text-[clamp(1.25rem,4vw,2rem)] text-gray-700 font-light max-w-3xl mx-auto leading-tight">
          From Traditional to Digital Leadership
        </p>
        
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          How a 40-year-old architecture firm transformed their digital presence and increased qualified leads by 340% through strategic website redesign and content marketing.
        </p>
      </div>
      
      <!-- Hero Image -->
      <div class="relative rounded-2xl overflow-hidden shadow-xl mb-12">
        <div class="w-full aspect-[16/9] bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center justify-center">
          <div class="text-center text-white/60">
            <TrendingUp class="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p class="text-lg font-light">Hero image coming soon</p>
          </div>
        </div>
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Project Details -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Client Type</h3>
          <p class="text-gray-600">Architecture Firm</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Duration</h3>
          <p class="text-gray-600">4 months</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Status</h3>
          <p class="text-gray-600">Published</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Published</h3>
          <p class="text-gray-600">December 2024</p>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="text-center mb-16">
        <h3 class="font-semibold text-gray-900 mb-4">Technology Stack</h3>
        <div class="flex flex-wrap justify-center gap-3">
          {#each ['Svelte', 'TypeScript', 'Sanity CMS', 'Vercel', 'Google Analytics'] as tech}
            <span class="px-4 py-2 rounded-lg text-sm font-medium
                         bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900">
              {tech}
            </span>
          {/each}
        </div>
      </div>

      <!-- Key Results -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl">
          <div class="text-4xl font-bold text-green-600 mb-2">340%</div>
          <div class="text-gray-700">Increase in Qualified Leads</div>
        </div>
        <div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl">
          <div class="text-4xl font-bold text-blue-600 mb-2">$2.8M</div>
          <div class="text-gray-700">New Contract Value</div>
        </div>
        <div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl">
          <div class="text-4xl font-bold text-purple-600 mb-2">95+</div>
          <div class="text-gray-700">PageSpeed Score</div>
        </div>
      </div>

    </div>
  </section>

  <!-- Content -->
  <section class="pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Challenge -->
      <article class="prose prose-xl prose-gray max-w-none mb-16">
        <h2 class="font-['Syne'] text-4xl font-semibold text-gray-900 mb-6 mt-12">From Traditional to Digital Leadership</h2>
        
        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Challenge</h3>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Hartwell Architecture, established in 1984, was a well-respected firm in the Pacific Northwest with an impressive portfolio of residential and commercial projects. However, their digital presence told a different story entirely.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">The Problems:</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>Outdated website</strong> built in 2018, never updated since launch</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No portfolio system</strong> - projects were buried in static galleries</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>Terrible performance</strong> - 15+ second average page load times</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>Zero qualified leads</strong> from their website in over 2 years</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No analytics or tracking</strong> - flying completely blind</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>Poor mobile experience</strong> - 78% of visitors left immediately on mobile</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-xl mb-8">
          <blockquote class="text-gray-700 italic">
            "We had amazing projects but no way to showcase them properly. Potential clients would visit our website and immediately assume we were outdated or unprofessional."
          </blockquote>
          <footer class="mt-3 text-gray-600">
            <strong>Sarah Hartwell</strong>, Principal
          </footer>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Solution</h3>
        
        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Discovery & Strategy (Month 1)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          We started with comprehensive research to understand their market position, ideal clients, and competitive landscape.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-gray-900 mb-4">Research Findings:</h5>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Their ideal clients researched extensively online before making contact</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Visual portfolio presentation was absolutely crucial for architecture</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Local SEO was completely untapped opportunity</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Their best projects weren't highlighted or explained with context</span>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Design & Development (Months 2-3)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Built a high-performance, visually stunning website that properly showcased 40 years of architectural excellence.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-gray-900 mb-4">Technical Architecture:</h5>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Svelte</strong> for optimal performance and smooth animations</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Sanity CMS</strong> for easy content management by non-technical team</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Optimized image delivery</strong> with WebP format and progressive loading</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Progressive Web App</strong> capabilities for mobile-first experience</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Advanced SEO</strong> with structured data for rich search results</span>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Content Strategy & Launch (Month 4)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Developed comprehensive content strategy and launched with full analytics tracking.
        </p>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Results</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
            <ul class="space-y-3 text-gray-700">
              <li class="flex justify-between items-center">
                <span>PageSpeed Score</span>
                <span class="font-semibold text-green-600">95+ (from 23)</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Load Time</span>
                <span class="font-semibold text-green-600">2.1s (from 15s)</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Mobile Score</span>
                <span class="font-semibold text-green-600">96 (from 18)</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Accessibility</span>
                <span class="font-semibold text-green-600">98+</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Business Impact</h4>
            <ul class="space-y-3 text-gray-700">
              <li class="flex justify-between items-center">
                <span>Qualified Leads</span>
                <span class="font-semibold text-blue-600">340% increase</span>
              </li>
              <li class="flex justify-between items-center">
                <span>New Contracts</span>
                <span class="font-semibold text-blue-600">$2.8M attributed</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Organic Traffic</span>
                <span class="font-semibold text-blue-600">180% increase</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Time on Site</span>
                <span class="font-semibold text-blue-600">65% higher</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Success Factors</h3>
        
        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">What Worked Exceptionally Well:</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Performance-first design philosophy</strong> - fast sites convert better</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Visual portfolio system</strong> - let the work speak for itself</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Local SEO focus</strong> - dominating their geographic market</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Mobile optimization</strong> - most architectural browsing happens on phones</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Client testimonial integration</strong> - social proof throughout the journey</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <blockquote class="text-lg font-light italic leading-relaxed mb-4">
            "The transformation has been incredible. We went from getting maybe one serious inquiry per month to having a waiting list of potential clients. The website doesn't just look professional - it works as a business development tool."
          </blockquote>
          <footer class="text-gray-300">
            <strong>Sarah Hartwell</strong>, Principal<br>
            <em>Hartwell Architecture</em>
          </footer>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-blue-900 mb-4">Ongoing Results (6 Months Later):</h4>
          <ul class="space-y-2 text-blue-800">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>40% of leads now come from organic search</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Sales cycle reduced from 6+ months to 3-4 months</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Established as digital leader in local market</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Featured in local publications as transformation success story</span>
            </li>
          </ul>
        </div>

      </article>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-white/30 backdrop-blur-sm border-t border-gray-200/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-['Syne'] text-4xl font-semibold text-gray-900 mb-6">
        Ready for Similar Results?
      </h2>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        If your architecture firm is struggling with an outdated digital presence, we can help transform your online showcase into a lead-generation engine.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
        <div class="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-6">
          <h3 class="font-semibold text-gray-900 mb-3">What You'll Get:</h3>
          <ul class="text-left space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>High-performance website optimized for your ideal clients</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Portfolio showcase system that tells your story</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Local SEO strategy for market dominance</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Analytics and conversion tracking from day one</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-6">
          <h3 class="font-semibold text-gray-900 mb-3">Expected Results:</h3>
          <ul class="text-left space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>200%+ increase in qualified leads</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>95+ PageSpeed scores across all pages</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>First page rankings for target keywords</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Shorter sales cycles and higher-quality leads</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold
                 bg-gray-900 text-white hover:bg-gray-800 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 transition-all duration-200"
        >
          Start Your Transformation
          <ArrowRight class="w-5 h-5" />
        </a>
        
        <a 
          href="/work"
          class="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-lg font-medium
                 bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900
                 hover:bg-white/70 hover:border-gray-900/30 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 transition-all duration-200"
        >
          View All Work
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>

</main>