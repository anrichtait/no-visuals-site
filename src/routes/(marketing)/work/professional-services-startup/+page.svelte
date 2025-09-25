<script lang="ts">
import { Calendar, Sparkles, ArrowRight, ExternalLink, DollarSign, TrendingUp } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Meridian Consulting Startup Growth - Case Study | No Visuals</title>
  <meta name="description" content="How a new professional services firm built complete digital infrastructure and generated $1.5M in revenue within their first year through strategic marketing automation." />
  <meta property="og:title" content="Meridian Consulting Startup Growth - Case Study" />
  <meta property="og:description" content="$1.5M revenue in first year through complete digital infrastructure and marketing automation." />
  <meta property="og:image" content="/images/case-studies/meridian-hero.jpg" />
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
            Professional Services
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-800">
            <Calendar class="w-4 h-4" />
            Published
          </span>
        </div>
        
        <h1 class="font-['Syne'] text-[clamp(3rem,8vw,6rem)] font-bold text-gray-900 leading-[0.9] mb-6">
          Meridian Consulting
        </h1>
        <p class="text-[clamp(1.25rem,4vw,2rem)] text-gray-700 font-light max-w-3xl mx-auto leading-tight">
          From Startup to Market Authority
        </p>
        
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          How a new professional services firm built complete digital infrastructure and generated $1.5M in revenue within their first year through strategic marketing automation.
        </p>
      </div>
      
      <!-- Hero Image -->
      <div class="relative rounded-2xl overflow-hidden shadow-xl mb-12">
        <div class="w-full aspect-[16/9] bg-gradient-to-br from-green-900 via-green-800 to-gray-900 flex items-center justify-center">
          <div class="text-center text-white/60">
            <DollarSign class="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p class="text-lg font-light">Hero image coming soon</p>
          </div>
        </div>
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Project Details -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Client Type</h3>
          <p class="text-gray-600">Professional Services</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Duration</h3>
          <p class="text-gray-600">6 months</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Status</h3>
          <p class="text-gray-600">Published</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Published</h3>
          <p class="text-gray-600">November 2024</p>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="text-center mb-16">
        <h3 class="font-semibold text-gray-900 mb-4">Technology Stack</h3>
        <div class="flex flex-wrap justify-center gap-3">
          {#each ['Svelte', 'Node.js', 'Stripe', 'HubSpot', 'Vercel'] as tech}
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
          <div class="text-4xl font-bold text-green-600 mb-2">$1.5M</div>
          <div class="text-gray-700">Revenue in First Year</div>
        </div>
        <div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl">
          <div class="text-4xl font-bold text-blue-600 mb-2">180</div>
          <div class="text-gray-700">Qualified Leads Generated</div>
        </div>
        <div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl">
          <div class="text-4xl font-bold text-purple-600 mb-2">85%</div>
          <div class="text-gray-700">Business from Digital</div>
        </div>
      </div>

    </div>
  </section>

  <!-- Content -->
  <section class="pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Challenge -->
      <article class="prose prose-xl prose-gray max-w-none mb-16">
        <h2 class="font-['Syne'] text-4xl font-semibold text-gray-900 mb-6 mt-12">From Startup to Market Authority</h2>
        
        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Challenge</h3>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Meridian Consulting was launching with two experienced principals who had spent 15+ years at Big Four consulting firms. They had the expertise, network, and vision—but zero digital presence and needed revenue from day one.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">The Starting Point:</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No website or digital presence</strong> - not even a landing page</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No defined brand identity</strong> - just a company name and business cards</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No marketing systems or CRM</strong> - everything was manual and disconnected</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>No content or thought leadership</strong> platform to demonstrate expertise</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
              <span><strong>Immediate revenue pressure</strong> - needed to start generating business within 60 days</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-xl mb-8">
          <blockquote class="text-gray-700 italic">
            "We knew our stuff, but we were competing against established firms with strong digital presences. Potential clients couldn't find us, couldn't understand our unique value, and had no way to engage with us professionally."
          </blockquote>
          <footer class="mt-3 text-gray-600">
            <strong>Michael Chen</strong>, Managing Principal
          </footer>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Solution</h3>
        
        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Foundation Building (Months 1-2)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Established complete digital infrastructure and brand identity with speed and efficiency.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-gray-900 mb-4">Digital Infrastructure:</h5>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>High-performance website</strong> with lead generation focus and clear conversion paths</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>CRM integration</strong> with HubSpot for lead management and nurturing</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Email automation</strong> system for different buyer personas and engagement stages</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Analytics setup</strong> with conversion tracking and attribution modeling</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Payment processing</strong> integration for seamless proposal-to-payment workflow</span>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Content & Growth Engine (Months 3-4)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Developed comprehensive content strategy to establish thought leadership and drive lead generation.
        </p>

        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h5 class="font-semibold text-gray-900 mb-4">Growth Tactics:</h5>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Weekly blog posts</strong> on industry insights, market trends, and strategic guidance</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>LinkedIn content calendar</strong> with daily posts and engagement automation</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Email nurture sequences</strong> for different stages of the buyer journey</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Webinar series</strong> for lead generation and authority building</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span><strong>Strategic partnerships</strong> with complementary service providers</span>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Scale & Optimization (Months 5-6)</h4>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Refined systems based on performance data and scaled successful channels for maximum growth.
        </p>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">The Results</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Business Growth</h4>
            <ul class="space-y-3 text-gray-700">
              <li class="flex justify-between items-center">
                <span>Total Revenue (Year 1)</span>
                <span class="font-semibold text-green-600">$1.5M</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Monthly Revenue (Month 12)</span>
                <span class="font-semibold text-green-600">$180K</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Qualified Leads</span>
                <span class="font-semibold text-green-600">180</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Lead-to-Client Rate</span>
                <span class="font-semibold text-green-600">65%</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Digital Performance</h4>
            <ul class="space-y-3 text-gray-700">
              <li class="flex justify-between items-center">
                <span>PageSpeed Score</span>
                <span class="font-semibold text-blue-600">98</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Traffic Growth</span>
                <span class="font-semibold text-blue-600">280% MoM</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Conversion Rate</span>
                <span class="font-semibold text-blue-600">12%</span>
              </li>
              <li class="flex justify-between items-center">
                <span>Email Open Rate</span>
                <span class="font-semibold text-blue-600">35%</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-green-900 mb-4">System Impact:</h4>
          <ul class="space-y-2 text-green-800">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>70% reduction</strong> in manual administrative tasks through automation</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>50% faster</strong> proposal generation and delivery process</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Complete visibility</strong> into sales pipeline and forecasting accuracy</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Integrated workflow</strong> from marketing to delivery to client success</span>
            </li>
          </ul>
        </div>

        <h3 class="font-['Syne'] text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Success Factors</h3>
        
        <div class="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">What Worked Exceptionally Well:</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Niche specialization</strong> - being the expert in financial services consulting vs. general business consulting</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Content consistency</strong> - weekly valuable content built compound authority over time</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>System integration</strong> - every tool talking to every other tool eliminated manual work</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Personal branding</strong> - establishing founders as thought leaders accelerated business development</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span><strong>Quality focus</strong> - fewer, better clients led to higher margins and stronger relationships</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <blockquote class="text-lg font-light italic leading-relaxed mb-4">
            "Working with No Visuals was the best investment we made as a startup. They didn't just build us a website - they built us a complete business development engine. Every system works together seamlessly, and we can see exactly where every dollar of revenue comes from."
          </blockquote>
          <footer class="text-gray-300">
            <strong>Michael Chen</strong>, Managing Principal<br>
            <em>Meridian Consulting</em>
          </footer>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <blockquote class="text-lg font-light italic leading-relaxed mb-4">
            "The integrated approach was game-changing. Instead of juggling separate systems for marketing, sales, and project management, everything flows together automatically. We spend our time on client work, not administrative tasks."
          </blockquote>
          <footer class="text-gray-300">
            <strong>Sarah Rodriguez</strong>, Principal<br>
            <em>Meridian Consulting</em>
          </footer>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h4 class="font-semibold text-blue-900 mb-4">18 Months Later:</h4>
          <ul class="space-y-2 text-blue-800">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Hired 3 additional consultants due to demand</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Featured in Financial Planning Magazine as case study</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Now offers "Digital Infrastructure for Professional Services" as a service</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>85% client retention rate with expansion opportunities</span>
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
        Ready to Build Your Professional Services Engine?
      </h2>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        If you're launching a professional services firm or struggling to scale your existing practice, we can build the same integrated system that took Meridian from $0 to $1.5M in their first year.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
        <div class="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-6">
          <h3 class="font-semibold text-gray-900 mb-3">What You'll Get:</h3>
          <ul class="text-left space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Complete digital infrastructure setup</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Integrated marketing and sales automation</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Content strategy and thought leadership platform</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span>Performance tracking and optimization system</span>
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
              <span>Complete marketing automation system</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Integrated CRM and project management</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <span>Thought leadership platform that drives growth</span>
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
