<script lang="ts">

const ldJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
        "@type": "Organization",
        founder: {
            "@type": "Person",
            name: "Anrich Tait"
        },
        description: "Performance-driven marketing agency for architecture and professional service firms"
    }
}

const jsonldScript = `<script type="application/ld+json">${JSON.stringify(ldJson) + "<"}/script>`

const stats = [
    { number: "3-Phase", label: "Methodology", description: "Foundation to Scale" },
    { number: "100%", label: "Transparency", description: "Real Data, Real Results" },
    { number: "12-25k", label: "Website Projects", description: "Premium Investment" },
    { number: "2.5k+", label: "Monthly Retainers", description: "Ongoing Partnership" }
];

const values = [
    {
        title: "Substance First",
        description: "We lead with strategy and copy. Design serves function, not the other way around.",
    },
    {
        title: "Radical Transparency", 
        description: "Our proprietary dashboard shows real data, not vanity metrics or vague reports.",
    },
    {
        title: "Architects of Growth",
        description: "We build systematic solutions and long-term partnerships, not one-off campaigns.",
    },
    {
        title: "Modern Execution",
        description: "Cutting-edge technology (Svelte 5) and in-house analytics for superior results.",
    }
];
</script>

<svelte:head>
    <title>About - No Visuals</title>
    <meta name="description" content="Learn about No Visuals, a performance-driven marketing agency for architecture and professional service firms. Founded by Anrich Tait." />
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html jsonldScript}
</svelte:head>

