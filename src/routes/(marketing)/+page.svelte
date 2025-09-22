<script lang="ts">
import Hero from "$lib/components/Hero.svelte";
import ButtonWithIcon from "$lib/components/ButtonWithIcon.svelte"
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

<main class="main">

    <section id="hero" data-theme="dark" class="dark-section">
        <Hero />
        <ButtonWithIcon />
    </section>

    <div>
        <section id="about" data-theme="light" class="light-section content-block-about">
            <div class="wrapper-inner">
                <p>Tait Media Solutions is a <strong>performance-driven</strong> marketing agency for architecture and professional service
                    firms. We replace outdated websites and vague marketing strategies with systematic solutions focused on one
                    thing: generating <strong>qualified leads</strong>.
                    <br>
                    <br>
                    We provide <strong>radical transparency</strong> through our proprietary analytics dashboard,
                    giving you a clear view of your ROI. Our approach combines <strong>minimalist design</strong>
                    with <strong>cutting-edge engineering</strong> to build digital solutions that work harder, so
                    your firm can focus on what matters.</p>
            </div>
        </section>
    </div>

    <div>
        <section id="our-services" class="flex dark-section" data-theme="dark">
            <ServicesHero />
        </section>
    </div>

    <div>
        <section id="usp" class="flex light-section" data-theme="light">
            <UspSection />
        </section>
    </div>

    <div>
        <section id="our-process" class="flex dark-section" data-theme="dark">
            <ProcessSection />
        </section>
    </div>

    <div>
        <section id="our-work" class="flex projects-section" data-theme="light">
            <ProjectsSection />
        </section>
    </div>

    <div>
        <section id="cta" class="flex cta-section" data-theme="dark">
            <CtaSection />
        </section>
    </div>

</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;700&display=swap');

.dark-section {
    background-color: #2C2C2C;
    height: 100vh;
}

.light-section {
    background-color: #F5F3F0;
    height: 100vh;
}



  .wrapper-inner {
      display: block;
      margin-top: 15%;
      margin-left: auto;
      margin-bottom: 15%;
      margin-right: auto;
      max-width: 76rem;
  }

  main {
      font-size: 1.125rem;
      line-height: 1.75;
      color: #040617;
      font-family: inter,sans-serif;
      font-weight: 300;
  }

  .content-block-about {
    align-content: center;
    font-size: 1.500rem;
    line-height: 1.8;
}
strong {
    text-decoration: underline;
    font-weight: normal;
}

.projects-section {
    background-color: #F5F3F0;
    min-height: 100vh; /* Use min-height instead of fixed height */
}

.cta-section {
    background-color: #2C2C2C;
    /* No height constraint - let the component manage its own height */
}
</style>
