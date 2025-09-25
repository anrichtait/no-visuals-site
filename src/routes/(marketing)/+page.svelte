<script lang="ts">
import Hero from "$lib/components/Hero.svelte";
import ServicesHero from "$lib/components/ServicesHero.svelte"
import UspSection from "$lib/components/UspSection.svelte"
import ProcessSection from "$lib/components/ProcessSection.svelte";
import ProjectsSection from "$lib/components/ProjectsSection.svelte";
import CtaSection from "$lib/components/CtaSection.svelte";

import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
} from "./../../config"

const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
}
const jsonldScript = `<script type="application/ld+json">${
JSON.stringify(ldJson) + "<"
}/script>`

</script>

<svelte:head>
    <title>{WebsiteName}</title>
    <meta name="description" content={WebsiteDescription} />
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html jsonldScript}
</svelte:head>

<main class="relative">

    <section id="hero" data-theme="dark" class="min-h-screen bg-[#2C2C2C]">
        <Hero />
    </section>

    <section id="about" data-theme="light" class="min-h-screen bg-[#F5F3F0] flex items-center">
        <div class="max-w-7xl mx-auto px-6 py-20">
            <div class="max-w-4xl mx-auto text-center">
                <div class="mb-12">
                    <div class="flex items-center justify-center gap-4 mb-6">
                        <span class="h-px w-16 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                        <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">About Us</span>
                        <span class="h-px w-16 bg-gradient-to-l from-[#7C9885] to-transparent"></span>
                    </div>
                    <h2 class="font-syne text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8 leading-tight">
                        Performance-Driven Marketing
                    </h2>
                </div>
                
                <div class="space-y-8">
                    <p class="text-xl sm:text-2xl font-inter leading-relaxed text-[#2C2C2C] font-light">
                        No Visuals is a <strong class="underline decoration-[#7C9885] decoration-2 underline-offset-4">performance-driven</strong> marketing agency for architecture and professional service
                        firms. We replace outdated websites and vague marketing strategies with systematic solutions focused on one
                        thing: generating <strong class="font-semibold underline decoration-[#7C9885] decoration-2 underline-offset-4">qualified leads</strong>.
                    </p>
                    
                    <div class="max-w-3xl mx-auto space-y-6">
                        <p class="text-lg font-inter leading-relaxed text-[#2C2C2C]/80">
                            We provide <strong class="text-[#2C2C2C]">radical transparency</strong> through our proprietary analytics dashboard,
                            giving you a clear view of your ROI. Our approach combines <strong class="font-semibold text-[#2C2C2C]">minimalist design</strong>
                            with <strong class="text-[#2C2C2C]">cutting-edge engineering</strong> to build digital solutions that work harder, so
                            your firm can focus on what matters.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section id="our-services" class="min-h-screen bg-[#2C2C2C]" data-theme="dark">
        <ServicesHero />
    </section>

    <section id="usp" class="min-h-screen bg-[#F5F3F0]" data-theme="light">
        <UspSection />
    </section>

    <section id="our-process" class="min-h-screen bg-[#2C2C2C]" data-theme="dark">
        <ProcessSection />
    </section>

    <section id="our-work" class="min-h-screen bg-[#F5F3F0]" data-theme="light">
        <ProjectsSection />
    </section>

    <section id="cta" class="min-h-screen bg-[#2C2C2C]" data-theme="dark">
        <CtaSection />
    </section>

</main>

<style>
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
</style>
