<script lang="ts">
import { WebsiteName, ContactEmail } from "./../../config"
import NavBar from "$lib/components/NavBar.svelte"
import { Mail, ExternalLink } from 'lucide-svelte'
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  const currentYear = new Date().getFullYear()
</script>

<NavBar />

<div class="">
  {@render children?.()}
</div>

<!-- Footer -->
<footer class="bg-[#2C2C2C] text-white" data-theme="dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Main Footer Content -->
    <div class="pt-16 pb-8">
      <div class="grid lg:grid-cols-12 gap-12">

        <!-- Company Info -->
        <div class="lg:col-span-5">
          <h3 class="font-syne text-2xl font-bold text-white mb-4">
            {WebsiteName}
          </h3>
          <p class="text-white/70 text-base leading-relaxed font-light max-w-md mb-6">
            Performance-driven marketing for architecture and professional service firms.
            We build digital solutions that generate qualified leads.
          </p>

          <!-- Contact Info -->
          <div class="space-y-3 mb-6">
            <a
              href="mailto:{ContactEmail}"
              class="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
            >
              <Mail class="w-4 h-4 text-[#7C9885]" />
              <span class="text-sm">{ContactEmail}</span>
            </a>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="lg:col-span-7">
          <div class="grid md:grid-cols-3 gap-8">

            <!-- Services -->
            <div>
              <h4 class="font-syne text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul class="space-y-3">
                <li>
                  <a href="/services" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Web Design & Development
                  </a>
                </li>
                <li>
                  <a href="/services" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/services" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Brand Strategy
                  </a>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div>
              <h4 class="font-syne text-lg font-semibold text-white mb-4">
                Company
              </h4>
              <ul class="space-y-3">
                <li>
                  <a href="/" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/work" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="/blog" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/pricing" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <!-- Support -->
            <div>
              <h4 class="font-syne text-lg font-semibold text-white mb-4">
                Support
              </h4>
              <ul class="space-y-3">
                <li>
                  <a href="/contact_us" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/search" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light">
                    Search
                  </a>
                </li>
                <li>
                  <a href="/sitemap.xml" class="text-white/70 hover:text-white hover:underline transition-colors duration-200 text-sm font-light flex items-center gap-1">
                    Sitemap
                    <ExternalLink class="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/20 py-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white/60 text-sm font-light">
          © {currentYear} {WebsiteName}. All rights reserved.
        </p>

      </div>
    </div>

  </div>
</footer>
