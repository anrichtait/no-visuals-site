<script lang="ts">
  // Page metadata and configuration
  const pageTitle = "Services - Choose Your Pricing Plan";
  const pageDescription = "Solutions for every scenario - from website development to complete growth marketing strategies";

  interface ServiceTier {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    pricing: {
      label: string;
      amount: string;
    };
    features: string[];
    buttonText: string;
    isPopular?: boolean;
  }

  const serviceTiers: ServiceTier[] = [
    {
      id: "foundation",
      title: "Website",
      subtitle: "Foundation",
      description: "Full website designs or rework an outdated one.",
      pricing: {
        label: "Starting from",
        amount: "$250"
      },
      features: [
        "Analytics",
        "Modern sites built with Svelte",
        "Static, SSR or CSR",
        "More features included"
      ],
      buttonText: "Book a Call"
    },
    {
      id: "growth",
      title: "Marketing",
      subtitle: "Growth Engine",
      description: "Data powered marketing strategies for sustainable business growth.",
      pricing: {
        label: "Starting from",
        amount: "$1000"
      },
      features: [
        "Proprietary Analytics Engine",
        "Website redesign",
        "Meta Advertising",
        "Social Media Management"
      ],
      buttonText: "Book a Call",
      isPopular: true
    },
    {
      id: "data",
      title: "Analytics",
      subtitle: "Data Engine",
      description: "Take back ownership of your data with our proprietary analytics engine.",
      pricing: {
        label: "Starting from",
        amount: "$50"
      },
      features: [
        "Secure sitewide analytics",
        "Own your site data",
        "Custom dashboard design",
        "Company-specific insights"
      ],
      buttonText: "Book a Call"
    }
  ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
</svelte:head>

<section class="min-h-screen bg-[#383838] pt-20 pb-16 px-6" data-theme="dark">
  <div class="max-w-7xl mx-auto">
    
    <header class="text-center mb-20">
      <h1 class="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#EBEDF4] leading-tight mb-6">
        Choose a pricing plan
      </h1>
      <p class="font-inter text-xl sm:text-2xl lg:text-3xl text-[#BFBFBF] font-normal max-w-3xl mx-auto">
        Solutions for every scenario
      </p>
    </header>

    <!-- Service Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      
      {#each serviceTiers as tier}
        <article class="bg-transparent border-2 border-[#676767] rounded-2xl overflow-hidden relative group hover:border-[#7C9885] transition-colors duration-300">
          
          <!-- Card Content -->
          <div class="p-8 h-full flex flex-col min-h-[700px]">
            
            <!-- Service Header -->
            <header class="mb-8">
              <p class="font-inter text-base text-[#BFBFBF] font-medium mb-2 tracking-wide uppercase">
                {tier.subtitle}
              </p>
              <h2 class="font-syne text-4xl lg:text-5xl text-[#EBEDF4] font-bold leading-tight">
                {tier.title}
              </h2>
            </header>

            <!-- Description -->
            <div class="mb-10 flex-grow-0">
              <p class="font-inter text-lg text-[#EBEDF4] leading-relaxed opacity-90">
                {tier.description}
              </p>
            </div>

            <!-- Pricing -->
            <div class="mb-10">
              <p class="font-syne text-lg text-[#676767] font-medium mb-2">
                {tier.pricing.label}
              </p>
              <div class="flex items-baseline gap-2">
                <span class="font-syne text-5xl lg:text-6xl text-[#EBEDF4] font-bold">
                  {tier.pricing.amount}
                </span>
                {#if tier.pricing.label.includes('month')}
                  <span class="font-inter text-xl text-[#BFBFBF]">/mo</span>
                {/if}
              </div>
            </div>

            <!-- Features -->
            <div class="mb-12 flex-grow">
              <h3 class="font-inter text-xl text-[#EBEDF4] font-bold mb-6">
                {#if tier.id === 'foundation'}What's Included:{:else if tier.id === 'growth'}What's Included:{:else}Key Features:{/if}
              </h3>
              <ul class="space-y-4">
                {#each tier.features as feature}
                  <li class="font-inter text-base text-[#EBEDF4] font-normal leading-relaxed flex items-start gap-3">
                    <span class="text-[#7C9885] mt-1.5 flex-shrink-0">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- CTA Button -->
            <div class="mt-auto">
              <button class="w-full bg-[#7C9885] hover:bg-[#6B8574] text-white font-syne text-xl font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#7C9885]/30 hover:transform hover:scale-105 group-hover:shadow-xl">
                {tier.buttonText}
              </button>
            </div>
            
          </div>
        </article>
      {/each}

    </div>

    <!-- Bottom CTA Section -->
    <footer class="text-center">
      <div class="max-w-2xl mx-auto mb-8">
        <h3 class="font-syne text-2xl lg:text-3xl text-[#EBEDF4] font-bold mb-4">
          Need something custom?
        </h3>
        <p class="font-inter text-lg text-[#BFBFBF] mb-8 leading-relaxed">
          Let's discuss your specific requirements and create a tailored solution for your business.
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <button class="w-full sm:w-auto bg-transparent border-2 border-[#7C9885] text-[#7C9885] hover:bg-[#7C9885] hover:text-white font-syne text-lg font-semibold py-3 px-8 rounded-xl transition-all duration-200 min-w-[160px]">
          Contact Us
        </button>
        <button class="w-full sm:w-auto bg-[#EBEDF4] text-[#383838] hover:bg-white font-syne text-lg font-semibold py-3 px-8 rounded-xl transition-all duration-200 min-w-[160px]">
          Schedule Call
        </button>
      </div>
    </footer>

  </div>
</section>

<style>
h1 {
    font-family: 'Syne';
    font-weight: 700;
}

  /* Smooth scrolling */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Custom hover effects */
  article {
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  }
  
  article:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
</style>

