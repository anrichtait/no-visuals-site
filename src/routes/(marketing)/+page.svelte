<script lang="ts">
import Hero from "$lib/components/Hero.svelte";
import ButtonWithIcon from "$lib/components/ButtonWithIcon.svelte"
import ServicesHero from "$lib/components/ServicesHero.svelte"
import UspSection from "$lib/components/UspSection.svelte"

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

  .hero {
    position: relative;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
  }

  .slide-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  .slide-wrapper.active {
    opacity: 1;
    visibility: visible;
  }

  .slide {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .text-overlay {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    z-index: 20;
    pointer-events: none;
  }

  .hero-heading {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(3rem, 8vw, 8rem);
    line-height: 0.75; /* Tighter line spacing - adjust this value */
    letter-spacing: -0.05em; /* Tighter letter spacing - adjust this value */
    word-spacing: -0.3em; /* Tighter word spacing - adjust this value */
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0;
    text-transform: uppercase; /* Ensures all caps */
  }

  .line {
    display: block;
    margin-bottom: -0.1em; /* Additional control over line gaps */
  }

  .line:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .text-overlay {
      bottom: 2rem;
      left: 2rem;
    }
    
    .hero-heading {
      font-size: clamp(2rem, 12vw, 4rem);
      line-height: 0.8; /* Slightly less tight on mobile */
      letter-spacing: -0.03em;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    .text-overlay {
      bottom: 1.5rem;
      left: 1.5rem;
    }
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
</style>