<main class="relative">
    
    <!-- Hero Section -->
    <section class="min-h-screen bg-[#2C2C2C] relative overflow-hidden flex items-center" data-theme="dark">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 left-10 w-64 h-64 bg-[#7C9885]/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B9A9A]/3 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div class="max-w-5xl mx-auto text-center">
                <div class="flex items-center justify-center gap-4 mb-8">
                    <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                    <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">About Us</span>
                    <span class="h-px w-16 bg-gradient-to-l from-[#7C9885] to-transparent"></span>
                </div>
                
                <h1 class="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
                    We Build Marketing
                    <span class="block text-[#7C9885]">That Actually Works</span>
                </h1>
                
                <p class="text-xl lg:text-2xl text-white/80 font-inter leading-relaxed max-w-4xl mx-auto mb-12">
                    No Visuals partners with architecture and professional service firms to replace outdated websites 
                    and vague marketing promises with systematic solutions that generate qualified leads.
                </p>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {#each stats as stat}
                        <div class="text-center">
                            <div class="text-3xl lg:text-4xl font-bold text-[#7C9885] font-syne mb-2">
                                {stat.number}
                            </div>
                            <div class="text-white font-semibold mb-1">
                                {stat.label}
                            </div>
                            <div class="text-sm text-white/60">
                                {stat.description}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="min-h-screen bg-[#F5F3F0] flex items-center">
        <div class="max-w-7xl mx-auto px-6 py-20">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                
                <!-- Content -->
                <div class="space-y-8">
                    <div>
                        <div class="flex items-center gap-4 mb-6">
                            <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                            <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Our Mission</span>
                        </div>
                        
                        <h2 class="font-syne text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                            Beyond Vanity Metrics
                        </h2>
                    </div>
                    
                    <div class="space-y-6">
                        <p class="text-xl font-inter leading-relaxed text-[#2C2C2C]/90">
                            We exist because too many brilliant firms are trapped with websites that don't convert 
                            and marketing agencies that can't prove their value. Every dashboard screenshot showing 
                            "impressions" while your phone isn't ringing is a reminder of this problem.
                        </p>
                        
                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/80">
                            Our approach is different. We focus on what matters: <strong class="text-[#2C2C2C]">qualified leads, 
                            conversion rates, and measurable ROI</strong>. Our proprietary analytics dashboard gives you 
                            complete transparency into how every marketing dollar is working for your business.
                        </p>

                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/80">
                            We're not here to manage your social media or create pretty graphics. We're here to build 
                            systematic solutions that transform your digital presence into a lead-generating machine.
                        </p>
                    </div>
                </div>

                <!-- Visual Element -->
                <div class="relative">
                    <div class="bg-white/50 backdrop-blur-sm rounded-3xl border border-[#7C9885]/20 p-8 shadow-2xl">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between p-4 bg-[#7C9885]/10 rounded-xl">
                                <span class="font-semibold text-[#2C2C2C]">Lead Generation</span>
                                <span class="text-[#7C9885] font-bold">+340%</span>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-[#D4A574]/10 rounded-xl">
                                <span class="font-semibold text-[#2C2C2C]">Conversion Rate</span>
                                <span class="text-[#D4A574] font-bold">8.4%</span>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-[#8B9A9A]/10 rounded-xl">
                                <span class="font-semibold text-[#2C2C2C]">ROI Tracking</span>
                                <span class="text-[#8B9A9A] font-bold">Real-time</span>
                            </div>
                        </div>
                        <div class="mt-6 text-center">
                            <span class="text-sm text-[#2C2C2C]/60">Real metrics from our dashboard</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="min-h-screen bg-[#2C2C2C] relative overflow-hidden flex items-center" data-theme="dark">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 right-10 w-64 h-64 bg-[#7C9885]/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 left-10 w-80 h-80 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div class="text-center mb-16">
                <div class="flex items-center justify-center gap-4 mb-8">
                    <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                    <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Our Values</span>
                    <span class="h-px w-16 bg-gradient-to-l from-[#7C9885] to-transparent"></span>
                </div>
                
                <h2 class="font-syne text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    How We Work
                </h2>
                
                <p class="text-xl text-white/80 font-inter leading-relaxed max-w-3xl mx-auto">
                    These four principles guide every decision we make and every solution we build.
                </p>
            </div>

            <!-- Values Grid -->
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {#each values as value, i}
                    <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                         style="animation: slideInUp 0.4s ease-out {i * 0.1}s both;">
                        
                        <div class="flex items-center gap-4 mb-6">
                            <h3 class="font-syne text-2xl font-bold text-white group-hover:text-[#7C9885] transition-colors duration-300">
                                {value.title}
                            </h3>
                        </div>
                        
                        <p class="text-lg font-inter leading-relaxed text-white/80">
                            {value.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Founder Section -->
    <section class="min-h-screen bg-[#F5F3F0] flex items-center">
        <div class="max-w-7xl mx-auto px-6 py-20">
            <div class="grid lg:grid-cols-5 gap-16 items-center">
                
                <!-- Profile Image Placeholder -->
                <div class="lg:col-span-2">
                    <div class="relative">
                        <div class="aspect-[4/5] bg-gradient-to-br from-[#7C9885] to-[#8B9A9A] rounded-3xl shadow-2xl">
                            <!-- Placeholder for actual founder photo -->
                            <div class="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                                AT
                            </div>
                        </div>
                        <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4A574] rounded-2xl blur-xl opacity-60"></div>
                    </div>
                </div>

                <!-- Content -->
                <div class="lg:col-span-3 space-y-8">
                    <div>
                        <div class="flex items-center gap-4 mb-6">
                            <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                            <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Meet The Founder</span>
                        </div>
                        
                        <h2 class="font-syne text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 leading-tight">
                            Anrich Tait
                        </h2>
                        
                        <p class="text-xl font-inter font-medium text-[#7C9885] mb-8">
                            CEO & Founder
                        </p>
                    </div>
                    
                    <div class="space-y-6">
                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/90">
                            I started No Visuals because I got tired of agencies 
                            that sell smoke and mirrors instead of measurable growth. My 
                            mission is simple: radical transparency. 
                            Show the work, the metrics and the ROI. That clarity comes from years of doing things 
                            the hard way, teaching abroad, working as an anti-poaching ranger, doing sales, 
                            then building software and brands.
                        </p>
                        
                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/80">
                            My skillset combines technical expertise (Svelte 5, modern web development) with strategic 
                            marketing thinking. I believe the best marketing feels invisible, it works so well that prospects 
                            naturally want to work with you.
                        </p>

                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/80">
                            Every project starts with understanding your business goals, not just your marketing goals. 
                            The websites we build and strategies we implement are designed to generate qualified leads 
                            and demonstrate clear ROI from day one.
                        </p>
                    </div>

                    <!-- Contact CTA -->
                    <div class="pt-8">
                        <a href="/contact_us" 
                           class="inline-flex items-center gap-3 px-8 py-4 bg-[#7C9885] text-white font-semibold rounded-xl hover:bg-[#6B8574] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <span>Let's Discuss Your Project</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technology Section -->
    <section class="min-h-screen bg-[#2C2C2C] relative overflow-hidden flex items-center" data-theme="dark">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/3 left-10 w-64 h-64 bg-[#7C9885]/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/3 right-10 w-80 h-80 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div class="text-center mb-16">
                <div class="flex items-center justify-center gap-4 mb-8">
                    <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                    <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Technology Stack</span>
                    <span class="h-px w-16 bg-gradient-to-l from-[#7C9885] to-transparent"></span>
                </div>
                
                <h2 class="font-syne text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Built for Performance
                </h2>
                
                <p class="text-xl text-white/80 font-inter leading-relaxed max-w-3xl mx-auto">
                    We use cutting-edge technology to build websites that load faster, convert better, 
                    and provide unmatched analytics transparency.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <div class="text-5xl mb-6">
                        <svg fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>
                    </div>
                    <h3 class="font-syne text-xl font-bold text-white mb-4">Svelte 5 Frontend</h3>
                    <p class="text-white/80 font-inter leading-relaxed">
                        Cutting-edge framework for lightning-fast, responsive websites that convert visitors into leads.
                    </p>
                </div>

                <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <div class="text-5xl mb-6">
                        <svg fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Analytics</title><path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/></svg>
                    </div>
                    <h3 class="font-syne text-xl font-bold text-white mb-4">Custom Analytics</h3>
                    <p class="text-white/80 font-inter leading-relaxed">
                        Proprietary dashboard showing real metrics: leads generated, conversion rates, and ROI.
                    </p>
                </div>

                <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <div class="text-5xl mb-6">
                        <svg fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Supabase</title><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>
                    </div>
                    <h3 class="font-syne text-xl font-bold text-white mb-4">Modern Infrastructure</h3>
                    <p class="text-white/80 font-inter leading-relaxed">
                        Cloud-based hosting, automated deployments, and enterprise-grade security for peace of mind.
                    </p>
                </div>
            </div>
        </div>
    </section>

</main>

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

    main {
        font-size: 1.125rem;
        line-height: 1.75;
        color: #040617;
        font-family: Inter, sans-serif;
        font-weight: 300;
        font-display: swap;
    }

    strong {
        text-decoration: underline;
        font-weight: normal;
    }

    main h1, main h2, main h3, main h4, main h5, main h6 {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }
</style>
