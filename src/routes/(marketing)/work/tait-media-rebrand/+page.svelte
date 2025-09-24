<script lang="ts">
import { Clock, Sparkles, ArrowRight, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Tait Media Solutions Rebrand - Case Study | Tait Media Solutions</title>
  <meta name="description" content="A comprehensive documentation of rebuilding our own digital presence from the ground up. From outdated WordPress to cutting-edge Svelte 5." />
  <meta property="og:title" content="Tait Media Solutions Rebrand - Case Study" />
  <meta property="og:description" content="How we transformed our own agency from outdated WordPress to cutting-edge Svelte 5 architecture." />
  <meta property="og:image" content="/images/case-studies/tait-rebrand-hero.jpg" />
  <meta property="og:type" content="article" />
</svelte:head>

<main class="bg-[#F5F3F0] min-h-screen">
  
  <section class="pt-32 pb-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
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

      <div class="text-center mb-12">
        <div class="mb-6 flex items-center justify-center gap-4">
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                       bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900">
            Agency Rebrand
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-800">
            <Clock class="w-4 h-4" />
            In Progress
          </span>
        </div>
        
        <h1 class="font-['Syne'] text-[clamp(3rem,8vw,6rem)] font-bold text-gray-900 leading-[0.9] mb-6">
          Tait Media Solutions
        </h1>
        <p class="text-[clamp(1.25rem,4vw,2rem)] text-gray-700 font-light max-w-3xl mx-auto leading-tight">
          Complete Agency Transformation
        </p>
        
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          A comprehensive documentation of rebuilding our own digital presence from the ground up. From outdated WordPress to cutting-edge Svelte 5, this case study will show the complete process of modernizing a marketing agency.
        </p>
      </div>
      
      <div class="relative rounded-2xl overflow-hidden shadow-xl mb-12">
        <div class="w-full aspect-[16/9] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
          <div class="text-center text-white/60">
            <Sparkles class="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p class="text-lg font-light">Hero image coming soon</p>
          </div>
        </div>
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Client Type</h3>
          <p class="text-gray-600">Agency</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Duration</h3>
          <p class="text-gray-600">3 months</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Status</h3>
          <p class="text-gray-600">In Progress</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Expected</h3>
          <p class="text-gray-600">Q1 2025</p>
        </div>
      </div>

      <div class="text-center mb-16">
        <h3 class="font-semibold text-gray-900 mb-4">Technology Stack</h3>
        <div class="flex flex-wrap justify-center gap-3">
          {#each ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vercel'] as tech}
            <span class="px-4 py-2 rounded-lg text-sm font-medium
                         bg-white/50 backdrop-blur-sm border border-gray-900/20 text-gray-900">
              {tech}
            </span>
          {/each}
        </div>
      </div>

    </div>
  </section>

  <section class="pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <article class="prose prose-xl prose-gray max-w-none mb-16">
        <h2 class="font-['Syne'] text-4xl font-semibold text-gray-900 mb-6 mt-12">The Complete Agency Transformation</h2>
        
        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Challenge</h3>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          As a marketing agency preaching performance and modern technology, we had a problem. Our own website was built on outdated WordPress, slow, and didn't reflect the cutting-edge approach we promised our clients.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">The Issues:</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span>WordPress site with 60+ PageSpeed score</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span>No real analytics or conversion tracking</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span>Outdated design that didn't represent our brand</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span>Manual processes that slowed down client delivery</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span>No systematic approach to showcasing our work</span>
            </li>
          </ul>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Solution</h3>
        
        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Phase 1: Strategic Planning & Architecture</h4>
        <p class="text-gray-600 mb-4"><strong>Duration:</strong> 2 weeks</p>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          We started by auditing everything - our brand positioning, technical requirements, and user experience goals.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-gray-900 mb-4">Key Decisions:</h5>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Svelte 5</strong> for maximum performance and modern development experience
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Complete visual identity refresh</strong> to reflect our minimalist, performance-driven approach
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Custom 3D visualizations</strong> to explain our process in an engaging way
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Integrated analytics</strong> from day one with proper conversion tracking
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Headless architecture</strong> for maximum flexibility and performance
              </div>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Phase 2: Design & Development</h4>
        <p class="text-gray-600 mb-4"><strong>Duration:</strong> 8 weeks</p>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          <em>Content being written in real-time as we complete development...</em>
        </p>

        <div class="bg-amber-50/50 backdrop-blur-sm border border-amber-200/50 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-amber-900 mb-4">Current Progress:</h5>
          <ul class="space-y-3 text-amber-800">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>✅ Brand identity and messaging framework complete</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>✅ Technical architecture established</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>✅ Design system implemented</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
              <span>🔄 Interactive 3D visualizations in development</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
              <span>🔄 Content management system setup</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>⏳ Performance optimization pending</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>⏳ SEO implementation pending</span>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Phase 3: Launch & Optimization</h4>
        <p class="text-gray-600 mb-4"><strong>Duration:</strong> 4 weeks (Q1 2025)</p>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          This phase will begin in Q1 2025 with comprehensive testing, performance optimization, and gradual rollout.
        </p>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">Expected Results</h3>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          <em>Results will be documented upon completion</em>
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">Expected Outcomes:</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>98+ PageSpeed</strong> scores across all pages</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>40%+ improvement</strong> in conversion rates</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>60% faster</strong> load times compared to old WordPress site</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Complete analytics visibility</strong> with custom dashboard</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Systematic content creation</strong> process for case studies</span>
            </li>
          </ul>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Transparency Commitment</h3>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          We're documenting this entire process publicly because we believe in radical transparency. This isn't just a portfolio piece - it's a blueprint for how professional service firms can modernize their digital presence.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">What We're Sharing:</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>Complete technical decision-making process</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>Performance metrics and improvements</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>Design iteration and user feedback</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>Actual costs and time investment</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <span>Lessons learned and mistakes made</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <blockquote class="text-lg font-light italic leading-relaxed">
            "If we can't successfully transform our own digital presence, how can we credibly help our clients do the same? This project is our commitment to practicing what we preach."
          </blockquote>
          <footer class="mt-4 text-gray-300">
            <strong>Tait Media Solutions Team</strong>
          </footer>
        </div>

      </article>
    </div>
  </section>

  <section class="py-16 bg-amber-50/30 backdrop-blur-sm border-t border-amber-200/30">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <Clock class="w-6 h-6 text-amber-600" />
        <h2 class="font-['Syne'] text-2xl font-semibold text-amber-900">
          This case study is being written in real-time
        </h2>
      </div>
      <p class="text-amber-800 mb-6">
        The final version will include complete performance metrics, conversion improvements, and detailed technical implementation notes.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <span class="font-medium text-amber-900">Expected completion: Q1 2025</span>
        <a 
          href="/newsletter"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                 bg-amber-600 text-white hover:bg-amber-700 hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-amber-300
                 transition-all duration-200"
        >
          Get Updates
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white/30 backdrop-blur-sm border-t border-gray-200/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-['Syne'] text-4xl font-semibold text-gray-900 mb-6">
        Ready for Your Own Transformation?
      </h2>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        Don't wait for us to finish our transformation. Let's start yours today with the same strategic approach and cutting-edge technology.
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
